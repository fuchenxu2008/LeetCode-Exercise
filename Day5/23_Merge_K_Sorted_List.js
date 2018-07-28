/**
 * const ListNode = val => {
 *  this.val = val;
 *  this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = lists => {
    let merged = [];
    const concatNext = (arr, list) => {
        const concated = arr.concat(list.val);
        if (list.next) return concatNext(concated, list.next);
        return concated;
    }
    lists.forEach(list => {
        if (list) merged = concatNext(merged, list)
    })
    return merged.sort((a, b) => a - b)
};

console.log(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]]));