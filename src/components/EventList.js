import React from "react";
import Event from "./Event";
import PropTypes from 'prop-types';

function EventList(props) {
  return (
    <React.Fragment>
      {props.eventList.map((event, index) =>
        <Event name={event.name}
          location={event.location}
          date={event.date}
          id={index} />
      )}
    </React.Fragment>
  );
}

EventList.propTypes = {
  eventList: PropTypes.array
}

export default EventList;