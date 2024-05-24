import { booksCategory, displayBooks, appendBookInfo, bookCategoryFilter, handleSearch } from "./api/Functionalities.js";
import AllBooks from "./api/ApiSource.js";
const loadingAnimation = document.querySelector(".loading-animation");
window.onload = () => {
    loadingAnimation.style.display = "none"
}
const menuItems = document.querySelectorAll('.separator .item .click-trigger');
const menuBtn = document.getElementById('menu');
const menu = document.getElementById('menu-box');
let menuBtnisOpen = false;

const viewMarkBtn = document.querySelector('#view-mark-button .click-trigger');

const books = document.getElementsByClassName('book-cover');
const mainSection = document.getElementById('main');
const separator = document.getElementById('separator');
const information = document.getElementById('information');
const bookmarkModal = document.querySelector('.alert-modal');
let bookisClick = false;
let isSorted = false;
let isMarkOnly = false;

const reRenderMainPage = ({category, isSorted, isMarkOnly}) => {
    const collection = bookCategoryFilter(category, !!isSorted, !!isMarkOnly);
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
                      const selectedBook = AllBooks.find(book => book.title === target.id);
                      generateIndividualBook(selectedBook)
                      
                      
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
                handleBookmarkMsg("added to bookmark")
            } else {
                bookmark.src = 'resource/bookmark-svgrepo-com(outline).svg';
                
                const newBookmarks = allBookmarks.filter(data => {
                    return data.title !== target.id
                });

                allBookmarks = [...newBookmarks]
                
                handleBookmarkMsg("removed to bookmark")
                
            }

            localStorage.setItem("bookmarks", JSON.stringify(allBookmarks));
            
        });
    });
}

/* Bookmark functionality on every individual book page */

const activateBookSave = () => {
    const saveBtn = document.querySelector('.save-book > .click-trigger');
    const label = document.querySelector('.save-book h3');

    saveBtn.addEventListener('click', ({target}) => {
        const isSaved = allBookmarks.some(data => {
            return data.title === target.id
        });

        if (isSaved) {
            label.innerText = "Save"
            const newBookmarks = allBookmarks.filter(book => {
                return book.title !== target.id;
            })
            allBookmarks = [...newBookmarks];
            handleBookmarkMsg("removed to bookmark")
        } else {
            label.innerText = "Unsave"
            const selectedBook = AllBooks.find(data => {
                return data.title === target.id;
            });
            
            handleBookmarkMsg("added to bookmark")
            allBookmarks.push(selectedBook);
        }

        localStorage.setItem("bookmarks", JSON.stringify(allBookmarks));
    })
}

const generateIndividualBook = (bookInfo) => {
    loadingAnimation.style.display = "flex";
                  
    setTimeout(() => {
      //visibility of information
      loadingAnimation.style.display = "none";
      
      appendBookInfo(information, {...bookInfo})
      information.style.display='flex';
      mainSection.style.display='none';
      separator.style.display='none';

      window.scrollTo({top: 0})
      
    }, 1000)
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

/* Search Functionality */
const searchInput = document.querySelector("#book-search-input");


searchInput.addEventListener('input', handleSearch)


/* Bookmark add message modal */
const handleBookmarkMsg = (message) => {
    bookmarkModal.classList.add("active")
    bookmarkModal.querySelector('p').innerText = message;

    setTimeout(() => {
        bookmarkModal.classList.remove("active")
    }, 1500);
}

/* back to intropage */
const webTitle = document.querySelector('[data-web-title]');

webTitle.addEventListener('click', () => {
    location.href = "/"
})



export {generateIndividualBook, activateBookSave, reRenderMainPage}