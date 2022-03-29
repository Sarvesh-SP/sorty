interface Sortable {
	length: number;
	compare(i: number, j: number): boolean;
	swap(i: number, j: number): void;
}

export abstract class Sorter {
	abstract compare(leftI: number, rightI: number): boolean;
	abstract swap(leftI: number, rightI: number): void;
	abstract length: number;

	sort(): void {
		for (let i = 0; i < this.length; i++) {
			for (let j = 0; j < this.length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}
