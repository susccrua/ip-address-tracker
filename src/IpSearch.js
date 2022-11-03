import { useRef } from 'react';


function IpSearch(props) {
  // const [ipAddress, setIpAddress] = useState('');
  const inputRef = useRef(null);
  const { setIpAddress } = props;
  // const makeRequest = useMakeRequest(ipAddress);

  return (
    <div className="absolute top-20 rounded-xl border-none bg-white font-rubik">
      <input
        className="relative w-80 p-3 overflow-hidden rounded-l-lg"
        placeholder={"Enter IP address"}
        ref={inputRef}
      />
      <button
        className="relative bg-dark-gray p-3 overflow-hidden font-semibold text-white rounded-r-lg"
        type="submit"
        form="search"
        onClick={(e) => {
          // const ipInfo = getIpInfo(ipAddress);
          // setData(ipInfo.result);
          console.log("changed ip to " + inputRef.current.value)
          setIpAddress(inputRef.current.value);
        }}
      >
        {">"}
      </button>
    </div>
  );
}


export default IpSearch;