import hotels from '../src/api'
import Booking from '../src/models/booking'
import { findDealByLowPriceAndHighRatingFrom } from '../src/searchEngine'

describe('searchEngine', function () {
  const booking = new Booking(
    'regular',
    [new Date('16Mar2020(mon)'), new Date('28Mar2020(sat)')]
  )

  it('should calcule the total price and choose better option for each hotel', () => {
    const deal = findDealByLowPriceAndHighRatingFrom(booking)
    expect(deal.name).toBe(hotels[0].name)
  })
})
