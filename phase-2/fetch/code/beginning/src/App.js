/*

Phase 2 -> fetch()
By Sakib Rasul

Core Deliverables
1. Host our restaurant's menu (`public/db.json`) with JSON Server.
2. Render a list of menu items on load.
3. If an error occurs on `fetch()`, display the error in the DOM.
4. Feature one dish by printing its name in an <h2> element.
5. Render a "controlled" form for adding new dishes to the list *and* in db.json.
6. Render a "controlled" form next to each existing dish for updating its metadata both in the list *and* in db.json.

*/

import Form from "./Form";
import { useState, useEffect } from "react";

export default function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    console.log("fetching dishes...");
    fetch("http://localhost:3000/menu")
      .then((response) => response.json())
      .then((menuInDb) => {
        console.log(menuInDb);
        return setMenu(menuInDb);
      });
  }, []);

  const post = (event, name, price) => {
    event.preventDefault();
    console.log(name);
    console.log(price);
  };

  return (
    <div className="card bg-base-100 flex w-full border-opacity-50 flex-col place-center items-center justify-center text-center py-20">
      <h1 className="card-title">Chez Flatiron</h1>
      <section className="card-body">
        <h2 className="grid h-20 card bg-base-300 rounded-box place-items-center">
          Featured Dish: NAME!
        </h2>
        {/* <div>
          {menu.map((dish) => {
            <div key={dish.id}>
              {dish.name} | ${dish.price}{" "}
            </div>;
          })}
        </div> */}
        <div className="grid h-80 bg-base-300 rounded-box place-items-center">
          {menu.map((dish) => {
            return (
              <div key={dish.id}>
                {dish.name} | ${dish.price}{" "}
              </div>
            );
          })}
        </div>

        <h3 className="card-actions justify-center">
          Submit a New Dish! <Form postRequest={post} />
        </h3>
      </section>
    </div>
  );
}
