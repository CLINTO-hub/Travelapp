"use client";
import React from "react";
import PackageDetails from "../Components/Packagedetails/Packagedetails";
import ItineraryList from "../Components/ItineraryList/ItineraryList";
import SimilarTourSpot from "../Components/SimilarTourSpot/SimilarTourSpot";
import NewsletterSection from "../Components/NewsLetterSection/NewsLetterSection";
import Partners from "../Components/Parterns/Parterns";
import Footer from "../Components/Footer/Footer";
import PackageHero from "../Components/PackageHero/PackageHero";

const Page = () => {
  return (
    <div>
      <PackageHero/>
      <PackageDetails/>
      <ItineraryList/>
      <SimilarTourSpot/>
      <NewsletterSection/>
      <Partners/>
      <Footer/>
    </div>
  );
};

export default Page;
