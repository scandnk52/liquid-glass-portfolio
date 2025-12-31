import { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import "./spotify.css";

export default function SpotifyCard() {
    const [data, setData] = useState(null);
    const [progress, setProgress] = useState(0);
    const DISCORD_ID = "";

    useEffect(() => {
        const fetchLanyard = async () => {
            try {
                const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
                const json = await res.json();
                setData(json.data?.spotify || null);
            } catch (error) {
                console.error("Lanyard Error:", error);
            }
        };

        fetchLanyard();
        const interval = setInterval(fetchLanyard, 10000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!data || !data.timestamps) return;
        const updateProgress = () => {
            const total = data.timestamps.end - data.timestamps.start;
            const current = Date.now() - data.timestamps.start;
            const percentage = Math.min(100, Math.max(0, (current / total) * 100));
            setProgress(percentage);
        };
        const frame = setInterval(updateProgress, 1000);
        return () => clearInterval(frame);
    }, [data]);

    return (
        <Card className="w-2 h-2">
            <div className={`spotify-card-vertical ${data ? 'active' : 'idle'}`}>
                {data ? (
                    <>
                        <img src={data.album_art_url} alt="Album Cover" className="v-spotify-cover" />

                        <div className="v-spotify-content">
                            <div className="v-spotify-info">
                                <p className="v-album-name">{data.album}</p>
                                <h4 className="v-song-name">{data.song}</h4>
                                <p className="v-artist-name">{data.artist}</p>
                            </div>

                            <div className="v-spotify-footer">
                                <div className="v-progress-container">
                                    <div className="v-progress-bar" style={{ width: `${progress}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="v-not-playing">
                        <p>Not Playing</p>
                    </div>
                )}
            </div>
        </Card>
    );
}