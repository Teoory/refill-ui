import React from 'react';
import { RfButton, RfIcon, RfAlert, RfInput, RfBadge, RfDropdown, RfDropdownItem } from 'refill-ui';
import 'refill-ui/style';

function App() {
  return (
    <div className="container">
      <RfButton>Hello World</RfButton>
      <RfIcon icon="info" size={24} />
      <RfAlert color="success" title="Success" description="This is a success alert" />
      <RfInput label="Name" placeholder="Enter Your Name" />
      <RfBadge color="red" size="small">Badge</RfBadge>
      <RfDropdown header="Dropdown Button">
        <RfDropdownItem>Action 1</RfDropdownItem>
        <RfDropdownItem>Action 2</RfDropdownItem>
      </RfDropdown>
    </div>
  );
}

export default App;