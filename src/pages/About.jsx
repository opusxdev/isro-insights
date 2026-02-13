import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import Loader from '../assets/loader.json';

function About() {
  const [loading, setLoading] = useState(false);
  const [gitData, setGitData] = useState(null);



  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://api.github.com/users/opusxdev')
        const data = await res.json();
        setGitData(data)
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching GitHub profile: ", error);
      }
    };
    getData();
  }, []);
  

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
        <Lottie
          animationData={Loader}
          loop={true}
          className="w-40 h-40 md:w-52 md:h-52"
        />
      </div>
    );
  }

  if (!gitData) return (
    <div className="min-h-screen flex items-center justify-center bg-black text-red-500">
      Couldn't fetch dev data
    </div>
  );

  return (
    <div className="relative min-h-screen flex flex-col items-center px-4 py-10 bg-gradient-to-b from-black via-gray-900 to-black text-white space-y-12">
      <div className="w-full max-w-5xl bg-black-900 p-8 rounded-xl shadow-xl text-gray-200 text-base  sm:text-lg space-y-4">
        <h2 className="text-3xl  text-green-400 mb-4">About ISRO</h2>
        <p>
          Indian Space Research Organisation (ISRO) is the space agency of India. The organisation is involved in science, engineering and technology to harvest the benefits of outer space for India and mankind. ISRO is a major constituent of the Department of Space (DOS), Government of India. The department executes the Indian Space Programme primarily through various Centres or units within ISRO.
        </p>
        <p>
          ISRO was previously the Indian National Committee for Space Research (INCOSPAR), set up by the Government of India in 1962, as envisioned by Dr. Vikram Sarabhai. ISRO was formed on August 15, 1969 and superseded INCOSPAR with an expanded role to harness space technology. DOS was set up and ISRO was brought under DOS in 1972.
        </p>
        <p>
          The prime objective of ISRO/DOS is the development and application of space technology for various national needs. To fulfil this objective, ISRO has established major space systems for communication, television broadcasting, meteorological services, resources monitoring and management, and space-based navigation. ISRO has developed satellite launch vehicles, PSLV and GSLV, to place satellites in the required orbits.
        </p>
        <p>
          ISRO contributes to science and science education in the country through research centres and autonomous institutions for remote sensing, astronomy, astrophysics, atmospheric and space sciences. ISRO's Lunar and interplanetary missions, along with other scientific projects, encourage and promote science education.
        </p>
        <p>
          ISRO has its headquarters in Bengaluru, with activities spread across various centres. Launch Vehicles are built at Vikram Sarabhai Space Centre (VSSC), Thiruvananthapuram; satellites are designed at U R Rao Satellite Centre (URSC), Bengaluru; satellite integration and launching is at Satish Dhawan Space Centre (SDSC), Sriharikota; liquid propulsion development is at Liquid Propulsion Systems Centre (LPSC), Valiamala & Bengaluru; sensors and applications at Space Applications Centre (SAC), Ahmedabad; data reception and dissemination at National Remote Sensing Centre (NRSC), Hyderabad.
        </p>
        <p>
          ISRO is guided by its Chairman, who is also the secretary of DOS and Chairman of Space Commission – the apex body that formulates policies and oversees the Indian Space Programme.
        </p>
      </div>
       
      <div className="w-full max-w-5xl flex items-center justify-between border-white-400 border-thin p-4 rounded-xl shadow-md text-white text-sm">
       
        <img
          src={gitData.avatar_url}
          alt={`${gitData.login}'s profile`}
          className="w-20 h-20 rounded-full border border-white object-cover"
        />

    
        <div className="flex flex-col justify-center flex-1 ml-4 space-y-1">
          <a href='https://github.com'><p className="font-bold text-lg">{gitData.username}</p></a>
          <p className="text-white-400">@{gitData.login}</p>
          <p className="text-green-400 text-xs">Built by devster</p>
        </div>

        <a
          href={gitData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-green-100 text-white-400 rounded-md hover:bg-green-400 hover:text-white transition text-sm"
        >
          Star Repo
        </a>
      </div>
      

    </div>
         
  );
  
}

export default About;
