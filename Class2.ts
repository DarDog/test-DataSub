import AClass from "./AClass";

export default class Class2 extends AClass {
    constructor(props) {
        super(props);
    }

    //Использование метода массива sort() ~O(n log n)
    sort(): number[] {
        let sortArray = this.numbers

        return sortArray.sort((a, b) => a - b)
    }
}
