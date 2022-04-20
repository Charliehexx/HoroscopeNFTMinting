/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('dotenv').config(); //all the key value pairs are being made available due to this lib
 require('@nomiclabs/hardhat-ethers');
  
 const {API_URL_KEY, PRIVATE_KEY} = process.env; //environment variables are being loaded here.
  
 module.exports = {
   solidity: "0.8.1",
   defaultNetwork: 'rinkeby',
   networks: {
     hardhat: {},
     rinkeby: {
         url: "https://eth-rinkeby.alchemyapi.io/v2/eV4YBovwVTdttKT1ncIihSFdwR0unqun",
         accounts: [`fc10f3ea25109091b908ca8b7f5ebc9668f44f06731be0f53d7be840231d8872`]
     }
   }
 }