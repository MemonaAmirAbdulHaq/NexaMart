
// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="relative bg-gradient-to-b from-[#18284f] via-[#0f1e3f] to-[#0b1633] min-h-screen flex items-center text-white">
//       <div className="container mx-auto px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left side - Image */}
//           <div className="order-2 lg:order-1">
//             <div className="relative">
//               <div className="absolute inset-0 bg-[#213a56] rounded-2xl transform rotate-3"></div>
//               <div className="relative bg-gradient-to-br from-[#0f1e3f] to-[#213a56] rounded-2xl p-8 shadow-2xl">
//                 <img
//                   src="https://images.stockcake.com/public/d/2/5/d2526af8-dd36-47ae-b693-bbb074a106d4_large/home-office-greenery-stockcake.jpg"
//                   alt="Team collaboration"
//                   className="w-full h-96 object-cover rounded-xl shadow-lg"
//                 />
//                 <div className="absolute -bottom-4 -right-4 bg-[#cdaa80] p-4 rounded-xl shadow-lg">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-3 h-3 bg-[#0f1e3f] rounded-full animate-pulse"></div>
//                     <span className="text-[#0f1e3f] font-semibold text-sm">Live Now</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Content */}
//           <div className="order-1 lg:order-2 space-y-8">
//             <div className="space-y-6">
//               <div className="inline-flex items-center px-4 py-2 bg-[#cdaa80] bg-opacity-90 text-[#0f1e3f] rounded-full text-sm font-medium">
//                 ✨ New Feature Launch
//               </div>
              
//               <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
//                 Discover Amazing
//                 <span className="text-[#cdaa80]"> Products </span>
//                  Quality Meets Excellence
//               </h1>
              
//               <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
//                 Experience unmatched quality and stunning design with our curated collection.
//             Perfect for everyone looking for the best products at great prices.
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-[#cdaa80] hover:bg-[#997953] text-[#0f1e3f] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                 Get Started Free
//               </button>
//               <button className="border-2 border-[#cdaa80] text-[#cdaa80] hover:bg-[#cdaa80] hover:text-[#0f1e3f] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
//                 Watch Demo
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-[#cdaa80]">10K+</div>
//                 <div className="text-sm text-gray-300">Active Users</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-[#cdaa80]">99.9%</div>
//                 <div className="text-sm text-gray-300">Uptime</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-[#cdaa80]">24/7</div>
//                 <div className="text-sm text-gray-300">Support</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Background decoration */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -top-40 -right-32 w-96 h-96 bg-[#213a56] rounded-full opacity-40"></div>
//         <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#cdaa80] rounded-full opacity-20"></div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-white min-h-screen flex items-center text-[#0f1e3f]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-[#f1f5ff] rounded-2xl transform rotate-3"></div>

              <div className="relative bg-gradient-to-br from-[#ffffff] to-[#f8fafc] rounded-2xl p-8 shadow-2xl border border-gray-200">
                <img
                  src="https://images.stockcake.com/public/d/2/5/d2526af8-dd36-47ae-b693-bbb074a106d4_large/home-office-greenery-stockcake.jpg"
                  alt="Team collaboration"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />

                <div className="absolute -bottom-4 -right-4 bg-[#cdaa80] p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#0f1e3f] rounded-full animate-pulse"></div>
                    <span className="text-[#0f1e3f] font-semibold text-sm">
                      Live Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#cdaa80] bg-opacity-90 text-[#0f1e3f] rounded-full text-sm font-medium">
                ✨ New Feature Launch
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Discover Amazing
                <span className="text-[#cdaa80]"> Products </span>
                Quality Meets Excellence
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience unmatched quality and stunning design with our curated
                collection. Perfect for everyone looking for the best products
                at great prices.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#cdaa80] hover:bg-[#997953] text-[#0f1e3f] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started Free
              </button>

              <button className="border-2 border-[#cdaa80] text-[#cdaa80] hover:bg-[#cdaa80] hover:text-[#0f1e3f] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#cdaa80]">10K+</div>
                <div className="text-sm text-gray-500">Active Users</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-[#cdaa80]">99.9%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-[#cdaa80]">24/7</div>
                <div className="text-sm text-gray-500">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-[#cdaa80] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0f1e3f] rounded-full opacity-10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
