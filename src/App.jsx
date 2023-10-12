import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 27 2027");
  console.log(date);
  date.setDate(date.getDate() + count);


  const handleReset = () => {
    setStep(1)
    setCount(0)
  }

  return (
    <div>
      <div>
        {/* <button onClick={() => setStep(step - 1)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep(step + 1)}>+</button> evezine  altdaki input */}
        <input type="range" min="0" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))}/>
        <span>Step:{step}</span>
      </div>
      <div>
        <button onClick={() =>  setCount((a) => a -  step)}>-</button>
        <span>
          {/* Count:{count} */}
          <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
          </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is:`
            : `${Math.abs(count)} day ago was`}
        </span>
        <span> {date.toDateString()}</span>
      </p>
      <div>
        {count !== 0 || step !== 1 ? (
 <button onClick={handleReset}>Reset</button>
        ): null}
       
      </div>
    </div>
  );
}
