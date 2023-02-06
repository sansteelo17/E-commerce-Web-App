import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="text-black sm:hidden lg:flex rounded text-xs">
      <button className="text-black/[0.5] bg-white border-r border-black/[0.2] py-4 px-8 text-center rounded-l-3xl hover:bg-gray-100">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <div className="flex w-96">
        <input
          type="text"
          className="w-full bg-white pl-4 pr-8 py-4 rounded-r-3xl enabled:outline-none"
          placeholder="Type to search..."
        />
      </div>
    </div>
  );
};

export default Search;
