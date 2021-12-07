import AClass from './AClass';

export default class Class1 extends AClass {
    constructor(n) {
        super(n);
    }

    // Пузырьковая сортировка O(n^2)
    sort(): number[] {
        for (let i = 0, endi = this.numbers.length - 1; i < endi; i++) {
            let wasSwap: boolean = false;

            for (let j: number = 0, endj: number = endi - i; j < endj; j++) {
                if (this.numbers[j] > this.numbers[j + 1]) {
                    [this.numbers[j], this.numbers[j + 1]] = [this.numbers[j + 1], this.numbers[j]]

                    wasSwap = true
                }
            }

            if (!wasSwap) break
        }
        return this.numbers
    }
}
