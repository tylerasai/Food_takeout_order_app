$(document).ready(() => {

  const loadMenu = () => {
    axios.get("/api/menu").then((response) => {
      let data = response.data.menu;
      renderMenu(data);
      //buildOrders is in order_counter.js file
      $("select").change(buildOrders);
    });
  };

  const renderMenu = (menuItems) => {
    for (let menuItem of menuItems) {
      let myItem = displayMenu(menuItem);
      $(".menu").prepend(myItem);
    }
  };

  const displayMenu = (obj) => {
    let $menuItem = `
      <section id="container">
     
          <div id="name_price_option">
            <h4 id="meal_name">${obj.meal_name}</h4> 
            <h4 class="d-none">${obj.id}  </h4>
            <div id="price_and_option">
              <label for="portion">Add </label>
              <select name="portion" id="portion">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              </select>
              <p id="price">$${obj.price / 100}</p>
            </div>
          </div>
          
        
          <img id="meal_picture" src="${obj.picture_url}">
        </section>
        
        <script>
          prices.unshift(${obj.price / 100});
          menu_id_const.unshift(${obj.id});
        </script>
      `;
    return $menuItem;
  };

  loadMenu();
});
