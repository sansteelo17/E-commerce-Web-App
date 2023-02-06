import { useRef, useState } from "react";
import { sendEmailToEmailjs } from "../../../lib/api";

const FooterHead = () => {
  const [enteredEmail, setEnteredEmail] = useState("");

  const form = useRef();

  const changeEmailValueHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const sendEmailHandler = (e) => {
    e.preventDefault();

    sendEmailToEmailjs(
      "service_iplkln5",
      "template_j3w373e",
      form.current,
      "nev4bnxTq5iegO1na"
    );

    setEnteredEmail("");
  };

  return (
    <form ref={form} onSubmit={sendEmailHandler}>
      <div className="flex sm:flex-col lg:flex-row w-4/5 mx-auto lg:justify-between items-center h-28">
        <div className="flex-col grow text-center">
          <h1 className="sm:text-xl lg:text-2xl font-bold sm:mt-2 lg:mt-0">
            Subscribe to our Newsletter
          </h1>
          <p className="sm:text-sm lg:text-xl text-white/[0.7]">
            Stay up to date with latest information.
          </p>
        </div>
        <div className="flex grow ml-6 sm:mb-2 lg:mb-0">
          <input
            type="email"
            name="user_email"
            value={enteredEmail}
            onChange={changeEmailValueHandler}
            className="w-3/5 sm:py-1 lg:py-3 px-4 text-black enabled:outline-none"
            placeholder="Your email address..."
          />
          <button className="text-sm bg-zinc-300 font-bold px-3 sm:py-1 lg:py-3 text-zinc-900/[0.7]">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
};

export default FooterHead;
