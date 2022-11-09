import "./Header.css";

function Header(props) {
  return (
    <header>
      <h1 className="intro">
        Hello World, my name is <span className="name">alireza</span>{" "}
        <span className="and">&&</span> welcome to my website
      </h1>
    </header>
  );
}
export default Header;
