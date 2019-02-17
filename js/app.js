class ZOMATO {
  constructor() {
    this.api = '5cb4ed57c3bca10df576ad8d2dea0870';
    this.header = {
      method: 'GET',
      headers: {
        'user-key': this.api,
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    };
  }
  async searchAPI(city, categoryID) {
    // category URl
    const categoryURL = 'https://developers.zomato.com/api/v2.1/categories';

    // category data
    const categoryInfo = await fetch(categoryURL, this.header);
    const categoryJSON = await categoryInfo.json();
    const categories = await categoryJSON.categories;

    return {
      categories
    };
  }
}
class UI {
  constructor(){
    this.loader = document.querySelector('.loader');
    this.restaurantsList = document.getElementById('.restaurant-list');
  }

  addSelectOption(categories){
    const serch = document.getElementById('searchCategory');
    let output = `'<option value='0' selected>select category</option> `;
    categories.forEach(category =>{
      output += `<option value='${category.categories.id}'></option>`
    })
    search.innerHTML = output;
  }

}

(function() {
  const serchForm = document.getElementById('searchForm');
  const serchCity = document.getElementById('searchCity');
  const serchCategory = document.getElementById('searchCategory');

  const zomato = new ZOMATO();

  const ui = new UI();

  // add select options
  document.addEventListener('DOMContentLoaded', ()=>{
  // Logic Here
  zomato.searchAPI().then(data => console.log(data));
})
})();