import "./MeetupList.css";
import MeetupItem from "./MeetupItem.js";
import React from "react";

function MeetupList(props) {
  return (
    <section className="list">
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          link={meetup.link}
          date={meetup.date}
          description={meetup.description}
          from={meetup.from}
          title={meetup.title}
        />
      ))}
    </section>
  );
}

export default MeetupList;
