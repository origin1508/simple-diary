import { useState, useRef, memo } from "react";
import { DiaryItemProps } from "./types/diary";

const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  createdDate,
  onEdit,
  onRemove,
}: DiaryItemProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const toggleIsEdit = () => setIsEdit((prev) => !prev);

  const handleRemove = () => {
    onRemove(id);
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (!textAreaRef.current) return;

    if (localContent.length < 5) {
      textAreaRef.current.focus();
      return;
    }

    if (window.confirm(`${id + 1}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정 : {emotion}
          <br />
          <span className="date">{new Date(createdDate).toLocaleString()}</span>
        </span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={textAreaRef}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      <div>
        {isEdit ? (
          <>
            <button onClick={handleQuitEdit}>취소</button>
            <button onClick={handleEdit}>수정</button>
          </>
        ) : (
          <>
            <button onClick={handleRemove}>삭제</button>
            <button onClick={toggleIsEdit}>수정</button>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(DiaryItem);
