import { useState, useRef, useEffect, useMemo } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";
import { Data, OnCreate, OnRemove, OnEdit } from "./types/diary";
// https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, setData] = useState<Data[]>([]);
  const dataId = useRef(0);

  const getData = async () => {
    const res: {
      body: string;
      email: string;
      id: number;
      name: string;
      postId: number;
    }[] = await fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "get",
    }).then((res) => res.json());

    const initData = res.slice(0, 20).map((item) => {
      return {
        author: item.email,
        content: item.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        createdDate: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

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

  const onRemove: OnRemove = (targetId) => {
    if (window.confirm(`${targetId + 1}번째 일기를 정말 삭제하시겠습니까?`)) {
      const newDiaryList = data.filter((item) => item.id !== targetId);
      setData(newDiaryList);
    }

    return;
  };

  const onEdit: OnEdit = (targetId, newContent) => {
    setData((prev) => {
      return prev.map((item) =>
        item.id === targetId ? { ...item, content: newContent } : item
      );
    });
  };

  const getDiaryAnalysis = useMemo(() => {
    console.log("일기 분석 시작");

    const goodCount = data.filter((item) => item.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div>
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList diaryList={data} onEdit={onEdit} onRemove={onRemove} />
    </div>
  );
}

export default App;
