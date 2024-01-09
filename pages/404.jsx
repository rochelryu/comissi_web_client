import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const E404 = () => {
  return (
    <Layout>
      <section className="error-section">
        <div className="container">
          <div className="error-page">
            <img
              alt="girl"
              src="/assets/img/404.svg"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            />
            <h2>404</h2>
            <h4 data-aos="flip-up" data-aos-delay={400} data-aos-duration={500}>
              Désolé mais cette page n'existe pas encore
            </h4>
            <Link href="/">
              <i className="fa-solid fa-house" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default E404;
