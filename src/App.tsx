import { useState, useRef } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";
import { Data, OnCreate, OnDelete } from "./types/diary";

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

  const onDelete: OnDelete = (targetId) => {
    if (window.confirm(`${targetId}번째 일기를 정말 삭제하시겠습니까?`)) {
      const newDiaryList = data.filter((item) => item.id !== targetId);
      setData(newDiaryList);
    }

    return;
  };

  return (
    <div>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
