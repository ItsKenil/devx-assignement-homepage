// ***** start - import from package
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// ***** end - import from package

// ***** start - import from files
import { ReviewItem } from "@/src/constants/types/types";
// ***** end - import from files

// ***** start - Review Card Component
const ReviewCard: React.FC<ReviewItem> = ({ user_name, review_description, rating }) => {
    return (
        <div className="p-6 shadow-md rounded-lg">
            <h4 className="font-semibold text-lg">
                {user_name}
            </h4>
            <p className="text-gray-600 my-2">
                {review_description}
            </p>
            <div className="text-yellow-500">
                <Rating style={{ maxWidth: 250 }} value={rating} readOnly />
            </div>
        </div>
    );
};
// ***** end - Review Card Component

export default ReviewCard;