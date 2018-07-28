/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = grid => {
    const islands = [];
    grid.forEach((row, ri) => {
        if (ri > 0) {
            row.forEach((ele, ci) => {
                if (ele === '1') {
                    islands.forEach(exsitIsland => {
                        exsitIsland.forEach(land => {
                            if (land[0] === ri - 1 && land[1] === ci) {
                                exsitIsland.push([ri, ci]);
                                // console.log(exsitIsland, '+', [ri, ci]);
                            }
                        });
                    });
                }
            })
        }

        row.forEach((ele, ci) => {
            if (ele === '1') {
                const newLand = [ri, ci];
                let newIsland = true;
                
                if (newIsland) {
                    // Find if is part of previous island
                    islands.forEach(island => {
                        // island => [ [r, i], [r, i], [r, i] ]
                        let i = 0;
                        while (newIsland && i < island.length) {
                            if (isAdjacent(island[i], newLand)) {
                                island.push(newLand);
                                newIsland = false;
                            }
                            i++;
                        }
                    });
                }
                if (newIsland) {
                    islands.push([newLand]);
                }
            }
        });
    });
    console.log(islands);
    return islands.length;
};

const isAdjacent = (coordA, coordB) => { // coord => [row, col]
    return (coordA[0] === coordB[0] && Math.abs(coordB[1] - coordA[1]) === 1) // Same row, adjacent cols
        || (coordA[1] === coordB[1] && Math.abs(coordB[0] - coordA[0]) === 1); // Same col, adjacent rows
}

console.log(numIslands([
    ["1", "0", "1", "1", "1"],
    ["1", "0", "1", "0", "1"],
    ["1", "1", "1", "0", "1"]
]));