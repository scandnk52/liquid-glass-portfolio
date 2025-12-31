import "./tilebutton.css";
import Card from "../card/Card.jsx";

export default function TileButton({ icon, href = "" }) {
    return (
        <Card>
            <a className="tile-button" href={href}>
                <i className={icon} />
            </a>
        </Card>
    );
}