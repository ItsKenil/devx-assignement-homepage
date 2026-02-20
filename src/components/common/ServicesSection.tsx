// ***** start - import from package
import React from "react";
// ***** end - import from package

// ***** start - import from files
import { ServiceContent, ServiceItem } from "@/src/constants/types/types";
// ***** end - import from files

// ***** start - Service Card Component
const ServiceCard: React.FC<ServiceItem> = ({ title, description }) => {
    return (
        <div className="p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};
// ***** end - Service Card Component

// ***** start - Services Section Component
const ServicesSection: React.FC<ServiceContent> = ({ title, content }) => {
    return (
        <section className="py-8">
            <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {content.map((service) => (
                    <ServiceCard key={service.id} {...service} />
                ))}
            </div>
        </section>
    );
};
// ***** end - Services Section Component

export default ServicesSection;