import React from "react";
import { useState } from "react";
export const PollDisplay = () => {
  const [count, setCount] = useState(() => 0);
  return (
    <>
      <h1>Polling App</h1>
      <div>PollDisplayComponent</div>
      <h2>What is your favourite Programming Language?</h2>
      <form onSubmit={handleSubmit}>
        <div className="radio">
          <label>
            <input
              name="javascript"
              id="javascript"
              type="radio"
              value="JavaScript"
              checked={true}
            />
            JavaScript
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="python" id="python" type="radio" value="Python" />
            Python
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="java" id="java" type="radio" value="Java" />
            Java
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="csharp" id="csharp" type="radio" value="C#" />
            C#
          </label>
        </div>
      </form>
    </>
  );
};
