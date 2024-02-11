import { useState, useEffect } from "react";
import Layout from "@/src/layouts/Layout";
import ConsumApi from '@/src/services_workers/consum_api';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import { useRouter } from 'next/router';
import BlockCompetitions from '@/src/components/BlockCompetitions';

const AllCompetitions = () => {
  const router = useRouter();
  const [competitionsActive, setCompetitionsActive] = useState([]);
  const [competitionsSkiped, setCompetitionsSkiped] = useState([]);
  const [isFetching, setFetch] = useState(true);


  useEffect(() => {
    loadData();
    window.scrollTo(0, 0);
  }, [router.isReady, router.query]);

  const loadData = async () => {
    if(!router.isReady) return null;
      const {id:[departement_id, country]} = router.query;
      const {success, data:competitions_inProgress} = await ConsumApi.getAllCompetitions({departement_id:parseInt(departement_id, 10), sort:1});
      const {data:competitions_skiped} = await ConsumApi.getAllCompetitions({departement_id:parseInt(departement_id, 10), sort:0});
      if(success) {
        setCompetitionsActive(competitions_inProgress);
        setCompetitionsSkiped(competitions_skiped);
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
                    key={`competition-${index}`}
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
  const {id:[departement_id, country]} = router.query;
  return (
    <Layout>
      <section
        className="hero-section block-competitions about gap"
        style={{ backgroundImage: "url(/assets/img/background.png)" }}
        >
        {competitionsActive.length > 0 && <BlockCompetitions competitions={competitionsActive} title='Compétitions en cours' country={country}/>}
        {competitionsSkiped.length > 0 && <BlockCompetitions competitions={competitionsSkiped} title='Ancienne Compétitions' country={country}/>}
      </section>
    </Layout>
  );
};
export default AllCompetitions;
