export const simulateScenario = (initial, rate, duration) => {
    let result = [{year: 0, value: initial}]
    let valueI = initial
    for (let i = 1; i <= duration; i++) {
        valueI = valueI + valueI*rate/100
        result.push({year: i, value: valueI})
    }

    return result
}