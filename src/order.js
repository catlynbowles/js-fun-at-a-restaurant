
function takeOrder (newOrder, delOrderList) {
    if (delOrderList.length < 3) {
        return delOrderList.push(newOrder)
    }
}

function refundOrder (orderNum, orders) {

for (var i = 0; i < orders.length; i++) {
  if (orders[i].orderNumber === orderNum) {
    orders.splice(i, 1);
  }
}
}

function listItems (deliveryOrders) {
//   var output = '';
//
//   for(var i =0; i < deliveries.length; i++)
//   {if(i === 0){
//       output = deliveries[i].item;
//     } else {
//       output = output + ", " + deliveries[i].item;
//     }
//   }
//   return output
// }
var entree = [];
  for(var i =0; i < deliveryOrders.length; i++) {
    entree.push(deliveryOrders[i].item);
  }
  return entree.join(", ")
}

function searchOrder (orderList, orderName) {
  for (var i = 0; i < orderList.length; i++) {
    if (orderList[i].item === orderName) {
        return true
    }
  }
    return false
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
