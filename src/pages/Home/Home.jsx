import HeaderCard from "../../features/header/HeaderCard.jsx";
import SpotifyCard from "../../features/spotify/SpotifyCard.jsx";
import SocialLinksCard from "../../features/social-links/SocialLinksCard.jsx";
import TechStackCard from "../../features/tech-stack/TechStackCard.jsx";
import TileButton from "../../components/button/TileButton.jsx";

export default function Home() {
    return (
        <div className="grid-container">
            <HeaderCard/>
            <SpotifyCard/>
            <SocialLinksCard/>
            <TileButton icon={"fa-brands fa-spotify"} href={""}/>
            <TileButton icon={"fa-solid fa-code"} href={""}/>
            <TechStackCard/>
        </div>
    )
}