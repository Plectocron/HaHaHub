import { useEffect, useState } from "react";
import Header from "../components/layouts/Header.jsx";
import Footer from "../components/layouts/Footer.jsx";
import Card from "../components/common/Card.jsx";
import CircularButton from "../components/common/CircularButton.jsx";

function Home() {
  const [joke, setJoke] = useState({ setup:"", delivery:"" });
  const [filters, setFilters] = useState({ 
    nsfw: false,
    religious: false,
    political: false,
    racist: false,
    sexist: false,
    explicit: false
   });

  async function fetchJoke() {
    try {
      const params = new URLSearchParams();
      for(const key in filters) params.append(key, filters[key]);

      const response = await fetch(`http://localhost:3000/api/joke?${params.toString()}`);
      console.log(params.toString());
      const data = await response.json();
      setJoke({ setup:data.setup, delivery:data.delivery });
    } catch(e) {
      console.error(`Failed to fetch joke: ${e}`);
    }
  } 

  useEffect(() => {
    fetchJoke();
  }, [filters]);

  function onFilterChanged(category) {
    setFilters({
      ...filters,
      [category]: !filters[category]
    });
  }

  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-evenly flex-grow">
        <Card
          classNameCard="relative -mb-10 py-2"
          flex="flex justify-start items-center"
          maxWidth="max-w-3xl"
          minHeight="min-h-[100px]"
          textColor="text-white"
          bgColor="bg-dark-blue"
          borderThickness="border"
          borderColor="border-slate"
          borderRadius="rounded-[1.7rem]"
          orbs={{
            topColor: "bg-purple-500/70",
            bottomColor: "bg-purple-500/70",
            size: "w-16 h-16"
          }}
        >
          <div className="flex flex-col justify-center items-start h-4 text-gray-300 w-full">
            <p className="mb-4">Exclude:</p>
            <div className="flex justify-start items-center w-1/2 gap-6">
              <div className="flex justify-center items-center gap-2">
                <input type="checkbox" id="nsfw" checked={filters.nsfw} onChange={() => { onFilterChanged("nsfw") }}></input>
                <label className="text-[11px]" htmlFor="nsfw">NSFW</label>
              </div>
              <div className="flex justify-center items-center gap-2">
                <input type="checkbox" id="religious" checked={filters.religious} onChange={() => { onFilterChanged("religious") }}></input>
                <label className="text-[11px]" htmlFor="religious">Religious</label>
              </div>
              <div className="flex justify-center items-center gap-2">
                <input type="checkbox" id="political" checked={filters.political} onChange={() => { onFilterChanged("political") }}></input>
                <label className="text-[11px]" htmlFor="political">Political</label>
              </div>
              <div className="flex justify-center items-center gap-2">
                <input type="checkbox" id="racist" checked={filters.racist} onChange={() => { onFilterChanged("racist") }}></input>
                <label className="text-[11px]" htmlFor="racist">Racist</label>
              </div>
              <div className="flex justify-center items-center gap-2">
                <input type="checkbox" id="sexist" checked={filters.sexist} onChange={() => { onFilterChanged("sexist") }}></input>
                <label className="text-[11px]" htmlFor="sexist">Sexist</label>
              </div>
              <div className="flex justify-center items-center gap-2">
                <input type="checkbox" id="explicit" checked={filters.explicit} onChange={() => { onFilterChanged("explicit") }}></input>
                <label className="text-[11px]" htmlFor="explicit">Explicit</label>
              </div>
            </div>
          </div>   
        </Card>
        <Card 
          classNameCard="relative pt-4 pb-16"
          classNameChildren="flex flex-col justify-evenly items-center gap-4"
          bgColor="bg-dark-blue" 
          textColor="text-white" 
          borderThickness="border" 
          borderColor="border-slate" 
          maxWidth="max-w-3xl" 
          minHeight="min-h-[200px]" 
          borderRadius="rounded-[2.3rem]"
          orbs={{
            topColor: "bg-purple-500/10",
            bottomColor: "bg-purple-500/10"
          }}
        >
          <h1 className="text-3xl font-bold text-center">{joke.setup}</h1>
          <p className="text-xl text-gray-400">{joke.delivery}</p>
          <div className="group absolute -bottom-20">
            <CircularButton 
              size="circ-4xl" 
              bgClass="bg-gradient-to-r from-purple-500 to-pink-500"
              className="transition-all duration-300 group-hover:scale-110"
              onClick={fetchJoke}
            >
              <p className="text-5xl font-bold -mt-[68px]">{">"}</p>
            </CircularButton>
          </div>       
        </Card>
      </div>
      <Footer 
        bgClass="bg-dark-blue"
        borderThickness="border"
        borderColor="border-slate"  
        textColor="text-gray-400"
        className="flex justify-center items-center"
      >
        © {new Date().getFullYear()} HaHaHub. Powered by Official Joke API.
      </Footer>
    </div>
  );
}

export default Home;