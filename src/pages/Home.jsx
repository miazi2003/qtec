import React from 'react';
import Hero from '../components/hero/Hero';
import Company from '../components/company/Company';
import Category from '../components/category/Category';
import FeaturedJob from '../components/featured-job/FeaturedJob';
import LatestJob from '../components/latest-job/LatestJob';
import CTA from '../components/CTA/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <Company />
      <Category />
      <CTA/>
      <FeaturedJob />
      <LatestJob />
    </div>
  );
};

export default Home;
