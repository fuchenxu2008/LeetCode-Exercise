const reverseBits = n => {
    const binary = n.toString(2).split('');
    for (let i = 32 - binary.length; i > 0; i--) {
        binary.unshift('0');
    }
    return parseInt(binary.reverse().join(''), 2);
};

reverseBits(43261596);