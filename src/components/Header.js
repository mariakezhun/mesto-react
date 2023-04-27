import logoPaht from "../images/logo_white.svg";

export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logoPaht} alt="Логотип" />
    </div>
  );
}
