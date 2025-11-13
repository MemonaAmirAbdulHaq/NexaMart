// import React, { useState } from "react";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
// import styles from "../styles/styles";

// const FAQPage = () => {
//   return (
//     <div>
//       <Header activeHeading={5} />
//       <Faq />
//       <Footer />
//     </div>
//   );
// };

// const Faq = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const toggleTab = (tab) => {
//     if (activeTab === tab) {
//       setActiveTab(0);
//     } else {
//       setActiveTab(tab);
//     }
//   };

//   return (
//     <div className={`${styles.section} my-8`}>
//       <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
//       <div className="mx-auto space-y-4">
//         {/* single Faq */}

//         <div className="border-b border-gray-200 pb-4">
//           <button
//             className="flex items-center justify-between w-full"
//             onClick={() => toggleTab(2)}
//           >
//             <span className="text-lg font-medium text-gray-900">
//               What is your return policy?
//             </span>
//             {activeTab === 2 ? (
//               <svg
//                 className="h-6 w-6 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="h-6 w-6 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             )}
//           </button>
//           {activeTab === 2 && (
//             <div className="mt-4">
//               <p className="text-base text-gray-500">
//                 If you're not satisfied with your purchase, we accept returns
//                 within 30 days of delivery. To initiate a return, please email
//                 us at support@myecommercestore.com with your order number and a
//                 brief explanation of why you're returning the item.
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="border-b border-gray-200 pb-4">
//           <button
//             className="flex items-center justify-between w-full"
//             onClick={() => toggleTab(3)}
//           >
//             <span className="text-lg font-medium text-gray-900">
//               How do I track my order?
//             </span>
//             {activeTab === 3 ? (
//               <svg
//                 className="h-6 w-6 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="h-6 w-6 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             )}
//           </button>
//           {activeTab === 3 && (
//             <div className="mt-4">
//               <p className="text-base text-gray-500">
//                 You can track your order by clicking the tracking link in your
//                 shipping confirmation email, or by logging into your account on
//                 our website and viewing the order details.
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="border-b border-gray-200 pb-4">
//           <button
//             className="flex items-center justify-between w-full"
//             onClick={() => toggleTab(4)}
//           >
//             <span className="text-lg font-medium text-gray-900">
//               How do I contact customer support?
//             </span>
//             {activeTab === 4 ? (
//               <svg
//                 className="h-6 w-6 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="h-6 w-6 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             )}
//           </button>
//           {activeTab === 4 && (
//             <div className="mt-4">
//               <p className="text-base text-gray-500">
//                 You can contact our customer support team by emailing us at
//                 support@myecommercestore.com, or by calling us at (555) 123-4567
//                 between the hours of 9am and 5pm EST, Monday through Friday.
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="border-b border-gray-200 pb-4">
//           <button
//             className="flex items-center justify-between w-full"
//             onClick={() => toggleTab(5)}
//           >
//             <span className="text-lg font-medium text-gray-900">
//               Can I change or cancel my order?
//             </span>
//             {activeTab === 5 ? (
//               <svg
//                 className="h-6 w-6 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="h-6 w-6 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             )}
//           </button>
//           {activeTab === 5 && (
//             <div className="mt-4">
//               <p className="text-base text-gray-500">
//                 Unfortunately, once an order has been placed, we are not able to
//                 make changes or cancellations. If you no longer want the items
//                 you've ordered, you can return them for a refund within 30 days
//                 of delivery.
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="border-b border-gray-200 pb-4">
//           <button
//             className="flex items-center justify-between w-full"
//             onClick={() => toggleTab(6)}
//           >
//             <span className="text-lg font-medium text-gray-900">
//               Do you offer international shipping?
//             </span>
//             {activeTab === 6 ? (
//               <svg
//                 className="h-6 w-6 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="h-6 w-6 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             )}
//           </button>
//           {activeTab === 6 && (
//             <div className="mt-4">
//               <p className="text-base text-gray-500">
//                 Currently, we only offer shipping within the United States.
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="border-b border-gray-200 pb-4">
//           <button
//             className="flex items-center justify-between w-full"
//             onClick={() => toggleTab(7)}
//           >
//             <span className="text-lg font-medium text-gray-900">
//               What payment methods do you accept?
//             </span>
//             {activeTab === 7 ? (
//               <svg
//                 className="h-6 w-6 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="h-6 w-6 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             )}
//           </button>
//           {activeTab === 7 && (
//             <div className="mt-4">
//               <p className="text-base text-gray-500">
//                 We accept visa,mastercard,paypal payment method also we have
//                 cash on delivery system.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQPage;
import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const FAQPage = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? 0 : tab);
  };

  const faqs = [
    {
      id: 2,
      question: "What is your return policy?",
      answer:
        "If you're not satisfied with your purchase, we accept returns within 30 days of delivery. To initiate a return, please email us at support@myecommercestore.com with your order number and a brief explanation of why you're returning the item.",
    },
    {
      id: 3,
      question: "How do I track my order?",
      answer:
        "You can track your order by clicking the tracking link in your shipping confirmation email, or by logging into your account on our website and viewing the order details.",
    },
    {
      id: 4,
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team by emailing us at support@myecommercestore.com, or by calling us at (555) 123-4567 between the hours of 9am and 5pm EST, Monday through Friday.",
    },
    {
      id: 5,
      question: "Can I change or cancel my order?",
      answer:
        "Unfortunately, once an order has been placed, we are not able to make changes or cancellations. If you no longer want the items you've ordered, you can return them for a refund within 30 days of delivery.",
    },
    {
      id: 6,
      question: "Do you offer international shipping?",
      answer: "Currently, we only offer shipping within the United States.",
    },
    {
      id: 7,
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, Mastercard, PayPal payment methods. We also have a Cash on Delivery system.",
    },
  ];

  return (
    <div className={`${styles.section} my-8 px-4 md:px-10 lg:px-20`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
        FAQ
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full focus:outline-none"
              onClick={() => toggleTab(faq.id)}
            >
              <span className="text-lg font-medium text-gray-900 text-left">
                {faq.question}
              </span>
              {activeTab === faq.id ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === faq.id && (
              <div className="mt-4">
                <p className="text-base text-gray-500">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
