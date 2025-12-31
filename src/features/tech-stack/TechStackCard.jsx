import Card from "../../components/card/Card";
import LinkCard from "../../components/card/LinkCard.jsx";
import TechItem from "./TechItem.jsx";


export default function TechStackCard() {
    return (
        <Card className="w-4">
            <LinkCard className="link-card-w-4">
                <TechItem icon="fa-brands fa-python link-card-icon" />
                <TechItem icon="fa-brands fa-js link-card-icon" />
                <TechItem icon="fa-brands fa-c link-card-icon" />
                <TechItem icon="fa-brands fa-linux link-card-icon" />
            </LinkCard>
        </Card>
    );
}