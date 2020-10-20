$(document).ready(() => {
  setTimeout(() => {
    $("select#portion").on("change", () => {
      let portionArray = [];
      let portion = $("select#portion option:selected").text();
      let portionIteration = (str) => {
        for (let i = 0; i < str.length; i++) {
          portionArray.push(portion[i]);
        }
      };

      portionIteration(portion);

      const totalBill = (arr1, arr2) => {
        total = 0;
        for (i = 0; i < arr1.length; i++) {
          total += arr1[i] * arr2[i];
        }
        return total.toFixed(2);
      };

      $("#total_bill").text(totalBill(portionArray, prices));
    });



  }, 200);
});
