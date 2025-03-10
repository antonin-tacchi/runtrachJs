function fizzbuzz() {
    let str = "";
    for (let i = 1; i <= 151; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            str += "FizzBuzz" + "\n";
        }
        else if (i % 3 === 0) {
            str += "Fizz" + "\n";
        }
        else if (i % 5 === 0) {
            str += "Buzz" + "\n";
        } 
        else {
            str += i + "\n";
        }
    }
    console.log(str);
}

fizzbuzz();
