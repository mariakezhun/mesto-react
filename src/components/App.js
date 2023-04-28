import "../index.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    link: "",
    name: "",
  });

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ link: "", name: "" });
  };

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          title="Редактировать профиль"
          name="profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <label className="popup__field">
            <input
              className="popup__input popup__input_type_name"
              type="text"
              placeholder="Имя"
              name="name"
              required
              minLength="2"
              maxLength="40"
              id="name"
            />
            <span className="popup__error name-error"></span>
          </label>
          <label className="popup__field">
            <input
              className="popup__input popup__input_type_job"
              type="text"
              placeholder="О себе"
              name="about"
              required
              minLength="2"
              maxLength="200"
              id="about"
            />
            <span className="popup__error about-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <label className="popup__field">
            <input
              className="popup__input popup__input_type_link"
              type="url"
              placeholder="Ссылка на аватарку"
              name="avatar"
              required
              id="avatar-link"
            />
            <span className="popup__error avatar-link-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          title="Новое место"
          name="place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Создать"
        >
          <label className="popup__field">
            <input
              className="popup__input popup__input_type_title"
              type="text"
              placeholder="Название"
              name="name"
              required
              minLength="2"
              maxLength="30"
              id="title"
            />
            <span className="popup__error title-error"></span>
          </label>
          <label className="popup__field">
            <input
              className="popup__input popup__input_type_link"
              type="url"
              placeholder="Ссылка на картинку"
              name="link"
              required
              id="link"
            />
            <span className="popup__error link-error"></span>
          </label>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
