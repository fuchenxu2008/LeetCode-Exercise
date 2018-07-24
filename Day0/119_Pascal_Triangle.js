const getRow = rowIndex => {
    const nodeMap = Array(rowIndex + 1).fill().map(_ => []);
    const row = nodeMap[rowIndex];
    for (let i = 0; i <= rowIndex / 2; i++) {
        row.push(getNode(rowIndex, i, nodeMap))
    }
    rowIndex % 2 === 0
        ? row.push(...row.slice(0, -1).reverse())
        : row.push(...row.slice().reverse());
    return row;
};

const getNode = (rowIndex, colIndex, nodeMap) => {
    if (rowIndex >= 2 && colIndex > 0 && colIndex < rowIndex) {
        const upperLeft = nodeMap[rowIndex - 1][colIndex - 1] || getNode(rowIndex - 1, colIndex - 1, nodeMap);
        const upperRight = nodeMap[rowIndex - 1][colIndex] || getNode(rowIndex - 1, colIndex, nodeMap);
        nodeMap[rowIndex - 1][colIndex - 1] = upperLeft;
        nodeMap[rowIndex - 1][colIndex] = upperRight;
        return upperLeft + upperRight;
    }
    return 1;
}

console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(30));