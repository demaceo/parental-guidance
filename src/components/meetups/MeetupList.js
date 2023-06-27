import classes from "./MeetupList.css";
import MeetupItem from "./MeetupItem.js";
import React from "react";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          desciription={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
