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
  const [editionsActive, setEditionsActive] = useState([]);
  const [editionsSkiped, setEditionsSkiped] = useState([]);
  const [final, setFinal] = useState([]);
  const [isFetching, setFetch] = useState(true);


  useEffect(() => {
    loadData();
    window.scrollTo(0, 0);
  }, [router.isReady, router.query]);

  const loadData = async () => {
    if(!router.isReady) return null;
      const {slug:[competition_id,_]} = router.query;
      const {success, data:allPréselectionEditionsActive} = await ConsumApi.getAllEventByAttribut({competition_id:competition_id, display: 1, level:1});
      const {data:allPréselectionEditionsInactive} = await ConsumApi.getAllEventByAttribut({competition_id:competition_id, display: 0, level:1});
      const {data:finalApi} = await ConsumApi.getAllEventByAttribut({competition_id:competition_id, display: 1, level:0});
      if(success) {
        setEditionsActive(allPréselectionEditionsActive);
        setEditionsSkiped(allPréselectionEditionsInactive);
        setFinal(finalApi)
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
                      className="col-lg-3"
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
  const {slug:[_, competition_name]} = router.query;
  return (
    <Layout>
        <section
        className="hero-section about gap"
        style={{ backgroundImage: "url(/assets/img/background-1.png)", paddingTop:100}}
        >
            { (final.length > 0 && final[0].candidates.length > 0) && (<EventItem item={final[0]} />)
            }
            {editionsActive.length > 0 && <ActiveEdition editions={editionsActive} title='Présélections en cours' fullDisplay={true} itemSelected={competition_name}  />}
            
            { (final.length > 0 && final[0].candidates.length === 0) && (<ActiveEdition editions={final} title={`${final[0].title} ${final[0].years}`} fullDisplay={true} itemSelected={'Pas encore disponible'}  />)
            }
            {editionsSkiped.length > 0 && <ActiveEdition editions={editionsSkiped} title='Editions déjà passées' fullDisplay={true} itemSelected={competition_name}  />}
        </section>
      
    </Layout>
  );
};
export default DetailsCompetitions;
