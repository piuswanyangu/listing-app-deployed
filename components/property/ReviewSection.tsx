import axios from "axios";
import { useState, useEffect } from "react";

// 1. Define the shape of a Review object
interface Review {
  id: string | number;
  comment: string;
  
}

// 2. Define the props for this component
interface ReviewSectionProps {
  propertyId: string; // Change to 'number' if your IDs are numeric
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  // 3. Type the state so TS knows 'reviews' is an array of 'Review' objects
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="border-b py-2">
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewSection;