export interface Data {
  id: number;
  author: string;
  content: string;
  emotion: number;
  createdDate: number;
}

export interface DiaryListProps {
  diaryList?: Data[];
}

export type OnCreate = (
  author: string,
  content: string,
  emotion: number
) => void;

export interface DiaryEditorProps {
  onCreate: OnCreate;
}
