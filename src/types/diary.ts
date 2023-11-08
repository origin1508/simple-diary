export interface DiaryList {
  id: number;
  author: string;
  content: string;
  emotion: number;
  createdDate: number;
}

export interface DiaryListProps {
  diaryList?: DiaryList[];
}
