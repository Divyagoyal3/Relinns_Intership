function shoppingSpree(arr) {
    const totalPrice = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.price;
  }, 300);
  return totalPrice;
  }
  var wishlist = [
      { title: "Tesla Model S", price: 90000 },
      { title: "4 carat diamond ring", price: 45000 },
      { title: "Fancy hacky Sack", price: 5 },
      { title: "Gold fidget spinner", price: 2000 },
      { title: "A second Tesla Model S", price: 90000 }
  ];
  
  console.log(shoppingSpree(wishlist));