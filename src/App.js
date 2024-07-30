import { React, useState } from "react";

const messages = [
  "Leearn React *",
  "Apply for jobs -.-",
  "Invest your new income -_-",
];

function App() {
  return (
    <>
      <Steps />
    </>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, seIsOpen] = useState(true);
  // let step = 1;
  function handlePerv() {
    if (step > 1) {
      setStep(() => step - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      // setStep(step + 1);
      // setStep(step + 1); // the total of this two will add one
      ///////////////////////
      setStep(() => step + 1);
      // setStep(()=>step + 1);// the total of this two will add two
    }
  }
  return (
    <>
      {isOpen && (
        <>
          <button onClick={() => seIsOpen(!isOpen)} className="close">
            &times;
          </button>

          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>

            {/* <p className="message">Step {step}: {messages[step - 1]}</p> */}
            <Message step={step}>{messages[step - 1]}</Message>
            <div className="buttons">
              <Button
                textColor={"#fff"}
                bgColor={"#7950F2"}
                onClick={handlePerv}
                // text={"Pervious"}
                // emoje={"👈"}
              >
                <span>👈</span>Pervious
              </Button>
              <Button
                textColor={"#fff"}
                bgColor={"#7950F2"}
                onClick={handleNext}
                // text={"Next"}
                // emoje={"👉"}
              >
                Next
                <span>👉</span>
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function Message({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}

function Button({ textColor, bgColor, onClick, text, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
      {/* {text} */}
    </button>
  );
}
export default App;
