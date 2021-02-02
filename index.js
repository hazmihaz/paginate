module.exports = (current, total, delta = 1, separator = '...') => {
    if (total <= 1) return [1]

    const center = [current]
    for (let i = 1; i <= delta; i++) {
        center.push(current + i)
        center.unshift(current - i)
    }
    if (delta === 1 && current === 1) {
        center.push(3)
    }
    if (delta === 1 && current === total) {
        center.unshift(total - 2)
    }

    const filteredCenter = center.filter((p) => p > 1 && p < total),
        includeLeft = current === delta + 2 + 1,
        includeRight = current === total - delta - 2,
        includeLeftDots = current > delta + 2 + 1,
        includeRightDots = current < total - delta - 2

    if (includeLeft) filteredCenter.unshift(2)
    if (includeRight) filteredCenter.push(total - 1)

    if (includeLeftDots) filteredCenter.unshift(separator)
    if (includeRightDots) filteredCenter.push(separator)

    return [1, ...filteredCenter, total]
}
