import PriceList from "@/components/pricing/pricelist";

import axios from "axios";
import NavBanner from "@/components/navbanner";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
function Courses(props:any) {
  return (
    <>
      <HeaderComponent layoutdata={props.footer}></HeaderComponent> 
    <NavBanner banner = {props.navbanner} ></NavBanner>
     <PriceList pricelist = {props.pricelist}></PriceList>
     <FooterComponent layoutdata={props.footer}></FooterComponent> 
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
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/footer.json`
  );
  const FooterData = response.data;
  return {
    props: {     
      pricelist: priceListData,
      navbanner : navbannerData.pricing,
      footer: FooterData
    },
  };
};

export default Courses;
