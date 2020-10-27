import Deal from '../../src/models/deal'

describe('Deal', () => {
  describe('isBetterOptionThen', () => {
    it('should return true when current price is lower', () => {
      const low = new Deal(null, null, 2)
      const current = new Deal(null, null, 1)
      expect(current.isBetterOptionThen(low)).toBeTruthy()
    })

    it('should return true when current price is equal and rating is higher', () => {
      const low = new Deal(null, 1, 1)
      const current = new Deal(null, 2, 1)
      expect(current.isBetterOptionThen(low)).toBeTruthy()
    })

    it('should return false when current price is higher', () => {
      const low = new Deal(null, null, 1)
      const current = new Deal(null, null, 2)
      expect(current.isBetterOptionThen(low)).toBeFalsy()
    })

    it('should return false when current price is equal and rating is lower', () => {
      const low = new Deal(null, 2, 1)
      const current = new Deal(null, 1, 1)
      expect(current.isBetterOptionThen(low)).toBeFalsy()
    })

    it('should return true when current rating is higher', () => {
      const low = new Deal(null, 1, 1)
      const current = new Deal(null, 2, 1)
      expect(current.isBetterOptionThen(low)).toBeTruthy()
    })
  })
})
