// const props = { key: item.id, name: item.name, price: item.price };

const Item = ({ name }) => {
  // props.name
  // props.price

  const person = { fullName: "Sakib Rasul", school: "Flatiron" };

  // Destructuring person

  const { fullName, school } = person;

  console.log(school);

  return (
    <li>
      {name} (${price})
    </li>
  );
};

export default Item;

// Challenge: Create new
