import Header from "./components/Header";
import Hearo from "./components/Hearo";
import { Connect } from "./assets/index";
import Silder from "./components/Slider";
import Collection from "./components/Collection";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App font-poppins ">
      <header className=" container mx-auto  pt-10 mb-10">
        <Header />
      </header>
      <main>
        <div className="container mx-auto">
          <Hearo />

          <div className="mx-40 flex justify-center  ">
            <img src={Connect} alt="connect image" />
          </div>
        </div>
        <div className="mt-48 mb-18 text-center ">
          <h1 className=" mb-16 text-[42px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold">
            Trending NFTs
          </h1>
          <Silder />
        </div>
        <div className="text-center">
          <Collection />
        </div>
        <div className="container mx-auto">
          <Categories />
        </div>
      </main>
    </div>
  );
}

export default App;
