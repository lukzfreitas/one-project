
interface PropsNavbar {
    items: { active: boolean, label: string }[];
}

const NavBar = (props: PropsNavbar) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
        <div className="navbar-brand">One Project</div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                {props.items.map(item => {
                    if (item.active) {
                        return (
                            <li className="nav-item active">
                                <div className="nav-link">{item.label}</div>
                            </li>
                        )
                    } else {
                        return (
                            <li className="nav-item">
                                <div className="nav-link">{item.label}</div>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    </nav>
);

export default NavBar;
