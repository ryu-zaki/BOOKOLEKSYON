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

const books = document.getElementsByClassName('books');
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