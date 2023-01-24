import React from 'react';
import { useNavigate } from 'react-router-dom';

import FundCard from './FundCard';
import { loader } from '../assets';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
    const navigate = useNavigate();

    const handleNavigate = (campaign) => {
        navigate(`/campaign-details/${campaign.title}`, { state: campaign })
    }

    return <div>
        <section className="causes-area grey-bg pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-12">
                        <div className="section-title text-center mb-60">
                            <p>
                                <span /> {title}  ({campaigns.length})
                            </p>
                            <h1>Invest Now Before Time expires</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {isLoading && (
                        <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
                    )}

                    {!isLoading && campaigns.length === 0 && (
                        <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
                            You have not created any campigns yet
                        </p>
                    )}

                    {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => <FundCard
                        key={campaign.pId}
                        {...campaign}
                        handleClick={() => handleNavigate(campaign)}
                    />)}
                </div>
                <div className="row mt-30">
                    <div className="col-xl-12">
                        <div className="section-link text-center">
                            {campaigns.length > 6 ? '<a className="btn-border" href="#">more projects</a>': ''}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default DisplayCampaigns