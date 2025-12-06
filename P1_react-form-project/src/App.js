import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState(
    {
      firstname: "",
      lastname: "",
      email: "",
      country: "India",
      streetaddress: "",
      city: "",
      state: "",
      postalcode: "",
      comments: false,
      candidates: false,
      offers: false,
      pushNotifications: "",

    }
  )

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => (
      {
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }
    ));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Priniting form data")
    console.log(formData)
  }

  return (
    <div className="flex flex-col items-center mt-3">
      <form onSubmit={submitHandler}>

        <label htmlFor="firstname">
          First Name:
        </label>
        <br />
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="aman"
          value={formData.firstname}
          onChange={changeHandler}
          className="outline mt-1 mb-2"
        />
        <br />

        <label htmlFor="lastname">
          Last Name:
        </label>
        <br />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="gaade"
          value={formData.lastname}
          onChange={changeHandler}
          className="outline mt-1 mb-2"
        />
        <br />

        <label htmlFor="email">
          Email Address:
        </label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline mt-1 mb-2"
        />
        <br />

        <label htmlFor="country">
          Country:
        </label>
        <br />
        <select
          name="country"
          value={formData.country}
          id="country"
          onChange={changeHandler}
          className="outline mt-1 mb-2"
        >

          <option value="India">India</option>
          <option value="Japan">Japan</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Malaysia">Malaysia</option>

        </select>
        <br />

        <label htmlFor="streetaddress">
          Street Address:
        </label>
        <br />
        <input
          type="text"
          name="streetaddress"
          id="streetaddress"
          placeholder="B-2CE"
          value={formData.streetaddress}
          onChange={changeHandler}
          className="outline mt-1 mb-2"
        />
        <br />

        <label htmlFor="city">
          City:
        </label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Sonipat"
          value={formData.city}
          onChange={changeHandler}
          className="outline mt-1 mb-2"
        />
        <br />

        <label htmlFor="state">
          State/Province:
        </label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Haryana"
          value={formData.state}
          onChange={changeHandler}
          className="outline mt-1 mb-2"
        />
        <br />

        <label htmlFor="postalcode">
          ZIP/Postal Code:
        </label>
        <br />
        <input
          type="text"
          name="postalcode"
          id="postalcode"
          placeholder="131001"
          value={formData.postalcode}
          onChange={changeHandler}
          className="outline mt-1 mb-2"
        />
        <br />

        <fieldset>
          <legend>By Email</legend>

          <div className="flex">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
              className="mt-1 mb-2"

            />
            <div>
              <label htmlFor="comments">
                comments
              </label>
              <p>Get notified when someone posts a comment on a posting</p>
            </div>
          </div>
          <br />

          <div className="flex">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
              className="mt-1 mb-2"

            />
            <div>
              <label htmlFor="candidates">
                candidates
              </label>
              <p>Get notified when a candidate applies for a job</p>
            </div>
          </div>
          <br />

          <div className="flex">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
              className="mt-1 mb-2"

            />
            <div>
              <label htmlFor="offers">
                Offers
              </label>
              <p>Get notified when a candidate accepts or rejects a offer</p>
            </div>
          </div>
          <br />

        </fieldset>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">
            Everything
          </label>
          <br />

          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as Email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">
            Same as Email
          </label>
          <br />

          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notifications"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">
            No Push Notifications
          </label>

        </fieldset>

        <button
          className="mt-2 py-1 px-3 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-sm"
        >Save</button>

      </form>

    </div>

  );
}

export default App;
