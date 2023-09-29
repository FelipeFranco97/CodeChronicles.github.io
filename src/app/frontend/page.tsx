import { heroBannerFrontend, informationFrontend, cardFrontend } from "@/assets/texts";
import HeroBanner from "../components/HeroBanner/heroBanner";
import Information from "../components/Information/Information";
import Card from "../components/Card/Card";

const Frontend = () => {
  return (
    <>
    <HeroBanner {...heroBannerFrontend}/>
    <Information information={informationFrontend} />
    <Card card={cardFrontend}/>
    </>
  );
}

export default Frontend