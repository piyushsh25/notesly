import { NoteProps } from "../Note/Notes.type";

export function pinnedTotal(acc: number, curr: NoteProps) {
  return curr.pinned ? (acc = acc + 1) : acc;
}
export function unpinnedTotal(acc: number, curr: NoteProps) {
  return !curr.pinned ? (acc = acc + 1) : acc;
}
