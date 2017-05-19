/**
 * Created by sam29 on 19-May-17.
 */
// var person = {
//     firstName :"Pankaj",
//     lastName : "Sammal"
// };
// function addNum(a,b) {
//     return a+b;
//
// }
// function worthless() {
//     //return a+b;
//
// }
// var printData = function () {
//     console.log("Its the function printing");
// }
// console.log(addNum);
// printData();
// setTimeout(printData,5000);
function placeAndOrder(orderNo) {
    console.log("Customer Order",orderNo);
    cook(function () {
        console.log("Dilivered food",orderNo);
    });
}

function cook(callback) {
setTimeout(callback,5000)
}

placeAndOrder(1);
placeAndOrder(2);
placeAndOrder(3);
placeAndOrder(4);
placeAndOrder(5);
placeAndOrder(6);

