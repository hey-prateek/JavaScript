// For Loop: print 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log("heyprateek_", i);
}

// While Loop: runs until count reaches 0
let count = prompt("Enter while loop count...");
while (count-- > 0) {
    console.log("hey (while loop)");
}

// Do...While Loop: runs at least once
let num = 3;
do {
    console.log("hey (do...while loop)", num);
    num--;
} while (num > 0);

// For...of Loop: iterate over array
let arr = ["Prateek", "Muskan", "Tony"];
for (let val of arr) {
    console.log("Array value:", val);
}

// For...in Loop: iterate over object keys
let student = { name: "Prateek", age: 26, id: 586 };
for (let key in student) {
console.log(`${key}: ${student[key]}`);
}


// array of objects
let student1={name:"prateek", id:586};
let student2={name:"muskan", id:590};
let arrStudent=[student1, student2];
for(let val of arrStudent)
{
    for(let val1 in val)
    {
        console.log(val1+"-"+val[val1]);
    }
}

