var sam = {
    printFirstName: function () {
    console.log("INSIDE printFirstName");
        console.log(this);
    console.log(this===sam);
}
};
sam.printFirstName();
function somethingWorthless() {
 console.log("You are worthless");
    console.log(this===sam);
    console.log(this===global);
}
somethingWorthless();