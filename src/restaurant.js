
function createRestaurant (restName) {
  var restObject = {
    name: restName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  // console.log(restObject.menus)
  return restObject
}

// object function createRestaurant needs to be able to have names passed through
// as nested data within a restObject object.

function addMenuItem (restObject, itemName) {

    if (itemName.type === "breakfast" && restObject.menus.breakfast.includes(itemName)) {
      delete itemName
    }
     else if (itemName.type === 'breakfast') {
    restObject.menus.breakfast.push(itemName)
  } else if (itemName.type === 'lunch') {
      restObject.menus.lunch.push(itemName)
    } else if (itemName.type === 'dinner') {
      restObject.menus.dinner.push(itemName)

  }
}
// we need to add items into the correct menu category based on type.

function removeMenuItem (restObject, grubItem, grubType) {
  console.log(grubItem)
  console.log(restObject)
for (var i = 0; i < restObject.length; i++) {
    if (restObject.name.menus[i] === grubItem) {
      splice(i, 0)
    }
  }
}


// should remove an item using splice? it will need to include a string



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
