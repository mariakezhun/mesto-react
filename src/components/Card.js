export default function Card(props) {
  const handleCardClick = () => {
    props.onCardClick(props.card);
  };

  return (
    <div id="card-template">
      <div className="element">
        <button className="element__trash"></button>
        <img
          className="element__image"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleCardClick}
        />
        <div className="element__header-container">
          <h2 className="element__header">{props.card.name}</h2>
          <div className="element__like-container">
            <button className="element__like" type="button"></button>
            <p className="element__like-counter">{props.card.likes.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
