var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 var price = Math.floor((Math.random()*100));
 var new_item = {}
 new_item[item] = price
 cart.push(new_item);
 console.log(`${item} has been added to your cart.`);
 return cart
}

function viewCart() {
  var newArr = []
  if (!cart.length){
    console.log("Your shopping cart is empty.")
    return
  }
  var list = "In your cart, you have "
  for (var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i])
    newArr.push(`${item} at $${cart[i][item]}`)
  }
  console.log(list + newArr.join(', ') + '.')
}

function total() {
  total = 0
  for (var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i])
    total += cart[i][item]
  }
  return total
}

function removeFromCart(item) {
  var itemCart = false;

  for(var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemCart = true;
      cart = cart.splice(i,i)
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don\'t have a credit card on file for you to place your order.");
    return
  }
  const t = total()
  console.log(`Your total cost is $${t}, which will be charged to the card 123.`);
  cart = [];
}
