import { PlusIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
const Accordion = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className=" text-lg  md:px-24 md:text-xl lg:px-72 lg:text-3xl     ">
      {data.map((item, index) => (
        <div key={index} className="border-black border-b-4 ">
          <div
            className=" flex  justify-between w-full text-white px-6 py-4 lg:py-6 bg-[#333] border-b-2  border-black transition duration-700 ease-in-out "
            onClick={() =>
              setSelectedIndex(index !== selectedIndex ? index : null)
            }
          >
            <p>{item.title}</p>
            {index !== selectedIndex ? (
              <PlusIcon className="h-7 w-7 text-gray-300" />
            ) : (
              <XIcon className="h-7 w-7 text-gray-300" />
            )}
          </div>
          <div
            className={
              (index !== selectedIndex && "hidden") +
              " w-full text-white p-6 bg-[#333] lg:font-light"
            }
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
