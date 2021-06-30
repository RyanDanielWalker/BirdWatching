import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewEventForm(props) {

  function handleNewEventFromSubmission(event) {
    event.preventDefault();
    props.onNewEventCreation({ name: event.target.name.value, location: event.target.location.value, date: event.target.date.value, id: v4() });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewEventFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Bird Name' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <input
          name='date'
          placeholder='Date' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewEventForm.propTypes = {
  onNewEventCreation: PropTypes.func
};

export default NewEventForm;