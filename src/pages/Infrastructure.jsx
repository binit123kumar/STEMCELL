import React from "react";
import '../Styles/Infrastructure.css'

function Infrastructure() {
  const infrastructurePoints = [
    "The process for establishing laboratories at the University level has been initiated. The site has been identified and listing of required equipment is in progress. A work plan for laboratory construction and physical infrastructure development has been prepared, and the work is progressing in a phased manner.",
    "Development of library and purchase of books under process."
  ];

  return (
    <div className="AimdBox">
      <h1>Infrastructure</h1>
      <div className="Infrastructure-Box">
        <ol>
          {infrastructurePoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Infrastructure;