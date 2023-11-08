export interface DiaryList {
  id: number;
  author: string;
  content: string;
  emotion: number;
  created_date: number;
}

export interface DiaryListProps {
  diaryList?: DiaryList[];
}
