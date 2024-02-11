//import from 'react';
import Link from "next/link";
import { Avatar, Flex, Tooltip, Divider } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { fNumber } from "../utils/format-number";
import { fDateByDateString } from "../utils/format-date";
import { apiUrlAsset } from "../constants/apiUrl";

const ActiveEdition = (props) => {
  const { editions,fullDisplay, title, itemSelected  } = props;
  return (
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
                    <Link href="/">{title}</Link>
                  </li>
                  { itemSelected &&
                    (<li className="two">
                      <Link href="/">
                        <i className="fa-solid fa-right-long" />
                        [{itemSelected}]
                      </Link>
                    </li>)
                  }
                </ul>
              </div>
            </div>
            <div
              className="col-lg-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <section className="posts-section-blog gap">
                <div className="container">
                  <div className="row">
                    {
                      editions.slice(0, editions.length > 4 && !fullDisplay ? 4: editions.length).map((edition, index) => (
                        
                          <div
                            key={edition.slug}
                            className="col-xl-3 col-lg-3 col-md-3 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                          >
                            <div className="news-posts-one blog">
                              <Link href={`/details-editions/${edition.slug}`}>
                                <img alt={edition.cover} src={`${apiUrlAsset.events}/${edition.cover}`} className='heigth-200'  />
                                <div className="quickeat">
                                  <a href="#">{edition.price.trim() === '0' ? 'Gratuit': `${fNumber(parseInt(edition.price.trim(), 10))} ${edition.devise}`}</a>
                                </div>
                                <h5 style={{ textAlign: 'center' }}>{edition.title} {edition.years}</h5>
                                <ul className="data">
                                  <li>
                                    <h6>
                                    <i className="fa-regular fa-calendar-days" />
                                      Du {fDateByDateString(edition.beginDate)}
                                    </h6>
                                  </li>
                                  <li>
                                    <h6>
                                      <i className="fa-regular fa-calendar-days" />
                                      Au {fDateByDateString(edition.endDate)}
                                    </h6>
                                  </li>
                                </ul>
                                <Flex align="center" justify="center" style={{marginBottom: 10}} >
                                  <Avatar.Group
                                    maxCount={4}
                                    maxPopoverTrigger="click"
                                    size="large"
                                    maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                                  >
                                    {edition.candidates.map((candidate) => (<Avatar key={candidate.matricule} src={`${apiUrlAsset.candidate}/${candidate.photo}`} />))}
                                  </Avatar.Group>
                                </Flex>
                                {(edition.display === 1 && edition.candidates.length > 0) && (
                                  <>
                                  <Flex align="center" justify="center">
                                    <Link href={`/details-editions/${edition.slug}`}>
                                      Voter
                                      <i className="fa-solid fa-check-to-slot"></i>
                                    </Link>
                                </Flex>
                                <Divider />
                                  </>
                                )}
                              </Link>
                            </div>
                          </div>
                        
                    
                      ))
                    }
                    {!fullDisplay && (
                    <div className="col-sm-12">
                      <div
                        className="button-gap"
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration={300}
                      >
                        <Link href="/edition" className="button button-2 non">
                          Voir plus
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
      </div>
  );
};
export default ActiveEdition;
