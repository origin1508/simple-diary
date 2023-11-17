import React, { useState, useEffect } from "react";

const TextView = React.memo(({ text }: { text: string }) => {
  useEffect(() => {
    console.log(`update :: Text : ${text}`);
  });
  return <div>{text}</div>;
});
TextView.displayName = "TextView";

const CountView = React.memo(({ count }: { count: number }) => {
  useEffect(() => {
    console.log(`update :: Count : ${count}`);
  });
  return <div>{count}</div>;
});
CountView.displayName = "CountView";

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default OptimizeTest;
