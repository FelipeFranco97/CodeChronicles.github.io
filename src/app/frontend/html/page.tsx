import { heroBannerHtml, informationHtml } from "@/assets/texts";
import HeroBanner from "@/app/components/HeroBanner/heroBanner";
import Information from "@/app/components/Information/Information";

const Html = () => {
  return (
    <>
      <HeroBanner {...heroBannerHtml}/>
      <Information information={informationHtml}/>
    </>
  );
}

export default Html