import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditEventForm(props) {
  const { event } = props;

  function handlingEditEventFormSubmission(event) {
    event.preventDefault();
    props.onEditEvent({
      name: event.target.name.value,
      location: event.target.location.value,
      date: event.target.date.value,
      id: event.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handlingEditEventFormSubmission}
        buttonText="Update Event" />
    </React.Fragment>
  );
}

EditEventForm.propTypes = {
  event: PropTypes.object,
  onEditEvent: PropTypes.func
}

export default EditEventForm;