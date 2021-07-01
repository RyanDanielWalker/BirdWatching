import React from 'react';
import NewEventForm from './NewEventForm';
import EventList from './EventList';
import EventDetail from './EventDetail'
import Button from 'react-bootstrap/Button';
import EditEventForm from './EditEventForm';

class EventControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterEventList: [],
      selectedEvent: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedEvent != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedEvent: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }


  handleAddNewEvent = (newEvent) => {
    const newMasterEventList = this.state.masterEventList.concat(newEvent);
    this.setState({
      masterEventList: newMasterEventList,
      formVisibleOnPage: false
    });
  }

  handleDeletingEvent = (id) => {
    const newMasterEventList = this.state.masterEventList.filter(event => event.id !== id);
    this.setState({
      masterEventList: newMasterEventList,
      selectedEvent: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleChangingSelectedEvent = (id) => {
    const selectedEvent = this.state.masterEventList.filter(event => event.id === id)[0];
    this.setState({ selectedEvent: selectedEvent });
  }

  handleEditingEventInList = (eventToEdit) => {
    const editedMasterEventList = this.state.masterEventList
      .filter(event => event.id !== this.state.selectedEvent.id)
      .concat(eventToEdit);
    this.setState({
      masterEventList: editedMasterEventList,
      editing: false,
      selectedEvent: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditEventForm event={this.state.selectedEvent} onEditEvent={this.handleEditingEventInList} />
      buttonText = "Return to Event List";
    } else if (this.state.selectedEvent != null) {
      currentlyVisibleState = <EventDetail event={this.state.selectedEvent} onClickingDelete={this.handleDeletingEvent} onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Event List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewEventForm onNewEventCreation={this.handleAddNewEvent} />
      buttonText = "Return to Event List";
    } else {
      currentlyVisibleState = <EventList eventList={this.state.masterEventList} onEventSelection={this.handleChangingSelectedEvent} />
      buttonText = "Add Event";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="primary" onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    )
  }

}

export default EventControl;