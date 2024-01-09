import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import IconButton from '@mui/material/IconButton';

import Iconify from '@/src/components/iconify';
import { Box, Card, CardContent, Grid, Typography  } from '@mui/material';

const Index = () => {
  return (
    <Layout>
      <div className="pt-130 bg-primary">
        <section
          className="hero-section gap"
          style={{ backgroundImage: "url(/assets/img/background_miss_ci_2023.jpg)" }}
        >
          
          <div className="full-absolute overlaw-landing">
            <div className="cover-border-gold">
              <div className="absolute-rs">
                <a href="http://fb" target='_blank'>
                  <img src="/assets/img/icone_facebook.png" alt="icone_facebook.png" srcset="/assets/img/icone_facebook.png" />
                </a>
                <a href="http://inst" target='_blank'>
                  <img src="/assets/img/icone_instagram.png" alt="icone_instagram.png" srcset="/assets/img/icone_instagram.png" />
                </a>
                <a href="http://you" target='_blank'>
                  <img src="/assets/img/icone_youtube.png" alt="icone_youtube.png" srcset="/assets/img/icone_youtube.png" />
                </a>
                <a href="http://xx" target='_blank'>
                  <img src="/assets/img/icone_twitter.png" alt="icone_twitter.png" srcset="/assets/img/icone_twitter.png" />
                </a>
              </div>

              <div className="absolute-web-tv">
                <div className="block-bg-live relative flex flex-center">
                  <Box
                  component='div'
                  className="bg-white border-arround abolute-text-tv"
                  >

                    <Typography variant="span" sx={{color: 'black', fontSize: 13, fontWeight: 'bolder' }}>WebTv</Typography>
                  </Box>
                  <div style={{width: 40, height: 40, backgroundColor: 'rgba(0,0,0,.2)', borderRadius: 20}}>
                    <IconButton aria-label="delete">
                    <Iconify icon="solar:play-bold-duotone" sx={{color: 'white'}} />
                    </IconButton>
                  </div>
                 </div>
                  
              </div>
              <div className="container heigth-90">
                <div className="row align-items-center">
                  <div
                    className="col-lg-4"
                    data-aos="fade-up"
                    data-aos-delay={200}
                    data-aos-duration={300}
                  >
                    <div className="bloc-left-heros flex flex-end flex-column">
                      <img className="img-inner" src="/assets/img/miss_ci_2023.png" alt="missAssets" srcset="/assets/img/miss_ci_2023.png" />
                    </div>
                  </div>
                  <div
                    className="col-lg-8"
                    data-aos="fade-up"
                    data-aos-delay={300}
                    data-aos-duration={400}
                  >
                    <div className="flex flex-column bloc-content spacing-3">
                      <img alt='miss-banner' src="/assets/img/logo_miss_ci_2023.png" />
                      <Box
                        component='h1'
                        className="title-section"
                        >
                          
                          QUI REMPORTERA LA 
                        <Typography variant="span"> FINALE </Typography>
                        ?
                      </Box>
                     
                      <div className="flex flex-center spacing-1">
                        <Link href="/competitions" className="button button-2">VOTER ICI</Link>
                        <Link href="/competitions" className="button button-2">RESERVER UN TICKET</Link>
                        <Link href="/competitions" className="button button-2">LES PRESELECTIONS</Link>
                      </div>
                      <div className="clock-sys">
                      <FlipClockCountdown
                        to={new Date('2024-01-23T07:40:17.525Z').getTime()}
                        labels={['Jours', 'Heures', 'Minutes', 'Secondes']}
                        labelStyle={{ fontSize: 20, fontWeight: 500, textTransform: 'uppercase' }}
                        digitBlockStyle={{ width: 50, height: 60, fontSize: 30, backgroundColor: '#816b3a' }}
                        dividerStyle={{ color: 'transparent', height: 1 }}
                        separatorStyle={{ color: 'transparent', size: '6px' }}
                        duration={0.5}
                      >
                      </FlipClockCountdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlaw-black">
              
          </div>
          
        </section>
      </div>
      {/* works-section */}

      <section className="event-ticket p-b-15 gap">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Box
            component='div'
            className="flex flex-center flex-column"
            sx={{marginTop: 5}}
            >
              <Box
              component='div'
              className="flex flex-center flex-column block-event-tiket"
              >
                <Box
                component='h1'
                className="title-section"
                sx={{textAlign: 'center'}}
                >
                  UN ÉVÈNEMENT À NE PAS 
                  <Typography variant="span"> MANQUER </Typography>
                </Box>
                <img src="/assets/img/asterisque.png" alt="asterisque"/>
                <Card sx={{backgroundColor: '#181717'}}>
                  <CardContent className="flex flex-center flex-column card-content-ticket" sx={{padding: 3}} >
                  <Typography variant="h3"> Reservez votre place aux évènements de Miss Côte d'Ivoire 2023 ici </Typography>
                  <Grid container sx={{marginTop: 6}}>
                    <Grid item xs={6} sx={{display: 'flex' }} className='flex-center' >
                      <Box
                      component='div'
                      sx={{backgroundColor: '#e6b454', width: 15, height: 15, borderRadius: 10, marginRight: 1}}
                      >
                      </Box>
                      <Typography variant="span" sx={{color: 'white'}}>Préselections</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{display: 'flex' }} className='flex-center' >
                      <Box
                      component='div'
                      sx={{backgroundColor: '#e6b454', width: 15, height: 15, borderRadius: 10, marginRight: 1}}
                      >
                      </Box>
                      <Typography variant="span" sx={{color: 'white'}}>Finale</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{marginTop: 5}}>
                      <Link href="/competitions" className="button button-2 width-100">ACCÉDER À LA BILLETERIE</Link>
                    </Grid>
                  </Grid>

                  </CardContent>
                </Card>
              </Box>
             
            </Box>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 p-0 m-0">
            <Grid container spacing={0}>
              <Grid className="img-skew" item xs={4} sx={{background: 'url(/assets/img/miss-1.jpeg) no-repeat center'}}>
              </Grid>
              <Grid className="img-skew" item xs={4} sx={{background: 'url(/assets/img/miss-2.jpeg) no-repeat top'}}>
              </Grid>
              <Grid className="img-skew" item xs={4} sx={{background: 'url(/assets/img/miss-3.jpeg) no-repeat center'}}>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>

      <section className="news-section gap py-15">
        <div className="container">
          <Card sx={{marginY: 2}}>
            <CardContent>
              <Box
              component='div'
              sx={{padding: 2}}
              >

                </Box>
            </CardContent>
          </Card>
          <h2>À la Une</h2>
          <div className="row">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="news-posts-one">
                <img alt="man" src="/assets/img/photo-8.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">news</a> <a href="#">quickeat</a>
                </div>
                <h3>We Have Received An Award For The Quality Of Our Work</h3>
                <p>
                  Donec adipiscing tristique risus nec feugiat in fermentum.
                  Sapien eget mi proin sed libero. Et magnis dis parturient
                  montes nascetur. Praesent semper feugiat nibh sed pulvinar
                  proin gravida.
                </p>{" "}
                <Link href="/single-blog">
                  Voir Plus
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <ul className="data">
                  <li>
                    <h6>
                      <i className="fa-solid fa-user" />
                      par COMICI France
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-regular fa-calendar-days" />
                      01.Jan. 2022
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-solid fa-eye" />
                      132
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="news-post-two">
                <img alt="food-img" src="/assets/img/food-1.jpg" />
                <div className="news-post-two-data">
                  <div className="quickeat">
                    {" "}
                    <a href="#">restaurants</a> <a href="#">cooking</a>
                  </div>
                  <h6>
                    <Link href="single-blog">
                      With COMICI France you can order food for the whole day
                    </Link>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor...
                  </p>
                  <ul className="data">
                    <li>
                      <h6>
                        <i className="fa-solid fa-user" />
                        par COMICI France
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa-regular fa-calendar-days" />
                        01.Jan. 2022
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa-solid fa-eye" />
                        132
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="news-post-two">
                <img alt="food-img" src="/assets/img/food-2.jpg" />
                <div className="news-post-two-data">
                  <div className="quickeat">
                    {" "}
                    <a href="#">restaurants</a> <a href="#">cooking</a>
                  </div>
                  <h6>
                    <Link href="single-blog">127+ Couriers On Our Team!</Link>
                  </h6>
                  <p>
                    Urna condimentum mattis pellentesque id nibh tortor id
                    aliquet. Tellus at urna condimentum mattis...
                  </p>
                  <ul className="data">
                    <li>
                      <h6>
                        <i className="fa-solid fa-user" />
                        par COMICI France
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa-regular fa-calendar-days" />
                        01.Jan. 2022
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa-solid fa-eye" />
                        132
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="news-post-two end">
                <img alt="food-img" src="/assets/img/food-3.jpg" />
                <div className="news-post-two-data">
                  <div className="quickeat">
                    {" "}
                    <a href="#">restaurants</a> <a href="#">cooking</a>
                  </div>
                  <h6>
                    <Link href="single-blog">
                      Why You Should Optimize Your Menu for Delivery
                    </Link>
                  </h6>
                  <p>
                    Enim lobortis scelerisque fermentum dui. Sit amet cursus sit
                    amet dictum sit amet. Rutrum tellus...
                  </p>
                  <ul className="data">
                    <li>
                      <h6>
                        <i className="fa-solid fa-user" />
                        par COMICI France
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa-regular fa-calendar-days" />
                        01.Jan. 2022
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa-solid fa-eye" />
                        132
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* your-favorite-food */}
      <section
        className="your-favorite-food gap"
        style={{ backgroundImage: "url(assets/img/background-1.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="food-photo-section">
                <img alt="img" src="/assets/img/beginCandidate.jpeg" />{" "}
                <a href="#" className="one">
                  <i className="fa-solid fa-award" />
                  Nominations
                </a>{" "}
                <a href="#" className="two">
                  <i className="fa-solid fa-cheese" />
                  Présselections
                </a>{" "}
                <a href="#" className="three">
                  <i className="fa-solid fa-gamepad" />
                  Candidatures
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 offset-lg-1"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="food-content-section">
                <h2>Devenez la prochaine MISS</h2>
                <p>
                  car oui, la courone peut vous rentrer.
                </p>{" "}
                <Link href="/create-candidature" className="button button-2">
                  INSCRIVEZ-VOUS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* reviews-sections */}
      <section className="reviews-sections gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="reviews-content">
                <h2>Nos diffèrents partenaires prennent la paroles</h2>
                <div className="custome owl-carousel">
                  <Swiper {...sliderProps.index1Testmoninal}>
                    <SwiperSlide className="item">
                      <h4>
                        "Dapibus ultrices in iaculis nunc sed augue lacus
                        viverra vitae. Mauris a diam maecenas sed enim. Egestas
                        diam in arcu cursus euismod quis. Quam quisque id diam
                        vel".
                      </h4>
                      <div className="thomas">
                        <img alt="girl" src="/assets/img/photo-5.jpg" />
                        <div>
                          <h6>Thomas Adamson</h6>
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                      <h4>
                        "Dapibus ultrices in iaculis nunc sed augue lacus
                        viverra vitae. Mauris a diam maecenas sed enim. Egestas
                        diam in arcu cursus euismod quis. Quam quisque id diam
                        vel".
                      </h4>
                      <div className="thomas">
                        <img alt="girl" src="/assets/img/photo-5.jpg" />
                        <div>
                          <h6>Thomas Adamson</h6>
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                      <h4>
                        "Dapibus ultrices in iaculis nunc sed augue lacus
                        viverra vitae. Mauris a diam maecenas sed enim. Egestas
                        diam in arcu cursus euismod quis. Quam quisque id diam
                        vel".
                      </h4>
                      <div className="thomas">
                        <img alt="girl" src="/assets/img/photo-5.jpg" />
                        <div>
                          <h6>Thomas Adamson</h6>
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="owl-nav mt-4">
                    <button className="owl-prev">
                      <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="owl-next ms-3">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="reviews-img">
                <img alt="photo" src="/assets/img/photo-4.png" />
                <i className="fa-regular fa-thumbs-up" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </Layout>
  );
};
export default Index;
