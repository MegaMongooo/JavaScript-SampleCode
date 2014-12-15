function solve(value) {
    Object.prototype.clone = function() {
        var newObj = (this instanceof Array) ? [] : {};
        for (i in this) {
            if (i == 'clone') continue;
            if (this[i] && typeof this[i] == "object") {
                newObj[i] = this[i].clone();
            } else newObj[i] = this[i]
        } return newObj;
    };
    var string = [];
    var charIndex = [];
    ;

    for (var i = 0; i < value.length; i++) {
        string.push(value[i].split(""));
    }
    var newArr = string.clone();
    for (var i = 1; i < string.length; i++) {
        for (var j = 0; j < string[i].length; j++) {
            if((string[i][j] == string[i-1][j]) &&
                (string[i][j] == string[i][j+1]) &&
                (string[i][j] == string[i][j-1])){

                newArr[i][j] = "*";
                newArr[i][j+1] = "*"
                newArr[i][j-1] = "*"
                newArr[i-1][j] = "*";

            }
        }
    }

console.log(newArr.join("\n").replace(/[,]/g,""))
}

    solve(['abcdexgh',
           'bbbdxxxh',
           'abcxxxxx'])
    solve(["aa",
           "aaa",
           "aaaa",
           "aaaaa"])