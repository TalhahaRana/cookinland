import React from 'react';

const reviews = [
    {
        imgSrc: "https://openui.fly.dev/openui/150x150.svg?text=🍰",
        altText: "cake",
        reviewText: "Her brownies are amazing l4s top is crunchy and inside it's so gooey soft with melt chocolate yummy ( keep it up).",
        reviewerName: "Mrs Ali",
    },
    {
        imgSrc: "https://openui.fly.dev/openui/150x150.svg?text=🍪",
        altText: "cookie",
        reviewText: "Highly addictive. You may turn into a cookie monster.Indeed one of the best things l've ever had in NN....Very much like International standard / subway cookies.Big super soft, chewy texture and mouth - wow - tring. Perfect Value of money Hopefully rates won't increase because it matches the treat it's providing.Great Job!",
    reviewerName: "A.Shah",
  },
  {
    imgSrc: "https://openui.fly.dev/openui/150x150.svg?text=🍰",
    altText: "cake",
    reviewText: "undoubtedly very delicious. The quantity was perfect. Definitely trying it again. Highly recommended!.",
    reviewerName: "Saad.R",
},
{
    imgSrc: "https://openui.fly.dev/openui/150x150.svg?text=🍪",
    altText: "cake",
    reviewText: "It was too good (C l've never eaten such delicious homemade cookies before",
    reviewerName: "Zainab",
},
{
    imgSrc: "https://openui.fly.dev/openui/150x150.svg?text=🍪",
    altText: "cake",
    reviewText: "Order from Cookinland @one mom show delicious cookies must say some next level cookies easily can compete cookies house and subway. Must go Karachi Eat 2025",
    reviewerName: "H.Shah",
},
];

export default function Widget() {
    return (
        <div className="py-8 container bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-4xl w-full p-4">
                <h1 className="text-5xl font-extrabold text-center mb-8 text-accent">Customer Testimonials</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-[#C8835A] p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center justify-center"
                        >
                            <img
                                src={review.imgSrc}
                                alt={review.altText}
                                className="w-24 h-24 mb-4 rounded-full border-4 border-white shadow-lg"
                            />
                            <p className="text-xl text-center mb-4 italic text-white">{`"${review.reviewText}"`}</p>
                            <p className="text-sm text-center text-white">- {review.reviewerName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
