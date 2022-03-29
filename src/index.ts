import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { StringCollection } from "./StringCollection";
import { LinkedList } from "./LinkedList";

// const numberC = new NumbersCollection([1, 2, -20, -100, 34, 69]);

// numberC.sort();
// console.log(numberC);

// const characters = new StringCollection("Xaaytl");
// characters.sort();
// console.log(characters);

const linkL = new LinkedList();
linkL.add(500);
linkL.add(-100);
linkL.add(-2);
linkL.add(430);

linkL.sort();
linkL.print();
