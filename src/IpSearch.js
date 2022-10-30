import { useRef } from 'react';


function IpSearch(props) {
  // const [ipAddress, setIpAddress] = useState('');
  const inputRef = useRef(null);
  const { setIpAddress } = props;
  // const makeRequest = useMakeRequest(ipAddress);

  return (
    <div className="absolute top-20 rounded-xl border-none bg-white font-rubik">

      {/* <form id="search" onSubmit={(e) => {
        getIpInfo(ipAddress);
        // console.log(makeRequest);
      }}> */}
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
      {/* </form> */}
    </div>
  );
}


export default IpSearch;


// async function getIpInfo(ip) {
//   //https://cors.bridged.cc/geo.ipify.org/api/v2/country?apiKey=at_Kz770gW4Kj0mqWAx6bo8A7x6DpfEz&ipAddress=8.8.8.8

//   const api_key = 'at_Kz770gW4Kj0mqWAx6bo8A7x6DpfEz';
//   const api_url = 'https://geo.ipify.org/api/v2/country?';
//   // const middleware = 'https://cors.bridged.cc/';

//   const url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;
//   // try {
//   //   const response = await fetch(url, {
//   //     method: 'GET',
//   //     headers: {
//   //       accept: 'application/json',
//   //     },
//   //   })
//   //   return response.json();
//   //   //WHEN USING AWAIT WE GET A PROMISE RETURNED, TRY USING THEN()
//   // } catch (error) {
//   //   console.log(error);
//   // }

//   fetch(url, {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//     },
//   })
//     .then((response) => {
//       return response.json()
//     })

// }
