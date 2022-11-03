import { useState, useEffect } from 'react';

function IpInformation(props) {
  const { ipAddress, setPosition } = props;
  const [data, setData] = useState({
    "ip": "100.100.1.19",
    "location": {
      "country": "US",
      "city": "Bedford",
      "region": "Texas",
      "timezone": "-05:00",
      "lat": 32,
      "lng": 244

    },
    "as": {
      "asn": 11427,
      "name": "TWC-11427-TEXAS",
      "route": "70.119.0.0/16",
      "domain": "",
      "type": "Cable/DSL/ISP"
    },
    "isp": "None yet"
  });



  useEffect(() => {
    const api_key = 'at_Kz770gW4Kj0mqWAx6bo8A7x6DpfEz';
    const api_url = 'https://geo.ipify.org/api/v2/country,city?';

    const url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ipAddress;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("setting data and postition" + json);
        setData(json)
        setPosition([json.location.lat, json.location.lng])

      } catch (error) {
        console.log("error", error);
      }


    }
    fetchData();


  }, [ipAddress, setPosition])




  return (
    <div className="flex flex-col md:flex-row justify-between rounded-xl items-center text-center -my-24 md:text-left bg-white font-rubik gap-6 p-10">
      <div>
        <h3 className="text-xs text-gray font-bold">IP ADDRESS</h3>
        <h1 className="text-2xl text-dark-gray font-semibold">{data.ip}</h1>
      </div>
      <div>
        <h3 className="text-xs text-gray font-bold">LOCATION</h3>
        <h1 className="text-2xl text-dark-gray font-semibold">{data.location.city + ", " + data.location.region}</h1>
      </div>
      <div>
        <h3 className="text-xs text-gray font-bold border-l">TIMEZONE</h3>
        <h1 className="text-2xl text-dark-gray font-semibold">{data.location.timezone}</h1>
      </div>
      <div>
        <h3 className="text-xs text-gray font-bold">ISP</h3>
        <h1 className="text-2xl text-dark-gray font-semibold">{data.isp}</h1>
      </div>
    </div >
  );
}

export default IpInformation;
