import { useState, useRef, ChangeEvent } from "react";
import { DiaryEditorProps } from "./types/diary";

const DiaryEditor = ({ onCreate }: DiaryEditorProps) => {
  const [diary, setDiary] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  const authorRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

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
    if (diary.author.length < 1) {
      alert("작성자는 최소 1글자 이상 입력해주세요");
      if (authorRef.current) {
        authorRef.current.focus();
      }
      return;
    }

    if (diary.content.length < 5) {
      alert("일기 본문은 최소 5글자 이상 입력해주세요");
      if (contentRef.current) {
        contentRef.current.focus();
      }
      return;
    }
    onCreate(diary.author, diary.content, diary.emotion);
    alert("저장 완료");
    setDiary({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={diary.author}
          onChange={handleChangeDiary}
          ref={authorRef}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={diary.content}
          onChange={handleChangeDiary}
          ref={contentRef}
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
