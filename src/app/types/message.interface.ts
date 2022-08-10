export interface Message {
  author: Author;
  content: string;
  id: number;
  updated: string;
}

export interface Author {
  name: string;
  photoUrl: string;
}

export interface MessageResponse {
  count: number;
  messages: Message[];
  pageToken: string;
}
