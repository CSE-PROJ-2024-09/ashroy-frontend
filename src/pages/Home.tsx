import { routes } from "../constants/data";
import logo from "../assets/images/Ashroy.png";
import FeaturedCard from "../components/home/FeaturedCard";
import SectionHeader from "../components/global/SectionHeader";
import AddNewPlace from "../components/home/AddNewPlace";

const Home = () => {
  return (
    <>
      {/* Hero Section  */}
      <section className="card w-100 mb-4">
        <div className="card-body text-center">
          <img src={logo} width={300} alt="Ashray Logo" />
          <h1 className="display-2 mb-2">Welcome to Ashroy</h1>
          <p className="text-muted">
            Discover a community dedicated to compassion and support. Whether
            it's animal welfare, elderly care, orphanages, or shelter homes, we
            connect you with trusted organizations making a real difference.
            Join us in creating a better world for all.
          </p>
          <h3>Explore. Support. Transform.</h3>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-4">
        <SectionHeader title="About Us" />
        <p className="text-muted">
          ASHROY IS a big hub of kindness, connecting people who care with
          opportunities to make a real difference in the lives of those who need
          help. It's not just a website; it's a friendly place where technology
          meets compassion, making it easier for everyone to contribute to
          making the world a better place. In the culturally diverse landscape
          of West Bengal, ASHROY will emerge as a user-friendly and accessible
          online platform, uniting individuals with non-profitable organizations
          (NGOs) dedicated to noble causes. This initiative simplifies the
          process of discovering and engaging with entities devoted to animal
          welfare, elderly care, and child well-being.
        </p>
      </section>

      {/** Featured Section */}
      <section>
        <SectionHeader title="Featured Sections" />
        <div className="row">
          {routes.map(
            (route, index) =>
              route.label !== "Home" && (
                <div key={route.label} className="col-md-6">
                  <FeaturedCard
                    id={index}
                    href={route.path}
                    title={route.label}
                    description={route.description}
                  />
                </div>
              )
          )}
        </div>
        <section>
          <SectionHeader title="Add an Orphange / Animal Welfare / Elderly Care or Shelter Home" />
          <AddNewPlace />
        </section>
      </section>
    </>
  );
};

export default Home;
