
const books = [
  {
    name: "Harry Potter",
    author: "J.K. Rowling",
  },
  {
    name: "Lord of the rings",
    author: "J.R.R. Tolkien",
  },
  {
    name: "The witcher",
    author: "Andrzej Sapkowski",
  },
];

const bookToAdd = {
  name: "Game of thrones",
  author: "George R. R. Martin",
};

// const bookToAdd1 = {
//   name: "Game of thrones1",
//   author: "George R. R. Martin1",
// };

// const bookToAdd2 = {
//   name: "Game of thrones2",
//   author: "George R. R. Martin2",
// };

function addBook(element, ...otherBooks) {
  return [...element, ...otherBooks];
}

console.log(addBook(books, bookToAdd));
