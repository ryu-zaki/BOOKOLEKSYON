const menuItems = document.querySelectorAll('.separator .item');

const filterBtn = document.getElementById('filter');
const filter = document.getElementById('filter-box');
let filterBtnisOpen = false;

const menuBtn = document.getElementById('menu');
const menu = document.getElementById('menu-box');
let menuBtnisOpen = false;

const inputBar = document.getElementById('input');
let inputisFocused = false;

const otherBtn = document.getElementById('other');
const other = document.getElementById('other-box');
let otherBtnisOpen = false;

const viewMarkBtn = document.getElementById('view-mark-button');
const viewMark = document.getElementById('view-marked-box')
let viewMarkBtnisOpen = false;

const books = document.getElementsByClassName('book-cover');
const mainSection = document.getElementById('main');
const separator = document.getElementById('separator');
const information = document.getElementById('information');
let bookisClick = false;

const backBtn = document.getElementById('back-button');
let backBtnisClick = false;

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () =>{
        menuItems.forEach(Item =>{
            Item.classList.remove('active');
        });
        menuItem.classList.add('active')

        if (menuItem === otherBtn) {
            otherBtnisOpen = !otherBtnisOpen;

            if(otherBtnisOpen){
                other.style.display = "flex";
            } else {
                other.style.display = "none";
            }
        }else{
            otherBtnisOpen = false;
            other.style.display = "none";
        }
    })
})

filterBtn.addEventListener('click', () => {
    if(filterBtnisOpen){
        filter.style.display = 'none';
    }else{
        filter.style.display = 'flex';
        menu.style.display = 'none'
    }
    filterBtnisOpen = !filterBtnisOpen;
})

menuBtn.addEventListener('click', () => {
    if(menuBtnisOpen){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'flex';
        filter.style.display = 'none';
        viewMark.style.display='none';
        other.style.display = "none";
    }
    menuBtnisOpen = !menuBtnisOpen;
})

inputBar.addEventListener('focus', () => {
    inputisFocused = true;
    if(inputisFocused){
        filter.style.display = 'none';
        menu.style.display = 'none';
        viewMark.style.display='none';
    }
})

viewMarkBtn.addEventListener('click', () =>{
    if(viewMarkBtnisOpen){
        viewMark.style.display='none';
    }else{
        viewMark.style.display='flex';
    }

    viewMarkBtnisOpen = !viewMarkBtnisOpen;
})



for(let i = 0; i < books.length; i++){
    const book = books[i];
        book.addEventListener('click', () => 
    {
        if(!bookisClick){
            mainSection.style.display='none';
            separator.style.display='none';
            information.style.display='flex';
        }else{
            mainSection.style.display='flex';
            separator.style.display='flex';
        }

        bookisClick = !bookisClick;
    })
}

backBtn.addEventListener('click',  () => {
    if(!backBtnisClick){
        mainSection.style.display='flex';
        separator.style.display='flex';
    }else{
        mainSection.style.display='none';
        separator.style.display='none';
        information.style.display='flex';
    }
    
    bookisClick = !bookisClick;
})


//this shows the data of the books based on API?
const booksData = [
    { title: "Sample Title 1", author: "Sample Author 1", imgSrc: "resource/sample-pic.jpg" },
    { title: "Sample Title 3", author: "Sample Author 3", imgSrc: "resource/sample-pic.jpg" },
    { title: "Sample Title 3", author: "Sample Author 3", imgSrc: "resource/sample-pic.jpg" },
    { title: "Sample Title 3", author: "Sample Author 3", imgSrc: "resource/sample-pic.jpg" },
    { title: "Sample Title 3", author: "Sample Author 3", imgSrc: "resource/sample-pic.jpg" },
    { title: "Sample Title 3", author: "Sample Author 3", imgSrc: "resource/sample-pic.jpg" },
    { title: "Sample Title 3", author: "Sample Author 3", imgSrc: "resource/sample-pic.jpg" },
    { title: "Sample Title 3", author: "Sample Author 3", imgSrc: "resource/sample-pic.jpg" },
    { title: "Sample Title 3", author: "Sample Author 3", imgSrc: "resource/sample-pic.jpg" },
    { title: "Sample Title 3", author: "Sample Author 3", imgSrc: "resource/sample-pic.jpg" },
    { title: "Sample Title 3", author: "Sample Author 3", imgSrc: "resource/sample-pic.jpg" },
    { title: "Sample Title 3", author: "Sample Author 3", imgSrc: "resource/sample-pic.jpg" },
  ];

// displays books in an ID of books-container
const displayBooks = () => {
    const container = document.getElementById("books-container");
  
    booksData.forEach(book => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
  
      itemDiv.innerHTML = `
        <div class="book-cover">
          <img src="${book.imgSrc}" alt="Book Cover" class="books">
        </div>
        <div class="book-info">
          <h3>${book.title}</h3>
          <span>by ${book.author}</span>
        </div>
        <div class="bg-palette""></div>
        <div class="bookmark-icon">
          <img src="resource/bookmark-svgrepo-com(outline).svg" class="bookmark" alt="Bookmark Icon">
        </div>
      `;
  
      container.appendChild(itemDiv);
    });
  }

  displayBooks();

// add event listener for each bookmark icon
document.querySelectorAll('.bookmark').forEach(bookmark => {
    bookmark.addEventListener("click", () => {
        if (bookmark.src.endsWith('resource/bookmark-svgrepo-com(outline).svg')) {
            bookmark.src = 'resource/bookmark-svgrepo-com(full).svg';
        } else {
            bookmark.src = 'resource/bookmark-svgrepo-com(outline).svg';
        }
    });
});

// add event listener for each bookmark icon
document.querySelectorAll('.books').forEach(book => {
    book.addEventListener('click', () => 
        {
            if(!bookisClick){
                mainSection.style.display='none';
                separator.style.display='none';
                information.style.display='flex';
            }else{
                mainSection.style.display='flex';
                separator.style.display='flex';
            }
    
            bookisClick = !bookisClick;
        });
});


