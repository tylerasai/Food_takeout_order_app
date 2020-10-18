$(()=> {


  const appending = () => {
    $(".menu").append("before execution");
  }
  appending();

  Axios.get("api/menu").then((response) => {
    console.log(response);
  })
  

})



/*

const loadMenu = () => {
  $.ajax("/api/menu", { method: "GET" }).then((data) => {
    console.log(data);
    renderMenu(data);
  });
};

const renderMenu = function (menuItems) {
  for (let menuItem of menuItems) {
    let myItem = displayMenu(menuItem);
    $(".menu").prepend("working!");
    $(".menu").prepend(myItem);
  }
};



const displayMenu = (obj) => {
  let $menuItem = `
<article>
<label for="img"><img src="${obj.menu[0][picture_url]}" alt ="meal_pic">${obj.menu[0][meal_name]}</label>
</article>
}
`;
  return $menuItem;
};


*/

