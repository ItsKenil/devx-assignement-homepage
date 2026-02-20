// ***** start - import from package
import React from "react";
// ***** end - import from package

// ***** start - import from files
import { AboutContent } from "@/src/constants/types/types";
import ImageComponent from "@/src/components/common/ImageComponent";
// ***** end - import from files

// ***** start - About Section Component
const AboutSection: React.FC<AboutContent> = ({ title, description, image }) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

    return (
        <section className="py-8 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 px-3 md:px-0">
                <ImageComponent
                    src={`${baseUrl}${image.url}`}
                    alt={image.alternativeText ?? title}
                    sizes="100%"
                    loading="lazy"
                    fetchPriority="low"
                    className="rounded-lg shadow-md"
                    height={image.height}
                    width={image.width}
                />
            </div>
            <div className="md:w-1/2 px-3 md:px-0">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </section>
    );
};
// ***** end - About Section Component

export default AboutSection;