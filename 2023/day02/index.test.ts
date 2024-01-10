import { manufacture } from '.';
describe('Challenge #2: 🏭 We start the factory', () => {    
        it('Should return ["tren", "oso"]', () => {
            const gifts = ['tren', 'oso', 'pelota'];
            const materials = 'tronesa';
            expect(manufacture(gifts, materials)).toEqual(["tren", "oso"])
        })
        it('Should return ["puzzle"]', () => {
            const gifts = ['juego', 'puzzle'];
            const materials = 'jlepuz';
            expect(manufacture(gifts, materials)).toEqual(["puzzle"])
        })
        it('Should return []', () => {
            const gifts = ['libro', 'ps5'];
            const materials = 'psli';
            expect(manufacture(gifts, materials)).toEqual([])
        })
        // const testCases = [
        //     createTestCase([['tren', 'oso', 'pelota'], ['tronesa']], ['tren', 'oso'], 'Should return ["tren", "oso"]'),
        //     createTestCase([['juego', 'puzzle'], ['jlepuz']], ["puzzle"], 'Should return ["puzzle"]'),
        //     createTestCase([['libro', 'ps5'], ['psli']], [], 'Should return []')
        // ]

        // it.each(testCases)('#$# $description', ({ args, expected }: { args: [any[]], expected: number }) => {            
        //     expect(manufacture(...args, args[0][1])).toEqual(expected);
        // });    
});