$(document).ready(()=> {

  
axios.get("/api/orders").then((response) => {
    let data = response.data.orders;
    renderOrder(data);
    $(".start_order").on("click", StartOrder);
  });


  const renderOrder = (arr) => {
    for (let orderItem of arr) {
      let myItem = displayOrder(orderItem);
      $("#active_order").prepend(myItem);
    }
  };

  const displayOrder = (obj) => {
    let $orderItem = `
    <section class="order_container">
    
    <div class="testing">
    <h4>Order ID: ${obj.order_id} </h4>
    <p>${obj.portion} ✕ ${obj.meal_name} ${obj.total_bill}</p> 
    </div>

    <div class="owner_buttons">
      <button type="submit" class="start_order btn btn-outline-primary">🍲</button>
      <button type="submit" class="complete_order btn btn-success">🏁</button>
    </div>

 

    </section>
      
      `;
    return $orderItem;
  };



})