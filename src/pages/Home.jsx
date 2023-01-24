import React from 'react';

export default function Home() {
    return <div>
        <main>
            {/* hero-area start */}
            <section className="hero-area ">
            <div className="hero-slider-area">
                <div className="row no-gutters">
                <div className="col-lg-12">
                    <div
                    className="slide-box d-flex align-items-center"
                    style={{ backgroundImage: "url(assets/img/slider/bg2.jpg)" }}
                    >
                    <div className="slide-box-content text-center">
                        <div className="slide-icon mb-50">
                        <img src="assets/img/slider/icon1.png" alt="" />
                        </div>
                        <div className="slide-text mb-30">
                        <h3>Share Innovative Ideas &amp; Get Backers</h3>
                        </div>
                        <div className="slide-box-btn">
                        <a href="#" className="btn btn-sign">
                            Discover today
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* hero-area end */}
            {/* features-area start */}
            <section className="features-area pt-120 pb-80">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-xl-9 col-lg-8">
                    <div className="section-title mb-65">
                    <p>
                        <span /> Our Features
                    </p>
                    <h1>We Make Investing Easy</h1>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 d-none d-xl-block">
                    <div className="section-link mb-80 text-lg-right">
                    <a className="btn-border" href="#">
                        features
                    </a>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="features text-center mb-40">
                    <div className="features__icon mb-50">
                        <img src="assets/img/features/icon1.png" alt="" />
                    </div>
                    <div className="features__caption">
                        <h2>Get Founded</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="features text-center mb-40">
                    <div className="features__icon mb-50">
                        <img src="assets/img/features/icon2.png" alt="" />
                    </div>
                    <div className="features__caption">
                        <h2>Safety Garanted</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="features text-center mb-40">
                    <div className="features__icon mb-50">
                        <img src="assets/img/features/icon3.png" alt="" />
                    </div>
                    <div className="features__caption">
                        <h2>Most Money Raised</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* features-area end */}
            {/* causes-area start */}
            <section className="causes-area grey-bg pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-xl-12">
                    <div className="section-title text-center mb-60">
                    <p>
                        <span /> Popular Project
                    </p>
                    <h1>Back Before The Time Expires</h1>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="causes white-bg mb-30">
                    <div className="causes__img">
                        <img src="assets/img/causes/project1.jpg" alt="" />
                        <div className="causes-heart">
                        <a href="#">
                            <i className="far fa-heart" />
                        </a>
                        </div>
                    </div>
                    <div className="causes__caption">
                        <div className="causes-tag mb-20">
                        <a href="#">Technology</a>
                        </div>
                        <h4>
                        <a href="fund-details.html">
                            Build the Future with us at ArneCane
                        </a>
                        </h4>
                        <div className="causes-progress mb-25">
                        <div className="progress">
                            <div
                            className="progress-bar w-75"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        <div className="causes-count mt-15 fix">
                            <div className="count-number f-left text-left">
                            <h2>$32,678</h2>
                            <span>Pledged</span>
                            </div>
                            <div className="count-number f-right text-right">
                            <h2>$33,467</h2>
                            <span>Target</span>
                            </div>
                        </div>
                        </div>
                        <div className="causes-meta fix">
                        <span className="f-left">
                            by <a href="#">romada D.</a>
                        </span>
                        <span className="f-right">
                            at <a href="#">london</a>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="causes white-bg mb-30">
                    <div className="causes__img">
                        <img src="assets/img/causes/project7.jpg" alt="" />
                        <div className="causes-heart">
                        <a href="#">
                            <i className="far fa-heart" />
                        </a>
                        </div>
                    </div>
                    <div className="causes__caption">
                        <div className="causes-tag mb-20">
                        <a href="#">architecture</a>
                        </div>
                        <h4>
                        <a href="fund-details.html">Automated Car Project!</a>
                        </h4>
                        <div className="causes-progress mb-25">
                        <div className="progress">
                            <div
                            className="progress-bar w-75"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        <div className="causes-count mt-15 fix">
                            <div className="count-number f-left text-left">
                            <h2>$32,678</h2>
                            <span>Pledged</span>
                            </div>
                            <div className="count-number f-right text-right">
                            <h2>$33,467</h2>
                            <span>Target</span>
                            </div>
                        </div>
                        </div>
                        <div className="causes-meta fix">
                        <span className="f-left">
                            by <a href="#">romada D.</a>
                        </span>
                        <span className="f-right">
                            at <a href="#">london</a>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="causes white-bg mb-30">
                    <div className="causes__img">
                        <img src="assets/img/causes/project3.jpg" alt="" />
                        <div className="causes-heart">
                        <a href="#">
                            <i className="far fa-heart" />
                        </a>
                        </div>
                    </div>
                    <div className="causes__caption">
                        <div className="causes-tag mb-20">
                        <a href="#">Finance, Housing</a>
                        </div>
                        <h4>
                        <a href="fund-details.html">Donation for Seventh Hokage.</a>
                        </h4>
                        <div className="causes-progress mb-25">
                        <div className="progress">
                            <div
                            className="progress-bar w-75"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        <div className="causes-count mt-15 fix">
                            <div className="count-number f-left text-left">
                            <h2>$32,678</h2>
                            <span>Pledged</span>
                            </div>
                            <div className="count-number f-right text-right">
                            <h2>$33,467</h2>
                            <span>Target</span>
                            </div>
                        </div>
                        </div>
                        <div className="causes-meta fix">
                        <span className="f-left">
                            by <a href="#">romada D.</a>
                        </span>
                        <span className="f-right">
                            at <a href="#">london</a>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="causes white-bg mb-30">
                    <div className="causes__img">
                        <img src="assets/img/causes/project4.jpg" alt="" />
                        <div className="causes-heart">
                        <a href="#">
                            <i className="far fa-heart" />
                        </a>
                        </div>
                    </div>
                    <div className="causes__caption">
                        <div className="causes-tag mb-20">
                        <a href="#">Finance</a>
                        </div>
                        <h4>
                        <a href="fund-details.html">A cent to put smile of faces</a>
                        </h4>
                        <div className="causes-progress mb-25">
                        <div className="progress">
                            <div
                            className="progress-bar w-75"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        <div className="causes-count mt-15 fix">
                            <div className="count-number f-left text-left">
                            <h2>$32,678</h2>
                            <span>Pledged</span>
                            </div>
                            <div className="count-number f-right text-right">
                            <h2>$33,467</h2>
                            <span>Target</span>
                            </div>
                        </div>
                        </div>
                        <div className="causes-meta fix">
                        <span className="f-left">
                            by <a href="#">romada D.</a>
                        </span>
                        <span className="f-right">
                            at <a href="#">london</a>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="causes white-bg mb-30">
                    <div className="causes__img">
                        <img src="assets/img/causes/project5.jpg" alt="" />
                        <div className="causes-heart">
                        <a href="#">
                            <i className="far fa-heart" />
                        </a>
                        </div>
                    </div>
                    <div className="causes__caption">
                        <div className="causes-tag mb-20">
                        <a href="#">Finance, Wallet</a>
                        </div>
                        <h4>
                        <a href="fund-details.html">Invest in Wallet Inc! </a>
                        </h4>
                        <div className="causes-progress mb-25">
                        <div className="progress">
                            <div
                            className="progress-bar w-75"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        <div className="causes-count mt-15 fix">
                            <div className="count-number f-left text-left">
                            <h2>$32,678</h2>
                            <span>Pledged</span>
                            </div>
                            <div className="count-number f-right text-right">
                            <h2>$33,467</h2>
                            <span>Target</span>
                            </div>
                        </div>
                        </div>
                        <div className="causes-meta fix">
                        <span className="f-left">
                            by <a href="#">romada D.</a>
                        </span>
                        <span className="f-right">
                            at <a href="#">london</a>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="causes white-bg mb-30">
                    <div className="causes__img">
                        <img src="assets/img/causes/project6.jpg" alt="" />
                        <div className="causes-heart">
                        <a href="#">
                            <i className="far fa-heart" />
                        </a>
                        </div>
                    </div>
                    <div className="causes__caption">
                        <div className="causes-tag mb-20">
                        <a href="#">Tech, Robot</a>
                        </div>
                        <h4>
                        <a href="fund-details.html">Tor-T001K: More than a Robot.</a>
                        </h4>
                        <div className="causes-progress mb-25">
                        <div className="progress">
                            <div
                            className="progress-bar w-75"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        <div className="causes-count mt-15 fix">
                            <div className="count-number f-left text-left">
                            <h2>$32,678</h2>
                            <span>Pledged</span>
                            </div>
                            <div className="count-number f-right text-right">
                            <h2>$33,467</h2>
                            <span>Target</span>
                            </div>
                        </div>
                        </div>
                        <div className="causes-meta fix">
                        <span className="f-left">
                            by <a href="#">romada D.</a>
                        </span>
                        <span className="f-right">
                            at <a href="#">london</a>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row mt-30">
                <div className="col-xl-12">
                    <div className="section-link text-center">
                    <a className="btn-border" href="#">
                        more projects
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* causes-area end */}
        </main>
    </div>;
}