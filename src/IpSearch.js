import { useRef } from 'react';


function IpSearch(props) {
  const inputRef = useRef(null);
  const { setIpAddress } = props;

  return (
    <div className="absolute top-20 rounded-xl border-none bg-white font-rubik">
      <input
        className="relative w-80 p-3 overflow-hidden rounded-l-lg"
        placeholder={"Search for any IP address or domain"}
        ref={inputRef}
      />
      <button
        className="relative bg-dark-gray p-3 overflow-hidden font-semibold text-white rounded-r-lg"
        type="submit"
        form="search"
        onClick={(e) => {
          setIpAddress(inputRef.current.value);
        }}
      >
        {">"}
      </button>
    </div>
  );
}


export default IpSearch;