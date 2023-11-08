import { DiaryListProps } from "./types/diary";
const DiaryList = ({ diaryList }: DiaryListProps) => {
  if (!diaryList) return <div>작성한 일기가 없습니다.</div>;
  return (
    <div className="DiaryList">
      <div>
        <h2>일기 리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      </div>
      <div>
        {diaryList.map((item) => {
          return (
            <div key={item.id}>
              <div>작성자 : {item.author}</div>
              <div>일기 : {item.content}</div>
              <div>감정 : {item.emotion}</div>
              <div>작성시간(ms) : {item.created_date}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DiaryList;
