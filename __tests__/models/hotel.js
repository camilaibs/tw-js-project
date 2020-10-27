import Hotel from '../../src/models/hotel'

describe('Hotel', () => {
  const regularProgram = 'regular'
  const loyaltyProgram = 'fidelidade'
  const dayOfWeek = new Date('16Mar2020(mon)')
  const weekend = new Date('28Mar2020(sat)')

  const hotel = new Hotel('Parque das flores', 3, {
    day_of_week: { regular: 110, fidelidade: 80},
    weekend: { regular: 90, fidelidade: 80}
  })

  describe('informTaxFor', () => {
    it('should import the correct tax for day of weeks', () => {
      expect(hotel.informTaxFor(regularProgram, weekend)).toBe(90)
    })
  
    it('should import the correct tax for weekends', () => {
      expect(hotel.informTaxFor(loyaltyProgram, dayOfWeek)).toBe(80)
    })
  })
  
  describe('calculatePriceFor', () => {
    const dates = [ dayOfWeek, weekend ]

    it('should calculate the correct price for regular program', () => {
      expect(hotel.calculatePriceFor(regularProgram, dates)).toBe(200)
    })
  
    it('should calculate the correct price for loyalty program', () => {
      expect(hotel.calculatePriceFor(loyaltyProgram, dates)).toBe(160)
    })
  })
})
