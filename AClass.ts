export default abstract class AClass {
    protected numbers: number[];

    constructor(n) {
        this.fill(n);
    }

    private fill(n): void {
        for (let i = 0; i < n; i++) {
            this.numbers.push(Math.floor(Math.random() * 10))
        }
    }

    private getFactorial(number): number {
        if (number === 0 || number === 1) {
            return 1;
        }

        return number * this.getFactorial(number - 1);
    }


    protected factorial(): number[] {
        return this.numbers.map(number => this.getFactorial(number))
    }

    abstract sort();
}
