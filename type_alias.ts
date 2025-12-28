type Details = {name : string, marks : number, address?: string};
const result : Details = {
    name: 'Sanket',
    marks: 98
}
console.log(result);
result.marks = 99
result.address = 'XYZ'
console.log(result);

const result2 : Details = {
    name: 'Aryan',
    marks: 100,
    address: 'Bilaspur'
}
