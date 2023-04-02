import PriceList from "@/components/pricing/pricelist";

import axios from "axios";
import NavBanner from "@/components/navbanner";
function Courses(props:any) {
  return (
    <>
    <NavBanner banner = {props.navbanner} ></NavBanner>
     <PriceList pricelist = {props.pricelist}></PriceList>
    </>
  );
}
export const getStaticProps = async () => {
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/pricelist.json`
  );
  const priceListData= response.data;
  response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/navbanners.json`
  );
  const navbannerData=response.data;
  return {
    props: {     
      pricelist: priceListData,
      navbanner : navbannerData.pricing
    },
  };
};

export default Courses;
