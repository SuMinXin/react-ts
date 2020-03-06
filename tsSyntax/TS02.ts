/* eslint-disable */
// TS 02-1 interface 接口/面板
interface Iperson {
    name: string;
    age: number;
}

const person: Iperson = {
    name: 'jw',
    age: 18
}

interface I_animal {
    category?: string;
    name: string;
    readonly age: number;        // 只能讀取不能修改: readonly
    [propsName: string]: any;     //屬性個數不確定時。可新增另一個屬性，any必須為任意類型
}

let animalOne: I_animal = {
    category: 'cat',
    name: 'Lucky',
    age: 5
}

// animalOne.age = 10;


// TS 02-2 Array 3種表示法
let arr: string[] = ['hello', 'hi', 'hey'];
let arr1: Array<number> = [1, 2, 3]

interface I_arr {
    name: string;
    age: number;
}

let arr2: I_arr[] = [{ name: 'jinwei', age: 27 }]

let randomArr: boolean[] = [true, false]



// TS 02-3 Tuple
let tp: [string, number];
tp = ["hello", 10];
// tp = [10, "hello"]; // 順序不同會報錯 


// TS 02-4 要允許多種型別的array要如何表示?


// TS 02-5 函數類型
function funcType(name: string, age: number): number {
    console.log(`name: ${name} age: ${age}`)
    return age;
}

funcType('Jinwei', 18);

// TS 02-6 函數參數不確定該怎麼辦?  //
function getValue(value: string): string;
function getValue(value: number): number;
function getValue(value: string | number): string | number {
    return value
}
let vFunc: number = getValue(1);


// TS 02-7 斷言類型  //both can work
const getAssert = (value: string | number): number => {
    return (<string>value).length
    return (value as string).length
}


// TS 02-8 類型別名  type
interface Iobj1 {
    name: string;
}

interface Iobj2 {
    age: number
}

type TpObj = Iobj1 | Iobj2;

let obj1: Iobj1 = { name: 'jw' };
let obj2: Iobj2 = { age: 18 };
let obj3: TpObj = { name: 'fm', age: 25, }


type TpGender = "男" | "女";  // 限制性別為男女
const getGender = (gender: TpGender): string => {
    return gender
}

getGender("男")
// getGender("other")




console.log(tp, person, arr1, arr, arr2, animalOne, randomArr)
console.log(getAssert);
console.log(obj1, obj2, obj3);
console.log(vFunc);
export { }