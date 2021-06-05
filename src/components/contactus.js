import React from "react"
import { FaAddressBook, FaEnvelope, FaPhone } from "react-icons/fa"

const ContactUs = () => (
  <section className="contactus-section">
    <div className="container py-5">
      <h2 className="heading text-center font-weight-bold mb-4">
        Contact Us... <span className="text-danger">Let's Chat!</span>
      </h2>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-4 col-md-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="card p-2 text-center shadow mt-4">
                <div className="row">
                  <div className="col-2 p-4">
                    <h1 className="text-danger ">
                      <FaAddressBook />
                    </h1>
                  </div>
                  <div className="col-10">
                    <h4 className="text-danger ">Our Address</h4>
                    <p>
                    605, RATAN ICON BUILDING

<br />SEAWOODS SECTOR,31186
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="card p-2 text-center shadow">
                <div className="row">
                  <div className="col-2 p-4">
                    <h1 className="text-danger ">
                      <FaEnvelope />
                    </h1>
                  </div>
                  <div className="col-10">
                    <h4 className="text-danger">Email Us</h4>
                    <p>
                    vijyashukla66@gmail.com
                      <br />
                      sinhavaishnavi8@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 mb-4">
              <div className="card p-2 text-center shadow">
                <div className="row">
                  <div className="col-2 p-4">
                    <h1 className="text-danger ">
                      <FaPhone />
                    </h1>
                  </div>
                  <div className="col-10">
                    <h4 className="text-danger">Call Us</h4>
                    <p>
                      +91 9998887778
                      <br />
                      +91 9998887779
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7 col-md-12">
          <form
            action="forms/contact.php"
            method="post"
            role="presentation"
            className="card php-email-form px-4 py-4 shadow"
          >
            <div className="form-row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div className="validate"></div>
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                data-rule="minlen:4"
                data-msg="Please enter at least 8 chars of subject"
              />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="8"
                data-rule="required"
                data-msg="Please write something for us"
                placeholder="Message"
              ></textarea>
              <div className="validate"></div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary btn-lg rounded-pill">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <figure class="text-center">
  <blockquote class="blockquote">
    <p class="mb-0">“I have found out that there ain’t 
    no surer way to find out whether you like people or hate them than to travel with them”. .</p>
  
  </blockquote>
  <figcaption class="blockquote-footer">
   <cite title="Source Title">– Mark Twain</cite>
  </figcaption>
</figure>


  </section>
)

export default ContactUs
