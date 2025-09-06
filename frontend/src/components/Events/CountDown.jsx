
// import { useState,useEffect} from "react"
// import React  from 'react'

// const CountDown = () => {
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//         setTimeLeft(calculateTimeLeft());
//         }, 1000);
//     return () => clearTimeout(timer);
//   }, [])
//   function calculateTimeLeft() {
//     const difference = +new Date("2025-01-01") - +new Date();
//     let timeLeft = {};
//     if (difference > 0) {
//       timeLeft = {
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     } 
//     return timeLeft;
//   }
//   const timerComponents = Object.keys(timeLeft).map((interval) => {
//     if(!timeLeft[interval]) {
//       return null;
//     }
//     return( <span className="text-[25px] font-bold text-[#475ad2]">
//         {timeLeft[interval]} {interval} {""}
//     </span>)
//   })



//   return (
//    <div>
//     {timerComponents.length ? timerComponents : <span className="text-[25px]  text-[red]">Time's up!</span>}
//    </div>
//   )
// }

// export default CountDown
import { useState, useEffect } from "react";
import React from "react";

const CountDown = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(now);
    targetDate.setMonth(targetDate.getMonth() + 1); // 🔄 Set for 1 month ahead

    const difference = targetDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  });

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <span key={interval} className="text-[25px]  text-[#475ad2] mr-2">
      {value} {interval}
    </span>
  ));

  return (
    <div>
      {timerComponents.length > 0 ? (
        timerComponents
      ) : (
        <span className="text-[25px] text-[red]">Time's up!</span>
      )}
    </div>
  );
};

export default CountDown;




