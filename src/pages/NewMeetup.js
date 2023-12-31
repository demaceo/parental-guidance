import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
import './NewMeetup.css'

function NewMeetupPage() {
  const navigateTo = useNavigate();

  function addMeetupHandler(meetupData) {
    //Google Firebase requires '.json' at the end of fetch URLs
    fetch(
      "https://react-getting-started-c2bb9-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
        navigateTo("/");
    })
  }
  return (
    <section>
      <h1 className="meetup-header">Share A New Link</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
