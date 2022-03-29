import { Sorter } from "./Sorter";

export class StringCollection extends Sorter {
	constructor(public data: string) {
		super();
	}

	get length(): number {
		return this.data.length;
	}

	compare(i: number, j: number): boolean {
		return this.data[i].toLowerCase() > this.data[j].toLowerCase();
	}

	swap(i: number, j: number): void {
		const sliced = this.data.split("");
		const temp = sliced[i];
		sliced[i] = sliced[j];
		sliced[j] = temp;

		this.data = sliced.join("");
	}
}
