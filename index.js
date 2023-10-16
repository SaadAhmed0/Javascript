// const Moralis = require("moralis").default;
// const { EvmChain } = require("@moralisweb3/common-evm-utils");

// const runApp = async () => {
//   await Moralis.start({
//     apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjIzMDBiNThjLWU1NzItNGRkYi1hODMyLWY2NmIyYTNlYjg4ZSIsIm9yZ0lkIjoiMzI5ODA0IiwidXNlcklkIjoiMzM5MTA0IiwidHlwZUlkIjoiM2VhZjU1YTItMjZmNC00NTI2LTkwMzktMDk0OWRkYmM0Yjg3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODU2NDI0NTMsImV4cCI6NDg0MTQwMjQ1M30.c-MFVMBXnLc0-6gSt1sJcKAqE6PpJ-NuA23jKkq_qok",
 
//   });

//   const address = "0x495f947276749ce646f68ac8c248420045cb7b5e";

//   const chain = EvmChain.ETHEREUM;

//   const tokenId = "53507387363581248991866153876704887160324779003304019921322741833650485067876";

//   const response = await Moralis.EvmApi.nft.getNFTMetadata({
//     address,
//     chain,
//     tokenId,
//   });

//   console.log(response.toJSON());
// };

// runApp();



const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjIzMDBiNThjLWU1NzItNGRkYi1hODMyLWY2NmIyYTNlYjg4ZSIsIm9yZ0lkIjoiMzI5ODA0IiwidXNlcklkIjoiMzM5MTA0IiwidHlwZUlkIjoiM2VhZjU1YTItMjZmNC00NTI2LTkwMzktMDk0OWRkYmM0Yjg3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODU2NDI0NTMsImV4cCI6NDg0MTQwMjQ1M30.c-MFVMBXnLc0-6gSt1sJcKAqE6PpJ-NuA23jKkq_qok",
  });

  const address = "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad";

  const chain = EvmChain.ETHEREUM;

  const marketplace = "opensea";

  const response = await Moralis.EvmApi.nft.getNFTTrades({
    address,
    chain,
    marketplace,
  });

  console.log(response.toJSON());
  console.log(response.toJSON())
};

runApp();