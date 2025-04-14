
import { Link } from "react-router-dom";

function NavBar() {
    return (
        // <Flex id="navbar" as="div" direction="row-reverse" align="center" classNameName="bg-gray-950 top-0 text-right w-screen gap-5 p-3">
        //     <h3 classNameName="text-white font-bold text-[1.7em]">comfy Blog</h3>
        //     <Button color="gray" variant="classNameic">
        //         Edit profile
        //     </Button>
        //     <Button color="orange" variant="solid" highContrast radius="full" classNameName="text-center cursor-pointer">
        //         <Link to="/" classNameName=" hover:font-bold p-1.5 w-20">Home</Link>
        //     </Button>
        //     <Button color="crimson" variant="solid" radius="full" highContrast>
        //         <Link to="/posts" classNameName="hover:font-bold p-1.5 rounded-lg w-20 text-center cursor-pointer">Posts</Link>
        //     </Button>
    /* <div id="navbar" classNameName="font-sans bg-gray-950 h-16 w-screen top-0 flex flex-row-reverse items-center p-3">
        </div> */
    <div className="navbar bg-neutral text-neutral-content w-screen gap-3">
        <div className="navbar-start">
            <h1>Blog | acskii</h1>
        </div>
        <div className="navbar-center flex gap-3">
            <button className="btn btn-ghost text-xl"><Link to="/home" >Home</Link></button>
            <button className="btn btn-ghost text-xl"><Link to="/posts" >Posts</Link></button>
        </div>
    </div>
    );
}

export default NavBar;
