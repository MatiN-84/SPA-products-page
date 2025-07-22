import React from 'react'
import servicesData from '../Constants/servicesData'

function Services() {
  return (
     <div className="flex mt-5 ">
        {servicesData.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-start p-4 border-2 border-green-500 rounded m-2"
          >
            <div className="flex text-[#16a34a] text-[2rem] mr-4 items-center">
              {item.icon}{" "}
              <div className="ml-4 items-center">
                <h4 className=" text-[#075985] text-[1.5rem]">{item.title}</h4>
              </div>
            </div>
            <div>
              <p className="text-[1.3rem] text-[#6b7280]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Services