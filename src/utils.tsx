function assert(check: boolean, message: string) {
    if (!check){
        throw new Error(message);
    }
}

export function randomSample<T extends any>(elems: T[], weights: number[] = [], k: number = 1) : T[] {
    assert(elems.length > 0, "elems must not be empty");
    if (weights.length === 0){
        weights = elems.map(e => 1)
    }
    assert(weights.length === elems.length, "Length of weights must be equal to number of elements");
    const x = Math.random();
    return elems.slice(0, k);
}