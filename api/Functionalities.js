import AllBooks from './ApiSource.js';
import setTemplate from './InformationTemplate.js';


const bookCategoryFilter = (category) => {
  
  const bookArr = [];

  for (let i = 0; i < AllBooks.length; i++) {
    const book = AllBooks[i];

    if (book.genre.toLowerCase() === category.toLowerCase()) {
       bookArr.push(book);
    }
  }

  return [...bookArr];

}

const booksCategory = bookCategoryFilter("history");



// displays books in an ID of books-container
const displayBooks = (books) => {
  const container = document.getElementById("books-container");
  
  container.innerHTML = "";

  books.forEach(book => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    
    itemDiv.innerHTML = generateProductCatalog(book);

    container.appendChild(itemDiv);
  });
}

const appendBookInfo = (container, info) => {

  container.innerHTML = setTemplate(info);
  
  activateInfoEventListeners();

}

const activateInfoEventListeners = () => {
  const backBtn = document.getElementById('back-button');
  const mainSection = document.getElementById('main');
  const separator = document.getElementById('separator');
  const information = document.getElementById('information');

  backBtn.addEventListener('click',  () => {

    information.style.display='none';
    mainSection.style.display='flex';
    separator.style.display='flex';
})


}


const generateProductCatalog = ({title, genre, author}) => {
  
  return (
    `
      <div class="book-cover">
        <img id="${title}" src="./resource/book covers/${genre.toLowerCase()}/${title.toLowerCase()}.png" alt="Book Cover" class="books">
      </div>
      <div class="book-info">
        <h3>${title}</h3> 
        <span>by ${author}</span>
      </div>
      <div class="bg-palette""></div>
      <div class="bookmark-icon">
        <img src="resource/bookmark-svgrepo-com(outline).svg" class="bookmark" alt="Bookmark Icon">
      </div>
    `
  )
}

export {booksCategory, displayBooks, appendBookInfo, bookCategoryFilter};