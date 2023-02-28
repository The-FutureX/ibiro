import React from 'react';
import { useNavigate } from 'react-router-dom';

import FundCard from './FundCard';
import { loader } from '../assets';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
    const navigate = useNavigate();

    /* Encode string to slug */
    function toSlug(title) {
        return title.toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
    }


    const handleNavigate = (campaign) => {
        const url = toSlug(campaign.title);
        navigate(`/campaigns/${url}`, { state: campaign })
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
                            {/*<h2>Invest Now Before Time expires</h2>*/}
                        </div>
                    </div>
                </div>
                <div className="row">
                    {isLoading && (
                        <img src={loader} alt="loader" className="object-contain" />
                    )}

                    {!isLoading && campaigns.length === 0 && (
                        <p className="">
                            No Campaign created.
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