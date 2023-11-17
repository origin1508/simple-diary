import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }: { count: number }) => {
  useEffect(() => {
    console.log(`CounterA update - count: ${count}`);
  });
  return <div>{count}</div>;
});
CounterA.displayName = "CounterA";

const CounterB = ({ obj: { count } }: { obj: { count: number } }) => {
  useEffect(() => {
    console.log(`CounterB update - count: ${count}`);
  });
  return <div>{count}</div>;
};

const areEqual: (
  prevProps: { obj: { count: number } },
  nextProps: { obj: { count: number } }
) => boolean = (prevProps, nextProps) => {
  return prevProps.obj.count === nextProps.obj.count ? true : false;
};
const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A Button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B Button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
