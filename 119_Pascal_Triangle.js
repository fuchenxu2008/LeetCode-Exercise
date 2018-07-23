let nodeMap = [];

const getRow = rowIndex => {
    nodeMap = [];
    for (let i = 0; i < rowIndex; i++) {
        nodeMap.push([]);
    }
    const row = [];
    for (let i = 0; i <= rowIndex / 2; i++) {
        row.push(getNode(rowIndex, i))
    }
    rowIndex % 2 === 0
        ? row.push(...row.slice(0, -1).reverse())
        : row.push(...row.slice().reverse());
    return row;
};

const getNode = (rowIndex, colIndex) => {
    if (rowIndex >= 2 && colIndex > 0 && colIndex < rowIndex) {
        let upperLeft = nodeMap[rowIndex - 1][colIndex - 1] || getNode(rowIndex - 1, colIndex - 1);
        let upperRight = nodeMap[rowIndex - 1][colIndex] || getNode(rowIndex - 1, colIndex);
        nodeMap[rowIndex - 1][colIndex - 1] = upperLeft;
        nodeMap[rowIndex - 1][colIndex] = upperRight;
        return upperLeft + upperRight;
    }
    return 1;
}

console.log(getRow(3));
console.log(getRow(4));