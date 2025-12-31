export default function GlassButton({ icon, href = "" }) {
    return (
        <a className="glass-button link-card-item" href={href}>
            <i className={icon} />
        </a>
    );
}