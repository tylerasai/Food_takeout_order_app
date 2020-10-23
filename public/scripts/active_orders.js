$(document).ready(()=> {

  
axios.get("/api/orders").then((response) => {
    let data = response.data.orders;
    renderOrder(data);
  });


  const renderOrder = (arr) => {
    for (let orderItem of arr) {
      let myItem = displayOrder(orderItem);
      $("#active_order").prepend(myItem);
    }
  };

  const displayOrder = (obj) => {
    let $orderItem = `
    <section id="order_container">
     
    <div>
      <h4>Order ID: ${obj.order_id} </h4>
      <p>${obj.portion} ✕ ${obj.meal_name} ${obj.total_bill}</p> 
    </div>

    <div id="owner_buttons">
     <!-- <form action="" method="POST"> --!>
      <button id="start_order" type="submit" class="btn btn-primary">🍲</button>
     <!-- </form> --!>

     <!-- <form action="" method="POST"> --!>
     <button id="complete_order" type="submit" class="btn btn-success">🏁</button>
    <!-- </form> --!>
    </div>

 

    </section>
      
      `;
    return $orderItem;
  };

  loadMenu();


})