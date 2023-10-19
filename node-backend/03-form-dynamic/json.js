const data = {
    name: "seobon",
    age: 27
};

const jsonData = JSON.stringify(data);
console.log("json: ", jsonData);

console.log("js object: ", JSON.parse(jsonData));
