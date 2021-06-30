import React from "react";
import PropTypes from 'prop-types';


function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;