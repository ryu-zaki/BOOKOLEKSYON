const setTemplate = (info) => {

    const {title, author, synopsis, ratings, characters, genre, pdf} = info;
  
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
              ${contributors.join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="right-section">

      <div class="upper">

        <div class="item">
          <div class="bookmark">
            <img src="resource/bookmark-svgrepo-com(violet).svg" alt="">
          </div>
          <h3>Unsave</h3>
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

          <div class="item">
            <div class="book-cover"><img src="resource/sample-pic1.jpg" alt=""></div>
            <div class="book-info">
              <h3>really good, actually</h3>
              <span>by Monica Heisey</span>
            </div>
          </div>

          <div class="item">
            <div class="book-cover"><img src="resource/sample-pic2.png" alt=""></div>
            <div class="book-info">
              <h3>Don't Look Back</h3>
              <span>by Isaac Nelson</span>
            </div>
          </div>
        </div>
      </div>
    </div>
        `
    )
} 




export default setTemplate;