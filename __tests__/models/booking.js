import Booking from '../../src/models/booking'

describe('app', function () {
  const input = 'Regular: 16Mar2020(mon), 18Mar2020(wed)'

  describe('parseBookingFrom', () => {
    it('should return a customer text', function () {
      const booking = Booking.parseBookingFrom(input)
      expect(booking.program).toBe('regular');
    })
  
    it('should return a list of dates', function () {
      const booking = Booking.parseBookingFrom(input)
      expect(booking.dates).toEqual([new Date('16Mar2020(mon)'), new Date('18Mar2020(wed)')]);
    })
  })
})
