import chalk from 'chalk'
import hotels from './api'

 export const parseBookingRequesInput = input => {
  const [customer, rest] = input.split(': ')
  const dates = rest.split(', ').map(date => new Date(date))
  return { customer: customer.toLowerCase(), dates }
}

export const selectTaxByDayAndPlan = ({ taxes }, customer, date) => {
  const isWeekend = [0, 6].includes(date.getDay())
  return taxes[isWeekend ? 'weekend' : 'day_of_week'][customer]
}

export const calculatePrice = (hotel, customer, dates) => {
  return dates.reduce((sum, date) => sum + selectTaxByDayAndPlan(hotel, customer, date), 0)
}

export const isCurrentOptionBetter = (lowPrice, lowHotel, currentPrice, currentHotel) => {
  const isCurrentPriceLower = currentPrice < lowPrice
  const isCurrentPriceEqual = currentPrice === lowPrice
  const isCurrentRatingHigher = currentHotel.rating > lowHotel.rating
  return isCurrentPriceLower || (isCurrentPriceEqual && isCurrentRatingHigher)
}

export const searchHotelWithLowPriceAndHighRating = (customer, dates) => {
  let lowHotel = { rating: -1 }
  let lowPrice = Number.POSITIVE_INFINITY
  hotels.forEach(currentHotel => {
    const currentPrice = calculatePrice(currentHotel, customer, dates)
    if (isCurrentOptionBetter(lowPrice, lowHotel, currentPrice, currentHotel)) {
      lowHotel = currentHotel
      lowPrice = currentPrice
    }
  })
  return lowHotel
}

const app = input => {
  const { customer, dates } = parseBookingRequesInput(input)
  const hotel = searchHotelWithLowPriceAndHighRating(customer, dates)
  console.log(chalk.green(hotel.name))
}

app('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)')
app('Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)')
app('Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)')
