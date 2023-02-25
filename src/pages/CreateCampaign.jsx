import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { FormField,Loader } from '../components';
import { checkIfImage } from '../utils';

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    creator: '',
    campaignName: '',
    description: '',
    goal: '',
    deadline: '',
    image: ''
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if(exists) {
        setIsLoading(true)
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)})
        setIsLoading(false);
        navigate('/');
      } else {
        alert('Provide valid image URL')
        setForm({ ...form, image: '' });
      }
    })
  }

  return (
    <div>
        <main>
          <div className="flex justify-center items-center">
            <h1 className="font-epilogue font-bold text-white">Start a Campaign</h1>
          </div>
        {/* page-title-area start */}
        <section
          className="page-title-area pt-50 pb-50"
          style={{ backgroundImage: "url(assets/img/bg/breadcumb.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-title page-title-white text-center">
                  <h2>Start Campaign</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* page-title-area end */}
        {/* login Area Strat*/}
        <div className="login-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <form onSubmit={handleSubmit}>
                    <FormField 
                      labelName="Your Name *"
                      placeholder="John Doe"
                      inputType="text"
                      value={form.name}
                      handleChange={(e) => handleFormFieldChange('name', e)}
                    />

                    <FormField 
                      labelName="Campaign Title *"
                      placeholder="Write a title"
                      inputType="text"
                      value={form.title}
                      handleChange={(e) => handleFormFieldChange('title', e)}
                    />

                    <FormField 
                      labelName="Story *"
                      placeholder="Write your story"
                      isTextArea
                      value={form.description}
                      handleChange={(e) => handleFormFieldChange('description', e)}
                    />

                    <div>
                      <img src={money} alt="money" className="w-[40px] h-[40px]"/>
                      <h4 className="font-epilogue font-bold">You will get 100% of the raised amount</h4>
                    </div>

                    <FormField 
                      labelName="Goal *"
                      placeholder="ETH 0.50"
                      inputType="text"
                      value={form.target}
                      handleChange={(e) => handleFormFieldChange('target', e)}
                    />
                    <FormField 
                      labelName="End Date *"
                      placeholder="End Date"
                      inputType="date"
                      value={form.deadline}
                      handleChange={(e) => handleFormFieldChange('deadline', e)}
                    />

                    <FormField 
                      labelName="Campaign image *"
                      placeholder="Place image URL of your campaign"
                      inputType="url"
                      value={form.image}
                      handleChange={(e) => handleFormFieldChange('image', e)}
                    />
                    
                    <div className="mt-10" />
                    {isLoading && <Loader />}
                    <button disabled={isLoading} className="btn btn-black w-100">Submit Campaign</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* login Area End*/}

      </main>

    </div>
  );
}
