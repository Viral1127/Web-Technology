import "./styles.css";
import { useState } from "react";

function CalcLayout() {
  const [result, setResult] = useState("");

  const click = (event) => {
    setResult(result.concat(event.target.innerText));
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };

  const del = (event) => {
    setResult(result.slice(0, -1));
  };

  return (
    <>
      <div class="page">
        <div class="calculator">
          <div className="display">{result}</div>
          <div className="btn light-gray" onClick={clear}>
            AC
          </div>
          <div className="btn light-gray" onClick={click}>
            %
          </div>
          <div className="btn light-gray" onClick={del}>
            DEL
          </div>
          <div className="btn orange " onClick={click}>
            /
          </div>
          <div className="btn" onClick={click}>
            7
          </div>
          <div className="btn" onClick={click}>
            8
          </div>
          <div className="btn" onClick={click}>
            9
          </div>
          <div className="btn orange" onClick={click}>
            *
          </div>
          <div className="btn" onClick={click}>
            4
          </div>
          <div className="btn" onClick={click}>
            5
          </div>
          <div className="btn" onClick={click}>
            6
          </div>
          <div className="btn orange" onClick={click}>
            +
          </div>
          <div className="btn" onClick={click}>
            1
          </div>
          <div className="btn" onClick={click}>
            2
          </div>
          <div className="btn" onClick={click}>
            3
          </div>
          <div className="btn orange" onClick={click}>
            -
          </div>
          <div className="btn zero" onClick={click}>
            0
          </div>
          <div className="btn" onClick={click}>
            .
          </div>
          <div className="btn" onClick={calculate}>
            =
          </div>
        </div>
      </div>
    </>
  );
}

export default CalcLayout;
