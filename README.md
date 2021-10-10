[youtube](https://www.youtube.com/watch?v=GKJBEEXUha0&t=551s)
[github](https://github.com/dabit3/polygon-ethereum-nextjs-marketplace/)

- Solidity Development Enviroment
    - ethers
    - hardhat
    - @nomiclabs/hardhat-waffle
    - @nomiclabs/hardhat-ethers
    - ethereum-waffle
- Chai: for testing
- Web3modal: allows user to select wallet eg. metemask
- @openzepplin/contracts: we are going to be inheriting from the ERC720 contract that will referance so we don't have to write it ourselves
- ipfs-http-client: to interact with ipfs
- axios: cross origin requests
- tailwind: for css styling

[Polygon Developer Docs](https://polygon.technology/get-started/)
Mainnet and Testnet [Polygon Network](https://docs.polygon.technology/docs/develop/network-details/network)
Remote Procedure Call (similar to http)[RPC endpoint](https://en.wikipedia.org/wiki/Remote_procedure_call)
Why you might use your own RPC? Public RPCs may have traffic or rate-limits depending on usage. AKA if they are too busy they might not work. So you can sign up for a dedicated free RPC url: We are going to be using:
[Infura](https://infura.io/)
Enpoints: 
- Polygon Mumbai 
    - `https://polygon-mumbai.infura.io/v3/efbbff4625e549788b0b7886dab4e77f`

