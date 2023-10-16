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

//printing all tokens with prices

const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjIzMDBiNThjLWU1NzItNGRkYi1hODMyLWY2NmIyYTNlYjg4ZSIsIm9yZ0lkIjoiMzI5ODA0IiwidXNlcklkIjoiMzM5MTA0IiwidHlwZUlkIjoiM2VhZjU1YTItMjZmNC00NTI2LTkwMzktMDk0OWRkYmM0Yjg3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODU2NDI0NTMsImV4cCI6NDg0MTQwMjQ1M30.c-MFVMBXnLc0-6gSt1sJcKAqE6PpJ-NuA23jKkq_qok",
  });

  const address = "0xedb61f74b0d09b2558f1eeb79b247c1f363ae452";

  const chain = EvmChain.ETHEREUM;

  const marketplace = "opensea";

  const response = await Moralis.EvmApi.nft.getNFTTrades({
    address,
    chain,
    marketplace,
  });


  //console.log(response.result);

  for(let item of response.result)
  {
    console.log("item",item["tokenIds"])
    console.log("item",item["price"])
  }
};

runApp();


//specific id but not printing price


// const Moralis = require("moralis").default;
// const { EvmChain } = require("@moralisweb3/common-evm-utils");

// const runApp = async () => {
//   await Moralis.start({
//     apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjIzMDBiNThjLWU1NzItNGRkYi1hODMyLWY2NmIyYTNlYjg4ZSIsIm9yZ0lkIjoiMzI5ODA0IiwidXNlcklkIjoiMzM5MTA0IiwidHlwZUlkIjoiM2VhZjU1YTItMjZmNC00NTI2LTkwMzktMDk0OWRkYmM0Yjg3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODU2NDI0NTMsImV4cCI6NDg0MTQwMjQ1M30.c-MFVMBXnLc0-6gSt1sJcKAqE6PpJ-NuA23jKkq_qok",
//   });

//   const address = "0xd29f5f02f5ffcd102faf467f2f236c601830780d";
//   const chain = EvmChain.ETHEREUM;
//   // const marketplace = "opensea";
//   const tokenId = "3470"; // Replace with the specific NFT's ID you want to fetch

//   const response = await Moralis.EvmApi.nft.getNFTMetadata({
//     address,
//     chain,
//     tokenId,
//   });

//   console.log(response.toJSON());
// };

// runApp();


//coingecko

// const axios = require('axios');

// const fetchNFTPrice = async () => {
//   const nftId = "59641612786705710868370892593615542092182706258723105893505888642745715654658"; // Replace with the specific NFT's ID you want to fetch the price for

//   try {
//     const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
//       params: {
//         vs_currency: 'usd', 
//         ids: 'Floki Mystery Pass', // Replace with the name or ID of the NFT project or collection
//       },
//     });

//     if (response.data.length > 0) {
//       const nftData = response.data[0];
//       console.log(`Current price of NFT: ${nftData.current_price} ${nftData.currency}`);
//     } else {
//       console.log("NFT not found on CoinGecko.");
//     }
//   } catch (error) {
//     console.error("Error fetching NFT price:", error);
//   }
// };

// fetchNFTPrice();


// const Moralis = require("moralis").default;
// const { EvmChain } = require("@moralisweb3/common-evm-utils");

// const runApp = async () => {
//   await Moralis.start({
//     apiKey: "YOUR_API_KEY",
//   });

//   const address = "0xc7a498816f77e1a2093435f611cca8aed769325f";

//   const chain = EvmChain.ETHEREUM;

//   const marketplace = "opensea";

//   const response = await Moralis.EvmApi.nft.getNFTTrades({
//     address,
//     chain,
//     marketplace,
//   });

//   // Check if token_ids is an array before looping
//   if (Array.isArray(response.token_ids)) {
//     for (const tokenId of response.token_ids) {
//       console.log("Token ID:", tokenId);
//     }
//   } else {
//     console.log("No token IDs found in the response.");
//   }
// };

// runApp();


// const Moralis = require("moralis").default;
// const { EvmChain } = require("@moralisweb3/common-evm-utils");

// const runApp = async () => {
//   await Moralis.start({
//     apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjIzMDBiNThjLWU1NzItNGRkYi1hODMyLWY2NmIyYTNlYjg4ZSIsIm9yZ0lkIjoiMzI5ODA0IiwidXNlcklkIjoiMzM5MTA0IiwidHlwZUlkIjoiM2VhZjU1YTItMjZmNC00NTI2LTkwMzktMDk0OWRkYmM0Yjg3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODU2NDI0NTMsImV4cCI6NDg0MTQwMjQ1M30.c-MFVMBXnLc0-6gSt1sJcKAqE6PpJ-NuA23jKkq_qok",
//   });

//   const address = "0xedb61f74b0d09b2558f1eeb79b247c1f363ae452";
//   const chain = EvmChain.ETHEREUM;
//   const marketplace = "opensea";

//   const response = await Moralis.EvmApi.nft.getNFTTrades({
//     address,
//     chain,
//     marketplace,
//   });

//   // Replace 'YOUR_TOKEN_ID' with the specific tokenId you want to retrieve data for.
//   const specificTokenId = "1186";

//   const filteredData = response.toJSON().result.filter((trade) => {
//     return trade.token_id === specificTokenId;
//   });
//   console.log(filteredData.length);

//   if (filteredData.length > 0) {
//     const price = filteredData[0].price;
//     console.log("Price for Token ID", specificTokenId, ":", price);
//   } else {
//     console.log("No data found for Token ID", specificTokenId);
//   }
// };

// runApp();



// import Moralis from 'moralis';

// try {
//   await Moralis.start({
//     apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjIzMDBiNThjLWU1NzItNGRkYi1hODMyLWY2NmIyYTNlYjg4ZSIsIm9yZ0lkIjoiMzI5ODA0IiwidXNlcklkIjoiMzM5MTA0IiwidHlwZUlkIjoiM2VhZjU1YTItMjZmNC00NTI2LTkwMzktMDk0OWRkYmM0Yjg3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODU2NDI0NTMsImV4cCI6NDg0MTQwMjQ1M30.c-MFVMBXnLc0-6gSt1sJcKAqE6PpJ-NuA23jKkq_qokY"
//   });

//   const response = await Moralis.EvmApi.nft.getNFTTrades({
//     "chain": "eth",
//     "marketplace": "opensea",
//     "address": "00xedb61f74b0d09b2558f1eeb79b247c1f363ae452"
//   });

//   console.log(response.raw);
// } catch (e) {
//   console.error(e);
// }