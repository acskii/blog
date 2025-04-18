import { Link } from "react-router-dom"; 

function DropdownMenu() {
  return (
    <div className="dropdown dropdown-end inline lg:hidden">
      <div className="tooltip tooltip-bottom" data-tip="Menu">
        <button tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <rect x="0" fill="none" width="24" height="24"></rect>{" "}
              <g>
                {" "}
                <path d="M4 19h16v-2H4v2zm16-6H4v2h16v-2zM4 9v2h16V9H4zm16-4H4v2h16V5z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
      </div>
      <ul className="dropdown-content menu text-right text-sm lg:text-md bg-neutral items-end mt-3 w-screen p-3">
        <h2 className="menu-title pr-8">Menu</h2>
        <li>
          <Link to="/home">
            <button className="btn btn-ghost font-bold h-5">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/posts">
            <button className="btn btn-ghost font-bold h-5">Posts</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button className="btn btn-ghost font-bold h-5">About</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
