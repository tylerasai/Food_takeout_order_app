//waiting until the document is ready
$(function () {


  $("#order_button").on("click", orderNow);

});


const buildOrders =  () => {
  let portionArray = [];
  let portion = $("select#portion option:selected").text();
  for (let i = 0; i < portion.length; i++) {
    portionArray.push(portion[i]);
  }

  //Multiplying the price with the portion order
  const totalBill = (arr1, arr2) => {
    total = 0;
    for (i = 0; i < arr1.length; i++) {
      total += arr1[i] * arr2[i];
    }
    return total.toFixed(2);
  };
  //Displaying the total bill in the total section
  $("#total_bill").text(totalBill(portionArray, prices));

  //Getting name of selected meals in array

  //Getting all the meal name on the display
  let allMeals = $("h4#meal_name").text();

  //Turning all meal into an array

  let turnMealToArray = (str) => {
    let mealArrayRaw = str.split("  ");
    return mealArrayRaw.slice(0, -1);
  };

  let mealArray = turnMealToArray(allMeals);

  //Creating an order object

  let orderArray = [];

  const orderConstructor = (portion, mealArray, prices, menu_id) => {
    function Order(meal_name, portion, price, total_bill, menu_id) {
      (this.meal_name = meal_name),
        (this.portion = portion),
        (this.price = price),
        ((this.total_bill = total_bill), 
        (this.menu_id = menu_id));
    }

    for (i = 0; i < portion.length; i++) {
      if (portion[i] > 0) {
        orderArray[i] = new Order(
          mealArray[i],
          portion[i],
          prices[i],
          (prices[i] * portion[i]).toFixed(2),
          menu_id[i]
        );
      }
    }
  };

  orderConstructor(portion, mealArray, prices, menu_id_const);

  //If customer changes mind and changes the portion number it leaves an empty object
  //The following cleans the array of empty objects:
  //Also following is the final order object and the total bill to be posted

  orderArrayClean = orderArray.filter(
    (value) => JSON.stringify(value) !== "{}"
  );

  let totalOrderBill = totalBill(portionArray, prices);

  let menuHiddenId = $(".d-none").text();
  const menuIdSep = (int) => {
    let seperated = int.split("  ");
    return seperated;
  };

  let menuIdArray = menuIdSep(menuHiddenId).filter((e) => e);
};

const orderNow = () => {
  if(orderArrayClean !== undefined) {
    $.post("/api/orders", { orderArrayClean }).then(() => {
    });
  } else {
    prompt("Order can't be empty");
  }

};


