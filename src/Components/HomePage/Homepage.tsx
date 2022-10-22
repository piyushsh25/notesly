import { HomeImg } from "./HomeImg";
import "./Homepage.css";
import { HomeText } from "./HomeText";
export const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="content-container">
        <div className="text-container">{<HomeText/>}</div>
        <div className="image-container">{<HomeImg/>}</div>
      </div>
    </div>
  );
};
