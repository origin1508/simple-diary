export interface Data {
  id: number;
  author: string;
  content: string;
  emotion: number;
  createdDate: number;
}

export interface DiaryListProps {
  diaryList?: Data[];
  onRemove: OnRemove;
}

export type OnCreate = (
  author: string,
  content: string,
  emotion: number
) => void;

export interface DiaryEditorProps {
  onCreate: OnCreate;
}

export type OnRemove = (targetId: number) => void;

export interface DiaryItemProps extends Data {
  onRemove: OnRemove;
}
