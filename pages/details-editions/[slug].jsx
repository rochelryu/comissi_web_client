import { useState, useEffect } from "react";
import Layout from "@/src/layouts/Layout";
import ConsumApi from '@/src/services_workers/consum_api';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import { useRouter } from 'next/router';
import ActiveEdition from '@/src/components/ActiveEdition';
import EventItem from "@/src/components/EventItem";
const DetailsCompetitions = () => {
  const router = useRouter();
  const [editionsSimilar, setEditionsSimilar] = useState([]);
  const [event, setEvent] = useState([]);
  const [isFetching, setFetch] = useState(true);


  useEffect(() => {
    loadData();
    window.scrollTo(0, 0);
  }, [router.isReady, router.query]);

  const loadData = async () => {
    if(!router.isReady) return null;
      const {slug} = router.query;
      const {success, data} = await ConsumApi.getDetailEventBySlug({slug});
      if(success) {
        setEvent(data.events);
        setEditionsSimilar(data.random);
        setFetch(false);
      }
  }

  if (isFetching) {
    return (
      <Layout>
        <section className="best-restaurants gap">
              <div className="container">
                <div className="row">
                  { [...new Array(5)].map((item, index) => (
                    <div
                    key={`editions-${index}`}
                      className="col-lg-6"
                      data-aos="flip-up"
                      data-aos-delay={300}
                      data-aos-duration={400}
                    >
                      <Card sx={{width: '100%', height: 200, marginBottom: 2}} >
                          <Skeleton variant="rectangular" width="100%" height="100%" animation="pulse" />
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      </Layout>
    )
  }
  return (
    <Layout>
        <section
        className="hero-section about gap"
        style={{ backgroundImage: "url(/assets/img/background-1.png)", paddingTop:100}}
        >
            <EventItem item={event[0]} />
            <ActiveEdition editions={editionsSimilar} title='Editions de la même compétition' fullDisplay={true} itemSelected={event[0].competition.title.toLocaleUpperCase()}  />
        </section>
      
    </Layout>
  );
};
export default DetailsCompetitions;
