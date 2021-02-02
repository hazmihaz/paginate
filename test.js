const paginate = require('.')
const assert = require('assert')
const { performance } = require('perf_hooks')
const forEach = require('mocha-each')
const chai = require('chai')
const expect = chai.expect

describe('Pagination algorithm', () => {
    forEach([
        [1, 20, [1, 2, 3, '...', 20]],
        [2, 20, [1, 2, 3, '...', 20]],
        [3, 20, [1, 2, 3, 4, '...', 20]],
        [4, 20, [1, 2, 3, 4, 5, '...', 20]],
        [5, 20, [1, '...', 4, 5, 6, '...', 20]],
        [6, 20, [1, '...', 5, 6, 7, '...', 20]],
        [7, 20, [1, '...', 6, 7, 8, '...', 20]],
        [8, 20, [1, '...', 7, 8, 9, '...', 20]],
        [9, 20, [1, '...', 8, 9, 10, '...', 20]],
        [10, 20, [1, '...', 9, 10, 11, '...', 20]],
        [11, 20, [1, '...', 10, 11, 12, '...', 20]],
        [12, 20, [1, '...', 11, 12, 13, '...', 20]],
        [13, 20, [1, '...', 12, 13, 14, '...', 20]],
        [14, 20, [1, '...', 13, 14, 15, '...', 20]],
        [15, 20, [1, '...', 14, 15, 16, '...', 20]],
        [16, 20, [1, '...', 15, 16, 17, '...', 20]],
        [17, 20, [1, '...', 16, 17, 18, 19, 20]],
        [18, 20, [1, '...', 17, 18, 19, 20]],
        [19, 20, [1, '...', 18, 19, 20]],
        [20, 20, [1, '...', 18, 19, 20]],
    ]).it(
        'should paginate current page %d of total %d pages',
        (current, total, expected) => {
            const value = paginate(current, total)
            assert.deepStrictEqual(value, expected)
        }
    )
})

describe('Pagination algorithm - small total pages', () => {
    forEach([
        [1, 1, [1]],
        [1, 2, [1, 2]],
        [2, 2, [1, 2]],
        [1, 3, [1, 2, 3]],
        [2, 3, [1, 2, 3]],
        [3, 3, [1, 2, 3]],
    ]).it(
        'should paginate current page %d of total %d pages',
        (current, total, expected) => {
            const value = paginate(current, total)
            assert.deepStrictEqual(value, expected)
        }
    )
})

describe('Pagination algorithm - custom delta', () => {
    forEach([
        [1, 20, 2, [1, 2, 3, '...', 20]],
        [2, 20, 2, [1, 2, 3, 4, '...', 20]],
        [3, 20, 2, [1, 2, 3, 4, 5, '...', 20]],
        [4, 20, 2, [1, 2, 3, 4, 5, 6, '...', 20]],
        [5, 20, 2, [1, 2, 3, 4, 5, 6, 7, '...', 20]],
        [6, 20, 2, [1, '...', 4, 5, 6, 7, 8, '...', 20]],
        [7, 20, 2, [1, '...', 5, 6, 7, 8, 9, '...', 20]],
        [8, 20, 2, [1, '...', 6, 7, 8, 9, 10, '...', 20]],
        [9, 20, 2, [1, '...', 7, 8, 9, 10, 11, '...', 20]],
        [10, 20, 2, [1, '...', 8, 9, 10, 11, 12, '...', 20]],
        [11, 20, 2, [1, '...', 9, 10, 11, 12, 13, '...', 20]],
        [12, 20, 2, [1, '...', 10, 11, 12, 13, 14, '...', 20]],
        [13, 20, 2, [1, '...', 11, 12, 13, 14, 15, '...', 20]],
        [14, 20, 2, [1, '...', 12, 13, 14, 15, 16, '...', 20]],
        [15, 20, 2, [1, '...', 13, 14, 15, 16, 17, '...', 20]],
        [16, 20, 2, [1, '...', 14, 15, 16, 17, 18, 19, 20]],
        [17, 20, 2, [1, '...', 15, 16, 17, 18, 19, 20]],
        [18, 20, 2, [1, '...', 16, 17, 18, 19, 20]],
        [19, 20, 2, [1, '...', 17, 18, 19, 20]],
        [20, 20, 2, [1, '...', 18, 19, 20]],
        [5, 20, 3, [1, 2, 3, 4, 5, 6, 7, 8, '...', 20]],
        [15, 20, 3, [1, '...', 12, 13, 14, 15, 16, 17, 18, 19, 20]],
        [16, 20, 3, [1, '...', 13, 14, 15, 16, 17, 18, 19, 20]],
    ]).it(
        'should paginate current page %d of total %d pages with delta %d',
        (current, total, delta, expected) => {
            const value = paginate(current, total, delta)
            assert.deepStrictEqual(value, expected)
        }
    )
})

describe('Pagination custom separator', () => {
    forEach([
        [1, 20, 2, '_', [1, 2, 3, '_', 20]],
        [14, 20, 2, '👀', [1, '👀', 12, 13, 14, 15, 16, '👀', 20]],
        [16, 20, 3, '-', [1, '-', 13, 14, 15, 16, 17, 18, 19, 20]],
    ]).it(
        'should paginate current page %d of total %d pages with delta %d and separator %s',
        (current, total, delta, separator, expected) => {
            const value = paginate(current, total, delta, separator)
            assert.deepStrictEqual(value, expected)
        }
    )
})

describe('Pagination performance', () => {
    it('should maintains performance', () => {
        const t0 = performance.now()
        paginate(1, Number.MAX_SAFE_INTEGER)
        const t1 = performance.now()

        expect(t1 - t0).to.be.below(1)
    })
})
