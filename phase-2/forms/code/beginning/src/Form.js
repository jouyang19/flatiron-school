// Don't forget to import useState to use states!
import { useState } from "react";

export default function Form() {
  // two states for each one

  // to create one state for two data points
  const [memberData, setMemberData] = useState({
    movie: "",
    name: "",
  });

  // to create a state to form validation

  const [errors, setErrors] = useState({});

  // Use spread operator to include the rest of the object
  // while updating the specific key. Set that to setMemberData for the state.

  function handleChange(event) {
    const updatedMemberData = {
      ...memberData,
      [event.target.name]: event.target.value,
    };
    setMemberData(updatedMemberData);
    const newErrors = validateForm(updatedMemberData);
    setErrors(newErrors);
  }

  function validateForm(data) {
    const errors = { name: "", movie: "" };

    if (!/^[a-zA-Z\s'-]+$/.test(data.name.trim()) && data.name !== "") {
      errors.name =
        "Name can only contain letters, spaces, hyphens, and apostrophes.";
    } else if (
      !/^[a-zA-Z0-9\s.,!?'"-:()]+$/.test(data.movie.trim()) &&
      data.movie !== ""
    ) {
      errors.movie =
        "Movie title can only contain letters, numbers, spaces, and common punctuation.";
    }
    return errors;
  }

  return (
    <form className="card-body items-center text-center">
      <label>
        <strong>Name </strong>

        {/* Name is for "event.target" to have something to target.
        value is for the key in the object of the state.
        and onChange is a Change Event Listener that runs the function handleChange when there is a change in the text field form */}
        <input
          name="name"
          value={memberData.name}
          onChange={handleChange}
          className="input input-bordered w-full max-w-xs"
        />
        <br></br>
      </label>
      <br />
      <br />
      {errors.name && (
        <p role="alert" className="alert alert-error">
          {errors.name}
        </p>
      )}
      <label>
        <strong>Movie </strong>
        <input
          name="movie"
          value={memberData.movie}
          onChange={handleChange}
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      {errors.movie && <p className="alert alert-error">{errors.movie}</p>}
      <br></br>
      <p>
        <em>Your lucky number is</em>
        <strong> {memberData.name.length * memberData.movie.length} </strong>!
      </p>
      <br />
      <br />
      <input
        type="submit"
        value="Sign Up"
        className="btn btn-wide btn-accent "
      />
      <h2 className="card-title text-center items-center">Members</h2>
      <sub>Fill out the form to add your first member!</sub>
    </form>
  );
}
