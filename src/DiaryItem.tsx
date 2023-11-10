import { DiaryItemProps } from "./types/diary";

const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  createdDate,
  onDelete,
}: DiaryItemProps) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정 : {emotion}
          <br />
          <span className="date">{new Date(createdDate).toLocaleString()}</span>
        </span>
      </div>
      <div className="content">{content}</div>
      <div>
        <button onClick={() => onDelete(id)}>삭제</button>
      </div>
    </div>
  );
};

export default DiaryItem;
