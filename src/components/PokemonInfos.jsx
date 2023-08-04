function PokemonInfos({ name, image, ability, type, id }) {
  return (
    <div className="wrapper-sec">
      <div className="description">
        <img src={image} alt={name} />
        <div className="details-wrapper">
          <h4>Id: #0{id}</h4>
          <h4>Name: {name}</h4>
          <h4>Type: {type}</h4>
          <h4>Ability: {ability}</h4>
        </div>
      </div>
    </div>
  );
}

export default PokemonInfos;
