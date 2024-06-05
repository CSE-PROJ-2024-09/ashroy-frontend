import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-white">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-3 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" className="me-4 text-reset">
            <FaFacebook size={25} />
          </a>
          <a href="" className="me-4 text-reset">
            <FaSquareInstagram size={25} />
          </a>
          <a href="" className="me-4 text-reset">
            <FaGithub size={25} />
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>ASHROY
              </h6>
              <p>
                ASHROY IS a big hub of kindness, connecting people who care with
                opportunities to make a real difference in the lives of those
                who need help. It's not just a website; it's a friendly place
                where technology meets compassion, making it easier for everyone
                to contribute to making the world a better place.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p>
                <Link to={`/orphanage`} className="text-reset">
                  Orphanage
                </Link>
              </p>
              <p>
                <Link to={`/animal-welfare`} className="text-reset">
                  Animal Welfare
                </Link>
              </p>
              <p>
                <Link to={`/elderly-care`} className="text-reset">
                  Elderly Care
                </Link>
              </p>
              <p>
                <Link to={`/shelter-home`} className="text-reset">
                  Homeless Shelter
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Siliguri, West Bengal
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                Ashroy@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: " rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://ashroy-webapp.netlify.app/"
        >
          Ashroy
        </a>
      </div>
    </footer>
  );
};

export default AppFooter;
