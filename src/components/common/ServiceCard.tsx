// ***** start - import from package
import React from "react";
// ***** end - import from package

// ***** start - import from files
import { ServiceItem } from "@/src/constants/types/types";
// ***** end - import from files

// ***** start - Service Card Component
const ServiceCard: React.FC<ServiceItem> = ({ title, description }) => {
    return (
        <div className="p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">
                {title}
            </h3>
            <p className="text-gray-600">
                {description}
            </p>
        </div>
    );
};
// ***** end - Service Card Component

export default ServiceCard;
