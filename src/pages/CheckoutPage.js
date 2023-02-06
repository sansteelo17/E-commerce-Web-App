const CheckoutPage = () => {
  return (
    <form>
      <div className="flex sm:flex-col lg:flex-row sm:items-center lg:flex-wrap px-8 mt-8 lg:justify-between">
        <input
          type="text"
          className="sm:w-10/12 lg:w-1/4 border border-black/[0.1] outline-none py-3"
          placeholder=""
        />
        <input
          type="text"
          className="sm:w-10/12 lg:w-1/4 border border-black/[0.1] outline-none py-3"
          placeholder=""
        />
        <input
          type="text"
          className="sm:w-10/12 lg:w-1/4 border border-black/[0.1] outline-none py-3"
          placeholder=""
        />
        <input
          type="text"
          className="sm:w-10/12 lg:w-1/4 border border-black/[0.1] outline-none py-3"
          placeholder=""
        />
        <input
          type="text"
          className="sm:w-10/12 lg:w-1/4 border border-black/[0.1] outline-none py-3"
          placeholder=""
        />
        <input
          type="text"
          className="sm:w-10/12 lg:w-1/4 border border-black/[0.1] outline-none py-3"
          placeholder=""
        />
        <div className="w-full flex lg:flex-row sm:flex-col items-center lg:justify-around">
          <input
            type="text"
            className="sm:w-10/12 lg:w-1/3 border border-black/[0.1] outline-none py-3"
            placeholder=""
          />
          <input
            type="text"
            className="sm:w-10/12 lg:w-1/3 border border-black/[0.1] outline-none py-3"
            placeholder=""
          />
        </div>
      </div>
    </form>
  );
};

export default CheckoutPage;
