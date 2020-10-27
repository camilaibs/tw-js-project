class Booking {
  constructor(program, dates) {
    this.program = program
    this.dates = dates
  }

  static parseBookingFrom(input) {
    const [program, rest] = input.toLowerCase().split(': ')
    const dates = rest.split(', ').map(date => new Date(date))
    return new Booking(program, dates)
  }
}

export default Booking
