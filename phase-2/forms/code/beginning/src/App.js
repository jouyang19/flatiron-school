/*

Phase 2 -> Forms
By Sakib Rasul

Core Deliverables
1. Refactor <Form> into a "controlled" form.
2. Add "Your lucky number is X!" after the two fields, where X is dependent on the two fields.
3. Handle form submissions by appending the new user to a local array.
4. Render the array as a list of members in `Form`.
5. (Bonus!) Render the list of members in `App` instead of `Form`.

*/

import Form from "./Form";

function App() {
  return (
    <div className="card-body text-center items-center">
      <header>
        <h1 className="card-title items-center text-center">
          Luck of the Screen
        </h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
