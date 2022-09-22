import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import TextCircle from "./components/TextCircle";
import styled from "@emotion/styled";

function App() {
  const [input, setInput] = useState("");
  const inputField = useRef();

  const inputChange = (e) => {
    if (e.target.value !== input) {
      setInput(e.target.value);
    }
  };

  useEffect(() => {
    inputField.current.focus();
  }, []);

  return (
    <Screen>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
        rel="stylesheet"
      />
      <TextCircle text={input} />
      <Input ref={inputField} onChange={inputChange} type="text" />

      <p />
    </Screen>
  );
}

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  top: 25vh;
  left: 25vw;
  width: 50vw;
  height: 50vh;
`;

export default App;
