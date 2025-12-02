
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../server";

const CountDown = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Delete event if countdown is over
      if (
        Object.keys(newTimeLeft).length === 0
      ) {
        clearInterval(timer); // stop the timer
        axios.delete(`${server}/event/delete-shop-event/${data._id}`)
          .catch(err => console.error(err));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [data._id]);

  function calculateTimeLeft() {
    const difference = +new Date(data.Finish_Date) - +new Date();
    if (difference <= 0) return {}; // countdown finished

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="flex flex-wrap gap-2">
      {Object.keys(timeLeft).length ? (
        Object.entries(timeLeft).map(([interval, value]) => (
          <span key={interval} className="text-[25px] text-[#475ad2]">
            {value} {interval}
          </span>
        ))
      ) : (
        <span className="text-[red] text-[25px]">Time's Up</span>
      )}
    </div>
  );
};

export default CountDown;
