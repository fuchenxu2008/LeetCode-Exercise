/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// const setZeroes = matrix => {
//     const map = [];
//     matrix.forEach((row, i) => {
//         row.forEach((n, k) => {
//             if (n === 0) map.push([i, k]);
//         });
//     });
//     map.forEach(pair => {
//         matrix[pair[0]].fill(0);
//         matrix.forEach(row => {
//             row[pair[1]] = 0;
//         });
//     });
// };

const setZeroes = matrix => {
    const colSet = [];
    matrix.forEach((row, row_index) => {
        let clearRow = false;
        row.forEach((col, col_index) => {
            if (col === 0) {
                colSet.push(col_index);
                clearRow = true;
                for (let i = row_index; i >= 0; i--) {
                    matrix[i][col_index] = 0;
                }
            }
            if (colSet.includes(col_index)) row[col_index] = 0;
        });
        if (clearRow) row.fill(0);
        clearRow = false;
    });
    console.log(matrix);
};

setZeroes([
    [2, 1, 2, 5],
    [3, 0, 5, 2],
    [1, 3, 0, 5]
]);