import React from "react"

const contact = () => {
  return (
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <form name="contact portfolio" method="POST" data-netlify="true">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="form-control"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="message"
              className="form-control"
            />
          </div>
          <button type="submit" className="submit-btn btn">
            Submit Here
          </button>
        </form>
      </article>
    </section>
  )
}

export default contact