import { booksCategory, displayBooks, appendBookInfo, bookCategoryFilter } from "./api/Functionalities.js";
import AllBooks from "./api/ApiSource.js";

const menuItems = document.querySelectorAll('.separator .item .click-trigger');
const loadingAnimation = document.querySelector(".loading-animation");
const filterBtn = document.getElementById('filter');
const filter = document.getElementById('filter-box');
let filterBtnisOpen = false;

const menuBtn = document.getElementById('menu');
const menu = document.getElementById('menu-box');
let menuBtnisOpen = false;

const inputBar = document.getElementById('input');
let inputisFocused = false;

const viewMarkBtn = document.querySelector('#view-mark-button .click-trigger');

const books = document.getElementsByClassName('book-cover');
const mainSection = document.getElementById('main');
const separator = document.getElementById('separator');
const information = document.getElementById('information');
let bookisClick = false;
let isSorted = false;
let isMarkOnly = false;

const reRenderMainPage = ({category, isSorted, isMarkOnly}) => {
    const collection = bookCategoryFilter(category, isSorted, isMarkOnly);
    displayBooks(collection, allBookmarks);
    activateBookCatalogEvents();
}

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () =>{
        menuItems.forEach(Item =>{
            Item.parentElement.classList.remove('active');
        });

        menuItem.parentElement.classList.add('active')
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
    }
    menuBtnisOpen = !menuBtnisOpen;
})

inputBar.addEventListener('focus', () => {
    inputisFocused = true;
    if(inputisFocused){
        filter.style.display = 'none';
        menu.style.display = 'none';
    }
})

//view bookmarks event
viewMarkBtn.addEventListener('click', ({target}) => {
    const bookmarkIcon = document.querySelector("#view-mark-button img");
    const bookMarkLabel = document.querySelector("#view-mark-button h3");

    const parentEl = target.parentElement;

    if (!isMarkOnly) {
        bookMarkLabel.innerText = "Close Bookmarks"
        isMarkOnly = true;
        parentEl.classList.add("active");
        bookmarkIcon.src = "resource/cross-svgrepo-com.svg";
        
    } else {
        bookMarkLabel.innerText = "View Bookmarks only"
        isMarkOnly = false; 
        bookmarkIcon.src = "resource/bookmark-svgrepo-com(violet).svg";
        parentEl.classList.remove("active");
    }
    
    const activeNavText = document.querySelector('.separator .item.active h3');
    reRenderMainPage({category: activeNavText.innerText.toLowerCase(), isSorted, isMarkOnly});
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

const storedBookmarks = localStorage.getItem("bookmarks");
    
let allBookmarks = !!storedBookmarks ? JSON.parse(storedBookmarks) : [];



//displays the book Catalogs
displayBooks(booksCategory, allBookmarks);

//method for all affected events because in switching to different genre
const activateBookCatalogEvents = () => {
    document.querySelectorAll('.books').forEach(book => {
        book.addEventListener('click', ({target}) => 
            {
                      loadingAnimation.style.display = "flex";
                      const selectedBook = AllBooks.find(book => book.title === target.id);
                    
                      appendBookInfo(information, {...selectedBook})
    
                      
                      setTimeout(() => {
                        //visibility of information
                        loadingAnimation.style.display = "none";

                        information.style.display='flex';
                        mainSection.style.display='none';
                        separator.style.display='none';

                      }, 1000)
                      
            });
    });


    // add event listener for each bookmark icon
    document.querySelectorAll('.bookmark').forEach(bookmark => {
        bookmark.addEventListener("click", ({target}) => {

            const book = AllBooks.find((b, index) => {
                return b.title === target.id
            });
            
           

            if (bookmark.src.endsWith('resource/bookmark-svgrepo-com(outline).svg')) {
                bookmark.src = 'resource/bookmark-svgrepo-com(full).svg';
                allBookmarks.push(book);
            } else {
                bookmark.src = 'resource/bookmark-svgrepo-com(outline).svg';
                
                const newBookmarks = allBookmarks.filter(data => {
                    return data.title !== target.id
                });

                allBookmarks = [...newBookmarks]
                
            }

            localStorage.setItem("bookmarks", JSON.stringify(allBookmarks));

            console.log(JSON.parse(localStorage.getItem('bookmarks')));
            
        });
    });
}

activateBookCatalogEvents();

const allNavs = document.querySelectorAll('.separator div > .click-trigger');

allNavs.forEach(nav => {
    nav.addEventListener('click', ({target}) => {

        const category = target.nextElementSibling.innerText.toLowerCase();

        reRenderMainPage({isSorted, category, isMarkOnly})
    })
})


/* Sort functionalities */
const sortBtn = document.querySelector('.left-section .item .click-trigger');

sortBtn.addEventListener('click', ({target}) => {
   const btnLabel = document.querySelector('.left-section .item h3');
   const activeNav = document.querySelector('.separator .item.active h3');
   
   
   if (btnLabel.innerText === "Sort") {
    btnLabel.innerText = "Unsort";
    isSorted = true;
   } else {
    btnLabel.innerText = "Sort";
    isSorted = false;
   }


   reRenderMainPage({isSorted, category: activeNav.innerText.toLowerCase(), isMarkOnly})
})


