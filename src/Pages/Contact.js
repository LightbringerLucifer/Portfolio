import React from "react";

const Contact = () => {
  return (
    <div id="contact" class="footer center spacer">
      <div class="container ">
        <div class="row">
          <div class="col-sm-offset-3 col-sm-6 contact-form">
            <h3>Contact</h3>
            <p>I am available for Freelancing work and collaboration</p>
            <form>
              <input
                disabled
                type="submit"
                // name="Submit"
                class="btn btn-primary btn-lg"
                value="Phone: 8002749060"
              />
              <input
                disabled
                type="submit"
                // name="Submit"
                class="btn btn-primary btn-lg"
                value="Whatsapp: 9504998434"
              />
              <input
                disabled
                type="submit"
                // name="Submit"
                class="btn btn-primary btn-lg"
                value="Email: nikhil9504singh@gmail.com"
              />
             
              <textarea
                name="form_message"
                class="form-control"
                placeholder="Message"
                rows="5"
              ></textarea> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
