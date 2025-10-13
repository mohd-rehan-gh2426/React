import React, { useEffect, useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState(() => {
    const savedChips = localStorage.getItem("chips");
    return savedChips ? JSON.parse(savedChips) : []
  });

  useEffect(() => {
    localStorage.setItem("chips",JSON.stringify(chips))
  },[chips])

  const handleAddChips = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setChips((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteChip = (index) => {
    const copyChips = [...chips];
    copyChips.splice(index,1);
    setChips(copyChips)

  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>CHIPS INPUT</h1>
      <input
        type="text"
        style={{
          width: "200px",
          padding: "10px",
        }}
        placeholder="Type and Press Enter...."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          handleAddChips(e);
        }}
      />
      <div
        style={{
          display: "flex",
        }}
      >
        {chips.map((chip,index) => (
          <div
            key={index}
            style={{
              backgroundColor: "gray",
              margin: "6px",
              padding: "4px",
            }}
          >
            <div>
              {chip}
              <button
                style={{
                  backgroundColor: "gray",
                  color: "red",
                }}
                onClick={() => handleDeleteChip(index)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
