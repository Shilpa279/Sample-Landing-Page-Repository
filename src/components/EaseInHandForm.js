import OperationalEfficiencyContainer from "./OperationalEfficiencyContainer";
import AvatarContainer from "./AvatarContainer";
import "./EaseInHandForm.css";

const EaseInHandForm = () => {
  return (
    <div className="testimonial-2">
      <div className="frame-parent29">
        <div className="frame-parent30">
          <div className="ease-in-the-hand-wrapper">
            <div className="ease-in-the-container">
              <p className="ease-in-the">{`Ease in the `}</p>
              <p className="ease-in-the">Hand</p>
            </div>
          </div>
          <div className="using-our-app">
            Using our app in business, especially in the restaurant industry,
            has many advantages. Here are some of them:
          </div>
        </div>
        <div className="frame-parent31">
          <OperationalEfficiencyContainer
            featureImageUrl="/frame-427319232.svg"
            featureDescription="Operational efficiency"
            operationDescription="Automate ordering, payment and stock management."
            frameTitle="/frame-4273192321.svg"
            securityData="Security data"
            integrationImageUrl="Strong security to protect your customer and business data."
          />
          <OperationalEfficiencyContainer
            featureImageUrl="/frame-4273192322.svg"
            featureDescription="Stock management"
            operationDescription="Track stock in real-time and avoid stock outs or wastage."
            frameTitle="/frame-4273192323.svg"
            securityData="Easy to integrate"
            integrationImageUrl="The integration process with third-party services runs easily."
          />
          <OperationalEfficiencyContainer
            featureImageUrl="/frame-4273192324.svg"
            featureDescription="Manage financial"
            operationDescription="Better record all purchase transactions automatically."
            frameTitle="/frame-4273192325.svg"
            securityData="Business Scalability"
            integrationImageUrl={`Easily add & upgrade according to your business growth.`}
          />
        </div>
      </div>
      <div className="testimonial-2-inner">
        <div className="club-info-container">
          <div className="club-info1">Club Info</div>
        </div>
      </div>
      <div className="frame-parent32">
        <div className="we-are-very-impressed-with-the-parent">
          <div className="we-are-very">
            “We are very impressed with the use of this POS application.
            Management of orders and payments becomes faster and more accurate
            so as to increase our operational efficiency.”
          </div>
          <div className="avatar-group">
            <AvatarContainer
              propBackgroundColor="#d2e9c2"
              propHeight="115.79%"
              propWidth="115.79%"
              propTop="-4.51%"
              propRight="-2.26%"
              propBottom="-11.28%"
              propLeft="-13.53%"
            />
            <div className="stevano-william-parent">
              <div className="stevano-william">Stevano William</div>
              <div className="ceo-at-pizza">CEO at Pizza Hut</div>
            </div>
          </div>
        </div>
        <div className="the-use-of-this-application-ha-parent">
          <div className="we-are-very">
            “The use of this application has given our company efficiency and
            accuracy in managing orders and payments.”
          </div>
          <div className="avatar-group">
            <AvatarContainer
              propBackgroundColor="#c5def4"
              propHeight="145.86%"
              propWidth="118.09%"
              propTop="-6.02%"
              propRight="-12.07%"
              propBottom="-39.85%"
              propLeft="-6.02%"
            />
            <div className="stevano-william-parent">
              <div className="stevano-william">{`Jennifer Lopes `}</div>
              <div className="ceo-at-pizza">{`Bussiness Owner at KFC Indonesia  `}</div>
            </div>
          </div>
        </div>
        <div className="we-are-pleased-with-the-flexib-parent">
          <div className="we-are-pleased">
            “We are pleased with the flexibility of this company's POS
            application. We can easily adapt our menu, prices and promotions
            according to market needs.”
          </div>
          <div className="avatar-group">
            <AvatarContainer />
            <div className="stevano-william-parent">
              <div className="stevano-william">Emanuel Rodrigo</div>
              <div className="product-owner-mcdonalds">{`Product Owner McDonald's `}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EaseInHandForm;
