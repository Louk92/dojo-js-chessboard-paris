const chessboard = () => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const num = [1, 2, 3, 4, 5, 6, 7, 8]
    const array2 = []
    for (let i = 0; i < alphabet.length; i++) {
        const array = []
        for (j = 0; j < num.length; j++) {
            array.push(`${alphabet[i]} - ${num[j]}`)
        }
        array2[i] = array
    }
    return array2
}
module.exports = chessboard 
