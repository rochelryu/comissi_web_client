import React, { useState, useEffect } from 'react';

import Subscribe from "@/src/components/Subscribe";
import EventItem from "@/src/components/EventItem";
import Layout from "@/src/layouts/Layout";
import { useRouter } from 'next/router';
import ConsumApi from '@/src/services_workers/consum_api';

const CompetitionDetails = () => {
    const router = useRouter();
    const [competition, setCompetition] = useState({});
    const [isFetching, setFetch] = useState(true);

    useEffect(() => {
      loadData();
      window.scrollTo(0, 0);
    }, []);
  
    const loadData = async () => {
      const { id } = router.query;
      const {success, data} = await ConsumApi.getAllEventByCompetitionSlug({slug: id.trim()});
      if(success) {
        setCompetition(data[0]);
        setFetch(false);
      }
    }
  return (
    <Layout>
      <section
        className="hero-section about gap pt-115"
        style={{ backgroundImage: "url(/assets/img/background.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {
              !isFetching && <EventItem item={competition.events[0]} describe={competition.describe}  />
            }
          </div>
        </div>
      </section>

      <section className="works-section gap" style={{ background: "#fcfcfc" }}>
        <div className="container">
          <div
            className="hading"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <h2>Les éditions précédentes</h2>
            
          </div>
          <div className="row ">
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/Illustration-1.png" />
                <h4>Select Restaurant</h4>
                <p>
                  Non enim praesent elementum facilisis leo vel fringilla.
                  Lectus proin nibh nisl condimentum id. Quis varius quam
                  quisque id diam vel.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/Illustration-2.png" />
                <h4>Select menu</h4>
                <p>
                  Eu mi bibendum neque egestas congue quisque. Nulla facilisi
                  morbi tempus iaculis lectus urna id volutpat lacus. Odio ut
                  sem nulla{" "}
                </p>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/illustration-3.png" />
                <h4>Wait for delivery</h4>
                <p>
                  Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat
                  nisl vel pretium lectus quam id leo. A scelerisque purus
                  semper eget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Subscribe />
    </Layout>
  );
};
export default CompetitionDetails;
