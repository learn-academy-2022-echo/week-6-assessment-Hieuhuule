// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("properCase", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(properCase(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// ReferenceError: properCase is not defined

// b) Create the function that makes the test pass.

// PSUEDO CODE
// create a function that iterates through the object
// separate name into an array split into individual characters
// upcase the first letter and append to the string using slice
// return an array with string interpolation

const properCase = (object) => {
  let result = []
  object.map((object) => {
    first_cap = (`${object.name[0].toUpperCase()}` + `${object.name.substring(1)}`)
    split_arr = first_cap.split(" ")
    first_name = split_arr[0]
    last_cap = split_arr[1][0].toUpperCase() + split_arr[1].substring(1)
    result.push(first_name + ' ' + last_cap + ` is ${object.occupation}.`)
  })
  return result
}

properCase(people)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("remainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERs of the numbers when divided by 3", () => {
    expect(remainders(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(remainders(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// create a function that takes in a mixed array
// iterate through the array and sort the integers into a integers array
// create a remainders array 
// iterate through the integers array and operate on each number using the modulo operator
// add the result of using the modulo operator

const remainders = (arr) => {
  let integer_arr = []
  let remainders_arr = []
  arr.map(value => {
    if (typeof value === "number") {
      integer_arr.push(value)
    }
  })
  integer_arr.map(value => {
    remainders_arr.push((value % 3))
  })
  return remainders_arr
}

remainders(hodgepodge1)
remainders(hodgepodge2)


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("cubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(cubed(cubeAndSum1)).toEqual(99)
    expect(cubed(cubeAndSum2)).toEqual(1125)
  })
})

// ReferenceError: cubed is not defined

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// create a function that takes in an array of numbers
// create an empty array to hold the numbers
// iterate through the array with map
// operate on the numbers and push to new array
// return new array

const cubed = (arr) => {
  let cubed_nums = 0
  arr.map(value => {
    cubed_nums += (value ** 3)
  })
  return cubed_nums
}

cubed(cubeAndSum1)
cubed(cubeAndSum2)