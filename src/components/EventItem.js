
import Link from "next/link";
import {apiUrlAsset} from '@/src/constants/apiUrl';
import {fNumber} from '@/src/utils/format-number';
import { useRouter } from 'next/router';
import CandidateItem from "@/src/components/CandidateItem";
import HeaderEvent from "@/src/components/HeaderEvent";
import { clsx } from 'clsx';


const EventItem = ({item}) => {
  const router = useRouter();
    return (
        <>
            <HeaderEvent item={item} />
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-lg-12"
                  style={{marginTop: 20}}
                  data-aos="zoom-in"
                  data-aos-delay={200}
                  data-aos-duration={300}
                >
                  <div className="services-info">
                    <h3>Toutes les candidates</h3>
                    <div className="container">
                      <div className="row">
                      {
                        item.candidates.map((candidate, index) => (
                          <div className="col-lg-3 col-md-3" key={`candidate-${index}`}>
                            <CandidateItem candidate={candidate} possibleVoted={item.display === 1} index={index} onChange={(index)=> {console.log(index)}} />
                          </div>
                        ) )
                      }
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
        </>
    );
}

export default EventItem;