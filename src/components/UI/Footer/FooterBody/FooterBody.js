import ContactInfo from "./ContactInfo";
import LocationMap from "./LocationMap";
import UsefulLinks from "./UsefulLinks";

const FooterBody = () => {
  return (
    <div className="flex sm:flex-row flex-wrap lg:flex-nowrap justify-between py-4 border-y border-white/[0.2]">
      <UsefulLinks />
      <ContactInfo />
      <LocationMap />
    </div>
  );
};

export default FooterBody;
