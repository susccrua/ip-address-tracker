import { useState, useEffect } from 'react';

function IpInformation(props) {
  const { ipAddress, setPosition } = props;
  const [data, setData] = useState({
    "ip": "100.100.1.10",
    "location": {
      "country": "Unknown",
      "city": "City",
      "region": "State",
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
    <div className="col-start-2 col-span-2 gap-4 mt-20 lg:gap-0 lg:max-h-60 m-auto row-start-2 row-span-2 flex flex-col lg:flex-row justify-between rounded-xl items-center h-auto sm:min-w-lg lg:h-full text-center lg:text-left bg-white font-rubik py-8 lg:px-4 shadow-md z-10">
      <div className="flex flex-col lg:lg:w-1/4 h-20 border-slate-300 px-4 lg:border-r">
        <h3 className="text-xs text-gray font-bold -mt-2">IP ADDRESS</h3>
        <h1 className="text-xl lg:text-2xl text-dark-gray mt-3 font-semibold">{data.ip}</h1>
      </div>
      <div className="flex flex-col lg:w-1/4 h-20 border-slate-300 px-4 lg:border-r">
        <h3 className="text-xs text-gray font-bold -mt-2">LOCATION</h3>
        <h1 className="text-xl lg:text-2xl text-dark-gray font-semibold mt-3 ">{data.location.city + ", " + data.location.region}</h1>
      </div>
      <div className="flex flex-col lg:w-1/4 h-20 border-slate-300 px-4 lg:border-r">
        <h3 className="text-xs text-gray font-bold -mt-2">TIMEZONE</h3>
        <h1 className="text-xl lg:text-2xl text-dark-gray font-semibold mt-3 ">{data.location.timezone}</h1>
      </div>
      <div className="flex flex-col lg:w-1/4 h-20 px-4 ">
        <h3 className="text-xs lg:text-xs text-gray font-bold -mt-2">ISP</h3>
        <h1 className="text-xl lg:text-2xl text-dark-gray font-semibold mt-3 pb-2">{data.isp}</h1>
      </div>
    </div >
  );
}

export default IpInformation;
