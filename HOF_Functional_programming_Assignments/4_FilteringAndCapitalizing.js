// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

let books = [
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925},
    {title: "The Hunger Games", author: "Suzanne Collins", year: 2008},
    {title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005},
    {title: "Gone Girl", author: "Gillian Flynn", year: 2012},
  ];

  let filteredBooks = books.filter(book => book.year >= 2010).map(book => {
    let authorName = book.author.split(" ");
    let capitalizedAuthorName = authorName.map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(" ");
    return {title: book.title, author: capitalizedAuthorName, year: book.year}
  });

  console.log(`Original books:`, books)
  console.log(`Filtered and capitalized books:`, filteredBooks)