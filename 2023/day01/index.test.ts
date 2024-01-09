import { findFirstRepeated } from ".";
import { createTestCase } from '../../utils/test.util'
describe('Challenge #1: 🎁 First gift repeated!', () => {
    describe('Searching', () => {
        const testCases = [
            createTestCase([[2, 1, 3, 5, 3, 2]], 3, 'Should return 3'),
            createTestCase([[1, 2, 3, 4]], -1, 'Should return -1'),
            createTestCase([[5, 1, 5, 1]], 5, 'Should return 5')
        ]

        it.each(testCases)('#$# $description', ({ args, expected }: { args: [any[]], expected: number }) => {                                    
            expect(findFirstRepeated(...args)).toEqual(expected);
        });
    });
});