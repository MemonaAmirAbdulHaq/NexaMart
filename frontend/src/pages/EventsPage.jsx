
import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full min-h-screen bg-[#f5f5f5]">
          <Header activeHeading={4} />
          <div className="px-4 md:px-10 lg:px-20 py-5 md:py-10">
            {allEvents && allEvents.length > 0 ? (
              <EventCard active={true} data={allEvents[0]} />
            ) : (
              <p className="text-center text-gray-500 mt-10">
                No events available at the moment.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EventsPage;
