function IpInformation(props) {
  const { ipObject } = props;


  return (
    <div className="flex flex-col md:flex-row justify-between rounded-xl text-center md:text-left absolute inset-y-52 bg-white font-rubik gap-6 p-10">
      <div>
        <h3 className="text-xs text-gray font-bold">IP ADDRESS</h3>
        <h1 className="text-2xl text-dark-gray font-semibold">192.333.111.222</h1>
      </div>
      <div>
        <h3 className="text-xs text-gray font-bold">LOCATION</h3>
        <h1 className="text-2xl text-dark-gray font-semibold">192.333.111.222</h1>
      </div>
      <div>
        <h3 className="text-xs text-gray font-bold border-l">TIMEZONE</h3>
        <h1 className="text-2xl text-dark-gray font-semibold">192.333.111.222</h1>
      </div>
      <div>
        <h3 className="text-xs text-gray font-bold">ISP</h3>
        <h1 className="text-2xl text-dark-gray font-semibold">192.333.111.222</h1>
      </div>
    </div >
  );
}

export default IpInformation;
