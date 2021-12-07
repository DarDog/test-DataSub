import AClass from './AClass';

export default class Class1 extends AClass {
    constructor(n) {
        super(n);
    }

    // Пузырьковая сортировка O(n^2)
    sort(): number[] {
        let sortArray = this.numbers
        for (let i = 0, endI = sortArray.length - 1; i < endI; i++) {
            let wasSwap: boolean = false;

            for (let j: number = 0, endJ: number = endI - i; j < endJ; j++) {
                if (sortArray[j] > sortArray[j + 1]) {
                    [sortArray[j], sortArray[j + 1]] = [sortArray[j + 1], sortArray[j]]

                    wasSwap = true
                }
            }

            if (!wasSwap) break
        }
        return sortArray
    }
}
