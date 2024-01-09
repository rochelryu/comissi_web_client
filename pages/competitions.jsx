import { useState, useEffect } from "react";
import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import ConsumApi from '@/src/services_workers/consum_api';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import {apiUrlAsset} from '@/src/constants/apiUrl';
const Restaurants = () => {
  const [competitions, setCompetitions] = useState([]);
  const [isFetching, setFetch] = useState(true);

  useEffect(() => {
    loadData();
  window.scrollTo(0, 0);
  }, []);

  const loadData = async () => {
    const {success, data} = await ConsumApi.getAllCompetitions();
    if(success) {
      setCompetitions(data);
      setFetch(false);
    }
  }


  return (
    <Layout>
      <section
        className="banner pt-115"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="container">
          {
            isFetching ? 
            <Card sx={{width: '100%', height: '32vh', marginBottom: 2}} >
                <Skeleton variant="rectangular" width="100%" height="100%" animation="pulse" />
            </Card>
            :
            <div
                className="banner-img"
                style={{ background: `url(${apiUrlAsset.competitions}/${competitions[0].cover}) center no-repeat`, }}
              >
                <div className="full-absolute width-100 z-index-primary">
                  <div className="banner-logo">
                    <h4>
                      La Grande
                      <br />
                      Final
                      <span className="chevron chevron--left" />
                    </h4>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-12">
                      <div className="choose-lunches">
                        <h2>{competitions[0].title.toString().toLocaleUpperCase()}</h2>
                        <h3>{competitions[0].events[0].years}</h3>{" "}
                        <Link className="button button-2 non" href={`/competitions/${competitions[0].slug}`}>
                          Entrer
                          <i className="fa-solid fa-arrow-right" />
                          </Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overlaw-black-2">
                  
              </div>
            </div>
          }
          
        </div>
      </section>

      <section className="best-restaurants gap">
        <div className="container">
          <div className="row">

            { isFetching ? 
            (Array.from(new Array(5))).map((item, index) =>(
              <div
                className="col-lg-6"
                data-aos="flip-up"
                data-aos-delay={300}
                data-aos-duration={400}
              >
                <Card sx={{width: '100%', height: 200, marginBottom: 2}} >
                    <Skeleton variant="rectangular" width="100%" height="100%" animation="pulse" />
                </Card>
              </div>
            ))
            :
            competitions.length > 1 && competitions.slice(1).map((competition, index) =>(
                <div
                key={competition.slug}
                  className="col-lg-6"
                  data-aos="flip-up"
                  data-aos-delay={300}
                  data-aos-duration={400}
                >
                  <div className="logos-card restaurant-page">
                    <img alt={competition.slug} src={`${apiUrlAsset.competitions}/${competition.cover}`} />
                    <div className="cafa">
                      <h4>
                        <Link href={`/competitions/${competition.slug}`}>{competition.title.toLocaleUpperCase()}</Link>
                      </h4>
                      {/* <div>
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div> */}
                      <div className="cafa-button">
                        <a href="#">Dernière édition : {competition.events[0].years}</a>{competition.events[0].tickets.slice(0, competition.events[0].tickets.length > 1 ? 2: 1).map((ticket, index) => ( <a key={`tiket-${competition.events[0].slug}-${index}`} href="#" className={index == competition.events[0].tickets.length - 1 ? 'end': ''}>{ticket.priceTicket} {competition.events[0].devise}</a> ))}
                      </div>
                      <p>
                        {competition.describe.substring(0,competition.describe.length > 160 ? 160: competition.describe.length)}...
                      </p>
                    </div>
                  </div>
                </div>
              )

              )
            }
            
            
          </div>
        </div>
      </section>
      {/* subscribe-section */}
      <Subscribe />
    </Layout>
  );
};
export default Restaurants;
