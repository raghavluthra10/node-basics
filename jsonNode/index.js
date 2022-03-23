const fs = require('fs');

const bioData = {
    name: "raghav",
    age: 23,
    city: "gurgaon"
};


const jsonData = JSON.stringify(bioData);

// fs.writeFile('json1.json', jsonData, (err) => {
//     console.log(err);
// })

fs.readFile("json1.json", "utf-8", (err, data) => {
    // console.log(data);
    const originalData = JSON.parse(data);
    console.log(originalData)
    console.log(err);

})

// const objData = JSON.parse(jsonData);
// console.log(objData)