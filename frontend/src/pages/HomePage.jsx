// import React from 'react'
// import Header from "../components/Layout/Header";
// import Hero from "../components/Route/Hero/Hero";
// import Categories from "../components/Route/Categories/Categories";
// import BestDeals from "../components/Route/BestDeals/BestDeals";
// import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
// import Events from "../components/Events/Events";
// import Sponsored from "../components/Route/Sponsored";
// import Footer from "../components/Layout/Footer";

// const HomePage = () => {
//   return (
//     <div>
//         <Header activeHeading={1} />
//         <Hero />
//         <Categories />
//         <BestDeals />
//         <Events />
//         <FeaturedProduct />
//         <Sponsored />
//         <Footer />
//     </div>
//   )
// }

// export default HomePage
import React from 'react';
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div className="bg-[#f5f5f5] w-full overflow-x-hidden">
      <Header activeHeading={1} />
      <main className="flex flex-col w-full">
        <section className="w-full">
          <Hero />
        </section>
        <section className="w-full px-4 md:px-10 lg:px-20">
          <Categories />
        </section>
        <section className="w-full px-4 md:px-10 lg:px-20">
          <BestDeals />
        </section>
        <section className="w-full px-4 md:px-10 lg:px-20">
          <Events />
        </section>
        <section className="w-full px-4 md:px-10 lg:px-20">
          <FeaturedProduct />
        </section>
        <section className="w-full px-4 md:px-10 lg:px-20">
          <Sponsored />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
