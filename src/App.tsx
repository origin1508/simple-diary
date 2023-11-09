import { useState, useRef } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";
import { Data, OnCreate } from "./types/diary";

function App() {
  const [data, setData] = useState<Data[]>([]);
  const dataId = useRef(0);

  const onCreate: OnCreate = (author, content, emotion) => {
    const createdDate = new Date().getTime();

    const newItem = {
      author,
      content,
      emotion,
      createdDate,
      id: dataId.current,
    };

    dataId.current += 1;
    setData((prev) => {
      return [newItem, ...prev];
    });
  };
  return (
    <div>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
