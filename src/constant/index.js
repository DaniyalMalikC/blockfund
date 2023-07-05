import axios from 'axios';

const PINATA_API_KEY = '0f020cfccfa9f3be2c72';
const PINATA_SECRET_API_KEY =
  'c38830c81d6ec5039929ae2a9b4f4e318467df89f9d15ce526408a31173969fc';

const IPFS_URL = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

export const IPFSFileUpload = async uri => {
  const formdata = new FormData();
  formdata.append('file', uri);
  return axios({
    url: IPFS_URL,
    method: 'POST',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formdata._boundary}`,
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_SECRET_API_KEY,
    },
    data: formdata,
  });
};

export const JSONIPFSUpload = async (uri, amount, recepient, name) => {
  //   const data = {
  //     attributes: [
  //       {
  //         trait_type: 'receipt',
  //         value: 'ETH Donation tranfer',
  //       },
  //       {
  //         trait_type: 'value',
  //         value: amount,
  //       },
  //     ],
  //     description: `NFT created with BlockFund for donating to ${recepient}`,
  //     image: uri,
  //     name: `${name}'s NFT from BlockFund`,
  //   };

  const jsonData = {
    name: 'BlockFund NFT',
    address: '0x1234567890123456789012345678901234567890',
    description: 'NFT created with BlockFund',
    image: uri,
    id: '1',
    attributes: [
      {trait_type: 'Purchase Price', value: 'purchasePrice'},
      {trait_type: 'Type of Residence', value: 'residenceType'},
      {trait_type: 'Bed Rooms', value: 'bedRooms'},
      {trait_type: 'Bathrooms', value: 'bathrooms'},
      {trait_type: 'Square Feet', value: 'squareFeet'},
      {trait_type: 'Year Built', value: 'yearBuilt'},
    ],
  };

  return axios({
    url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_SECRET_API_KEY,
    },
    data: data,
  });
};
