import { Link } from "react-router-dom";
import SwappingEmoji from "./SwappingEmoji";

function HomeContent() {
    return (
        <div className="hero bg-base-200 h-90 w-full rounded-lg text-base-content">
            <div className="hero-content text-center flex flex-col items-center gap-3">
                <div className="max-w-lg text-left">
                    <div className="flex flex-row justify-center items-center text-3xl md:text-5xl">
                        <h1 className="font-bold">Hey there!</h1>
                        <SwappingEmoji  on='👊' off='👋' />
                    </div>
                    <p className="pt-6 text-md md:text-lg">This is my stash of code crumbs, dev musings, and chaotic scribbles from the tech rabbit hole.</p>
                    <p className="py-6 text-md md:text-lg">It's mostly for future-me… but you're totally welcome to snoop around!</p>
                </div>
                <Link className="btn btn-wide btn-soft btn-primary border border-zinc-500" to="/posts">
                    <button>Check my stash!</button>
                </Link>
            </div>
        </div>
    );
}

export default HomeContent;