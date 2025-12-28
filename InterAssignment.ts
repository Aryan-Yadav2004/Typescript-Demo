let schoolName : "DPS" | "DAV" = "DPS";
let another: string = 'KV';

another = schoolName;

console.log(another);

type Complex = {
    real: number,
    imag: number,
    add: (c : Complex) => Complex
}

interface IComplex {
    real: number,
    imag: number,
    add: (c : IComplex) => IComplex 
}

let c1: Complex = {
    real: 10,
    imag: 10,
    add: (c : Complex) => {return c}
}

let c2 : IComplex = { 
    real: 9,
    imag: 9,
    add: (c : IComplex) => { return c },
}

console.log(c1);

c1 = c2; // TS will consider complex and icomplex same because the members are same and have same types of that memebers. Although the name are different (complex != icompelx)
// still it doesn't matter. It only see that real and imag value are present or not  and does not bother about other value.

// c2 = c1 it gives error be cause other values are present in c1.
// for function assignment parameter and its return type and type of its parameter should be exactly same.
// inter assigment possible when either the type if equal or it must be the subset.

console.log(c1);
