//import from 'react';
import Link from "next/link";
import { Avatar, Flex, Tooltip, Divider } from 'antd';
import { fNumber } from "../utils/format-number";
import { fDateByDateString } from "../utils/format-date";
import { apiUrlAsset } from "../constants/apiUrl";

const HeaderEdition = ({item}) => {
    if(item.display === 1) {
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div
                        className="col-lg-6"
                        data-aos="fade-up"
                        data-aos-delay={300}
                        data-aos-duration={400}
                    >
                        <div className="about-text">
                            <ul className="crumbs d-flex">
                                <li className="two">
                                    <Link href="/">
                                    <i className="fa-solid fa-right-long" />
                                    {item.title} {item.years}
                                    </Link>
                                </li>
                            </ul>
                            <div className="container">
                            <div className="row align-items-center">
                                {
                                item.tickets.map((ticket) => (
                                    <div
                                    key={`ticket-${ticket.priceTicket}`}
                                    className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6"
                                    data-aos="flip-up"
                                    style={{marginTop: 10}}
                                    data-aos-delay={300}
                                    data-aos-duration={400}
                                    >
                                    <div className="services-card-style">
                                        <i className="fa-solid fa-ticket" />
                                        <h4>
                                        {" "}
                                        <a href="#">
                                            {fNumber(ticket.priceTicket)}
                                            <br />
                                            {item.devise}
                                        </a>
                                        </h4>
                                        <Link href={`/buyTicket/${ticket.priceTicket}`} className="button button-2">
                                        Acheter
                                        </Link>
                                    </div>
                                    </div>
                                ))
                                }
                            </div>
                            </div>
                        </div>

                    </div>
                    <div
                        className="col-lg-6"
                        data-aos="fade-up"
                        data-aos-delay={400}
                        data-aos-duration={500}
                    >
                        <div className="about-img">
                        <img alt="man" src={`${apiUrlAsset.events}/${item.cover}`} />
                        <div className="hours">
                            <i className="fa-solid fa-check-to-slot" />
                            <h4>
                            {item.price === '0' ? 'Gratuit': `${item.price} ${item.devise}`}
                            <br />
                            <span>Prix du vôte</span>
                            </h4>
                        </div>
                        <div className="hours two">
                            <i className="fa-regular fa-clock" />
                            <h4>
                            Du {fDateByDateString(item.beginDate)} – Au {fDateByDateString(item.endDate)}
                            <br />
                            <span>{item.location}</span>
                            </h4>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div
                    className='col-lg-6 col-md-6 col-sm-12'
                    data-aos="fade-up"
                    data-aos-delay={200}
                    data-aos-duration={300}
                    >
                    <div className="about-text">
                        <ul className="crumbs d-flex">
                        
                        <li className="two">
                            <Link href="/">
                            <i className="fa-solid fa-right-long" />
                            {item.title} {item.years}
                            </Link>
                        </li>
                        </ul>
                        <div className="container">
                        <div className="row align-items-center">
                            {
                            item.tickets.map((ticket) => (
                                <div
                                key={`ticket-${ticket.priceTicket}`}
                                className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
                                data-aos="flip-up"
                                style={{marginTop: 10}}
                                data-aos-delay={300}
                                data-aos-duration={400}
                                >
                                <div className="services-card-style">
                                    <i className="fa-solid fa-ticket" />
                                    <h4>
                                    {" "}
                                    <a href="#">
                                        {fNumber(ticket.priceTicket)}
                                        <br />
                                        {item.devise}
                                    </a>
                                    </h4>
                                    <Link href={`/buyTicket/${ticket.priceTicket}`} className="button button-2">
                                    Acheter
                                    </Link>
                                </div>
                                </div>
                            ))
                            }
                        </div>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-lg-6 col-md-6 col-sm-12"
                    data-aos="fade-up"
                    data-aos-delay={300}
                    data-aos-duration={400}
                    >
                    <div className="hero-section-img-service">
                        <div className="row align-items-center">
                        {
                            item.candidates.slice(0,3).map((candidate, index) => (<DisplayDauphine key={`final-${index}`} candidate={candidate} index={index} />) )
                        }
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
};
const DisplayDauphine = ({candidate, index}) => {
    if(index % 2 === 0) {
      return (
        <>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="counter-img candidate">
              <img alt={candidate.firstName} src={`${apiUrlAsset.candidate}/${candidate.photo}`} />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="counter-img-data">
                <h2>N<sup>o</sup> {candidate.pivot.ranking}</h2>
                <span> Nbre vôte <br /> {candidate.pivot.numberVotes}</span>
              </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="counter-img-data black">
                <h2>N<sup>o</sup> {candidate.pivot.id}</h2>
                <span>Nbre vôte <br /> {candidate.pivot.numberVotes}</span>
              </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="counter-img candidate">
              <img alt={candidate.firstName} src={`${apiUrlAsset.candidate}/${candidate.photo}`} />
            </div>
          </div>
        </>
      )
    }
  }

export default HeaderEdition;
