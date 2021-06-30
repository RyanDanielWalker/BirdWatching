import React from "react";
import PropTypes from 'prop-types';

function Event(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenEventClicked(props.id)}>
        <h3>{props.name} - {props.location} - {props.date}</h3>
      </div>
    </React.Fragment>

  );
}
Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string,
  id: PropTypes.string,
  whenEventClicked: PropTypes.func
};

export default Event;