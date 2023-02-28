import {createContext, useContext} from 'react';

import {useAddress, useContract, useContractWrite, useMetamask} from '@thirdweb-dev/react';
import {ethers} from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  // const { contract } = useContract('0x4288e729819b8a65165557daa5ABd60B2851A3C2'); //old deployed contract
  // const { contract } = useContract('0x5A292d9d757E7B6FD0478e9b38AE0b10Db6127F8');
  // const { contract } = useContract("0xf972Fe9c2A4B6802cDcDe2bf375552185d374F68");
  // const { contract } = useContract("0xE23222f421B122862C92A39B45f05C2E3642D1b2");
  // const { contract } = useContract("0x674f45cF9D2cE6018927E10cD73121FD7D3881c2");
  // const { contract } = useContract("0xB90b7A201919303AF2709892088137cb6D8d37e2");
  // const { contract } = useContract("0x9302b297C301610e4c880267A868C99B1FC8Bdd0");
  const { contract } = useContract("0xD0CD26A627D01ea317B0DC52735E8a21279Ca5cD");
  const { mutateAsync: newCampaign, isLoading } = useContractWrite(contract, "newCampaign")
  // const { mutateAsync: createCampaign, isLoading } = useContractWrite(contract, "createCampaign")

  const address = useAddress();
  const connect = useMetamask();

  const postCampaign = async (form) => {
    try {
      const data = await newCampaign([
        address, // owner or creator
        form.title, // this the campaign name
        form.description, // description for the campaign
        form.goal, // Target amount
        new Date().getTime(), // Created atMath.floor(new Date().getTime() / 1000);
        new Date(form.deadline).getTime(), // deadline,
        form.image // Image field
      ])

      // contract successful..
      console.info("contract call successs", data);
    } catch (err) {
      console.log("contract failed", err)
    }
  }

  const getCampaigns = async () => {
    const campaigns = await contract.call('getCampaigns');

    return campaigns.map((campaign, i) => ({
      owner: campaign.creator,
      title: campaign.name,
      description: campaign.description,
      goal: ethers.utils.formatEther(campaign.goal.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      image: campaign.image,
      pId: i
    }));
  }

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === address);

    return filteredCampaigns;
  }

  const pledgeNow = async (pId, amount) => {
    const data = await contract.call('pledge', pId, { value: ethers.utils.parseEther(amount)});

    return data;
  }

  const getDonations = async (pId) => {
    const donations = await contract.call('getPledgers', pId);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for(let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        pledgers: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString())
      })
    }

    return parsedDonations;
  }


  return (
    <StateContext.Provider
      value={{ 
        address,
        contract,
        connect,
        createCampaign: postCampaign,
        getCampaigns,
        getUserCampaigns,
        pledgeNow,
        getDonations
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);