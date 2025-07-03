requirements:
npm
hardhat
ganache

1. unzip
2. npm install --force
3. replace mnemonic from ganache in hardhat.config.js
4. npx hardhat run scripts/deploy.js --network ganache
5. assign HealthRecord address to bbhrs/lib/eth.js contractAddress variable
6. assign privateKey in bbhrs/lib/eth.js from any address' private key in ganache
7  cd bbhrs 
8. npm install
9. npm run dev
