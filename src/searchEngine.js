import hotels from './api'
import Deal from './models/deal'

export const findDealByLowPriceAndHighRatingFrom = ({ program, dates }) => {
  let low = new Deal(null, -1, Number.POSITIVE_INFINITY)
  hotels.forEach(hotel => {
    const price = hotel.calculatePriceFor(program, dates)
    const current = new Deal(hotel.name, hotel.rating, price)
    current.isBetterOptionThen(low) && (low = current)
  })
  return low
}
