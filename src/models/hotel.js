class Hotel {
  constructor(name, rating, taxes) {
    this.name = name
    this.rating = rating
    this.taxes = taxes
  }

  informTaxFor(program, date) {
    const isWeekend = [0, 6].includes(date.getDay())
    return this.taxes[isWeekend ? 'weekend' : 'day_of_week'][program]
  }

  calculatePriceFor(program, dates) {
    return dates.reduce((price, date) => price + this.informTaxFor(program, date), 0)
  }
}

export default Hotel
