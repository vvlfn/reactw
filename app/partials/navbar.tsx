import { Link, NavLink } from "react-router";

export function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light fixed-top bg-auto border-b-amber-50 border-b-2">
				<div className="container-fluid">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						{links.map((link) => (
							<li key={link.route} className="nav-item inline-block mx-5">
								<NavLink to={link.route} className="nav-link">
									{link.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</>
	);
}
const links = [
	{ route: "/", name: "Home" },
	{ route: "/test", name: "Test" },
];
