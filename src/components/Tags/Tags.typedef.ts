import type { TagData } from "../../ui/Tag/Tag.typedef";

// omit thmee because of I want to generate it randomly
export type TagsWithoutTheme = Array<Omit<TagData, "theme">>;

export type TagsProps = {
  tags: TagsWithoutTheme;
  typeWriterText: string;
};
