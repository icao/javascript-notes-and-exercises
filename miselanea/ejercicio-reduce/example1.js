const objeto = {
    '0': { clientId: 1, bankId: 3, balance: 18000 },
    '1': { clientId: 5, bankId: 3, balance: 135000 },
    '2': { clientId: 3, bankId: 3, balance: 45900 },
    '3': { clientId: 2, bankId: 3, balance: 19000 },
    '4': { clientId: 4, bankId: 3, balance: 51000 },
    '5': { clientId: 5, bankId: 3, balance: 37500 },
    '6': { clientId: 2, bankId: 3, balance: 10000 },
    '7': { clientId: 4, bankId: 3, balance: 13500 },
    '8': { clientId: 1, bankId: 3, balance: 1000 }
}
  

let valores = Object.entries(objeto).map(([key, value]) => value['balance'])
let balanceBank = valores.reduce((total, value) => total + value)
console.log(balanceBank)


const balance = [{
    '0': { clientId: 6, bankId: 1, balance: 15000 },
    '1': { clientId: 3, bankId: 1, balance: 23000 },
    '2': { clientId: 5, bankId: 1, balance: 89000 },
    '3': { clientId: 6, bankId: 1, balance: 19200 },
    '4': { clientId: 3, bankId: 1, balance: 9000 },
    '5': { clientId: 2, bankId: 1, balance: 38200 },
    '6': { clientId: 6, bankId: 1, balance: 16200 }
  },
  {
    '0': { clientId: 2, bankId: 2, balance: 5600 },
    '1': { clientId: 5, bankId: 2, balance: 15000 },
    '2': { clientId: 1, bankId: 2, balance: 1600 },
    '3': { clientId: 3, bankId: 2, balance: 5400 },
    '4': { clientId: 5, bankId: 2, balance: 17000 },
    '5': { clientId: 5, bankId: 2, balance: 600 },
    '6': { clientId: 2, bankId: 2, balance: 10000 }
  },
  {
    '0': { clientId: 1, bankId: 3, balance: 18000 },
    '1': { clientId: 5, bankId: 3, balance: 135000 },
    '2': { clientId: 3, bankId: 3, balance: 45900 },
    '3': { clientId: 2, bankId: 3, balance: 19000 },
    '4': { clientId: 4, bankId: 3, balance: 51000 },
    '5': { clientId: 5, bankId: 3, balance: 37500 },
    '6': { clientId: 2, bankId: 3, balance: 10000 },
    '7': { clientId: 4, bankId: 3, balance: 13500 },
    '8': { clientId: 1, bankId: 3, balance: 1000 }
  }
]

let total = balance.map(bank => {
  let balanceBank = Object.entries(bank).map(([key, value]) => value['balance'])
  let totalBalanceBank = balanceBank.reduce((total, value) => total + value)

  return totalBalanceBank
})

console.log(total)





