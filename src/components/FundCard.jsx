import React from 'react';

import { tagType, thirdweb } from '../assets';
import { daysLeft } from '../utils';

const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
    const remainingDays = daysLeft(deadline);

    return (
        <div className="col-xl-4 col-lg-4 col-md-6" onClick={handleClick}>
            <div className="causes white-bg mb-30">
                <div className="causes__img">
                    <img src={image} alt="" />
                    <div className="causes-heart">
                        <a href="#" onClick={handleClick}>
                            <i className="far fa-heart" />
                        </a>
                    </div>
                </div>
                <div className="causes__caption">
                    <div className="causes-tag mb-20">
                        <a href="#">Technology</a>
                    </div>
                    <h4>
                        <a href="#" onClick={handleClick}>
                            {title}
                        </a>
                    </h4>
                    <div className="causes-progress mb-25">
                        {/*<div className="progress">*/}
                        {/*    <div*/}
                        {/*        className="progress-bar w-75"*/}
                        {/*        role="progressbar"*/}
                        {/*        aria-valuenow={60}*/}
                        {/*        aria-valuemin={0}*/}
                        {/*        aria-valuemax={100}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <div className="causes-count mt-15 fix">
                            <div className="count-number f-left text-left">
                                <h2>{amountCollected}</h2>
                                <span>Pledged</span>
                            </div>
                            <div className="count-number f-right text-right">
                                <h2>{target}</h2>
                                <span>Target</span>
                            </div>
                        </div>
                    </div>
                    <div className="causes-meta fix">
                        <span className="f-left">
                            by <a href="#">{owner}</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FundCard