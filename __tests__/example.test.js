let sum = (x, y) => x + y

describe('Basic test examples', () => {
  it('should add two numbers together', () => {
      expect(sum(1, 2)).toEqual(3)
  })
})
