import { sayHello, calculatePrice } from "./calc";


describe("Test calc", () => {

    test("Example unit test", () => {
        expect(true).toBe(true);
    });

    it("say hello", () => {
        expect(sayHello()).toBe("Hello World");
    })


    it('works for one item order', () => {

        const order = {"prices":[15.99],"quantities":[1],"country":"ES","reduction":"STANDARD"};

        const price = calculatePrice(order);
        const expected = { total : 19.03};
        expect(price).toBe(expected);
    })
    // it('works for one item order', () => {
    //
    //     const order = {"prices":[4.1,8.03,86.83,65.62,44.82],"quantities":[10,3,5,4,5],"country":"AT","reduction":"STANDARD"};
    //
    //     const price = calculatePrice(order);
    //     const expected = {"total":1166.62};
    //     expect(price).toBe(expected);
    // })
})
