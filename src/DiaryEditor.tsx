import { useState, ChangeEvent } from "react";

const DiaryEditor = () => {
  const [diary, setDiary] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeDiary = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const key = e.target.name;
    const value = e.target.value;

    setDiary((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const handleSubmit = () => {
    console.log(diary);
    alert("저장 완료");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={diary.author}
          onChange={handleChangeDiary}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={diary.content}
          onChange={handleChangeDiary}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={diary.emotion}
          onChange={handleChangeDiary}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
