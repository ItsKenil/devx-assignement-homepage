// ***** start - import from package
import Image from "next/image";
import React from "react";
// ***** end - import from package

// ***** start - import from files
import { ImageComponentPropsType } from "@/src/constants/types/types";
// ***** end - import from files

const ImageComponent: React.FC<ImageComponentPropsType> = ({
    src,
    alt = "",
    sizes = '100%',
    loading = "eager",
    fetchPriority = "low",
    className = "",
    height,
    width
}) => {
    return (
        <Image
            src={src}
            alt={alt}
            sizes={sizes}
            loading={loading}
            fetchPriority={fetchPriority}
            height={height}
            width={width}
            className={`
                w-full h-full object-cover
                transition-transform duration-300 ease-in-out
                ${className}
            `}
        />
    );
};

export default ImageComponent;
