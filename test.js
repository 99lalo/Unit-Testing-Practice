const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function() {
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;

    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})
test("1 euro is 127.9 yen and 1.2 dollars is 1 euro", function() {
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its supposed to be used
    const yen = fromDollarToYen(3.5)

    // if 1 euro is 127.9 yen and 1.2 dollars is 1 euro, then 3.5 dollars should be ((3.5 / 1.2) * 127.9)
    const expected = (3.5 / 1.2) * 127.9

    // this is the comparison for the unit test
    expect(expected).toBe(yen);
})
test("1 euro is 0.8 pounds and 127.9 yen is 1 euro", function() {
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its supposed to be used
    const pound = fromYenToPound(1000)

    // if 1 euro is 0.8 pounds and 127.9 yen is 1 euro, then 1000 yen should be ((1000 / 127.9) * 0.8)
    const expected = (1000 / 127.9) * 0.8

    // this is the comparison for the unit test
    expect(expected).toBe(pound);
})