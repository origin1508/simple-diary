import DiaryItem from "./DiaryItem";
import { DiaryListProps } from "./types/diary";

const DiaryList = ({ diaryList, onDelete }: DiaryListProps) => {
  if (!diaryList) return <div>작성한 일기가 없습니다.</div>;
  return (
    <div className="DiaryList">
      <div>
        <h2>일기 리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      </div>
      <div>
        {diaryList.map((item) => {
          return <DiaryItem key={item.id} {...item} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default DiaryList;
