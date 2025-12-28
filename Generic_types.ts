function linearSearch<T, R>(array : T[], x : T, y: R) : [number, T] {

    for(let i = 0; i < array.length; i++) {
        if(array[i] == x) return [i, array[i]];
    }
    console.log(y);
    return [-1,x];
}

const array : number[] = [1, 2, 5, 1, 2, 3, 54, 0, 6, -2, 3];
console.log(linearSearch<number, string>(array, 12, 'vaef'));

const stringArray : string[] = ['abc', 'def', 'ghi', 'jk'];
console.log(linearSearch<string, number>(stringArray, 'def', -2));
