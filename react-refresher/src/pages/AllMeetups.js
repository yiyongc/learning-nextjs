import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupsData, setMeetupsData] = useState([]);

  function fetchMeetupsData() {
    setIsLoading(true);
    fetch(process.env.REACT_APP_SERVER_API)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          }
          meetups.push(meetup);
        }
        setMeetupsData(meetups);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchMeetupsData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Fetching data...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetupsData} />
    </section>
  );
}

export default AllMeetupsPage;
