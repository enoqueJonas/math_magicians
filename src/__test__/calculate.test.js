import calculate from "../logic/calculate";

describe('Calculate test', ()=> {
    it('Empty calculatiom', ()=> {
        const obj = {
            total: null,
            next: null,
            operation: null,
        }
        const result = calculate(obj, '0');
        expect(result).toEqual({next: '0', total: null});
    })
    it('Add operation', ()=> {
        const obj = {
            total: null,
            next: 2,
            operation: null,
        }
        const result = calculate(obj, '+');
        expect(result).toEqual({next: null, total: 2, operation: '+'});
    })
    it('Update next', () => {
        const obj = {
            total: null,
            next: 2,
            operation: null,
        }
        const result = calculate(obj, '4');
        expect(result).toEqual({next: '24', total: null});
    })
})