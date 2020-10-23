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
     
      <div>
      <h2 id="meal_name">${obj.meal_name}</h2> 
      <h2 class="d-none">${obj.id}  </h2>
      <p id="price">Price: $${obj.price / 100}</p>
      <label for="portion">Add:</label>
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
      </div>

      <script>
        prices.unshift(${obj.price / 100});
        menu_id_const.unshift(${obj.id});
      </script>

      <img src="${obj.picture_url}">
       </section>
      
      `;
    return $menuItem;
  };

  loadMenu();
});
