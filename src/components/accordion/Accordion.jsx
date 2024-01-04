import React, { useState } from "react";
import accordionData from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setmultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultipleSelection = (getCurrentId) => {
    let copyOfMultiple = [...multiple];
    const indexOfCurrentId = copyOfMultiple.indexOf(getCurrentId);
    if (indexOfCurrentId === -1) copyOfMultiple.push(getCurrentId);
    else copyOfMultiple.splice(indexOfCurrentId, 1);

    setmultiple(copyOfMultiple);
    console.log(multiple);
  };

  return (
    <div className="container">
      <div className="menu">
        <button
          className="button"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          Enable Multi Selection
        </button>

        {accordionData && accordionData.length > 0 ? (
          accordionData.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h2 className="header">{dataItem.title}</h2>
                <span className="plus">+</span>

                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <p>{dataItem.content}</p>
                    )
                  : selected === dataItem.id && <p>{dataItem.content}</p>}
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
