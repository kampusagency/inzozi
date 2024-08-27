import { useState } from "react";
import "./App.css";

import preview from "./../public/preview.png";

function App() {
  return (
    <>
      <div>
        <div className="img">
          <img src={preview} alt="Preview" />
        </div>
      </div>
    </>
  );
}

export default App;
