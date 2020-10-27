import chalk from 'chalk'
import Booking from './models/booking'
import * as searchEngine from './searchEngine'

export default input => {
  try {
    const booking = Booking.parseBookingFrom(input)
    const { name } = searchEngine.findDealByLowPriceAndHighRatingFrom(booking)
    console.log(`🏨 O melhor hotel é: ${chalk.green(name)}`)
  } catch(e) {
    console.log(`🚨 ${chalk.red('Ops, digitou uma entrada inválida')}`)
  }
}
