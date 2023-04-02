require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    sepolia: {
      url:'https://eth-sepolia.g.alchemy.com/v2/pFBW8ZY1Rq2kUGqylP_Fsf1DZGNVEP6v',
      accounts: [ 'fd4f4883b1650fb077fd48da7a9d6924d8b854648c4c1bc6c5117e20ada57a12' ] 
    }
  }
}