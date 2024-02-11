//import from 'react';
import Link from "next/link";
import { Avatar, Flex, Tooltip, Divider } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { fNumber } from "../utils/format-number";
import { fDateByDateString } from "../utils/format-date";
import { apiUrlAsset } from "../constants/apiUrl";

const BlockCompetitions = (props) => {
  const { competitions, title, country  } = props;
  return (
    <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-12 mb-20"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="about-text">
                <ul className="crumbs d-flex">
                  <li>
                    <Link href="#">{title}</Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      [{country}]
                    </Link>
                  </li>
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
                      competitions.map((competition, index) => (
                        <div
                            key={competition.slug}
                            className="col-lg-4"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                            >
                            <Link href={`/details-competitions/${competition.id}/${competition.title.toLocaleUpperCase()}`}>
                                <div className="logos-card restaurant-page">
                                <div className="cover-competition" style={{background: `url("${apiUrlAsset.competitions}/${competition.cover}") no-repeat center`}}>

                                </div>
                                <div className="cafa">
                                    <h4>
                                    {competition.title.toLocaleUpperCase()}
                                    </h4>
                                    {/* <div>
                                    <i className="fa-solid fa-star" ${competition.id}/${competition.title.toLocaleUpperCase()} />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    </div> */}
                                    <div className="cafa-button">
                                    <span>Prix Ticket : </span> {competition.events[0].tickets.slice(0, competition.events[0].tickets.length > 2 ? 2: competition.events[0].tickets.length).map((ticket, index) => ( <a key={`tiket-${competition.events[0].slug}-${index}`} href="#" className={index == competition.events[0].tickets.length - 1 ? 'end': ''}>{ticket.priceTicket} {competition.events[0].devise}</a> ))}
                                    </div>
                                    
                                </div>
                                </div>
                            </Link>
                        </div>
                      )
                      )
                    }
                    
                  </div>
                </div>
              </section>
            </div>
          </div>
    </div>

  );
};
export default BlockCompetitions;
