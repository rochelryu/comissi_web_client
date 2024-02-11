import React, { useState, useEffect } from 'react';
import PreLoader from "@/src/layouts/PreLoader";
import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { apiUrlAsset } from '@/src/constants/apiUrl';
import ConsumApi from '@/src/services_workers/consum_api';
import { fNumber } from '@/src/utils/format-number';
import { fDateByDateString } from '@/src/utils/format-date';

const Blog = () => {
  const [allActualities, setAllActualities] = useState([]);
  const [preLoader, setPreLoader] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const {success, data:actualities} = await ConsumApi.getAllActualities();
    if(success) {
      setAllActualities(actualities);
      setPreLoader(false);

    }
  }

  if(preLoader) {
    return (<PreLoader />)
  }

  return (
    <Layout>
      <section
        className="hero-section about gap"
        style={{ backgroundImage: "url(assets/img/background.png)", paddingTop:100 }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="about-text">
                <ul className="crumbs d-flex">
                  <li>
                    <Link href="/">Actualitées</Link>
                  </li>
                </ul>
              </div>
            </div>
            {
              allActualities.map((actuality,index) => (
                <div
                key={`actuality-${index}`}
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                  data-aos="flip-up"
                  data-aos-delay={200}
                  data-aos-duration={300}
                >
                  <div className="news-posts-one blog">
                    <img alt={actuality.cover} src={`${apiUrlAsset.actualites}/${actuality.cover}`} srcSet={`${apiUrlAsset.actualites}/${actuality.cover}`} />
                    
                    <h3>{actuality.title}</h3>
                    <p>
                    {actuality.hat}
                    </p>{" "}
                    <Link href={`/details-actuality/${actuality.slug}`}>
                      Voir plus
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
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
          </div>
        </div>
      </section>
      </Layout>
  );
};
export default Blog;
