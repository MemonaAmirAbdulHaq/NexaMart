// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux';
// import styles from '../../styles/styles'
// import EventCard from "./EventCard";

// const Events = () => {
//   const {allEvents,isLoading} = useSelector((state) => state.events);  
   
//   return (
//     <div>
//      {
//       !isLoading && (
//         <div className={`${styles.section}`}>
//       <div className={`${styles.heading}`}>
//         <h1>Popular Events</h1>
//       </div>

//       <div className="w-full grid">
//          {
//           allEvents.length !== 0 && (
//             <EventCard data={allEvents && allEvents[0]} />
//           )
//          }
//          <h4>{
//            allEvents?.length === 0 && (
//             'No Events have!'
//            )
//           }

//          </h4>
//       </div>
     
//     </div>
//       )
//      }
//   </div>
//   )
// }

// export default Events
import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import EventCard from "./EventCard";

const Events = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  return (
    <div className="my-6">
      {!isLoading ? (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1 className="text-xl lg:text-2xl font-semibold">Popular Events</h1>
          </div>

          {allEvents && allEvents.length > 0 ? (
            <div className="w-full grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {allEvents.map((event, index) => (
                <EventCard key={event._id} data={event} active={index === 0} />
              ))}
            </div>
          ) : (
            <h4 className="text-center text-gray-500 mt-6">No events available!</h4>
          )}
        </div>
      ) : (
        <h4 className="text-center text-gray-500 mt-6">Loading Events...</h4>
      )}
    </div>
  );
};

export default Events;
