import { useState, useEffect } from 'react';

import background from './pattern-bg.png';
import IpInformation from './IpInformation.js'
import IpSearch from './IpSearch.js'

import Map from './Map.js'

function App() {
  // const [data, setData] = useState({});
  const [ipAddress, setIpAddress] = useState('');
  const [position, setPosition] = useState([51.505, -0.09]);
  const [data, setData] = useState();


  // fetching the GET route from the Express server which matches the GET route from server.js


  useEffect(() => {
    const callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.message)
      }
      return body;
    }
    callBackendAPI()
      .then(res => setData({ data: res.express }))
      .catch(err => console.log(err));


  })

  return (
    <div className="flex flex-col">
      <div>{data.data}</div>
      <div className="flex flex-col justify-center items-center bg-yellow-200 z-10 top-0">
        <img className="h-1/3 " alt="bg" src={background} />
        <IpSearch setIpAddress={setIpAddress} />
        {/* <div className="my-80"> */}

        <IpInformation ipAddress={ipAddress} setPosition={setPosition} />
      </div >
      <div className="z-0">
        <Map position={position} />
      </div>
    </div>
  );
}

export default App;
