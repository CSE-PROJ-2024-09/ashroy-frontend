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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum
          dolores molestiae porro blanditiis, alias nulla aspernatur eveniet
          dolor ullam voluptate, maxime beatae necessitatibus? Cupiditate
          quaerat odio officiis enim modi, sed ratione optio minima sunt id,
          expedita aperiam totam quos.
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
