export interface CreatePost {
  title: string;
  content: string;
  author: string;
  date?: Date;
  published?: boolean;
  likes: number;
}
