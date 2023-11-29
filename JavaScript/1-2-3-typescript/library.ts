import _library from './library.json';
interface Library {
  author: string;
  title: string;
  readingStatus: boolean;
  id: number;
}
const library = _library as Library[];

function getBook(id:number) {
  return library.find(book => book.id === id);
}

console.log(getBook(1));
