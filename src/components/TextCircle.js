import React, { useState } from "react";
import styled from "@emotion/styled";

const TextCircle = ({ text }) => {
  let input = text;

  if (!text) {
    input = "Type anything to start";
  }
  const textArray = input.split("");
  textArray.push(" ");
  return (
    <Banner>
      {textArray.map((char, index) => {
        console.log(`${index} / ${textArray.length}`);
        return (
          <Panel
            active={text}
            key={index}
            max={textArray.length}
            angle={`${(360 / textArray.length) * index}deg`}
            caret={text && index === textArray.length - 2}
          >
            {char}
          </Panel>
        );
      })}
    </Banner>
  );
};

const Banner = styled.div`
  display: flex;
  transform-style: preserve-3d;
  animation: rotate 24s infinite linear;
  backface-visibility: visible;

  @keyframes rotate {
    0% {
      transform: translateZ(-100px) rotateX(30deg) rotateY(0deg) rotateZ(-20deg);
    }
    50% {
      transform: translateZ(-100px) rotateX(30deg) rotateY(-180deg)
        rotateZ(20deg);
    }
    100% {
      transform: translateZ(-100px) rotateX(30deg) rotateY(-360deg)
        rotateZ(-20deg);
    }
  }
`;

const Panel = styled.span`
  display: flex;
  width: 4vw;
  justify-content: center;
  align-items: center;
  font-size: 8vw;
  font-family: "Inter", sans-serif;
  backface-visibility: visible;
  position: absolute;
  /* border: 1px solid red; */
  color: ${(props) => `${props.active ? `black` : `rgba(0,0,0,0.5)`}`};
  transform: ${(props) =>
    `translate(-50%, -50%) rotateY(${props.angle}) translateZ(calc(4vw + ${
      props.max * 1
    }vw))`};
  position: absolute;
  transform-style: preserve-3d;

  &::before {
    content: "";
    display: ${(props) => `${props.caret ? `block` : `none`}`};
    position: absolute;
    right: -0.4em;
    top: calc(50% - 0.1em);
    width: 0;
    height: 0;
    border-top: 0.15em solid transparent;
    border-right: 0.3em solid red;
    border-bottom: 0.15em solid transparent;
    animation: cursor-blink 0.5s steps(2) infinite;

    @keyframes cursor-blink {
      0% {
        opacity: 0;
      }
    }
  }
`;

export default TextCircle;
