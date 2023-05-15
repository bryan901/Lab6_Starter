// RecipeCard.js

class RecipeCard extends HTMLElement {
  // Called once when document.createElement('recipe-card') is called, or
  // the element is written into the DOM directly as <recipe-card>
  constructor() {
    super(); // Inheret everything from HTMLElement

    // EXPOSE - START (All expose numbers start with A)
    // A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
    let shadowOpen = RecipeCard.attachShadow({ mode: "open" });
    // A2. TODO - Create an <article> element - This will hold our markup once our data is set
    let article = document.createElement('article');
    article.setAttribute('id', 'recipe');

    let image = document.createElement('img');
    image.alt = '';
    image.src = '';
    article.append(image);
    let title = document.createElement('p');
    title.className = 'title';
    let link = document.createElement('a');
    link.href = '';
    title.appendChild(link);
    article.appendChild(title);
    let organization = document.createElement('p');
    organization.className = 'organization';
    article.appendChild(organization);
    let rating = document.createElement('div');
    rating.className = 'rating';
    let rat = document.createElement('span');
    rating.appendChild(rat);
    let ratingImage = document.createElement('img');
    ratingImage.src = '';
    ratingImage.alt = '';
    rating.appendChild(ratingImage);
    let responses = document.createElement('span');
    rating.appendChild(responses);
    article.appendChild(rating);
    let time = document.createElement('time');
    article.appendChild(time);
    let ingredients = document.createElement('p');
    ingredients.className = 'ingredients';

    // A3. TODO - Create a style element - This will hold all of the styles for the Web Component
    let style = document.createElement('style');
    // A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made
    style.innerHTML = "* {
      font-family: sans-serif;
      margin: 0;
      padding: 0;
    }
  
    a {
      text-decoration: none;
    }
  
    a:hover {
      text-decoration: underline;
    }
  
    article {
      align-items: center;
      border: 1px solid rgb(223, 225, 229);
      border-radius: 8px;
      display: grid;
      grid-template-rows: 118px 56px 14px 18px 15px 36px;
      height: auto;
      row-gap: 5px;
      padding: 0 16px 16px 16px;
      width: 178px;
    }
  
    div.rating {
      align-items: center;
      column-gap: 5px;
      display: flex;
    }
  
    div.rating>img {
      height: auto;
      display: inline-block;
      object-fit: scale-down;
      width: 78px;
    }
  
    article>img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      height: 118px;
      object-fit: cover;
      margin-left: -16px;
      width: calc(100% + 32px);
    }
  
    p.ingredients {
      height: 32px;
      line-height: 16px;
      padding-top: 4px;
      overflow: hidden;
    }
  
    p.organization {
      color: black !important;
    }
  
    p.title {
      display: -webkit-box;
      font-size: 16px;
      height: 36px;
      line-height: 18px;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  
    p:not(.title),
    span,
    time {
      color: #70757A;
      font-size: 12px;
    }";
    // A5. TODO - Append the <style> and <article> elements to the Shadow DOM
    shadowOpen.append(article);
    shadowOpen.append(style);

  }

  /**
   * Called when the .data property is set on this element.
   *
   * For Example:
   * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
   * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
   *
   * @param {Object} data - The data to pass into the <recipe-card>, must be of the
   *                        following format:
   *                        {
   *                          "imgSrc": "string",
   *                          "imgAlt": "string",
   *                          "titleLnk": "string",
   *                          "titleTxt": "string",
   *                          "organization": "string",
   *                          "rating": number,
   *                          "numRatings": number,
   *                          "lengthTime": "string",
   *                          "ingredients": "string"
   *                        }
   */
  set data(data) {
    // If nothing was passed in, return
    if (!data) return;

    // A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
    let elem = this.shadowRoot.getElementById('recipe');
    // A7. TODO - Set the contents of the <article> with the <article> template given in
    //           cardTemplate.html and the data passed in (You should only have one <article>,
    //           do not nest an <article> inside another <article>). You should use Template
    //           literals (tempalte strings) and element.innerHTML for this.
    let image = elem.getElementsByTagName('img')[0];
    image.alt = data.imgAlt;
    image.src = data.imgSrc;
    let title = elem.getElementsByClassName('title')[0];
    let titleLink = title.getElementsByTagName('a')[0];
    title.href = data.titleLnk;
    title.innerHTML = data.titleTxt;
    elem.getElementsByClassName('organization')[0].innerHTML = data.organization;
    let rating = elem.getElementsByClassName('rating')[0];
    rating.getElementsByTagName('span')[0].innerHTML = data.rating;
    rating.getElementsByTagName('span')[1].innerHTML = data.numRatings;
    let recipeRatingIMG = rating.getElementsByTagName('img')[0];

    switch(data.rating){
      case 0:
        recipeRatingIMG.src = "/assets/images/icons/0-star.svg";
        recipeRatingIMG.alt = "0 stars";
        break;
      case 1:
        recipeRatingIMG.src = "/assets/images/icons/1-star.svg";
        recipeRatingIMG.alt = "1 stars";
        break;
      case 2:
        recipeRatingIMG.src = "/assets/images/icons/2-star.svg";
        recipeRatingIMG.alt = "2 stars";
        break;
      case 3:
        recipeRatingIMG.src = "/assets/images/icons/3-star.svg";
        recipeRatingIMG.alt = "3 stars";
        break;
      case 4:
        recipeRatingIMG.src = "/assets/images/icons/4-star.svg";
        recipeRatingIMG.alt = "4 stars";
        break;
      case 5:
        recipeRatingIMG.src = "/assets/images/icons/5-star.svg";
        recipeRatingIMG.alt = "5 stars";
        break;
    }

    elem.getElementsByTagName('time')[0].innerHTML = data.lengthTime;

    elem.getElementsByClassName('ingredients').innerHTML = data.ingredients;
  }
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements

customElements.define('recipe-card', RecipeCard);
