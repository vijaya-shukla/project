import React from "react"
import Image from "./images"
import { Link } from "gatsby"

const Features = () => (
  <section className="features-section">
    <div className="container py-5">
      <div className="row justify-content-center align-items-center py-5 mb-4">
        <div className="col-md-7" data-aos="fade-up">
          <h2 className="heading font-weight-bold">
            Goa{" "}
            <span className="text-danger">Queen of Hills</span>
          </h2>
          <p>
          Goa is best for adventures thing and or fun activity, every nature lover should visit Goa. Calangute beach is the most Famous amongst all the beaches in Goa. It is the longest beach in north Goa with an unbroken coastline that stretches for more than a kilometer. It is known as “Queen of Beaches” in Goa. 
          <Link to="/blogs" className="btn btn-primary btn-sm" >
              For  more
            </Link>
          
          </p>
        </div>
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="100">
          <Image
            className="card shadow mx-auto"
            filename="blog1.jpeg"
            alt=""
          />
        </div>
      </div>

      <div className="row justify-content-center align-items-center py-5 mb-4">
        <div className="col-md-7 order-md-2" data-aos="fade-up">
          <h2 className="heading font-weight-bold ">
            Kerela{" "}
            <span className="text-danger">God's Own Country</span>
          </h2>
          <p>
          “God's Own Country” the tagline of Kerala Tourism. After Visiting Kerala without any doubt and hesitation one can tell it is God's own country. The real beauty of Kerala is in its backwaters. The backwaters along with coconut trees are just beautiful. 
          <Link to="/blogs" className="btn btn-primary btn-sm" >
              For  more
            </Link>
          </p>
        </div>
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="100">
          <Image
            className="card shadow mx-auto"
            filename="blog4.jpeg"
            alt="heavy"
          />
        </div>
      </div>

      <div className="row justify-content-center align-items-center py-5 mb-4">
        <div className="col-md-7" data-aos="fade-up">
          <h2 className="heading font-weight-bold ">
          The Vast Desert{" "}
            <span className="text-danger">Rann Utsav</span>
          </h2>
          <p>
          My friends and I decided for an annual trip to Rann Utsav.We stayed last year in tent city and entire experience was wonderful. Every tent has good interiors and furnish with good flooring with tiles. That felt like our Home.
          <Link to="/blogs" className="btn btn-primary btn-sm" >
              For  more
            </Link> 
          </p>
        </div>
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="100">
          <Image
            className="card shadow mx-auto"
            filename="blog2.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
)

export default Features
