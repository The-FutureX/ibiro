import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'
import HeroArea from '../components/HeroArea';
import FeatureArea from '../components/FeatureArea';
import HowItWorks from "../components/HowItWorks";

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
            <HeroArea />
            {/* features-area start */}
            <FeatureArea />
            {/* features-area end */}
            <HowItWorks />
            {/* hero-area end */}
            {/* campaign start */}
            <DisplayCampaigns
            title="Popular Campaigns"
            isLoading={isLoading}
            campaigns={campaigns}
            />
            {/* campaign end */}
        </main>
    </div>;
}