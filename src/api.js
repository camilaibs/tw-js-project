import Hotel from './models/hotel'

export default [
  new Hotel('Parque das flores', 3, {
    day_of_week: { regular: 110, fidelidade: 80},
    weekend: { regular: 90, fidelidade: 80}
  }),
  new Hotel('Jardim Botânico', 4, {
    day_of_week: { regular: 160, fidelidade: 110},
    weekend: { regular: 60, fidelidade: 50}
  }),
  new Hotel('Mar Atlântico', 5, {
    day_of_week: { regular: 220, fidelidade: 100},
    weekend: { regular: 150, fidelidade: 40}
  })
]
