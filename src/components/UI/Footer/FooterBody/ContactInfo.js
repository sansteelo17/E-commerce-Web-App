import {
  faClock,
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = () => {
  return (
    <div>
      <h1 className="font-bold text-lg mt-6 mb-3 sm:my-2 lg:my-4">
        CONTACT INFORMATION
      </h1>
      <ul className="flex flex-col text-white/[0.8]">
        <li className="pb-2 sm:pb-1 items-center">
          <FontAwesomeIcon icon={faLocation} />
          <span className="ml-3">Delta State, Nigeria.</span>
        </li>
        <li className="pb-2 sm:pb-1 items-center">
          <FontAwesomeIcon icon={faPhone} />
          <span className="ml-3">+2348109870865</span>
        </li>
        <li className="pb-2 sm:pb-1 items-center">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="ml-3">gakpovwovwo@gmail.com</span>
        </li>
        <li className="pb-2 sm:pb-1 items-center">
          <FontAwesomeIcon icon={faClock} />
          <span className="ml-3">Mon - Sun / 10:00AM - 5:00pm </span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
