const planetList = [
  { name: "Hoth", climate: "Ice" },
  { name: "Tattooine", climate: "Desert" },
  { name: "Alderaan", climate: "Temperate" },
  { name: "Mustafar", climate: "Volcanic", }
];

const Header = () => {
  return (
    <tr>
      <th>Name</th>
      <th>Climate</th>
    </tr>
  )
};

const Rows = (props) => {
  const data = props.planetList.map((planet, index) => (
    <tr key={index}>
      <td>{planet.name}</td>
      <td>{planet.climate}</td>
    </tr>
  ));
  return data;
};

const Planets = () => {
  return (
    <table>
      <Header />
      <Rows planetList={planetList}/>
    </table>
  );
};

export default Planets;
