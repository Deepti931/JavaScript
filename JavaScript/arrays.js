//Array->is a collection of elements

let cars=['BMW','AUDI','MG',1,2,3,true];
//in JS you can store different values of different types in an array
console.log(cars);

//accesing the elements of an array
console.log(cars[0]);
console.log(cars[3]);

//replacing elements in array
cars[3]="Mahindra";
console.log(cars[3]);

//adding elements in an array
cars[7]="Honda";
console.log(cars);

//Methods of an array

//1)pop method -> this method removes the element fromthe last array

cars.pop();
console.log("affter popping the elements:\n" +cars);

//2)push method -> it pushes a new element at the end of array
cars.push("TATA");
console.log("after pushing an element");
console.log(cars);