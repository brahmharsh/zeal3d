import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { RiSearchLine, RiMenuFill, RiArrowDownSLine, RiSendPlaneFill } from 'react-icons/ri'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BsArrowRight, BsCheck, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { useState } from 'react'


export default function Home() {

  const navMenu = ['Home', 'Projects', 'Localities', 'Developers']
  const [activeNav, setActiveNav] = useState('Home')
  const [bedrooms, setBedrooms] = useState(2)
  const projects = [
    { logoSrc: '/assets/lodha.png', name: 'Lodha Group', experience: '35+ years of experience', done: '140+ Projects Done' },
    { logoSrc: '/assets/prestige.png', name: 'Prestige Group', experience: '35+ years of experience', done: '140+ Projects Done' },
    { logoSrc: '/assets/brigade.png', name: 'Brigade Group', experience: '35+ years of experience', done: '140+ Projects Done' },
    { logoSrc: '/assets/brigade.png', name: 'Brigade Group', experience: '35+ years of experience', done: '140+ Projects Done' },
  ]
  return (
    <div>
      <Head>
        <title>Zeal</title>
        <meta name="description" content="Zeal 3D" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className={styles.banner}>
        <div className={styles.bannerLeft}>
          <img className={styles.logoImg} src="/assets/logo.png" alt="Logo" />
          <h1>We Help You <br></br>
            Building The Dreams <br></br>& Bring More Than <br></br> You Expect
          </h1>
          <div className={styles.searchBtn}><h4>Search Properties</h4> <RiSearchLine style={{ marginLeft: 15, fontSize: 22 }} /></div>
        </div>
        <div>
          <img className={styles.bannerImg} src="/assets/banner.png" alt="Banner" />
        </div>
      </div>

      <header className={styles.navSection}>
        <div className={styles.navContainer}>
          {
            navMenu.map((i) => <div onClick={() => setActiveNav(i)} className={`${styles.navItems} ${i === activeNav ? styles.navActiveBtn : styles.navNotActiveBtn}`} key={i}><h5>{i}</h5></div>)
          }
          <div className={styles.navMenuBtn}><RiMenuFill style={{ fontSize: 30 }} /></div>
        </div>
      </header>


      <div className={styles.projectContainer}>
        {
          projects.map((i, index) =>
            <div key={index} className={styles.projectBox}>
              <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <img src={i.logoSrc} alt="Brand Logo" style={{ height: i.name === 'Lodha Group' ? 90 : 172 }} />
              </div>
              <div style={{ flex: 1, padding: '5px 30px 20px 30px' }}>
                <h4 style={{ margin: 0 }}>{i.name}</h4>
                <p style={{ fontFamily: 'MontserratRegular', fontSize: 19, margin: 0, marginTop: 10, letterSpacing: .4 }}>{i.experience}</p>
                <h5 style={{ margin: 0, marginTop: 15, color: '#12B7B6' }}>{i.done}</h5>
                <div className={styles.checkProfileBtn}><h5>Check profile</h5><div className={styles.checkProfileCircleBtn}><RiArrowDownSLine /> <RiArrowDownSLine style={{ marginTop: -20 }} /></div></div>
              </div>
            </div>
          )
        }
      </div>


      <section className={styles.searchSection}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div className={styles.searchBarContainer}>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <input type="text" placeholder="Search Property Name, Locality, Developer" />
                <h5 style={{ marginLeft: 30 }}>Bedrooms</h5>
                <div className={styles.bedroomBtnsContainer}>
                  <div onClick={() => setBedrooms(bedrooms === 0 ? 0 : bedrooms - 1)} style={{ left: 3, cursor: 'pointer' }} className={styles.bedroomCircleBtn}><AiOutlineMinus /></div>
                  <p style={{ fontSize: 16, color: '#a8a8a8' }}>{bedrooms}</p>
                  <div onClick={() => setBedrooms(bedrooms + 1)} style={{ right: 3, cursor: 'pointer' }} className={styles.bedroomCircleBtn}><AiOutlinePlus /></div>
                </div>
              </div>
              <div style={{ flex: 1, alignItems: 'center', display: 'flex', paddingTop: 25 }}>
                <h5>Price Segment</h5>
                <div className={styles.affordableBtnsContainer}>
                  <div style={{ left: 3, fontSize: 38 }} className={styles.affordableCircleBtn}><BsArrowLeftShort /></div>
                  <p style={{ fontSize: 17 }}>Affordable</p>
                  <div style={{ right: 3, fontSize: 38 }} className={styles.affordableCircleBtn}><BsArrowRightShort /></div>
                </div>
                <h5 style={{ marginLeft: 54 }}>Ready to Move</h5>
                <div className={styles.toggleBtnContainer}>
                  <div className={styles.toggleBtn}>
                    <BsCheck style={{ fontSize: 35, color: '#CDCDCD' }} />
                  </div>
                </div>
                <div className={styles.advanceFilterBtn}>
                  <h5>Advance Filter</h5>
                </div>
              </div>
            </div>
            <div style={{ flex: .1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className={styles.searchCircleBtn}>
                <div className={styles.searchCircleBtnInnerCircle}>
                  <RiSearchLine style={{ fontSize: 35, color: '#12B7B6' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.quickExploreSection}>
        <div style={{ flex: .47, display: 'flex', fontSize: '1vw' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <img src="/assets/quick-explore-1.png" style={{ height: '100%' }} />
            <div className={styles.transBlack} style={{ opacity: .75, display: 'flex', justifyContent: 'center' }}>
              <p style={{ position: 'absolute', bottom: '8%', zIndex: 2, fontWeight: 'bold', fontSize: 22, fontFamily: 'MontserratBold', letterSpacing: 1 }}>Ashiyana</p>
            </div>

          </div>
          <div style={{ flex: 1, position: 'relative' }}>
            <img src="/assets/quick-explore-2.png" style={{ height: '100%' }} />
            <div className={styles.transBlack} style={{ opacity: .85, display: 'flex', justifyContent: 'center' }}>
              <p style={{ position: 'absolute', bottom: '8%', zIndex: 2, fontWeight: 'bold', fontSize: 22, fontFamily: 'MontserratBold', letterSpacing: 1 }}>Lodha Miracles</p>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, background: 'blue', overflow: 'hidden', position: 'relative' }}>
          <img src="/assets/quick-explore.png" style={{ width: '100%' }} />
          <div className={styles.transBlack} style={{ opacity: .4 }}>
            <div style={{ position: 'absolute', top: '8%', left: '10%', zIndex: 2 }}>
              <h3 style={{ margin: 0 }}>Lodha Miracles</h3>
              <p style={{ fontSize: 17, margin: 0, marginTop: 10 }}>Andheri East, Mumbai</p>
              <p style={{ fontSize: 17, margin: 0, marginTop: 10 }}>₹ 450K - 680K</p>
              <div style={{ display: 'flex', marginTop: 10 }}>
                <div className={styles.bhkBox}>1BHK</div>
                <div className={styles.bhkBox}>2BHK</div>
                <div className={styles.bhkBox}>Rental</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div style={{padding:'0px 100px 0px 100px'}}>
        <h2>Property Selection Process</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et.</p>
        </div>
        <img src="assets/process.png" style={{width: '100%'}} />
      </section>

      <section>
        <div style={{ padding: '70px 77px 0px 77px' }}>
          <h2>Localities</h2>
          <p style={{ lineHeight: 1.5, fontSize: 18 }}>Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod <br></br>tempor incididunt ut labore et.</p>
        </div>
        <div className={styles.localitiesContainer}>
          <div className={styles.localitiesBox} style={{ marginLeft: -50 }}>
            <div className={styles.localitiesInsideBox} style={{ height: '96%', width: '96%', borderRadius: 28 }}>
              <img src="/assets/localities.png" style={{ height: '100%', width: '100%' }} />
              <div style={{ position: 'absolute', bottom: 20, color: 'white', left: 30, zIndex: 2 }}>
                <h3 style={{ fontSize: 30, margin: 0 }}>Bandra</h3>
                <p style={{ margin: 0, marginTop: 5, fontSize: 17 }}>Sea-facing, spacious</p>
              </div>
              <div className={styles.transBlack}>
              </div>
            </div>
          </div>
          <div className={styles.localitiesBox} style={{ height: 420, width: 550, margin: 50 }}>
            <div className={styles.localitiesInsideBox}>
              <img src="/assets/localities.png" style={{ height: '100%' }} />
              <div style={{ position: 'absolute', bottom: 30, color: 'white', left: 30, zIndex: 2 }}>
                <h3 style={{ fontSize: 35, margin: 0 }}>Bandra</h3>
                <p style={{ margin: 0, marginTop: 5, fontSize: 18 }}>Sea-facing, spacious</p>
              </div>
              <div className={styles.transBlack}>
              </div>
            </div>
          </div>
          <div className={styles.localitiesBox} style={{ marginRight: -50 }}>
            <div className={styles.localitiesInsideBox} style={{ height: '96%', width: '96%', borderRadius: 28 }}>
              <img src="/assets/localities.png" style={{ height: '100%', width: '100%' }} />
              <div style={{ position: 'absolute', bottom: 20, color: 'white', left: 30, zIndex: 2 }}>
                <h3 style={{ fontSize: 30, margin: 0 }}>Bandra</h3>
                <p style={{ margin: 0, marginTop: 5, fontSize: 17 }}>Sea-facing, spacious</p>
              </div>
              <div className={styles.transBlack}>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutUsSection}>
        <div className={styles.aboutUsLeft}>
          <h2>About Us</h2>
          <h2 style={{ fontSize: 25, marginTop: 95 }}>Key Points About Company</h2>
          <h2 style={{ lineHeight: 1.5, fontSize: 17, marginTop: 30 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h2>
          <div style={{ background: 'transparent', width: 300, height: 250 }}></div>
          <div style={{ display: 'flex', width: 260, justifyContent: 'space-between', marginTop: 100, fontSize: 26 }}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <RiSendPlaneFill />
          </div>
        </div>
        <div style={{ flex: .5, padding: 100 }}></div>
      </section>

      <section style={{paddingBottom:130}}>
        <div style={{padding:'80px 77px 70px 77px'}}>
          <h2 style={{}}>What We Do</h2>
        </div>
        <div className={styles.wwdBoxesContainer}>
          {
            [1, 2, 3].map((i, index) =>
              <div className={styles.wwdBox} key={index}>
                <div className={styles.wwdOuterCircle}>
                  <div className={styles.wwdInnerCircle}>
                    <img src="/assets/wwd1.png" />
                  </div>
                </div>
                <h4 style={{margin:'40px 30px 30px 30px '}}>3D Planning</h4>
                <p1 style={{lineHeight:1.5, fontSize:18}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p1>
              </div>
            )
          }
        </div>
      </section>

      <section className={styles.recentProjectSection}>
        <h2>Check Our Recent Project</h2>
        <p style={{lineHeight:1.5, fontSize:18, fontFamily:'MontserratLight'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velita.</p>
        <img src="/assets/recent-project.png" />
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <img src="/assets/footer-image.png" />
        </div>
        <div className={styles.footerRight}>
          <img src="/assets/footer-logo.png" />
          <p style={{ color: '#a8a8a8', lineHeight:2, fontSize:17, letterSpacing:.5}}>Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt
            ut labore et.</p>
          <input type='text' placeholder="Your Name" />
          <input type='text' placeholder="yourmailaddressplease@mail.com" style={{ marginTop: 25 }} />
          <div className={styles.footerBtn}>
            <h4>Get in Touch With Us </h4>
            <BsArrowRight style={{ fontSize: 35, marginLeft: 15 }} />
          </div>
        </div>
      </footer>
    </div>
  )
}
