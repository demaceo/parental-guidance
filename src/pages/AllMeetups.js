import React, { useState, useEffect } from "react";
import "./AllMeetups.css";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image: `https://picsum.photos/1000? ${+Math.random()}`,
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is an amazing meetup spot which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image: `https://picsum.photos/1000? ${+Math.random()}`,
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is an amazing meetup spot which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-c2bb9-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;

/* {DUMMY_DATA.map((meetup) => {
        return (
          <div key={meetup.id}>
            <h1 className='meetup-header'>{meetup.title}</h1>
            <img src={meetup.image}></img>
          </div>
        );
      })} */
