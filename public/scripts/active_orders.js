$(document).ready(()=> {

  
axios.get("/api/orders").then((response) => {
    let data = response.data.orders;
    console.log(data);
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
     
      <h4>Order ID: ${obj.id} </h4>
      <h5>Customer name ${obj.user_name}</h5>
      <p>${obj.portion} ✕ ${obj.meal_name} ${obj.total_bill}</p> 

    </section>
      
      `;
    return $orderItem;
  };

  loadMenu();


})