function solve(value){
    var start = (value[0]);
    var end = Number(value[1]);

    function isFibonacci(n) {
        var fib1 = 0;
        var fib2 = 1;
        do {
            var saveFib1 = fib1;
            fib1 = fib2;
            fib2 = saveFib1 + fib2;
        }
        while (fib2 < n);

        if (fib2 == n)
            return "yes";
        else
            return "no";

    }

    for (var i = start; i <= end; i++) {
        if(i == start){
            console.log("\<table\>\n\<tr\><th\>Num\</th\><th\>Square\</th\><th\>Fib\</th\>\</tr\>");
        }
        console.log("\<tr\><td\>"+ i +"\</td\><td\>"+i*i+"\</td\><td\>"+isFibonacci(i)+"\</td\>\</tr\>");
        if(i == end){
            console.log("\</table\>");
        }
    }
}

//solve([2,6])
solve([55,56])