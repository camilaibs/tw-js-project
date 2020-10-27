import readline from 'readline'
import controller from './controller'

const view = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

view.question("Digite a entrada e pressione ENTER:\n", answer => {
    controller(answer)
    view.close()
})
