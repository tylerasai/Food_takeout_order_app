setTimeout(() => {
  
  const orderReveal = () => {
    console.log($("p").text());
  }
  
  $(".start_order").click(function () {
    $(this).css("background-color", "blue");
        
    
  });
  //   axios.post("/verify_order", {
  //     meals: ''
  //   });
  // 


}, 200);
