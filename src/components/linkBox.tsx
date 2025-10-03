import { useState } from "react";
import "./linkbox.css";

export default function LinkBox() {
    const [input, setInput] = useState("");
    const [shortUrl, setShortUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    return (
        <div className="urlInputContainer">
            <form onSubmit={handleSubmit} className="urlForm">
                <input
                type="url"
                className="urlInput"
                placeholder="https://google.com"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
                />
                <button className = "urlButton" type="submit"> {">"}</button>
            </form>

            {shortUrl && (
                <p> Short URL:{" "}
                    <a href={shortUrl} target="_blank" rel="noreferrer">
                        {shortUrl}
                    </a>
                </p>
            )}

            {error && <p>Error: {error}</p>}
        </div>
    );







    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setShortUrl(null);

        try {
            const res = await fetch("http://localhost:3000/api/shorten", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: input }),
            });

            const data = await res.json();

            if (!res.ok) {
            throw new Error(data.error || "Failed to shorten URL");
            }

            setShortUrl(`http://localhost:3000/api/${data.code}`);
        } catch (err: any) {
            setError(err.message);
        }
    }
}

