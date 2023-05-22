import { FunctionComponent, useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ResultsContainer from "../components/ResultsContainer";
import ResultsWrapper from "../components/ResultsWrapper";
import styles from "./HotelsPage.module.css";
const HotelsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onWebScreenClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <div className={styles.hotelsPage}>
      <header className={styles.topHeader}>
        <div className={styles.topContainer}>
          <div
            className={styles.fickleflightLogo}
            onClick={onFickleflightLogoContainerClick}
          >
            <div className={styles.symbols}>
              <img
                className={styles.webScreenIcon}
                alt=""
                src="/webscreen.svg"
                onClick={onWebScreenClick}
              />
            </div>
          </div>
          <div className={styles.navigationRight}>
            <div className={styles.navigationMenu}>
              <div className={styles.explore} onClick={onExploreTextClick}>
                Explore
              </div>
              <div className={styles.explore} onClick={onSearchTextClick}>
                Search
              </div>
              <button className={styles.hotels}>Hotels</button>
              <button className={styles.offers}>Offers</button>
            </div>
            <div className={styles.accountSection}>
              <img
                className={styles.hamburgerMenuIcon}
                alt=""
                src="/notification.svg"
              />
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="/notification1.svg"
              />
              <img
                className={styles.unsplashd1upkifd04aIcon}
                alt=""
                src="/top_avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <div className={styles.header}>
        <div className={styles.banner}>
          <img
            className={styles.bannerBackground}
            alt=""
            src="/banner-background@2x.png"
          />
          <div className={styles.title}>
            <div className={styles.staysInLos}>Stays in Los Angeles</div>
            <div className={styles.options}>
              <div className={styles.pilldefault}>
                <div className={styles.beds}>Recommended</div>
              </div>
              <div className={styles.pilldefault1}>
                <div className={styles.beds}>Price</div>
              </div>
              <div className={styles.pilldefault1}>
                <div className={styles.beds}>Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hotelResults}>
        <div className={styles.resultsSumamry}>
          <div className={styles.results}>200+ results</div>
          <div className={styles.filters}>
            <img className={styles.filtersIcon} alt="" src="/filters.svg" />
            <div className={styles.filters1}>Filters</div>
          </div>
        </div>
        <div className={styles.resultsSection}>
          <div className={styles.resultCardsCol}>
            <ResultsContainer
              roomImageUrl="/unsplashs6ch7n3eoqy@2x.png"
              roomType="1 king bed standard"
              hotelName="Holiday Inn Expre..."
              roomPrice="/vector.svg"
              roomSize="/video.svg"
              openMatterhornPopup={openMatterhornPopup}
            />
            <ResultsWrapper
              hotelImageUrl="/unsplashs6ch7n3eoqy1@2x.png"
              hotelName="Freehand Los Angeles"
              roomType="Bed in Quad"
              reviewCount="(1,941 reviews)"
              rating="4.2"
              price="/vector1.svg"
              discountPrice="$S 198"
            />
            <ResultsWrapper
              hotelImageUrl="/unsplashs6ch7n3eoqy2@2x.png"
              hotelName="The Westin Bonavent..."
              roomType="1 King, City view"
              reviewCount="(1,002 reviews)"
              rating="4.1"
              price="/vector2.svg"
              discountPrice="$S 289"
            />
            <ResultsContainer
              roomImageUrl="/unsplashs6ch7n3eoqy3@2x.png"
              roomType="Deluxe King"
              hotelName="The Ritz-Carlton, L..."
              roomPrice="/vector3.svg"
              roomSize="/video1.svg"
              openMatterhornPopup={openMatterhornPopup1}
            />
            <iframe
              className={styles.map}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
            />
          </div>
          <iframe
            className={styles.map1}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.newsletterFormSection}>
          <img
            className={styles.newsletterSectionBackground}
            alt=""
            src="/newsletter-section-background@2x.png"
          />
          <div className={styles.subscribeForm}>
            <div className={styles.formHeader}>
              <b className={styles.formTitleSubtext}>
                subscribe to our newsletter
              </b>
              <b className={styles.formTitle}>Get weekly updates</b>
            </div>
            <div className={styles.form}>
              <div className={styles.formText}>
                <div className={styles.fillInYour}>
                  Fill in your details to join the party!
                </div>
              </div>
              <div className={styles.formFields}>
                <div className={styles.formText}>
                  <TextField
                    className={styles.input}
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Your name"
                    size="medium"
                    margin="none"
                  />
                </div>
                <div className={styles.formText}>
                  <TextField
                    className={styles.input}
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Email address"
                    size="medium"
                    margin="none"
                  />
                </div>
              </div>
              <button className={styles.button}>
                <div className={styles.unstyledbutton}>
                  <div className={styles.button1}>submit</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.fickleflightBio}>
            <img className={styles.logoIcon} alt="" src="/logo.svg" />
            <div className={styles.fickleFlightIs}>
              Fickle Flight is your one-stop travel portal. We offer hassle free
              flight and hotel bookings. We also have all your flight needs in
              you online shop.
            </div>
            <img
              className={styles.socialIcons}
              alt=""
              src="/social-icons.svg"
            />
          </div>
          <div className={styles.seperator} />
          <div className={styles.footerLinks}>
            <div className={styles.company}>
              <div className={styles.aboutUs}>About Us</div>
              <div className={styles.company1}>Company</div>
              <div className={styles.news}>News</div>
              <div className={styles.careers}>Careers</div>
              <div className={styles.howWeWork}>How we work</div>
            </div>
            <div className={styles.company}>
              <div className={styles.account}>Account</div>
              <div className={styles.support1}>Support</div>
              <div className={styles.supportCenter}>Support Center</div>
              <div className={styles.faq}>FAQ</div>
              <div className={styles.accessibility}>Accessibility</div>
            </div>
            <div className={styles.more}>
              <div className={styles.covidAdvisory}>Covid Advisory</div>
              <div className={styles.more1}>More</div>
              <div className={styles.airlineFees}>Airline Fees</div>
              <div className={styles.tips}>Tips</div>
              <div className={styles.howWeWork}>Quarantine Rules</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HotelsPage;
