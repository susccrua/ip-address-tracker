import { useState, useEffect } from 'react';

import background from './pattern-bg.png';
import IpInformation from './IpInformation.js'
import IpSearch from './IpSearch.js'

import Map from './Map.js'

function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [position, setPosition] = useState([-32, 58]);

  return (
    <div className="grid grid-cols-4 grid-rows-5 font-rubik h-screen w-screen overflow-hidden">
      <h1 className="col-start-2 col-span-2 row-start-1 z-20 text-3xl mt-6 text-white text-center font-bold z-20">IP Address Tracker</h1>
      {/* <div className="col-span-4 row-span-1 row-start-1 items-center bg-yellow-200 z-10 top-0"> */}
      <img className="col-span-4 h-full w-full row-span-2 col-start-1 row-start-1 lg:relative z-0" alt="bg" src={background} />
      <IpSearch setIpAddress={setIpAddress} />
      <IpInformation ipAddress={ipAddress} setPosition={setPosition} />
      {/* </div > */}
      <div className="row-start-3 col-span-4 col-start-1 z-0">
        <Map position={position} />
      </div>
    </div>
  );
}

export default App;
