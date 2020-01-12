import React from "react";
import { List } from 'semantic-ui-react';


const Smurf = props => {
  return (
    <List>
      <h2>{props.smurf.name}</h2>
      <h3>{props.smurf.age}</h3>
      <h3>{props.smurf.height}</h3>
    </List>
  );
};

export default Smurf;
