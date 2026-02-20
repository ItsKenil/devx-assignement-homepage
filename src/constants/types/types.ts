// ***** start - Common Types
export type FetchPriority = "high" | "low" | "auto";

export type LoadingType = "lazy" | "eager";

export type ImageComponentPropsType = {
    src: string;
    alt?: string;
    sizes?: string;
    loading?: LoadingType;
    height: number;
    width: number;
    fetchPriority?: FetchPriority;
    className?: string;
    wrapperClassName?: string;
};

export type ChildrenTypeComponent = {
    children?: React.ReactNode;
};
// ***** end - Common Types

// ***** start - Banner Types
export interface BannerImage {
    id: number;
    url: string;
    alternativeText: string | null;
    width: number;
    height: number;
}

export interface BannerContent {
    __component: "basic.banner";
    id: number;
    banner_text: string;
    banner_link: string | null;
    banner_image: BannerImage;
}
// ***** end - Banner Types

// ***** start - Service Types
export interface ServiceItem {
    id: number;
    title: string;
    description: string;
}

export interface ServiceContent {
    __component: "basic.service";
    id: number;
    title: string;
    content: ServiceItem[];
}
// ***** end - Service Types

// ***** start - About Types
export interface AboutImage {
    id: number;
    url: string;
    alternativeText: string | null;
    width: number;
    height: number;
}

export interface AboutContent {
    __component: "basic.about";
    id: number;
    title: string;
    description: string;
    image: AboutImage;
}
// ***** end - About Types

// ***** start - Review Types
export interface ReviewItem {
    id: number;
    user_name: string;
    review_description: string;
    rating: number;
}

export interface ReviewContent {
    __component: "basic.review";
    id: number;
    title: string;
    content: ReviewItem[];
}
// ***** end - Review Types

// ***** start - Content Union Type
export type ContentItem =
    | BannerContent
    | ServiceContent
    | AboutContent
    | ReviewContent;
// ***** end - Content Union Type

// ***** start - API Response Types
export interface HomepageDatum {
    id: number;
    documentId: string;
    title: string;
    content: ContentItem[];
}

export interface HomepageDataItem {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    state: string;
    homepage_datum: HomepageDatum;
}

export interface HomepageResponse {
    data: HomepageDataItem[];  // ✅ HomepageDataItem not HomepageData
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
// ***** end - API Response Types
