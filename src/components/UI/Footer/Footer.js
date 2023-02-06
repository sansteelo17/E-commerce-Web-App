import CopyRightSection from "./CopyRightSection";
import FooterBody from "./FooterBody/FooterBody";
import FooterHead from "./FooterHead";

const Footer = () => {
  return (
    <div className="bg-lime-700 text-white mt-20 w-full px-6">
      <FooterHead />
      <FooterBody />
      <CopyRightSection />
    </div>
  );
};

export default Footer;
