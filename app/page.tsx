// ***** start - import from package
import { ComponentType } from "react";
// ***** end - import from package

// ***** start - import from files
import api from "@/src/api/api";
import { getStateCode } from "@/src/utils/utils";
import Banner from "@/src/components/common/Banner";
import AboutSection from "@/src/components/common/AboutSection";
import ReviewSection from "@/src/components/common/ReviewSection";
import ServicesSection from "@/src/components/common/ServicesSection";
import { HomepageResponse, ContentItem } from "@/src/constants/types/types";
import Layout from "@/src/components/layout/Layout";
// ***** end - import from files

// ***** start - Component Map
const componentMap: Record<ContentItem["__component"], ComponentType<any>> = {
    "basic.banner": Banner,
    "basic.service": ServicesSection,
    "basic.about": AboutSection,
    "basic.review": ReviewSection,
};
// ***** end - Component Map

// ***** start - Server side data fetching
async function getHomepageData(): Promise<HomepageResponse> {

    const state = getStateCode('gujarat');

    const data = await api.get<HomepageResponse>(
        `/api/homepages?filters[state][$eq]=${state}&populate[homepage_datum][populate][content][populate]=*`
    );
    return data;
}
// ***** end - Server side data fetching

// ***** start - Dynamic Section Renderer
function DynamicSection({ item }: { item: ContentItem }) {
    const Component = componentMap[item.__component];

    if (!Component) return null;

    return <Component {...item} />;
}
// ***** end - Dynamic Section Renderer

// ***** start - Home Page Component
export default async function HomePage() {
    let homepageData: HomepageResponse | null = null;
    let error: string | null = null;

    try {
        homepageData = await getHomepageData();
    } catch (err) {
        error = "Failed to fetch homepage data";
        console.error("Homepage data fetch error:", err);
    }

    if (error) {
        return (
            <div>
                <p>{error}</p>
            </div>
        );
    }

    const content = homepageData?.data?.[0]?.homepage_datum?.content ?? [];

    if (content.length === 0) {
        return (
            <div>
                <p>No data found</p>
            </div>
        );
    }

    return (
        <main>
            <Layout>
                {content.map((item) => (
                    <DynamicSection
                        key={`${item.__component}-${item.id}`}
                        item={item}
                    />
                ))}
            </Layout>
        </main>
    );
}
// ***** end - Home Page Component