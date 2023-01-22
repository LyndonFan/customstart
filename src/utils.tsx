function assert(check: boolean, message: string) {
    if (!check){
        throw new Error(message);
    }
}

function sampleDiscrete(weights: number[]) : number {
    const weightTotal = weights.reduce((s,c) => s+c, 0)
    const cumSum: number[] = []
    var rolling: number = 0
    for (const w of weights){
        rolling += w
        cumSum.push(rolling)
    }
    const x = Math.random() * weightTotal
    var idx: number = 0;
    for (idx=0; idx<weights.length && x>=cumSum[idx]; idx++){
        continue
    }
    return idx
}

export function randomSample<T extends any>(
    elems: T[], weights: number[] = [], k: number = 1, repeat: boolean = false
) : T[] {
    assert(elems.length > 0, "elems must not be empty");
    if (weights.length === 0){
        weights = elems.map(e => 1)
    }
    assert(
        weights.length === elems.length,
        "Length of weights must be equal to number of elements"
    );
    assert(
        !repeat || (elems.length >= k),
        "If no repeat, must have number of elements must be at least k"
    );
    if (!repeat && (elems.length === k)){
        return elems
    }
    const idxs: number[] = []
    var i: number;
    while (idxs.length < k){
        i = sampleDiscrete(weights)
        if (repeat || !idxs.includes(i)){
            idxs.push(i)
        }
    }
    return idxs.map(i => elems[i]);
}