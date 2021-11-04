import React, { useEffect, useState } from "react";
import { ColofulMessage } from "./compornents/ColofulMessage";

export const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faseShowFlag, setFaseShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaseShowFlag(!faseShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      num % 3 === 0
        ? faseShowFlag || setFaseShowFlag(true)
        : faseShowFlag && setFaseShowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です！</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faseShowFlag && <p>(ﾟ∀ﾟ)</p>}
    </>
  );
};
