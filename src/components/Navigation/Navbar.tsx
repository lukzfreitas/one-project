interface PropsNavbar {
  title: string;
  items: { key: string; active: boolean; label: string }[];
}

const NavBar = (props: PropsNavbar) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
    <div data-testid="title-navbar" className="navbar-brand">
      {props.title}
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        {props.items.map((item) => {
          if (item.active) {
            return (
              <li
                key={item.key}
                data-testid="nav-item-active"
                className="nav-item active"
              >
                <div className="nav-link">{item.label}</div>
              </li>
            );
          } else {
            return (
              <li key={item.key} data-testid="nav-item" className="nav-item">
                <div className="nav-link">{item.label}</div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  </nav>
);

export default NavBar;
