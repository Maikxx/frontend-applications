export const generatePercentage = (valueArray) => {
    if (!valueArray) {
        return 0
    }

    const accumulatedValue = valueArray
        .map(obj => obj.value)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    return Number((1 / (1 + Math.exp(-1 * (-8.57219 + accumulatedValue))) * 100).toFixed(2))
}