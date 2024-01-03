import { FaShare, FaHeart, FaRegBookmark } from "react-icons/fa"

import Img1 from "./../assets/image1.jpg"
import Img2 from "./../assets/image2.jpg"
import Img3 from "./../assets/image3.jpg"
import Img4 from "./../assets/image4.jpg"
import Img5 from "./../assets/image5.jpg"
import Img6 from "./../assets/image6.jpg"

const Gallery = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
      <div className="group relative">
        <img
          src={Img1}
          className="w-72 border-4 shadow-md  rounded-sm group-hover:scale-110 duration-500 "
          alt="image1"
        />
        <div className=" absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0  group-hover:opacity-100 bg-opacity-40">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              <p className=" text-sm ">Ai Image</p>
              <p className=" text-xs flex flex-row justify-between  ">
                <span className="flex justify-between  ">
                  <FaHeart size={15} />
                  <span className="ml-2"> 1.2k</span>
                </span>
                <span className="flex justify-between  ml-3">
                  <FaShare size={15} />
                  <span className="ml-2"> 1.3k</span>
                </span>
              </p>
            </div>
            <div className="flex  items-center">
              <FaRegBookmark size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="group relative">
        <img
          src={Img2}
          className="w-72  border-4 shadow-md  rounded-sm group-hover:scale-110 duration-500"
          alt="image1"
        />

        <div className=" absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              <p className=" text-sm ">Potrait</p>
              <p className=" text-xs flex flex-row justify-between  ">
                <span className="flex justify-between  ">
                  <FaHeart size={15} />
                  <span className="ml-2"> 2.2k</span>
                </span>
                <span className="flex justify-between  ml-3">
                  <FaShare size={15} />
                  <span className="ml-2"> 1.3k</span>
                </span>
              </p>
            </div>
            <div className="flex  items-center">
              <FaRegBookmark size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="group relative">
        <img
          src={Img3}
          className="w-72  border-4 shadow-md  rounded-sm group-hover:scale-110 duration-500"
          alt="image1"
        />

        <div className=" absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              <p className=" text-sm ">Landscape</p>
              <p className=" text-xs flex flex-row justify-between  ">
                <span className="flex justify-between  ">
                  <FaHeart size={15} />
                  <span className="ml-2"> 4.2k</span>
                </span>
                <span className="flex justify-between  ml-3">
                  <FaShare size={15} />
                  <span className="ml-2"> 2.3k</span>
                </span>
              </p>
            </div>
            <div className="flex  items-center">
              {" "}
              <FaRegBookmark size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="group relative">
        <img
          src={Img4}
          className="w-72  border-4 shadow-md  rounded-sm group-hover:scale-110 duration-500"
          alt="image1"
        />

        <div className=" absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              <p className=" text-sm ">Selfiy</p>
              <p className=" text-xs flex flex-row justify-between  ">
                <span className="flex justify-between  ">
                  <FaHeart size={15} />
                  <span className="ml-2"> 1.5k</span>
                </span>
                <span className="flex justify-between  ml-3">
                  <FaShare size={15} />
                  <span className="ml-2"> 1.3k</span>
                </span>
              </p>
            </div>
            <div className="flex  items-center">
              {" "}
              <FaRegBookmark size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="group relative">
        <img
          src={Img5}
          className="w-72  border-4 shadow-md  rounded-sm group-hover:scale-110 duration-500"
          alt="image1"
        />

        <div className=" absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              <p className=" text-sm ">Group</p>
              <p className=" text-xs flex flex-row justify-between  ">
                <span className="flex justify-between  ">
                  <FaHeart size={15} />
                  <span className="ml-2"> 1.2k</span>
                </span>
                <span className="flex justify-between  ml-3">
                  <FaShare size={15} />
                  <span className="ml-2"> 1.3k</span>
                </span>
              </p>
            </div>
            <div className="flex  items-center">
              {" "}
              <FaRegBookmark size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="group relative">
        <img
          src={Img6}
          className="w-72  border-4 shadow-md  rounded-sm group-hover:scale-110 duration-500"
          alt="image1"
        />

        <div className=" absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              <p className=" text-sm ">Vector</p>
              <p className=" text-xs flex flex-row justify-between  ">
                <span className="flex justify-between  ">
                  <FaHeart size={15} />
                  <span className="ml-2"> 1.2k</span>
                </span>
                <span className="flex justify-between  ml-3">
                  <FaShare size={15} />
                  <span className="ml-2"> 1.3k</span>
                </span>
              </p>
            </div>
            <div className="flex  items-center">
              {" "}
              <FaRegBookmark size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
