import { useState } from "react";

export default function Form({ postRequest }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const handleNameChange = (event) => setName(event.target.value);

  return (
    <form
      className="flex flex-col w-full border-opacity-50"
      onSubmit={(event) => postRequest(event, name, price)}
    >
      <label className="input input-bordered flex items-center gap-2">
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
          className="grow"
        />
        {` `}
      </label>
      <br></br>
      <label className="input input-bordered flex items-center gap-2">
        <input
          name="price"
          type="number"
          placeholder="0"
          min="0"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        {` `}
      </label>
      <br></br>
      <input type="submit" value="Submit" className="btn btn-neutral" />
    </form>
  );
}
