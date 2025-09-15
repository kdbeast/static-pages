const Header = () => {
  return (
    <header className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykC1lrDLtYjrJG6mR-41s7oA3T4IN5WVz4A&s"
        className="img"
        alt="react-logo"
      />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
