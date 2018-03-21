function range(start, end, step = start < end ? 1 : -1) {
    let numArray = [];
    if (step > 0) {
        for (let i = start; i <= end; i+= step) {
            numArray.push(i);

        }
    } else {
        for (let i = start; i >= end; i += step) {
            numArray.push(i);
        }
    }
    return(numArray);
}

//console.log(range(20, 50));

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}

//console.log(sum(range(20, 30)));

function reverseArray(array) {
    let newArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArr.push(array[i]);
    }
    return newArr;
}

//console.log(reverseArray(['a', 'b', 'c']));

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
function prepend(value, list) {
    return {value, rest: list};
  }
  
function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  

  function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }