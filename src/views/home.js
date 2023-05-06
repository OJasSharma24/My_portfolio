import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <a href="#hero" className="home-heading Card-Heading">
            OJAS SHARMA 
          </a>
          <div className="home-links-container">
            <a href="#about" className="home-link Navbar-Link">
              About
            </a>
            <a href="#experience" className="home-link01 Navbar-Link">
              Experience
            </a>
            <a href="#mywork" className="home-link02 Navbar-Link">
              Portfolio
            </a>
            <a href="#contact" className="home-link03 Navbar-Link">
              Contact
            </a>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container01">
              <span className="Card-Heading home-heading1">Logo</span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link04 Navbar-Link">About</span>
              <span className="home-link05 Navbar-Link">Experience</span>
              <span className="home-link06 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div className="home-container02">
        <div id="hero" className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading2">
              I am a Cloud Computing and Data Science Enthusiast 
            </h1>
            <span className="home-text">
              <span>
                An aspiring programmer, cloud computing and data science
                enthusiast, also a curious learner looking forward to learn new
                skills and gain experience that will contribute in betterment of
                the community.
              </span>
              <br className="Section-Text"></br>
              <br></br>
            </span>
            <div className="home-cta-btn-container">
              <a href="#mywork" className="home-cta-btn Anchor button">
                <span className="home-text004">MY WORK</span>
              </a>
              <a href="#about" className="home-cta-btn1 button">
                ABOUT ME
              </a>
            </div>
          </div>
          <div className="home-container03">
            <img
              alt="image"
              src="/playground_assets/img20211025133854-500w.jpg"
              className="home-image"
            />
          </div>
        </div>
      </div>
      <div id="experience" className="home-experience">
        <div className="home-max-content-width-container">
          <div className="home-heading-container">
            <h1 className="home-text005 Section-Heading">Experience</h1>
            <svg viewBox="0 0 1024 1024" className="home-icon04">
              <path d="M682 384h172v470h-172v-470zM170 854v-342h172v342h-172zM426 854v-684h172v684h-172z"></path>
            </svg>
          </div>
          <div className="home-content-container">
            <div className="home-experiences">
              <div className="home-container04">
                <div className="home-icon-container">
                  <img
                    alt="image"
                    src="/playground_assets/codec-200h.jpeg"
                    className="home-image01"
                  />
                </div>
                <div className="home-subcontent-container">
                  <h1 className="home-text006">
                    Web Development Head in CODEC  
                  </h1>
                  <span className="home-text007">
                    <span>
                      Working as a Web-Development head in the coding club of
                      Symbiosis University of Applied Sciences.
                    </span>
                    <br></br>
                    <span>
                      From -
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text011">Sep 2022 - Present</span>
                    <span> </span>
                  </span>
                </div>
              </div>
              <div className="home-container05">
                <div className="home-icon-container01">
                  <img
                    alt="image"
                    src="/playground_assets/tcs-200h.jpeg"
                    className="home-image02"
                  />
                </div>
                <div className="home-subcontent-container01">
                  <h1 className="home-text013">
                    Software Developer in TCS Mentorship Program
                  </h1>
                  <span className="home-text014">
                    <span className="Card-Text">
                      Worked as a software developer in the mentorship program
                      by TCS in which each group has assigned a project to be
                      completed based on a given problem statement.
                    </span>
                    <br></br>
                    <span>
                      From -
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text018">June 2022 - July 2022</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-container06">
                <div className="home-icon-container02">
                  <img
                    alt="image"
                    src="/playground_assets/clearexam-200h.jpeg"
                    className="home-image03"
                  />
                </div>
                <div className="home-subcontent-container02">
                  <h1 className="home-text020">
                    Web Devlopment Intern in ClearExam
                  </h1>
                  <span className="home-text021">
                    <span className="Card-Text">
                      Worked as a web development intern in the ClearExam where
                      my role is to add html and css code in the web pages.
                    </span>
                    <br></br>
                    <span>
                      From -
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text025">Aug 2021 - Oct 2021</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div id="mywork" className="home-my-work">
        <div className="home-heading-container1">
          <h1 className="home-text027 Section-Heading">My Work</h1>
        </div>
        <div className="home-pricing-card-container">
          <div className="home-card">
            <div className="home-card-heading">
              <div className="home-image-container">
                <div className="home-container07">
                  <img
                    alt="image"
                    src="/playground_assets/meterreader-200h.png"
                    className="home-image04"
                  />
                </div>
              </div>
              <h1 className="home-text028">
                <span>GPS based Meter-Reader route trace</span>
                <br></br>
                <br></br>
              </h1>
            </div>
            <div className="home-card-content">
              <span className="home-text032">
                <span>
                  This is my group project under the mentorship of TCS, in which
                  we developed a GPS based mobile application to add the meter
                  details by scanning QR code and uploading it to the server at
                  the end of the day. My role in this project is to do backend
                  part, which includes the database design, connection database
                  (SQLite &amp; Firebase) with the application using JDBC.
                </span>
                <br></br>
                <br></br>
                <span>The tools used in this project are</span>
                <br></br>
                <span>1. Android Studio</span>
                <br></br>
                <span>2. Java Programming Language</span>
                <br></br>
                <span>3. SQLite database</span>
                <br></br>
                <span>4. Firebase</span>
                <br></br>
                <span>5. XML</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-card-heading1">
              <div className="home-image-container1">
                <div className="home-container08">
                  <img
                    alt="image"
                    src="/playground_assets/todo-200w.png"
                    className="home-image05"
                  />
                </div>
              </div>
              <h1 className="home-text048">To-Do Helper (Note taking app)</h1>
            </div>
            <div className="home-card-content1">
              <span className="home-text049">
                <span>
                  This is my individual minor project, in which I developed a
                  mobile application for Android users to make notes or to-do
                  lists along with reminder feature.
                </span>
                <br></br>
                <br></br>
                <span>The tools used in this project are</span>
                <br></br>
                <span>1. Android Studio</span>
                <br></br>
                <span>2. Java Programming Language</span>
                <br></br>
                <span>3. SQLite database</span>
                <br></br>
                <span>4. XML</span>
                <br></br>
                <br></br>
                <span>The link for the source code is below:</span>
                <br></br>
                <a
                  href="https://github.com/OJasSharma24/To-Do-Helper-source-code"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link08"
                >
                  https://github.com/OJasSharma24/To-Do-Helper-source-code
                </a>
              </span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-card-heading2">
              <div className="home-image-container2">
                <div className="home-container09">
                  <img
                    alt="image"
                    src="/playground_assets/pdd-200h.jpg"
                    className="home-image06"
                  />
                </div>
              </div>
              <h1 className="home-text066">Plant Disease Detector</h1>
            </div>
            <div className="home-card-content2">
              <span className="home-text067">
                <span>
                  This is my group project, in which we developed a deep
                  learning model using residual network to predict the disease
                  in the plants(initially for Tomato) by analysing it&apos;s
                  leaf image. In this project, my role is to develop the deep
                  learning model for predicating whether the plant is diseased
                  or not.
                </span>
                <br></br>
                <br></br>
                <span>The tools used in this project are</span>
                <br></br>
                <span>1. Colab laboratory</span>
                <br></br>
                <span>2. Python Programming Language</span>
                <br></br>
                <span>3. Pytorch</span>
                <br></br>
                <span>4. Gradio</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <section id="about" className="home-about">
        <h2 className="home-text081 Section-Heading">
          About
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h2>
        <div className="home-content-container1">
          <div className="home-about-me">
            <div className="home-heading-container2">
              <h1 className="home-text082">
                <span>About me</span>
                <br></br>
              </h1>
            </div>
            <div className="home-am-container">
              <span className="home-content">
                <span>
                  An aspiring programmer, cloud computing and data science
                  enthusiast, also a curious learner looking forward to learn
                  new skills and gain experience that will contribute in
                  betterment of the community.
                </span>
                <br className="home-text086"></br>
                <span>
                  As of now, done some collage level projects and achieved 2
                  certification in Azure after clearing AZ-900 and AI-900 along
                  with some programming certification from edx, coding ninjas.
                </span>
              </span>
            </div>
          </div>
          <div className="home-certification">
            <div className="home-heading-container3">
              <h1 className="home-text088">Certifications</h1>
            </div>
            <div className="home-content-container2">
              <div className="home-certifications">
                <div className="home-container10">
                  <section className="home-icon-container03">
                    <img
                      alt="image"
                      src="/playground_assets/image-3pgl-200h.jpeg"
                      className="home-image07"
                    />
                  </section>
                  <div className="home-subcontent-container03">
                    <h1 className="home-text089">
                      Microsoft Certified: Azure AI Fundamentals
                    </h1>
                    <span className="home-text090">
                      <span>Microsoft</span>
                      <br></br>
                      <span>Issued on January 2023</span>
                      <br></br>
                    </span>
                    <a
                      href="https://www.credly.com/badges/c10572bf-8aa8-4bf1-a03a-5568444706ae/linked_in_profile"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link09 button"
                    >
                      <span className="home-text095">
                        <span>View Certificate</span>
                        <br></br>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="home-container11">
                  <div className="home-icon-container04">
                    <div className="home-container12">
                      <img
                        alt="image"
                        src="/playground_assets/image-y7km-200h.jpeg"
                        className="home-image08"
                      />
                    </div>
                  </div>
                  <div className="home-subcontent-container04">
                    <h1 className="home-text098">
                      Microsoft Certified: Azure Fundamentals
                    </h1>
                    <span className="home-text099">
                      <span>Microsoft</span>
                      <br></br>
                      <span>Issued on December 2023</span>
                      <br></br>
                    </span>
                    <a
                      href="https://www.credly.com/badges/8491901e-3d36-45ae-86de-0990920d6875/linked_in_profile"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link10 button"
                    >
                      <span className="home-text104">
                        <span>View Certificate</span>
                        <br></br>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="home-container13">
                  <div className="home-icon-container05">
                    <div className="home-container14">
                      <img
                        alt="image"
                        src="/playground_assets/image-umjt-200h.jpeg"
                        className="home-image09"
                      />
                    </div>
                  </div>
                  <div className="home-subcontent-container05">
                    <h1 className="home-text107">
                      edX Verified Certificate for AI for Everyone : Master the
                      Basic
                    </h1>
                    <span className="home-text108">
                      <span>edX</span>
                      <br></br>
                      <span>Issued on June 2022</span>
                      <br></br>
                    </span>
                    <a
                      href="https://courses.edx.org/certificates/eff81a9345434a13af119dc0c88b8eea"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link11 button"
                    >
                      <span className="home-text113">
                        <span>View Certificate</span>
                        <br></br>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="home-container15">
                  <div className="home-icon-container06">
                    <div className="home-container16">
                      <img
                        alt="image"
                        src="/playground_assets/image-bud-200h.jpeg"
                        className="home-image10"
                      />
                    </div>
                  </div>
                  <div className="home-subcontent-container06">
                    <h1 className="home-text116">
                      edX Verified Certificate for Cybersecurity Basics
                    </h1>
                    <span className="home-text117">
                      <span>edX</span>
                      <br></br>
                      <span>Issued on June 2022</span>
                      <br></br>
                    </span>
                    <a
                      href="https://courses.edx.org/certificates/ce4cc3e6042c4d9398cc00e957bb684b"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link12 button"
                    >
                      <span className="home-text122">
                        <span>View Certificate</span>
                        <br></br>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="home-container17">
                  <div className="home-icon-container07">
                    <div className="home-container18">
                      <img
                        alt="image"
                        src="/playground_assets/image-aaf-200h.jpeg"
                        className="home-image11"
                      />
                    </div>
                  </div>
                  <div className="home-subcontent-container07">
                    <h1 className="home-text125">
                      edX Verified Certificate for Introduction to Cloud
                      Computing
                    </h1>
                    <span className="home-text126">
                      <span>edX</span>
                      <br></br>
                      <span>Issued on June 2022</span>
                      <br></br>
                    </span>
                    <a
                      href="https://courses.edx.org/certificates/5b8e7933c9ef4403b5ec78621aa3beac"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link13 button"
                    >
                      <span className="home-text131">
                        <span>View Certificate</span>
                        <br></br>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="home-container19">
                  <div className="home-icon-container08">
                    <div className="home-container20">
                      <img
                        alt="image"
                        src="/playground_assets/image-vio-200h.jpeg"
                        className="home-image12"
                      />
                    </div>
                  </div>
                  <div className="home-subcontent-container08">
                    <h1 className="home-text134">
                      edX Verified Certificate for Python Basics for Data
                      Science
                    </h1>
                    <span className="home-text135">
                      <span>edX</span>
                      <br></br>
                      <span>Issued on June 2022</span>
                    </span>
                    <a
                      href="https://courses.edx.org/certificates/b736d7993673413f945f1e1717726de9"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link14 button"
                    >
                      <span className="home-text139">
                        <span>View Certificate</span>
                        <br></br>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="home-container21">
                  <div className="home-icon-container09">
                    <div className="home-container22">
                      <img
                        alt="image"
                        src="/playground_assets/image-e9b8-200h.jpeg"
                        className="home-image13"
                      />
                    </div>
                  </div>
                  <div className="home-subcontent-container09">
                    <h1 className="home-text142">
                      Nasscom Java Certificate Of Excellence
                    </h1>
                    <span className="home-text143">
                      <span>Coding Ninjas</span>
                      <br></br>
                      <span>Issued on April 2022</span>
                      <br></br>
                    </span>
                    <a
                      href="https://ninjasfiles.s3.amazonaws.com/certificate21274403731196cbd5a3f2aafb8a469727a83d0.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link15 button"
                    >
                      <span className="home-text148">
                        <span>View Certificate</span>
                        <br></br>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="home-container23">
                  <div className="home-icon-container10">
                    <div className="home-container24">
                      <img
                        alt="image"
                        src="/playground_assets/image-vx9l-200h.jpeg"
                        className="home-image14"
                      />
                    </div>
                  </div>
                  <div className="home-subcontent-container10">
                    <h1 className="home-text151">
                      Nasscom Python Certificate Of Excellence
                    </h1>
                    <span className="home-text152">
                      <span>Coding Ninjas</span>
                      <br></br>
                      <span>Issued on April 2022</span>
                    </span>
                    <a
                      href="https://ninjasfiles.s3.amazonaws.com/certificate218647059cb3344d670288fc8424720bcfe4431.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link16 button"
                    >
                      <span className="home-text156">
                        <span>View Certificate</span>
                        <br></br>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="home-container25">
                  <div className="home-icon-container11">
                    <div className="home-container26">
                      <img
                        alt="image"
                        src="/playground_assets/image-h3uk-200h.jpeg"
                        className="home-image15"
                      />
                    </div>
                  </div>
                  <div className="home-subcontent-container11">
                    <h1 className="home-text159">Python for Data Science</h1>
                    <span className="home-text160">
                      <span>NPTEL</span>
                      <br></br>
                      <span>Issued on April 2022</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-container27">
                  <div className="home-icon-container12">
                    <div className="home-container28">
                      <img
                        alt="image"
                        src="/playground_assets/image-953-200h.jpeg"
                        className="home-image16"
                      />
                    </div>
                  </div>
                  <div className="home-subcontent-container12">
                    <h1 className="home-text165">
                      Google Cloud Fundamentals for AWS Professionals
                    </h1>
                    <span className="home-text166">
                      <span>Coursera</span>
                      <br></br>
                      <span>Issued on March 2022</span>
                      <br></br>
                    </span>
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/VSYZJA2X2LRF"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link17 button"
                    >
                      <span className="home-text171">
                        <span>View Certificate</span>
                        <br></br>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="home-container29">
                  <div className="home-icon-container13">
                    <div className="home-container30">
                      <img
                        alt="image"
                        src="/playground_assets/image-rgro-200h.jpeg"
                        className="home-image17"
                      />
                    </div>
                  </div>
                  <div className="home-subcontent-container13">
                    <h1 className="home-text174">
                      CSS - Basic To Advanced for front end development
                    </h1>
                    <span className="home-text175">
                      <span>Udemy</span>
                      <br></br>
                      <span>Issued on August 2021</span>
                      <br></br>
                    </span>
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-53a9184c-9d01-47fb-8ef8-23927756bee7.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link18 button"
                    >
                      <span className="home-text180">
                        <span>View Certificate</span>
                        <br></br>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="home-container31">
                  <div className="home-icon-container14">
                    <div className="home-container32">
                      <img
                        alt="image"
                        src="/playground_assets/image-icn-200h.jpeg"
                        className="home-image18"
                      />
                    </div>
                  </div>
                  <div className="home-subcontent-container14">
                    <h1 className="home-text183">
                      Graphic Design Masterclass - Learn Great Design
                    </h1>
                    <span className="home-text184">
                      <span>Udemy</span>
                      <br></br>
                      <span>Issued on November 2020</span>
                      <br></br>
                    </span>
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-bf25af40-302e-43ad-a4e3-ab4dcb8b90aa.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link19 button"
                    >
                      <span className="home-text189">
                        <span>View Certificate</span>
                        <br></br>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-section-separator5"></div>
      <div className="home-section-separator6"></div>
      <section className="home-education">
        <div className="home-heading-container4">
          <h2 className="home-text192 Section-Heading">Education</h2>
        </div>
        <div className="home-cards-container">
          <div className="home-card3">
            <div className="home-icon-container15">
              <img
                alt="image"
                src="/playground_assets/symbiosis_indore-300h.jpg"
                className="home-image19"
              />
            </div>
            <div className="home-content-container3">
              <span className="home-heading3 Card-Heading">Graduation</span>
              <span className="home-text193">
                <span>
                  Institute :
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text195">
                  Symbiosis University of Applied Sciences
                </span>
                <br></br>
                <span>
                  From :
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text198">2020 - 2024</span>
                <br className="home-text199"></br>
                <span className="home-text200">
                  CGPA :
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text201">9.58</span>
                <br className="home-text202"></br>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-card4">
            <div className="home-icon-container16">
              <img
                alt="image"
                src="/playground_assets/sgsamnem-400h.jpg"
                className="home-image20"
              />
            </div>
            <div className="home-content-container4">
              <span className="home-heading4 Card-Heading">
                Higher Secondary School
              </span>
              <span className="home-text204">
                <span className="home-text205">Institute :</span>
                <span>Shri Gujarati Samaj A.M.N.E.M. School</span>
                <br></br>
                <span className="home-text208">From:</span>
                <span> 2019 - 2020</span>
                <br></br>
                <span className="home-text211">Percentage :</span>
                <span> 87.8%</span>
              </span>
            </div>
          </div>
          <div className="home-card5">
            <div className="home-icon-container17">
              <img
                alt="image"
                src="/playground_assets/sgsamnem-400h.jpg"
                className="home-image21"
              />
            </div>
            <div className="home-content-container5">
              <span className="home-heading5 Card-Heading">
                Secondary School
              </span>
              <span className="home-text213">
                <span className="home-text214">Institute :</span>
                <span>Shri Gujarati Samaj A.M.N.E.M. School</span>
                <br></br>
                <span className="home-text217">From:</span>
                <span> 2017 - 2018</span>
                <br></br>
                <span className="home-text220">Percentage :</span>
                <span> 87%</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="home-section-separator7"></div>
      <div className="home-section-separator8"></div>
      <div id="contact" className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <a
              href="https://www.linkedin.com/in/ojas-sharma-179948201/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link20"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ojas24102002/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link21"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">Copyright, 2023</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
