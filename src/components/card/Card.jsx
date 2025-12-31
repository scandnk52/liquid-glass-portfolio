import "./card.css";

export default function Card({ children, className = "" }) {
    return (
        <div className={`card glass ${className}`}>
            <div className="card-content">{children}</div>
        </div>
    );
}