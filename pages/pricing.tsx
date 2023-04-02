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
    `https://horizontal-demo-default-rtdb.firebaseio.com/pricing.json `
  );
  const priceListData= [ {
    "title": "Basic",
    "cost": "$24.50",
    "perPersonText": "5mos",
    "backgroundImage": "images/bg_1.jpg",
    "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    "link": "/courses",
    "linkText": "Take A Course"
  },
  {
    "title": "Standard",
    "cost": "$34.50",
    "perPersonText": "5mos",
    "backgroundImage": "images/bg_2.jpg",
    "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    "link": "/courses",
    "linkText": "Take A Course"
  },
  {
    "title": "Premium",
    "cost": "$54.50",
    "perPersonText": "5mos",
    "backgroundImage": "images/bg_3.jpg",
    "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    "link": "/courses",
    "linkText": "Take A Course"
  },
  {
    "title": "Platinum",
    "cost": "$89.50",
    "perPersonText": "5mos",
    "backgroundImage": "images/bg_5.jpg",
    "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    "link": "/courses",
    "linkText": "Take A Course"
  }
  ];
  response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/banners.json`
  );
  const navbannerData={
    "courses":{
          "id":"b1",
      "bannerImage":"images/bg_2.jpg",
      "bannerTitle":"Our Courses",
      "pageTitle":"COURSES",
      "homeTitle":"HOME"
    },
    "pricing":{
          "id":"b2",
      "bannerImage":"images/bg_2.jpg",
      "bannerTitle":"Pricing",
      "pageTitle":"PRICING",
      "homeTitle":"HOME"
    }
  };
  return {
    props: {     
      pricelist: priceListData,
      navbanner : navbannerData.pricing
    },
  };
};

export default Courses;
