import { api } from "../utils/api";
import React from "react";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => console.log(err));

    api
      .getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  });

  const onEditProfile = () => {
    props.onEditProfile(props.onClick);
  };

  const onEditAvatar = () => {
    props.onEditAvatar(props.onClick);
  };

  const onAddPlace = () => {
    props.onAddPlace(props.onClick);
  };

  return (
    <div className="main">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container" onClick={onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          </div>
          <div className="profile__profile-info">
            <div className="profile__header">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((data) => (
          <Card key={data._id} card={data} onCardClick={props.onCardClick} />
        ))}
      </section>
    </div>
  );
}
