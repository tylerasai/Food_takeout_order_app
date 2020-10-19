$(document).ready(() => {
  const consoling = () => {
    console.log("testing");
  };

  consoling();

  const loadMenu = () => {
    axios.get("/api/menu").then((response) => {
      let data = response.data.menu;
      console.log(data);
      renderMenu(data);
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
      <h2>${obj.meal_name}</h2>
      <p>Price: $${obj.price / 100}</p>
      </div>
      
      <img src="${obj.picture_url}">
      
      </section>
      `;
    return $menuItem;
  };

  loadMenu();
});
