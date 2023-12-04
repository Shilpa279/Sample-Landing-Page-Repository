import Header from "../components/Header";
import RestaurantManagementContainer from "../components/RestaurantManagementContainer";
import Container50 from "../components/Container50";
import TrustedBySection from "../components/TrustedBySection";
import ComplementaryFeaturesContainer from "../components/ComplementaryFeaturesContainer";
import BusinessPackagesContainer from "../components/BusinessPackagesContainer";
import StarterFormContainer from "../components/StarterFormContainer";
import BasicCardContainer from "../components/BasicCardContainer";
import EaseInHandForm from "../components/EaseInHandForm";
import FrequentlyAskedQuestionsSectio from "../components/FrequentlyAskedQuestionsSectio";
import ContainerFAQV3 from "../components/ContainerFAQV3";
import ExclusiveOpportunityCard from "../components/ExclusiveOpportunityCard";
import "./CocaPOSLandingPage.css";

const CocaPOSLandingPage = () => {
  return (
    <div className="coca-pos-landing-page">
      <div className="hero-7-parent">
        <div className="hero-7">
          <Header />
          <RestaurantManagementContainer />
          <Container50 />
        </div>
        <TrustedBySection />
      </div>
      <ComplementaryFeaturesContainer />
      <div className="benefit-v1">
        <BusinessPackagesContainer />
        <div className="benefit-v1-inner">
          <div className="club-info-wrapper">
            <div className="club-info">Club Info</div>
          </div>
        </div>
        <div className="frame-parent">
          <StarterFormContainer />
          <div className="frame-group">
            <BasicCardContainer
              planType="Basic"
              iconImageUrl="/icon--line--chevrondown.svg"
              priceLabel="$20"
              statusIconName="/checkcirclealt.svg"
              featureIconName="/checkcirclealt.svg"
              statusIconNameAlt="/checkcirclealt.svg"
              iconName="/checkcirclealt.svg"
              circleIconName="/checkcirclealt.svg"
              iconName2="/xcircle.svg"
              circleIconText="/xcircle.svg"
              circleIconTextAlt="/xcircle.svg"
              circleIconImageUrl="/icon--line--chevrondown.svg"
              buttonIconName="/icon--line--chevrondown.svg"
              circleIconAltText="/icon--line--chevrondown.svg"
              checkCircleIconName="/icon--line--chevrondown.svg"
            />
            <BasicCardContainer
              planType="Business"
              iconImageUrl="/icon--line--chevrondown.svg"
              priceLabel="$30"
              statusIconName="/checkcirclealt1.svg"
              featureIconName="/checkcirclealt1.svg"
              statusIconNameAlt="/checkcirclealt1.svg"
              iconName="/checkcirclealt1.svg"
              circleIconName="/checkcirclealt1.svg"
              iconName2="/checkcirclealt1.svg"
              circleIconText="/xcircle1.svg"
              circleIconTextAlt="/xcircle1.svg"
              circleIconImageUrl="/icon--line--chevrondown.svg"
              buttonIconName="/icon--line--chevrondown.svg"
              circleIconAltText="/icon--line--chevrondown.svg"
              checkCircleIconName="/icon--line--chevrondown.svg"
              propBackgroundColor="#ecf6ff"
              propOverflow="unset"
              propBackgroundColor1="#d4e8fa"
              propColor="#3871a5"
            />
            <BasicCardContainer
              planType="Enterprise"
              iconImageUrl="/icon--line--chevrondown.svg"
              priceLabel="$50"
              statusIconName="/checkcirclealt2.svg"
              featureIconName="/checkcirclealt2.svg"
              statusIconNameAlt="/checkcirclealt2.svg"
              iconName="/checkcirclealt2.svg"
              circleIconName="/checkcirclealt2.svg"
              iconName2="/checkcirclealt2.svg"
              circleIconText="/checkcirclealt2.svg"
              circleIconTextAlt="/checkcirclealt2.svg"
              circleIconImageUrl="/icon--line--chevrondown.svg"
              buttonIconName="/icon--line--chevrondown.svg"
              circleIconAltText="/icon--line--chevrondown.svg"
              checkCircleIconName="/icon--line--chevrondown.svg"
              propBackgroundColor="#f2ecff"
              propOverflow="hidden"
              propBackgroundColor1="#e6dbff"
              propColor="#7256af"
            />
          </div>
          <div className="frame-container">
            <div className="all-starter-parent">
              <div className="all-starter">All starter</div>
              <div className="best-choice-wrapper">
                <i className="best-choice-container">
                  <span>Best choice</span>
                  <span className="span"> 😊</span>
                </i>
              </div>
            </div>
            <div className="frame-div">
              <div className="frame-parent1">
                <div className="frame-wrapper">
                  <div className="group-wrapper">
                    <div className="month-parent">
                      <div className="month">/month</div>
                      <div className="div">$1.75</div>
                    </div>
                  </div>
                </div>
                <div className="frame-child" />
                <div className="frame-parent2">
                  <div className="check-circle-alt-parent">
                    <img
                      className="check-circle-alt-icon"
                      alt=""
                      src="/icon--line--chevrondown.svg"
                    />
                    <div className="all-starter-features-plus-wrapper">
                      <i className="best-choice-container">
                        All STARTER features plus
                      </i>
                    </div>
                  </div>
                  <div className="check-circle-alt-group">
                    <img
                      className="check-circle-alt-icon"
                      alt=""
                      src="/icon--line--chevrondown.svg"
                    />
                    <div className="personalized-workout-plan">
                      Personalized workout plan
                    </div>
                  </div>
                  <div className="check-circle-alt-container">
                    <img
                      className="check-circle-alt-icon"
                      alt=""
                      src="/icon--line--chevrondown.svg"
                    />
                    <div className="personalized-workout-plan">
                      Group classes and exclusive GO classes
                    </div>
                  </div>
                  <div className="check-circle-alt-group">
                    <img
                      className="check-circle-alt-icon"
                      alt=""
                      src="/icon--line--chevrondown.svg"
                    />
                    <div className="personalized-workout-plan">
                      Freeze membership (90 days per year)
                    </div>
                  </div>
                  <div className="check-circle-alt-parent2">
                    <img
                      className="check-circle-alt-icon4"
                      alt=""
                      src="/icon--line--chevrondown.svg"
                    />
                    <div className="citystate-targeting">
                      City/state targeting
                    </div>
                  </div>
                  <div className="check-circle-alt-parent2">
                    <img
                      className="check-circle-alt-icon4"
                      alt=""
                      src="/icon--line--chevrondown.svg"
                    />
                    <div className="citystate-targeting">
                      Flexibel rotation/sticky options
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-wrapper1">
                <div className="frame-wrapper2">
                  <div className="subscribe-on-both-memberships-parent">
                    <div className="subscribe-on-both">
                      Subscribe on both memberships
                    </div>
                    <img
                      className="check-circle-alt-icon"
                      alt=""
                      src="/icon--line--chevrondown.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="radio-button-off"
              alt=""
              src="/icon--line--chevrondown.svg"
            />
          </div>
        </div>
        <div className="best-choice-frame">
          <i className="best-choice-container">
            <span>Best choice</span>
            <span className="span1"> 😊</span>
          </i>
        </div>
      </div>
      <EaseInHandForm />
      <FrequentlyAskedQuestionsSectio />
      <div className="footer-1-wrapper">
        <div className="footer-1">
          <ContainerFAQV3 />
          <ExclusiveOpportunityCard />
        </div>
      </div>
    </div>
  );
};

export default CocaPOSLandingPage;
