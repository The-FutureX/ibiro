import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CountBox } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';

export default function CampaignDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  }
  useEffect(() => {
    if(contract) fetchDonators();
  }, [contract, address])

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    navigate('/')
    setIsLoading(false);
  }

  return (
      <div>
        <main>
          {/* page-title-area start */}
          <section
              className="page-title-area pt-50 pb-50"
              style={{ backgroundImage: "url(assets/img/bg/breadcumb.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="page-title page-title-white text-center">
                    <h2>Fund Details</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* page-title-area end */}
          {/* event-area start */}
          <section className="event-area pos-relative pt-90 pb-120">
            <div className="container">
              <div className="row">
                <div className=" col-lg-3 col-md-3">
                  <div className="fund-info mb-30">
                    <h4>Notamuse</h4>
                    <ul>
                      <li>First created</li>
                      <li>at London, UK</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 ">
                  <div className="event-day-time pl-15">
                    <div className="section-title mb-30">
                      <p>
                        <span /> Furniture
                      </p>
                      <h1>Lumandu Minimal Furniture</h1>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="fund-text mb-50">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium.
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="bakix-video mb-60">
                    <img src="assets/img/causes/details/fund-video.jpg" alt="" />
                    <a
                        className="popup-video"
                        href="https://www.youtube.com/watch?v=Y6MlVop80y0"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="fund-progress mb-50">
                    <div className="progress">
                      <div
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                      />
                    </div>
                    <div className="payment-count details-fund-count d-md-flex justify-content-between mt-20 fix">
                      <div className="fund-count">
                        <h2>$32,678</h2>
                        <span>Pledged</span>
                      </div>
                      <div className="fund-count  ">
                        <h2>$33,467</h2>
                        <span>Target</span>
                      </div>
                      <div className="fund-count  ">
                        <h2>300</h2>
                        <span>Backers</span>
                      </div>
                      <div className="fund-count  ">
                        <h2>07</h2>
                        <span>Days To Go</span>
                      </div>
                    </div>
                  </div>
                  <div className="fund-text mb-50">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-12">
                  <div className="fund-form mb-30">
                    <form action="#">
                      <input type="text" placeholder="Enter your amount " />
                      <button className="btn" type="submit">
                        back this project <img src="assets/img/icon/arrow.png" alt="" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12  ">
                  <div className="fund-right mb-30">
                    <div className="remind mb-15">
                      <a href="#" className="btn btn-black">
                        <i className="fas fa-heart" /> remind me
                      </a>
                    </div>
                    <div className="fund-icon mb-15 ">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-behance" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* event-area end */}
        </main>

      </div>
  );
}
