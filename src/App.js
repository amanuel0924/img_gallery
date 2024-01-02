import BackgroubdImage from "./assets/bacground.jpg"
import SearchBar from "./componets/search"
function App() {
  return (
    <div
      className="bg-cover h-screen  bg-center  "
      style={{ backgroundImage: `url(${BackgroubdImage})` }}
    >
      <div className="w-full h-full flex justify-center items-center  backdrop-blur-md fixed z--0">
        <div className="bg-white p-6 m-3 space-y-10 shadow-2xl md:p-40 rounded-3xl">
          <div
            className="flex flex-col justify-center items-center
           space-y-3 md:space-y-0 md:space-x-8
            md:flex-row md:mb-24 md:justify-end transt duration-200 "
          >
            <div className="group">
              <a href="#">Vector</a>
              <div className=" mx-2 mt-2 duration-500 opacity-0 border-b-4 border-black group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <a href="#">Potrait</a>
              <div className=" mx-2 mt-2 duration-500 opacity-0 border-b-4 border-black group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <a href="#">Landscape</a>
              <div className=" mx-2 mt-2 duration-500 opacity-0 border-b-4 border-black group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <a href="#">Ai images</a>
              <div className=" mx-2 mt-2 duration-500 opacity-0 border-b-4 border-black group-hover:opacity-100"></div>
            </div>
          </div>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default App
