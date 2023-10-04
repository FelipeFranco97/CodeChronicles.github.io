import { heroBannerCss, informationCss } from "@/assets/texts";
import HeroBanner from "@/app/components/HeroBanner/heroBanner";
import Information from "@/app/components/Information/Information";

const Css = () => {
  return (
    <>
      <HeroBanner {...heroBannerCss}/>
      <Information information={informationCss}/>
    </>
  );
}

export default Css