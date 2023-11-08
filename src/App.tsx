import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";

const dummyList = [
  {
    id: 1,
    author: "홍길동",
    content: "일기 1일차",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "둘리",
    content: "일기 2일차",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "철수",
    content: "일기 3일차",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "영희",
    content: "일기 4일차",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
