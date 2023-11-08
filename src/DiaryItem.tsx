import { DiaryList } from "./types/diary";

const DiaryItem = ({ author, content, emotion, createdDate }: DiaryList) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
          <br />
          <span className="date">{new Date(createdDate).toLocaleString()}</span>
        </span>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default DiaryItem;
