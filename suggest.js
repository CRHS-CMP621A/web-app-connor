let reviews = []
let button = document.querySelector(".form__btn")
let inputGenre = document.querySelector(".form__input--genre")
let inputFoodType = document.querySelector(".form__input--food--type")
let inputType = document.querySelector(".form__input--type")
let inputName = document.querySelector(".form__input--name")
let form = document.querySelector(".form") 

class Review{
    date = new Date()
    id = (Date.now() + "").slice
  
    constructor(text){
      this.text = text;
    }
  }
  
  class Food extends Review{
    type = "Food"
  
  
    constructor(text, foodType){
      super(text)
      this.foodType = foodType
    }
  }
  
  class Book extends Review{
    type = "Book"
  
    constructor(text, genre){
      super(text)
      this.genre = genre
    }
  }
  
  button.addEventListener("click", function(e){
    e.preventDefault();
  
    const type = inputType.value;
    const genre = inputGenre.value;
    const foodType = inputFoodType.value;
    const name = inputName.value;
    let review;
  
    if(type === "Food"){
      const food = foodType;
  
      review = new Food(name, food)
    }
    if(type === "BooK"){
      const bookGenre = genre;
  
      review = new Book(name, bookGenre)
    }
  
    reviews.push(review)
    console.log(reviews)
    localStorage.setItem("reviews", JSON.stringify(reviews));
    form.reset();
  })