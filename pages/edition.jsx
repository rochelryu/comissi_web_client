import { useState, useEffect } from "react";
import Layout from "@/src/layouts/Layout";
import ConsumApi from '@/src/services_workers/consum_api';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import { useRouter } from 'next/router';
import ActiveEdition from '@/src/components/ActiveEdition';

const Editions = () => {
  const router = useRouter();
  const [finalsActive, setFinalsActive] = useState([]);
  const [preselectionsActive, setPreselectionsActive] = useState([]);
  const [editionsSkiped, setEditionsSkiped] = useState([]);
  const [isFetching, setFetch] = useState(true);


  useEffect(() => {
    loadData();
    window.scrollTo(0, 0);
  }, [router.isReady]);

  const loadData = async () => {
    if(!router.isReady) return null;
      const {success, data:finalActiveApi} = await ConsumApi.getAllEventByAttribut({display: 1, level: 0});
      const {data:preselectionActiveApi} = await ConsumApi.getAllEventByAttribut({display: 1, level: 1});
      const {data:editions_skiped} = await ConsumApi.getAllEventByAttribut({display: 0});
      if(success) {
        setFinalsActive(finalActiveApi);
        setPreselectionsActive(preselectionActiveApi);
        setEditionsSkiped(editions_skiped);
        setFetch(false);
      }
  }

  if (isFetching) {
    return (
      <Layout>
        <section className="best-restaurants gap">
              <div className="container">
                <div className="row">
                  { [...new Array(12)].map((item, index) => (
                    <div
                    key={`competition-${index}`}
                      className="col-lg-4"
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
        className="hero-section block-competitions about gap"
        style={{ backgroundImage: "url(/assets/img/background.png)" , paddingTop:100}}
        >
        {finalsActive.length > 0 && <ActiveEdition editions={finalsActive} title='Final en cours' fullDisplay={true} itemSelected={finalsActive[0].years}  />}
        {preselectionsActive.length > 0 && <ActiveEdition editions={preselectionsActive} title='Présélections en cours' fullDisplay={true} itemSelected={preselectionsActive[0].years} />}
        {editionsSkiped.length > 0 && <ActiveEdition editions={editionsSkiped} title='Éditions précédentes' fullDisplay={true}  />}
      </section>
    </Layout>
  );
};
export default Editions;
