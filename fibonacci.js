
//Fibonaci

function Fibonacci(n) {
    const array = [0, 1];
    for (let i = 2; i < n; i++) {
        array[i] = array[i - 1] + array[i - 2]
    }
    return array
}

// Fibonacci(7)

//Factorial

function Factorial(n) {
    let element = 1; 
    for (let i = 1; i <= n ; i++) {
        element = element * i
    }
    return element
}

console.log(Factorial(4));