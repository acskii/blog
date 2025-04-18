import { Link } from "react-router-dom";
import links from "../links.json";
import ThemeControl from "./ThemeControl";
import DropdownMenu from "./DropdownMenu";

function NavBar() {
    return (
        <div id="navbar" className="navbar sticky top-0 light:bg-accent bg-neutral flex flex-row gap-2 z-50">
            <div id="navbar-home" className="navbar-start">
                <Link to="/">
                    <button className="btn btn-ghost text-xl font-bold p-2">Blog</button>
                </Link>
                <a href={links.github}>
                    <span className="text-sm text-nowrap">| acskii</span>
                </a>
            </div>
            <div id="navbar-tabs" className="hidden lg:flex navbar-center flex-row gap-3">
                <Link to="/home">
                    <button className="btn btn-soft btn-secondary md:text-lg sm:text-sm font-bold">Home</button>
                </Link>
                <Link to="/posts">
                    <button className="btn btn-soft btn-primary md:text-lg sm:text-sm font-bold">Posts</button>
                </Link>
                <Link to="/about">
                    <button className="btn btn-soft btn-secondary md:text-lg sm:text-sm font-bold">About</button>
                </Link>
            </div>
            <div className="navbar-end">
                <ThemeControl />
                <DropdownMenu />
            </div>
        </div>
    );
}

export default NavBar;
