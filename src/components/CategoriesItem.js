import React from 'react'
import { Avatar2, Avatar3, Avtar } from '../assets'

const CategoriesItem = () => {
  return (
     <div className="flex items-center justify-center mb-20 ml-4">
      <div className="w-[300px] h-[260px] flex flex-col text-center space-y-4 rounded-lg p-3 bg-[#2A2F55] opacity-80">
        <div className="flex space-x-2 ">
          <div className="flex flex-col space-y-2">
            <img src={Avtar} alt="" className="w-24 h-24 rounded-lg" />
            <img src={Avatar2} alt="" className="w-24 h-24 rounded-lg" />
          </div>
          <div>
            <img src={Avatar3} alt="" className="w-48 h-[198px] rounded-lg" />
          </div>
        </div>
        <h4 className="text-white pb-3">Art</h4>
      </div>
      
    </div>
  )
}

export default CategoriesItem