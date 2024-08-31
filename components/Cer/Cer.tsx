const Certificate = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            width="300"
            height="400"
            className="rounded-lg w-full"
            src="https://www.evetis.in/assets/images/about/IECCertificate.jpg"
            alt="CE Certificate"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl font-bold">CE Certificates</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            width="300"
            height="400"
            className="rounded-lg w-full"
            src="https://www.evetis.in/assets/images/about/IECCertificate.jpg"
            alt="CE Certificate"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl font-bold">CE Certificates</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            width="300"
            height="400"
            className="rounded-lg w-full"
            src="https://www.evetis.in/assets/images/about/IECCertificate.jpg"
            alt="CE Certificate"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl font-bold">CE Certificates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
