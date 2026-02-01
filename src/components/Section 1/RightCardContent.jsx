import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
        
        <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
          {props.id}
        </h2>

        {/* Content */}
        <div>
          <p className=" text-shadow-2xs mb-14 text-xl leading-relaxed text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            sapiente explicabo eveniet.
          </p>

          <div className="flex justify-between items-center">
            <button style={{backgroundColor:props.color}} className=" text-white font-medium px-8 py-2 rounded-full">
              {props.tag}
            </button>

            <button className=" text-white font-medium px-4 py-2 rounded-full">
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>

      </div> 
  )
}

export default RightCardContent
