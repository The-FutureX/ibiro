import { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

import bg_image from '../assets/img/bg/breadcumb.jpg';
import TitleNavigator from "../components/TitleNavigator";

export default function CampaignDetails() {
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { address, contract, getCampaigns } = useStateContext();
  const loadCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) loadCampaigns();
  }, [address, contract]);

  return (
      <div>
        {/*{isLoading && <Loader />}*/}
        <main>
          {/* page-title-area start */}
          <TitleNavigator title="Campaigns" />
          {/* page-title-area end */}
          {/* campaign start */}
          <DisplayCampaigns
              title="All Campaigns"
              isLoading={isLoading}
              campaigns={campaigns}
          />
          {/* campaign end */}
        </main>

      </div>
  );
}
