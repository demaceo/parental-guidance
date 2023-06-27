import React from "react";
import "./AllMeetups.css";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: `https://picsum.photos/1000? ${+Math.random()}`,
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is an amazing meetup spot which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image: `https://picsum.photos/1000? ${+Math.random()}`,
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is an amazing meetup spot which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={DUMMY_DATA} />
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
