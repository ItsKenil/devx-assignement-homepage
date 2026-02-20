"use client";

// ***** start - import from package
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// ***** end - import from package

// ***** start - import from files
import { ReviewContent, ReviewItem } from "@/src/constants/types/types";
// ***** end - import from files

// ***** start - Review Card Component
const ReviewCard: React.FC<ReviewItem> = ({ user_name, review_description, rating }) => {
    return (
        <div className="p-6 shadow-md rounded-lg">
            <h4 className="font-semibold text-lg">{user_name}</h4>
            <p className="text-gray-600 my-2">{review_description}</p>
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
        </div>
    );
};
// ***** end - Review Card Component

// ***** start - Review Section Component
const ReviewSection: React.FC<ReviewContent> = ({ title, content }) => {
    return (
        <section className="py-8">
            <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {content.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </div>
        </section>
    );
};
// ***** end - Review Section Component

export default ReviewSection;