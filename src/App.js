/* eslint-disable jsx-a11y/anchor-is-valid */
import BackgroubdImage from "./assets/bacground.jpg"
import SearchBar from "./componets/search"
import NavBar from "./componets/Nav"
import Gallery from "./componets/Gallery"

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 ">
      <div className="bg-white p-6 m-10 space-y-10 shadow-2xl md:p-40 rounded-3xl">
        <NavBar />
        <div className=" flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 ">
          <SearchBar />
          <button className="py-2 px-10  text-lg font-normal text-white bg-[#713f12] border border-[#713f12] rounded-full shadow-2xl duration-200 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>
        <Gallery />
      </div>
    </div>
  )
}

export default App
