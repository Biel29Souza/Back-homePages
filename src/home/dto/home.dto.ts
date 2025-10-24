export class Book {
    id: number;
    title: string;
    coverUrl: string;
    author: string;
  }
  
  export class Category {
    title: string;
    seeMoreLink: string;
    books: Book[];
  }
  
  export class HomeResponse {
    categories: Category[];
  }