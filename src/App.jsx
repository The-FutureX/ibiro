import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header, Footer } from './components';
import {Campaigns, CampaignDetails, NewCampaign, Home, Dashboard} from './pages';

export default function App() {
  return (
    <div>
    {/* preloader */}
    {/* <Preloader /> */}
    {/* preloader end  */}
    {/* header start */}
    <Header />
    {/* header end */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/create-campaign" element={<NewCampaign />} />
      <Route path="/campaigns/:id" element={<CampaignDetails />} />
    </Routes>
    {/* footer start */}
    <Footer />
    {/* footer end */}
    </div>
  );
}
