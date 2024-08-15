import axios from "axios";
import { useEffect, useState } from "react";
import { BannerProps } from "../types.ts"

const Banner: React.FC<BannerProps> = ({banner, setBanner}) => {
    const [showBanner, setShowBanner] = useState<boolean>(true);
    const toggleBanner = () => setShowBanner(prevState => !prevState);

    const [countdown, setCountdown] = useState<number>(0);

    useEffect(() => {
        const fetchBanner = async () => {
            const response = await axios.get('http://localhost:5000/api/banner');
            console.log(response.data);
            setBanner(response.data);
            setCountdown(response.data.timer);
        };

        fetchBanner();
    }, []);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    useEffect(() => {
        setCountdown(banner.timer);
    }, [banner]);

    if (!banner || countdown <= 0) return null;

    return (
        <div>
            <button onClick={toggleBanner}>
                {showBanner ? 'Hide Banner' : 'Show Banner'}
            </button>
            { showBanner &&  (
                <>
                    <h1>{banner.description}</h1>
                    <a href={banner.link}>Click here</a>
                    <p>Countdown: {countdown} seconds</p>
                </>
            )}
        </div>
    );
}

export default Banner;