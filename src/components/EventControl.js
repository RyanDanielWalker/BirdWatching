import React from 'react';
import NewEventForm from './NewEventForm';
import EventList from './EventList';

class EventControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterEventList: []
    };
  }


}