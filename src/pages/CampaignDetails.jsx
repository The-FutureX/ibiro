export default function CampaignDetails() {
  return (
    <div>
        <main>
  {/* page-title-area start */}
  <section
    className="page-title-area pt-320 pb-140"
    style={{ backgroundImage: "url(assets/img/bg/breadcumb.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="page-title page-title-white text-center">
            <h2>Fund Details</h2>
            <div className="breadcrumb-list">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                </li>
                <li>Fund Details</li>
              </ul>
            </div>
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
  {/* fund-area start */}
  <section className="fund-area pb-120">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="bakix-details-tab">
            <ul
              className="nav text-center justify-content-center pb-30 mb-50"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Campaign
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  FAQ (1)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab1"
                  data-toggle="tab"
                  href="#profile1"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Updates (2)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab2"
                  data-toggle="tab"
                  href="#profile2"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Comments (0)
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="bakix-video mb-30">
                    <img src="assets/img/causes/details/video2.jpg" alt="" />
                    <a
                      className="popup-video"
                      href="https://www.youtube.com/watch?v=Y6MlVop80y0"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="event-img mb-40">
                    <img src="assets/img/causes/details/img1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-6 mb-40">
                  <div className="event-img">
                    <img src="assets/img/causes/details/img2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="event-text mb-40">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit, sed quia non numquam eius modi tempora incidunt ut
                      labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit, sed quia non numquam eius modi tempora.
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="event-gallery">
                    <img src="assets/img/causes/details/img3.jpg" alt="" />
                    <a
                      className="popup-image"
                      href="assets/img/causes/details/img3.jpg"
                    >
                      <img
                        src="assets/img/event/details/event-icon.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="faq mb-50">
                    <h3>Bot on your network</h3>
                    <ul>
                      <li>
                        <a href="#">Directed to App store or Play store</a>
                      </li>
                      <li>
                        <a href="#">Limits for Pins, boards, and follows</a>
                      </li>
                      <li>
                        <a href="#">Merge accounts</a>
                      </li>
                      <li>
                        <a href="#">Missing Pins or boards</a>
                      </li>
                    </ul>
                    <div className="faq-link mt-25">
                      <a href="#">
                        <i className="fas fa-caret-right" /> Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="faq mb-50">
                    <h3>Missing Pins or boards</h3>
                    <ul>
                      <li>
                        <a href="#">Directed to App store or Play store</a>
                      </li>
                      <li>
                        <a href="#">Limits for Pins, boards, and follows</a>
                      </li>
                      <li>
                        <a href="#">Merge accounts</a>
                      </li>
                      <li>
                        <a href="#">Missing Pins or boards</a>
                      </li>
                    </ul>
                    <div className="faq-link mt-25">
                      <a href="#">
                        <i className="fas fa-caret-right" /> Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="faq mb-50">
                    <h3>Trouble with Backix?</h3>
                    <ul>
                      <li>
                        <a href="#">Directed to App store or Play store</a>
                      </li>
                      <li>
                        <a href="#">Limits for Pins, boards, and follows</a>
                      </li>
                      <li>
                        <a href="#">Merge accounts</a>
                      </li>
                      <li>
                        <a href="#">Missing Pins or boards</a>
                      </li>
                    </ul>
                    <div className="faq-link mt-25">
                      <a href="#">
                        <i className="fas fa-caret-right" /> Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="faq mb-50">
                    <h3>Manage your account</h3>
                    <ul>
                      <li>
                        <a href="#">Directed to App store or Play store</a>
                      </li>
                      <li>
                        <a href="#">Limits for Pins, boards, and follows</a>
                      </li>
                      <li>
                        <a href="#">Merge accounts</a>
                      </li>
                      <li>
                        <a href="#">Missing Pins or boards</a>
                      </li>
                    </ul>
                    <div className="faq-link mt-25">
                      <a href="#">
                        <i className="fas fa-caret-right" /> Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="faq mb-50">
                    <h3>Pins and boards</h3>
                    <ul>
                      <li>
                        <a href="#">Directed to App store or Play store</a>
                      </li>
                      <li>
                        <a href="#">Limits for Pins, boards, and follows</a>
                      </li>
                      <li>
                        <a href="#">Merge accounts</a>
                      </li>
                      <li>
                        <a href="#">Missing Pins or boards</a>
                      </li>
                    </ul>
                    <div className="faq-link mt-25">
                      <a href="#">
                        <i className="fas fa-caret-right" /> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile1"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="row">
                <div className="col-xl-4 offset-xl-4 col-md-6 offset-md-3">
                  <div className="project-unsuccessful">
                    <h3>Project Unsuccessful</h3>
                    <span>September 14, 2018</span>
                  </div>
                  <div className="project-st-date mt-50 mb-80">
                    <span>December 2018</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10 offset-lg-1 col-md-12 ">
                  <div className="cpe-timeline-wrapper">
                    <div className="cpe-achievement">
                      <div className="achievement-content">
                        <span>November 29, 2018</span>
                        <h4>
                          Valentine's Day special pink crystal scale dial.
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>
                      </div>
                    </div>
                    <div className="cpe-achievement">
                      <div className="achievement-content">
                        <span>November 29, 2018</span>
                        <h4>
                          Valentine's Day special pink crystal scale dial.
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>
                      </div>
                    </div>
                    <div className="cpe-achievement">
                      <div className="achievement-content">
                        <span>November 29, 2018</span>
                        <h4>
                          Valentine's Day special pink crystal scale dial.
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>
                      </div>
                    </div>
                    <div className="cpe-achievement">
                      <div className="achievement-content">
                        <span>November 29, 2018</span>
                        <h4>
                          Valentine's Day special pink crystal scale dial.
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>
                      </div>
                    </div>
                    <div className="cpe-achievement">
                      <div className="achievement-content">
                        <span>November 29, 2018</span>
                        <h4>
                          Valentine's Day special pink crystal scale dial.
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>
                      </div>
                    </div>
                    <div className="cpe-achievement">
                      <div className="achievement-content">
                        <span>November 29, 2018</span>
                        <h4>
                          Valentine's Day special pink crystal scale dial.
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 offset-xl-4 col-md-6 offset-md-3 ">
                  <div className="project-st-date st-date-bottom mt-50 mb-80">
                    <span>December 2018</span>
                  </div>
                  <div className="project-unsuccessful project-launched">
                    <h3>Project Launched</h3>
                    <span>November 10, 2018</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile2"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="post-comments">
                <div className="blog-coment-title mb-30">
                  <h2>03 Comments</h2>
                </div>
                <div className="latest-comments">
                  <ul>
                    <li>
                      <div className="comments-box">
                        <div className="comments-avatar">
                          <img
                            src="assets/img/blog/details/comments1.png"
                            alt=""
                          />
                        </div>
                        <div className="comments-text">
                          <div className="avatar-name">
                            <h5>Karon Balina</h5>
                            <span>19th May 2018</span>
                            <a className="reply" href="#">
                              <i className="fas fa-reply" />
                              Reply
                            </a>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="children">
                      <div className="comments-box">
                        <div className="comments-avatar">
                          <img
                            src="assets/img/blog/details/comments1.png"
                            alt=""
                          />
                        </div>
                        <div className="comments-text">
                          <div className="avatar-name">
                            <h5>Julias Roy</h5>
                            <span>19th May 2018</span>
                            <a className="reply" href="#">
                              <i className="fas fa-reply" />
                              Reply
                            </a>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            aliquip.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="comments-box">
                        <div className="comments-avatar">
                          <img
                            src="assets/img/blog/details/comments2.png"
                            alt=""
                          />
                        </div>
                        <div className="comments-text">
                          <div className="avatar-name">
                            <h5>Arista Williamson</h5>
                            <span>19th May 2018</span>
                            <a className="reply" href="#">
                              <i className="fas fa-reply" />
                              Reply
                            </a>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="post-comments-form">
                <div className="post-comments-title">
                  <h2>Post Comments</h2>
                </div>
                <form
                  id="contacts-form"
                  className="conatct-post-form"
                  action="#"
                >
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="contact-icon contacts-message">
                        <textarea
                          name="comments"
                          id="comments"
                          cols={30}
                          rows={10}
                          placeholder="Your Comments...."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-icon contacts-name">
                        <input type="text" placeholder="Your Name.... " />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-icon contacts-email">
                        <input type="email" placeholder="Your Email...." />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-icon contacts-website">
                        <input type="text" placeholder="Your Website...." />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <button className="btn" type="submit">
                        Post comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="navigation-border pt-50 mt-40" />
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5">
          <div className="bakix-navigation b-next-post text-left mb-30">
            <span>
              <a href="#">Next Post</a>
            </span>
            <h4>
              <a href="#">Tips on Minimalist</a>
            </h4>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 ">
          <div className="bakix-filter text-left text-md-center mb-30">
            <a href="#">
              <img src="assets/img/icon/filter.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5">
          <div className="bakix-navigation b-next-post text-left text-md-right  mb-30">
            <span>
              <a href="#">Next Post</a>
            </span>
            <h4>
              <a href="#">Tips on Minimalist</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Marketplace-area end */}
  {/* brand-area start */}
  <section
    className="brand-area pt-110 pb-120"
    data-background="assets/img/bg/footer.jpg"
  >
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="brand-heading text-center mb-80">
            <h3>What Client Working With BAKIX And They Are Happy</h3>
          </div>
          <div className="brand-active owl-carousel">
            <div className="single-brand">
              <img src="assets/img/brand/brand1.png" alt="" />
            </div>
            <div className="single-brand">
              <img src="assets/img/brand/brand2.png" alt="" />
            </div>
            <div className="single-brand">
              <img src="assets/img/brand/brand3.png" alt="" />
            </div>
            <div className="single-brand">
              <img src="assets/img/brand/brand4.png" alt="" />
            </div>
            <div className="single-brand">
              <img src="assets/img/brand/brand5.png" alt="" />
            </div>
            <div className="single-brand">
              <img src="assets/img/brand/brand6.png" alt="" />
            </div>
            <div className="single-brand">
              <img src="assets/img/brand/brand2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* brand-area end */}
</main>

    </div>
  );
}
