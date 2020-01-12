import React from "react";
import Smurf from "./Smurf";

const SmurfVillage = props => {
  return (
    <div>
      {props.smurfs.map(smurf => {
        return <Smurf smurf={smurf} key={smurf.id} />;
      })}
    </div>
  );
};

export default SmurfVillage;
