import hotels from '../src/api'
import { parseBookingRequesInput, selectTaxByDayAndPlan, calculatePrice, isCurrentOptionBetter, searchHotelWithLowPriceAndHighRating } from '../src/index'

describe('A failing test', function () {
  const input = 'Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)'
  const dateOfWeek = new Date('16Mar2020(mon)')
  const weekend = new Date('28Mar2020(sat)')
  const regularCustomer = 'regular'
  const loyaltyCustomer = 'fidelidade'
  const dates = [dateOfWeek, weekend]
  const hotel = hotels[0]

  describe('parseBookingRequestData', () => {
    it('should return a customer text', function () {
      const { customer } = parseBookingRequesInput(input)
      expect(customer).toBe(regularCustomer);
    })
  
    it('should return a list of dates', function () {
      const { dates } = parseBookingRequesInput(input)
      expect(dates).toEqual(dates);
    })
  })
  
  describe('selectTaxByDayAndPlan', () => {
    it('should return day of weekend', () => {
      expect(selectTaxByDayAndPlan(hotel, regularCustomer, weekend)).toBe(90)
    })
  
    it('should return day of not weekend', () => {
      expect(selectTaxByDayAndPlan(hotel, loyaltyCustomer, dateOfWeek)).toBe(80)
    })
  })

  describe('calculatePrice', () => {
    it('should return the correct total price for regular customer', () => {
      expect(calculatePrice(hotel, regularCustomer, dates)).toBe(200)
    })

    it('should return the correct total price for fidelidade customer', () => {
      expect(calculatePrice(hotel, loyaltyCustomer, dates)).toBe(160)
    })
  })

  describe('isCurrentOptionBetter', () => {
    it('should return true when current price is lower', () => {
      expect(isCurrentOptionBetter(2, {}, 1, {})).toBeTruthy()
    })

    it('should return true when current price is equal and rating is higher', () => {
      expect(isCurrentOptionBetter(1, { rating: 1 }, 1, { rating: 2})).toBeTruthy()
    })

    it('should return false when current price is higher', () => {
      expect(isCurrentOptionBetter(1, {}, 2, {})).toBeFalsy()
    })

    it('should return false when current price is equal and rating is lower', () => {
      expect(isCurrentOptionBetter(1, { rating: 2 }, 1, { rating: 1})).toBeFalsy()
    })
  })

  describe('searchHotelWithLowPriceAndHighRating', () => {
    it('should calcule the total price and choose better option for each hotel', () => {
      const hotel = searchHotelWithLowPriceAndHighRating(regularCustomer, dates)
      expect(hotel).toEqual(hotels[0])
    })
  })
})
