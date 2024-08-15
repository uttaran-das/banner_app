import axios from "axios";
import { BannerProps } from "../types";

const Dashboard: React.FC<BannerProps> = ({banner, setBanner}) => {
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newBanner = {...banner, [e.target.name]: e.target.value}
        try {
            await axios.put('http://localhost:5000/api/banner/update', newBanner);
        } catch (error) {
            console.error('Error updating banner:', error);
        }
        setBanner(newBanner);
    }

    return (
        <form>
          <div>
            <label>Description: </label>
            <input type="text" name="description" value={banner.description || ''} onChange={handleChange} />
          </div>
          <div>
            <label>Timer: </label>
            <input type="number" name="timer" value={banner.timer || ''} onChange={handleChange} />
          </div>
          <div>
            <label>Link: </label>
            <input type="text" name="link" value={banner.link || ''} onChange={handleChange} />
          </div>
        </form>
    );
};

export default Dashboard;