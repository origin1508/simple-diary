export interface Data {
  id: number;
  author: string;
  content: string;
  emotion: number;
  createdDate: number;
}

export interface DiaryListProps {
  diaryList?: Data[];
  onDelete: OnDelete;
}

export type OnCreate = (
  author: string,
  content: string,
  emotion: number
) => void;

export interface DiaryEditorProps {
  onCreate: OnCreate;
}

export type OnDelete = (targetId: number) => void;

export interface DiaryItemProps extends Data {
  onDelete: OnDelete;
}
