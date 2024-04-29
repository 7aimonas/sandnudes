import React, { useState } from "react";

const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.2064147977": "",
    "entry.1867834770": "",
    "entry.870590958": ""
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSeztdL16CWx5orMiVtJOxN5NQ3ytGgUiQDO-3ReOdtsMk-ZuQ/formResponse?entry.2064147977=${formData["entry.2064147977"]}&entry.1867834770=${formData["entry.1867834770"]}&entry.870590958=${formData["entry.870590958"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
  return (
    <div className="contactFormWrapper">
      <div className="formheader"></div>
      <div className="formcontact">
        {submit ? (
          <div className="afterForm">Thanks, will get back to you soon</div>
        ) : (
          <form onSubmit={handleSubmit} target="_self">
            <fieldset>
              <label htmlFor="entry.2064147977">Name:</label>
              <input
                required
                type="text"
                name="entry.2064147977"
                onChange={handleInputData("entry.2064147977")}
                value={formData["entry.2064147977"]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.1867834770">E-mail:</label>
              <input
                required
                type="email"
                name="entry.1867834770"
                onChange={handleInputData("entry.1867834770")}
                value={formData["entry.1867834770"]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.870590958">Message:</label>
              <textarea
                required
                name="entry.870590958"
                rows="4"
                cols="10"
                onChange={handleInputData("entry.870590958")}
                value={formData["entry.870590958"]}
                autoComplete={false}
              ></textarea>
            </fieldset>

            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;