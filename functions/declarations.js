const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };

const sayHello = function(name) {
    console.log("Hello, " + name + "!")
}
//sayHello("dane");

function sayHello2(name) {
    console.log("What's up " + name + "?")
}
//sayHello2("dane");

const sayHello3 = (name) => {
  console.log("Nice to meet you, " + name + "!")
}
//sayHello3("dane");

function power(base, exponent = 2) {
  return base**exponent;
}

//console.log(power(2, 6));

//closure
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(3);
console.log(twice(6));

function addition(num) {
  return z => z + num;
}

let once = addition(10);
console.log(once(7));
let thrice = addition(20);
console.log(thrice(20));