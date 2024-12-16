import { useEffect, useState } from "react";

function CreatorsPage() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
     
        const response = await fetch('https://dummyjson.com/users?limit=9');
        const { users } = await response.json();
        setCreators(users); 
    
    };

    fetchCreators();
  }, []);

  return (
    <section className="p-1 bg-[url('../images/4.png')] bg-cover bg-center h-[150vh] bg-no-repeat text-center font-mono">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold m-20 text-white">Top Creators</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-20">
          {creators.map((creator) => (
            <div
              key={creator.id}
              className="bg-transparent rounded-lg overflow-hidden shadow-lg border border-white"
            >
              <div className="relative flex justify-center items-center h-[250px]">
                <img
                  src={creator.image}
                  className="transform transition duration-500 ease-in-out hover:scale-110 object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
                  <h2 className="font-bold text-xl">
                    {creator.firstName} {creator.lastName}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CreatorsPage;
