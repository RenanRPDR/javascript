const alg1 = [];
const alg2 = [];
const alg3 = [];
const alg4 = [];

const receiveFirstInput = () => {
  process.stdout.write('Seja bem vindo viajante!\n Insira o primeiro algarismo: \n')

  process.stdin.on('data', data => {
    const input1 = data.toString().replace('\n', '')
    alg1.push(input1)

    console.log(`Esse e o algarismo ${alg1}\n`)
  
    process.exit()
    }
  )
}

const receiveSecondInput = () => {
  process.stdout.write('Insira o segundo algarismo\n')

  process.stdin.on('data', data => {
    const input2 = data.toString().replace('\n', '')
    alg1.push(input2)

    console.log(`Esse e o algarismo ${alg2}\n`)

    process.exit()
    }
  )
}

 // process.stdin.on('data', data => {
  //   const input2 = data.toString().replace('\n', '')
  //   alg1.push(input2)

  //   console.log(`Esse e o algarismo ${alg2}`)
  
  //   process.exit()
  // })

  // process.stdout.write('Insira o segundo algarismo'),
  // process.stdin.on('data', data => {
  //   const input2 = data.toString().replace('\n', '')
  //   alg2.push(input2)
  //   }),
  
  // process.stdout.write('Seja bem vindo viajante, insira seu primeiro algarismo'),
  // process.stdin.on('data', data => {
  //   const input3 = data.toString().replace('\n', '')
  //   alg3.push(input3)
  //   }),
    
  // process.stdout.write('Seja bem vindo viajante, insira seu primeiro algarismo'),
  // process.stdin.on('data', data => {
  //   const input4 = data.toString().replace('\n', '')
  //   alg4.push(input4)
  //   }),
  
  

receiveFirstInput()
//receiveSecondInput()
// receiveThirdInput()
// receiveFourthInput()
