import { QuoteIcon, StarIcon } from "lucide-react";

function TestimonialCard({ testimonial }: any) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <QuoteIcon className="text-yellow-400 h-6 w-6" />
      <div className="flex mt-2 mb-4">
        {[...Array(5)].map((_, index) => (
          <StarIcon key={index} className="text-yellow-400 h-4 w-4" />
        ))}
      </div>
      <p className="text-sm text-gray-600">{testimonial.content}</p>
      <p className="mt-4 font-bold">{testimonial.author}</p>
    </div>
  );
}
export default TestimonialCard;
