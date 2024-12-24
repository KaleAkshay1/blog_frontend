import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loder() {
  return (
    <div className="loader">
      <Spinner className="p-4" animation="border" variant="dark" />
    </div>
  );
}

export default Loder;
