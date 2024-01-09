
import Link from "next/link";
import {apiUrlAsset} from '@/src/constants/apiUrl';
import {fDateByDateString} from '@/src/utils/format-date';
import {fNumber} from '@/src/utils/format-number';
const EventItem = ({item, describe}) => {

    return (
        <>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="about-text">
                <ul className="crumbs d-flex">
                  <li>
                    <Link href="/">Accueil</Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      Edition {item.years}
                    </Link>
                  </li>
                </ul>
                <p>
                  {describe}
                </p>{" "}
                <Link href={`/details/${item.slug}`} className="button button-2">
                  Voter
                </Link> {" "}
                <Link href={`/details/${item.slug}`} className="button button-2">
                  Acheter ticket
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="hero-section-img-service">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img candidate">
                      <img alt={item.candidates[0].firstName} src={`${apiUrlAsset.candidate}/${item.candidates[0].photo}`} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img-data">
                      <h2>N<sup>o</sup> {item.candidates[0].id}</h2>
                      <span>
                        Nbre vôte
                        <br /> {item.candidates[0].pivot.NumberVotes}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img-data black">
                      <h2>N<sup>o</sup> {item.candidates[1].id}</h2>
                      <span>
                        Nbre vôte
                        <br />
                        {item.candidates[1].pivot.NumberVotes}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img candidate">
                    <img alt={item.candidates[1].firstName} src={`${apiUrlAsset.candidate}/${item.candidates[1].photo}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-6 col-lg-12"
              style={{marginTop: 20}}
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="services-info">
                <h2>Achète tes tickets</h2>
                <p>
                  Viens participer à {item.title.toString().toLocaleUpperCase()} qui aura lieu à {item.location} le {fDateByDateString(item.beginDate)} .
                  <br />
                  Ne te fais pas raconter...
                </p>
              </div>
            </div>
            {
              item.tickets.slice(0, item.tickets.length > 1 ? 2: 1).map((ticket) => (
                <div
                key={`ticket-${ticket.priceTicket}`}
                  className="col-xl-3 col-lg-6 col-md-6"
                  data-aos="flip-up"
                  style={{marginTop: 20}}
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
            
        </>
    );
}

export default EventItem;