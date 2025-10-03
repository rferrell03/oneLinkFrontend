import "./backgroundStars.css";

export default function BackgroundStars() {
    return (
        <div className="background">
            {Array.from({ length: 80 }).map((_, i) => (
                <div
                    key={i}
                    className="star"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3 + 2}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        animationDuration: `${Math.random() * 75 + 10}s`,
                        
                    }}
                ></div>
            ))}
        </div>
    );
}