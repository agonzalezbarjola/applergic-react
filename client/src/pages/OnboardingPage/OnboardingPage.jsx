import React from "react";
import "./OnboardingPage.scss";

function OnboardingPage() {
  return (
    <div className="c-onboardingPage">
      <div className="c-onboardingPage__title">
        <h1>Applergic</h1>
        <h4>Mi guía alimentaria</h4>
      </div>
      <div className="c-onboardingPage__logo">
        <img
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644262580/logoonboarding_xe5sle.png"
          alt="logo Applergic"
        />
      </div>
    </div>
  );
}

export default OnboardingPage;
