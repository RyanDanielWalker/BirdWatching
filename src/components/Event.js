import React from "react";

function Event(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - {props.location} - {props.date}</h3>
    </React.Fragment>

  );
}
Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string
};

export default Event;