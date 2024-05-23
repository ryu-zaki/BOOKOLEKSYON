import AllBooks from './ApiSource.js';
import setTemplate from './InformationTemplate.js';
import { generateIndividualBook } from '../script.js';

const bookCategoryFilter = (category, isSorted = false, isMarkOnly = false) => {
  
  const bookArr = [];

  for (let i = 0; i < AllBooks.length; i++) {
    const book = AllBooks[i];
    const isSameBook = bookArr.some(data => data.title === book.title);

    if (category === "all" && !isSameBook) {
      bookArr.push(book);
    }

    else if (book.genre.toLowerCase() === category.toLowerCase()) {
       bookArr.push(book);
    }
  }

  if (isSorted) {
    bookArr.sort((a, b) => {

      if (a.title < b.title) {
        return -1
      } 
      if (a.title > b.title) {
        return 1
      }
      
      return 0

    })
  }

  /* Filter mechanism for visibility of bookmarks */
  if (isMarkOnly) {
  
    const newArrWithMark = [];

    const bookMarks = JSON.parse(localStorage.getItem("bookmarks"));
    const bookTitles = bookMarks.map(({title}) => title);

    bookArr
    .forEach(book => {
    
      if (bookTitles.includes(book.title)) {
          newArrWithMark.push(book);
      }

    })
  
    return newArrWithMark;
  }

  return [...bookArr];

}

const booksCategory = bookCategoryFilter("all");



// displays books in an ID of books-container
const displayBooks = (books, allBookmarks) => {
  const container = document.getElementById("books-container");
  
  container.innerHTML = "";
  
  if (!books.length) {
    
    container.innerHTML = 
    `<div class="error-container">
    <img draggable="false" class="error-page" src="./resource/404 page.png" />
    <h2>No Book Found</h2>
    </div>
    `

    return;
  }
  
  for (let i = 0; i < books.length; i++) {

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    
    const isBookMarked = allBookmarks.some(data => {
      return data.title === books[i].title
    });

    itemDiv.innerHTML = generateProductCatalog({...books[i], isBookMarked});

    container.appendChild(itemDiv);

  }
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


const generateProductCatalog = ({title, genre, author, isBookMarked}) => {
  
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
        <img id="${title}" src="resource/${isBookMarked ? "bookmark-svgrepo-com(full).svg" : "bookmark-svgrepo-com(outline).svg"}" class="bookmark" alt="Bookmark Icon">
      </div>
    `
  )
}

const handleSearch = ({target}) => {
  const suggestionsConainer = document.querySelector('.suggestions-con');
  if (!target.value.trim()) {
    suggestionsConainer.innerHTML = "";
    return;
  } 
  
  const inputValue = target.value.toLocaleLowerCase();

  const repeatFilter = [];

  for (let i = 0; i < AllBooks.length; i++) {

    const isRepeat = repeatFilter.some(data => data.title === AllBooks[i].title);

    if (!isRepeat) {
      repeatFilter.push(AllBooks[i])
    }
    
  }

  const searchBooks = repeatFilter
  .filter(data => data.title.toLocaleLowerCase().startsWith(inputValue))
  .map((data) => generateSuggestionBox({...data,inputValue}))
  .filter((data, index) => index < 3);

  suggestionsConainer.innerHTML = !searchBooks.length ? `<div><p>book not found</p></div>` : searchBooks.join("")
  console.log(searchBooks);

  suggestionBoxEvents()

}

const suggestionBoxEvents = () => {
  

  const suggestions = document.querySelectorAll('[data-bookSuggestion]');

  suggestions.forEach(btn => {
    btn.addEventListener('click', ({target}) => {
      document.querySelector('#book-search-input').value = "";
      document.querySelector('.suggestions-con').innerHTML = "";
      
      const searchedBook = AllBooks.find(data => data.title.toLocaleLowerCase() === target.id.toLocaleLowerCase());

      generateIndividualBook(searchedBook);

    })
  })


}

/* Autosuggestion */
const generateSuggestionBox = ({author, ratings, title, inputValue}) => {
  
  const titleArr = []
  for (let i = 0; i < title.length; i++) {

    if (inputValue[i] === title[i].toLocaleLowerCase()) {
      titleArr.push(`<span class="highlight">${title[i]}</span>`)
    } else {
      titleArr.push(title[i])
    }

  }

  const actualTitle = titleArr.join("");

  const ratingsImgs = [];

  for (let i = 0; i < 5; i++) {

    let img;

    if (i < Math.floor(ratings)) {
      img = "star-fill";
    } else {
      img = "star-outline";
    }

    ratingsImgs.push(`<img src="resource/${img}.svg" alt="star-icon">`)
  }

  return (
    `
    <div class="flex relative justify-between w-full items-center">
          <div data-bookSuggestion id="${title}" class="absolute z-10 inset-0 cursor-pointer"></div>
          <div>
            <h2>${actualTitle}</h2>
            <span>by ${author}</span>
          </div>

          <div class="ratings-suggestion">
            ${ratingsImgs.join("")}
          </div>
        </div>
    `
  )
}

export {booksCategory, displayBooks, appendBookInfo, bookCategoryFilter, handleSearch};