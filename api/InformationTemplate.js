import AllBooks from "./ApiSource.js";

const setTemplate = (info) => {

    const {title, author, synopsis, ratings, characters, genre, pdf} = info;
    const bookMarks =  localStorage.getItem("bookmarks") ?  JSON.parse(localStorage.getItem("bookmarks")) : [];

    const isMarked = bookMarks.some(data => {
  
      return data.title === title;
    });

    console.log(isMarked)

  
    const stars = [];

    for (let i = 0; i < 5; i++) {
       const average = Math.floor(ratings);

        if ((i + 1) <= average) {
            stars.push(`<img src="resource/star-fill.svg" alt="star-icon">`)
        } else {
            stars.push(`<img src="resource/star-outline.svg" alt="star-icon">`)
        }

    }

    const contributors = characters.map(name => {
        return `<li>${name}</li>`
    });

    /* Suggested books functionality */
    const suggestedBooks = AllBooks.filter(book => {
      return book.title !== title && book.genre === genre;
    });
    const shuffleBooks = 
    shuffle(suggestedBooks)
    .filter((data, index) => index < 2)
    .map(data => generateSuggestedBook(data));


    return (
        `
        <div class="back" id="back-button">
      <div class="back-icon">
        <img src="resource/less-than-svgrepo-com.svg" alt="">
      </div>
      <h3>BACK</h3>
    </div>

    <div class="left-section">

      <div class="focused-book">
        <div class="book-container">
          <img src="./resource/book covers/${genre.toLowerCase()}/${title.toLowerCase()}.png" alt="">
        </div>  
      </div>
      
      <div class="focused-book-info">

        <div class="title-author-ratings">
          <h2><span>TITLE, AUTHOR, & RATINGS</span></h2>
          <div class="content">
            <h3>${title}</h3>
            <span> by <i>${author}</i></span>
            <div class="ratings">
              ${stars.join("")}
            </div>
          </div>
        </div>

        <div class="synopsis">
          <h2><span>SYNOPSIS</span></h2>
          <div class="content">
            <p>
              ${synopsis}
            </p>
          </div>
        </div>

        <div class="characters-and-contributors">
          <h2><span>CONTRIBUTORS</span></h2>
          <div class="content characters">
            <ul>
              ${contributors.length ? contributors.join("") : `<p class="no-contributor"><b><i>No Contributors<i><b></p>`}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="right-section">

      <div class="upper">

        <div class="item save-book relative">
          <div id="${title}" class="click-trigger"></div>
          <div class="bookmark">
            <img src="resource/bookmark-svgrepo-com(violet).svg" alt="">
          </div>
          <h3>${isMarked ? "Unsave" : "Save"}</h3>
        </div>

        <div class="item">
          <div class="download">
            <img src="resource/download-svgrepo-com.svg" alt="">
          </div>
          <a href=${pdf} target="_blank">Download Book</a>
        </div>

      </div>

      <div class="lower">
        <h3>More Like This</h3>
        <div class="book-suggestions">

          ${shuffleBooks.join("")}

        </div>
      </div>
    </div>
        `
    )
} 

const generateSuggestedBook = ({title, genre, author}) => {

  return (
    `<div class="item relative">

    <div id="${title}" class="click-trigger suggested-book-trigger"></div>

    <div class="book-cover"><img src="resource/book covers/${genre.toLowerCase()}/${title.toLowerCase()}.png" alt=""></div>
    <div class="book-info text-center">
      <h3>${title}</h3>
      <span>by ${author}</span>
    </div>
  </div>`
  )
}

const shuffle = (arr) => {

  for (let i = arr.length - 1; i > 0; i--) {

    const randomIndex = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];

  }

  return arr;

}




export default setTemplate;