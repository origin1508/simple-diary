export interface Data {
  id: number;
  author: string;
  content: string;
  emotion: number;
  createdDate: number;
}

export interface DiaryListProps {
  diaryList?: Data[];
  onEdit: OnEdit;
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
  onEdit: OnEdit;
  onRemove: OnRemove;
}

export type OnEdit = (targetId: number, newContent: string) => void;
