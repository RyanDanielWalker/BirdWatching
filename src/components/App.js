import React from 'react';
import Header from './Header';
import EventControl from './EventControl';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <EventControl />
    </React.Fragment>
  );
}

export default App;