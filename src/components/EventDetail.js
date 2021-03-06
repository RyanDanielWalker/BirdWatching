import React from 'react';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';

function EventDetail(props) {
  const { event, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h2>Event Detail</h2>
      <h3>{event.name} - {event.location} - {event.date}</h3>
      <Button variant="primary" onClick={onClickingEdit}>Update Event</Button>
      <Button variant="danger" onClick={() => onClickingDelete(event.id)} > Delete Event</Button>
      <hr />
    </React.Fragment>
  )
}
EventDetail.propTypes = {
  event: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default EventDetail;