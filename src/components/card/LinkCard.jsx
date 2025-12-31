import "./linkcard.css"

export default function LinkCard({ children, className = "" }) {
    return (
        <div className={`link-card ${className}`}>
            {children}
        </div>
    )
}