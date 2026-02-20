// ***** start - import from package
import React from "react";
// ***** end - import from package

// ***** start - import from files
import { BannerContent } from "@/src/constants/types/types";
import ImageComponent from "@/src/components/common/ImageComponent";
// ***** end - import from files

const Banner: React.FC<BannerContent> = ({ banner_image, banner_text, banner_link }) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

    return (
        <a
            href={banner_link ?? "#"}
            className="block relative w-full h-[400px] overflow-hidden"
        >
            <ImageComponent
                src={`${baseUrl}${banner_image.url}`}
                alt={banner_image.alternativeText ?? banner_text}
                sizes="100%"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover"
                height={banner_image.height}
                width={banner_image.width}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <h1 className="text-white text-4xl font-bold text-center">
                    {banner_text}
                </h1>
            </div>
        </a>
    );
};

export default Banner;