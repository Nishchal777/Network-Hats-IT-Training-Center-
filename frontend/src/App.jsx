import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Footer from "./Pages/Footer";
import WhyChooseUs from "./Pages/WhyChooseUs";
import Review from "./Components/Review";
import Testimonials from "./Components/Testimonial";

function App() {
  return (
    <div>
      <Navbar />

      {/* Home Section */}
      <section id="home">
        <Home />
      </section>
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      {/* Services Section */}
      <section id="services">
        <Services />
      </section>
      {/* Courses Section */}
      <section id="courses">
        <Courses />
      </section>
      {/* Why Us Section */}
      <section id="whychooseus">
        <WhyChooseUs />
      </section>
      {/* Review Section */}
      <section id="contact">
        <Review />
      </section>
      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
