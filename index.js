module.exports = (current, total) => {
    if (total <= 1) return [1]

    const center = [
            current - 2,
            current - 1,
            current,
            current + 1,
            current + 2,
        ],
        filteredCenter = center.filter((p) => p > 1 && p < total),
        includeThreeLeft = current === 5,
        includeThreeRight = current === total - 4,
        includeLeftDots = current > 5,
        includeRightDots = current < total - 4

    if (includeThreeLeft) filteredCenter.unshift(2)
    if (includeThreeRight) filteredCenter.push(total - 1)

    if (includeLeftDots) filteredCenter.unshift('...')
    if (includeRightDots) filteredCenter.push('...')

    return [1, ...filteredCenter, total]
}
