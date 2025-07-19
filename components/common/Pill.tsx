import { PillProps } from "../../interfaces"; 


const Pill = ({label} : PillProps ) => {
    return (
     <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300">
      {label}
     </button>
    );

    
}

export default Pill;