// import React from 'react';
// import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react';

// const Hero = () => {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
//         <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
//       </div>

//       {/* Grid Pattern Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80cbc4_1px,transparent_1px),linear-gradient(to_bottom,#80cbc4_1px,transparent_1px)] bg-[size:14px_24px] opacity-10"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="pt-20 pb-16 text-center lg:pt-32">
//           {/* Badge */}
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-sm font-medium mb-8 hover:bg-teal-200 transition-colors duration-300">
//             <Zap className="w-4 h-4 mr-2" />
//             New Feature Available
//             <ArrowRight className="w-4 h-4 ml-2" />
//           </div>

//           {/* Main Heading */}
//           <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//             <span className="block">Transform Your</span>
//             <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
//               Digital Experience
//             </span>
//           </h1>

//           {/* Subtitle */}
//           <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Discover the power of innovation with our cutting-edge solutions designed to elevate your business to new heights.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
//             <button className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 hover:scale-105">
//               <span className="relative z-10 flex items-center">
//                 Get Started Now
//                 <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//             </button>

//             <button className="group flex items-center px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-600 hover:text-white transition-all duration-300 hover:shadow-lg">
//               <Play className="w-5 h-5 mr-2" />
//               Watch Demo
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:shadow-teal-100/50">
//               <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-300">
//                 <Users className="w-6 h-6 text-teal-600" />
//               </div>
//               <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
//               <div className="text-gray-600">Happy Customers</div>
//             </div>

//             <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:shadow-teal-100/50">
//               <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-300">
//                 <Star className="w-6 h-6 text-teal-600" />
//               </div>
//               <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
//               <div className="text-gray-600">Rating Score</div>
//             </div>

//             <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:shadow-teal-100/50">
//               <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-300">
//                 <Zap className="w-6 h-6 text-teal-600" />
//               </div>
//               <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
//               <div className="text-gray-600">Uptime</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-1/4 left-10 w-3 h-3 bg-teal-400 rounded-full animate-ping"></div>
//       <div className="absolute top-1/3 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
//       <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-teal-300 rounded-full animate-ping delay-500"></div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.stockcake.com/public/d/2/5/d2526af8-dd36-47ae-b693-bbb074a106d4_large/home-office-greenery-stockcake.jpg"
                  alt="Team collaboration"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                    <span className="text-teal-600 font-semibold text-sm">Live Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                ✨ New Feature Launch
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Amazing
                <span className="text-teal-600"> Products </span>
                 Quality Meets Excellence
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience unmatched quality and stunning design with our curated collection.
            Perfect for everyone looking for the best products at great prices.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started Free
              </button>
              <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">10K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-teal-50 rounded-full opacity-50"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-50 rounded-full opacity-30"></div>
      </div>
    </section>
  );
};

export default Hero;