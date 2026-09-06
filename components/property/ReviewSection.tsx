import { useEffect, useState } from "react";

interface Review {
  id: string | number;
  comment: string;
}

export default function ReviewSection({ propertyId }: { propertyId: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchReviews() {
      try {
        const response = await fetch(`/api/properties/${encodeURIComponent(propertyId)}/reviews`, { signal: controller.signal });
        if (!response.ok) throw new Error(`Review request failed with ${response.status}`);
        setReviews(await response.json() as Review[]);
        setStatus("success");
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.error("Unable to load reviews", error);
        setStatus("error");
      }
    }

    void fetchReviews();
    return () => controller.abort();
  }, [propertyId]);

  if (status === "loading") return <p role="status">Loading reviews…</p>;
  if (status === "error") return <p role="alert">Reviews are not available.</p>;
  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return <div>{reviews.map((review) => <div key={review.id} className="border-b py-2"><p>{review.comment}</p></div>)}</div>;
}
