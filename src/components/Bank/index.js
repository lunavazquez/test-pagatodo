import "./bank.css";

export default function Bank({ name, description, img, age }) {
  return (
    <div className="cards">
      <div className="card-img">
        <img src={img} alt="imagen" />
      </div>
      <div className="card-body">
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
        <p className="age">{age} Años</p>
      </div>
    </div>
  );
}
