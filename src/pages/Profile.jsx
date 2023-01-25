import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

import bg_image from '../assets/img/bg/breadcumb.jpg';
import TitleNavigator from "../components/TitleNavigator";

export default function Profile() {
    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

    const { address, contract, getUserCampaigns } = useStateContext();

    const fetchCampaigns = async () => {
        setIsLoading(true);
        const data = await getUserCampaigns();
        setCampaigns(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if(contract) fetchCampaigns();
    }, [address, contract]);

    return (
        <div>
            {/*{isLoading && <Loader />}*/}
            <main>
                {/* page-title-area start */}
                <TitleNavigator title="My Campaigns" />
                {/* page-title-area end */}
                {/* campaign start */}
                <DisplayCampaigns
                    title="My Campaigns"
                    isLoading={isLoading}
                    campaigns={campaigns}
                />
                {/* campaign end */}
            </main>

        </div>
    );
}
