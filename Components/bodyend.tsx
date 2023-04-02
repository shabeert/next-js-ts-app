import Script from "next/script";

function BodyEnd() {
  return (
    <>
      <Script src="js/jquery.min.js" strategy="beforeInteractive"></Script>
      <Script
        src="js/jquery-migrate-3.0.1.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="js/popper.min.js" strategy="lazyOnload"></Script>
      <Script src="js/bootstrap.min.js" strategy="lazyOnload"></Script>
      <Script src="js/jquery.easing.1.3.js" strategy="lazyOnload"></Script>
      <Script src="js/jquery.waypoints.min.js" strategy="lazyOnload"></Script>
      <Script src="js/jquery.stellar.min.js" strategy="lazyOnload"></Script>
      <Script src="js/owl.carousel.min.js" strategy="lazyOnload"></Script>
      <Script
        src="js/jquery.magnific-popup.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script src="js/aos.js" strategy="lazyOnload"></Script>
      <Script
        src="js/jquery.animateNumber.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script src="js/scrollax.min.js" strategy="lazyOnload"></Script>
      <Script src="js/main.js" strategy="lazyOnload"></Script>
    </>
  );
}
export default BodyEnd;
