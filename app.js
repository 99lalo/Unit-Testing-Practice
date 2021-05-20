// this is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7, 3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (amount) => {
    return amount * oneEuroIs["USD"];
}

const fromDollarToYen = (amount) => {
    return (amount / 1.2) * oneEuroIs["JPY"]
}

const fromYenToPound = (amount) => {
    return (amount / 127.9) * oneEuroIs["GBP"]
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };