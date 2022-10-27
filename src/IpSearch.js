import { useState } from 'react';


function IpSearch() {
  const [ipAddress, setIpAddress] = useState('');
  const makeRequest = useMakeRequest(ipAddress);

  return (
    <div className="absolute top-20 rounded-xl border-none bg-white font-rubik">

      <form id="search" onSubmit={() => {
        // makeRequest(ipAddress);
        console.log(makeRequest);
      }}>
        <input className="relative w-80 p-3 overflow-hidden rounded-l-lg" value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} placeholder={"Enter IP address"}></input>
        <button className="relative bg-dark-gray p-3 overflow-hidden font-semibold text-white rounded-r-lg" type="submit" form="search">{">"}</button>
      </form>
    </div>
  );
}

function useMakeRequest(ipAddress) {

  //https://geo.ipify.org/api/v2/country?apiKey=at_Kz770gW4Kj0mqWAx6bo8A7x6DpfEz&ipAddress=8.8.8.8
  const [response, setResponse] = useState({});

  const ip = ipAddress;
  const api_key = 'at_Kz770gW4Kj0mqWAx6bo8A7x6DpfEz';
  const api_url = 'https://geo.ipify.org/api/v1?';

  const url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;

  fetch(
    "url")
    .then((res) => res.json())
    .then((json) => {
      setResponse({
        items: json,
      });
    })

  return response;
}

export default IpSearch;
