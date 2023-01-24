import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'
import HerorArea from '../components/HeroArea';
import FeatureArea from '../components/FeatureArea';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

    return <div>
        <main>
            {/* hero-area start */}
            <HerorArea />
            {/* hero-area end */}
            {/* features-area start */}
            {/* <FeatureArea /> */}
            {/* features-area end */}
            {/* causes-area start */}
        
            <DisplayCampaigns
            title="All Campaigns"
            isLoading={isLoading}
            campaigns={campaigns}
            />
            {/* causes-area end */}
        </main>
    </div>;
}