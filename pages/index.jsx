import React, { useState, useEffect } from 'react';
import PreLoader from "@/src/layouts/PreLoader";

import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import IconButton from '@mui/material/IconButton';
import ConsumApi from '@/src/services_workers/consum_api';
import Iconify from '@/src/components/iconify';
import { Box, Card, CardContent, Grid, Typography  } from '@mui/material';
import ActiveEdition from '@/src/components/ActiveEdition';
import Typewriter from 'typewriter-effect';
import { apiUrlAsset } from '@/src/constants/apiUrl';
import { getFirstItineranceOnTitle, getLastItineranceOnTitle } from '@/src/utils/format-string';
import { fNumber } from '@/src/utils/format-number';
import { fDateByDateString } from '@/src/utils/format-date';

const Index = () => {
  const [allActualities, setAllActualities] = useState([]);
  const [preselections, setPreselections] = useState([]);
  const [competitions, setCompotetions] = useState([]);
  const [indexSlider, setIndexSlider] = useState(0);
  const [preLoader, setPreLoader] = useState(true);


  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const {success, data:actualities} = await ConsumApi.getAllActualities();
    const {data:allCompetions} = await ConsumApi.getAllCompetitions({level:0});
    const {data:allPreselections} = await ConsumApi.getAllEventByAttribut({display:1, level:1});
    if(success) {
      setAllActualities(actualities);
      setPreselections(allPreselections);
      setCompotetions(allCompetions);
      setPreLoader(false);

    }
  }

  const prevSlide = () => {
    if(indexSlider > 0) {
      setIndexSlider((currentCount) => currentCount - 1);
    } else {
      setIndexSlider(0);
    }
  }
  const nextSlide = () => {
    if(indexSlider < competitions.length - 1) {
      const newIndex = indexSlider + 1;
      setIndexSlider(newIndex);
    } else {
      setIndexSlider(0);
    }
  }

  if(preLoader) {
    return (<PreLoader />)
  }
  return (
    <Layout>
      <div className="pt-130 bg-primary">
        {competitions.length > 0 &&  (
        <section
        key={competitions[indexSlider].slug}
        className="hero-section radius-section gap"
        style={{ backgroundImage: `url(${apiUrlAsset.competitions}/${competitions[indexSlider].cover})` }}
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
                    <img className="img-inner" src={`${apiUrlAsset.competitions}/${competitions[indexSlider].imageMiss}`} alt="missAssets" srcset={`${apiUrlAsset.competitions}/${competitions[indexSlider].imageMiss}`} />
                  </div>
                </div>
                <div
                  className="col-lg-8"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={400}
                >
                  <div className="flex flex-column bloc-content titleTyping spacing-3">
                    <Typography variant="h1" className='titleH1'>
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter.typeString(getFirstItineranceOnTitle(competitions[indexSlider].describe))
                            .pauseFor(2000)
                            .typeString(`<span class="titleSpan"> ${getLastItineranceOnTitle(competitions[indexSlider].describe)} </span>`)
                            .callFunction(() => {
                              setTimeout(nextSlide,10000)
                            })
                            .start();
                        }}
                      />
                      </Typography>
                    <div className="flex flex-center spacing-1">
                      <Link href={`/details-competitions/${competitions[indexSlider].id}/${competitions[indexSlider].title.toLocaleUpperCase()}`} className="button button-2">VOTER ICI</Link>
                      <Link href={`/details-competitions/${competitions[indexSlider].id}/${competitions[indexSlider].title.toLocaleUpperCase()}`} className="button button-2">RESERVER UN TICKET</Link>
                    </div>
                    <div className="clock-sys">
                    <FlipClockCountdown
                      to={new Date(competitions[indexSlider].events[0].endDate).getTime()}
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
      </section>)
        }
      </div>
      {preselections.length > 0 &&  (
        <section
        className="hero-section about gap"
        style={{ backgroundImage: "url(/assets/img/background.png)" }}
        >
          <ActiveEdition editions={preselections} title='Préselections en cours' fullDisplay={false} itemSelected={preselections[0].years}  />
        </section>
      )}
      <section className='edition-active'>
        <div className="container">
        </div>

      </section>

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
                      <Link href="/edition" className="button button-2 width-100">ACCÉDER À LA BILLETERIE</Link>
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
                <img alt={allActualities[0].cover} src={`${apiUrlAsset.actualites}/${allActualities[0].cover}`} srcSet={`${apiUrlAsset.actualites}/${allActualities[0].cover}`} />
                
                <h3>{allActualities[0].title}</h3>
                <p>
                {allActualities[0].hat}
                </p>{" "}
                <Link href={`/details-actuality/${allActualities[0].slug}`}>
                  Voir Plus
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <ul className="data">
                  <li>
                    <h6>
                      <i className="fa-solid fa-user" />
                      par {allActualities[0].autherName}
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-regular fa-calendar-days" />
                      {fDateByDateString(allActualities[0].created_at.split('T')[0])}
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-solid fa-eye" />
                      {fNumber(allActualities[0].numberVue)}
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
              {
                allActualities.slice(1,4).map((actuality, index) =>(
                  <div className="news-post-two" key={`actuality-${index}`}>
                    <img alt={actuality.cover} src={`${apiUrlAsset.actualites}/${actuality.cover}`} srcSet={`${apiUrlAsset.actualites}/${actuality.cover}`} />
                    <div className="news-post-two-data">
                      
                      <h6>
                        <Link href={`/details-actuality/${actuality.slug}`}>
                        {actuality.title}
                        </Link>
                      </h6>
                      <p>
                      {actuality.hat}
                      </p>
                      <ul className="data">
                        <li>
                          <h6>
                            <i className="fa-solid fa-user" />
                            par {actuality.autherName}
                          </h6>
                        </li>
                        <li>
                          <h6>
                            <i className="fa-regular fa-calendar-days" />
                            {fDateByDateString(actuality.created_at.split('T')[0])}
                          </h6>
                        </li>
                        <li>
                          <h6>
                            <i className="fa-solid fa-eye" />
                            {fNumber(actuality.numberVue)}
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))
              }
              <div className="col-sm-12">
                  <div
                        className="button-gap"
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration={300}
                      >
                        <Link href="/actualities" className="button button-2 non">
                          Voir plus
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
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
