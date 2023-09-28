import { heroBannerTools, informationTools } from "@/assets/texts";
import HeroBanner from "../components/HeroBanner/heroBanner";
import Information from "../components/Information/Information";

const Tools = () => {
  return (
    <>
        <HeroBanner {...heroBannerTools}/>
        <Information information={informationTools} />
    </>
  );
}

export default Tools