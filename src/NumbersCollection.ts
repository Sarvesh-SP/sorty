import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
		super();
	}

	get length(): number {
		return this.data.length;
	}

	swap(i: number, j: number): void {
		let temp = this.data[j];
		this.data[j] = this.data[i];
		this.data[i] = temp;
	}

	compare(i: number, j: number): boolean {
		return this.data[i] > this.data[j];
	}
}
