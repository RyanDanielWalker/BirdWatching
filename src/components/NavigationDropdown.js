import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const NavigationDropdown = () => {
  return (
    <DropdownButton id="navigation-dropdown" title="Navigation">
      {navigationItems.map((item, index) => (
        <Dropdown.Item href="#" key={index}>{item}</Dropdown.Item>
      ))}
    </DropdownButton>
  )
}

export default NavigationDropdown;

const navigationItems = ["Home", "Event List", "New Event Form"];