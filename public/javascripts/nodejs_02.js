process.on('tick', function (count) {
    console.log('tick event create : %s', count);
});

setTimeout(function () {
    console.log("2 second after apply");

    process.emit("tick", "2");
}, 2000);


var Calc = require("./Calc3");

var calc = new Calc();
console.log("add : %d", calc.Add(2, 3));
calc.emit("stop");

console.log(Calc.title + '에 stop 이벤트 전달함');
