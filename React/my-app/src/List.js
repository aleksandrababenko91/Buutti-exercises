import './List.css'
const nameList = ["Ari", "Jari", "Kari", "Sari", "Mari", "Sakari", "Jouko"];
const List = () => {
    const personDOMs = nameList.map(name => 
       <p>{name}</p>
    );

    return <div>{personDOMs}</div>;
};


export default List;
