import React from "react";
import { RingLoader } from "react-spinners"; 
import './Spinner.css'

const Spinner = ({ loading, size = 150, color = "#9c0cf4" }) => {
  return (
    <div className="spinner-container">
      <RingLoader loading={loading} size={size} color={color} />
    </div>
  );
};

export default Spinner;
