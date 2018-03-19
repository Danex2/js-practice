let size = 8;
let thing = "";

for (let z = 0; z < size; z++) {
    for (let x = 0; x < size; x++) {
        if ((x + z) % 2 == 0) {
            thing += " ";
        } else {
            thing += "#";
        }
    }
    thing += "\n";
}
console.log(thing);