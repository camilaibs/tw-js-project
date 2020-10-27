class Deal {
  constructor(name, rating, price) {
    this.name = name
    this.rating = rating
    this.price = price
  }

  #hasLowerPriceThen(deal) {
    return this.price < deal.price
  }

  #hasEqualsPriceThen(deal) {
    return this.price === deal.price
  }

  #hasHigherRatingThen(deal) {
    return this.rating > deal.rating
  }

  isBetterOptionThen(deal) {
    const hasLowerPrice = this.#hasLowerPriceThen(deal)
    const hasEqualsPrice = this.#hasEqualsPriceThen(deal)
    const hasHigherRating = this.#hasHigherRatingThen(deal)
    return hasLowerPrice || (hasEqualsPrice && hasHigherRating)
  }
}

export default Deal
