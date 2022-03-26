function nameMenuItem(foodItemName) {
    return `Delicious ${foodItemName}`

}

function createMenuItem (newFoodItem, pri, typ) {
  return {
  name: newFoodItem,
  price: pri,
  type: typ
}
}

var listIngredients = [];
  function addIngredients (newIngredient, listIngredients) {
    if (!listIngredients.includes(newIngredient)) {
      listIngredients.push(newIngredient)
    }
      return listIngredients
  }


function formatPrice (pri) {
  return `$${pri}`
}

function decreasePrice (initalPrice, decPrice) {
  var decPrice = initalPrice - (initalPrice / 10)
  return decPrice
}

var ingredArray = []
function createRecipe (tit, ingredArray, menuItType) {
    var recipeObject = {
    title: tit,
    type: menuItType,
    ingredients: ingredArray,
    // type: menuItType,
    // price: formatPrice(price)
  }
return recipeObject
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
