import { useRef } from 'react';


function IpSearch(props) {
  const inputRef = useRef(null);
  const { setIpAddress } = props;

  return (
    <div className="row-start-2 h-12 lg:row-start-1 col-start-2 col-span-2 w-full flex justify-center self-start lg:self-end rounded-xl border-none bg-white font-rubik">
      <input
        className="relative w-full max-w-lg p-3.5 overflow-hidden rounded-l-lg"
        placeholder={"Search for any IP address or domain"}
        ref={inputRef}
      />
      <button
        className="relative w-16 bg-dark-gray p-3 overflow-hidden font-semibold text-white rounded-r-lg"
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