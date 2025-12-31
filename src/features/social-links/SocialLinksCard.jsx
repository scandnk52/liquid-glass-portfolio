import Card from "../../components/card/Card";
import GlassButton from "../../components/button/GlassButton";
import LinkCard from "../../components/card/LinkCard.jsx";


export default function SocialLinksCard() {
    return (
        <Card className="w-2 h-2">
            <LinkCard className="link-card-w-2 link-card-h-2">
                <GlassButton icon="fa-brands fa-linkedin link-card-icon" href="" />
                <GlassButton icon="fa-brands fa-github link-card-icon" href="" />
                <GlassButton icon="fa-brands fa-instagram link-card-icon" href="" />
                <GlassButton icon="fa-solid fa-envelope link-card-icon" href="" />
            </LinkCard>
        </Card>
    );
}