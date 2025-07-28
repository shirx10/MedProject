import Layout from '@/Components/layout'; // adjust the path if needed
import dynamic from 'next/dynamic';
// SSR-safe import
const Tippy = dynamic(() => import('@tippyjs/react'), { ssr: false });



export default function Home() {
  return (
    <Layout>
      {/* The general layout parameters*/}
      <div className="flex flex-col lg:flex-row w-[100%] h-[calc(100vh-64px)] gap-6 p-10 pt-20">
        {/* Left Box */}
        <div className="w-[50%] lg:w-[40%] h-full border border-[#3a3b3c] p-12 rounded-md bg-[#3a3b3c] shadow-sm">

          <h2 className="text-xl font-semibold mb-2">Case Overview</h2>
          <p>Case: 78 Year old femal comes in complaining of SOB and right-sided chest pain. Has been going on for 3 hours and is associated with nausea.</p>
           
        <p>
            <Tippy 
            theme="light-border"
            content="The manner or style of walking. "
            placement="bottom"
            >
                <span className = "underline cursor-help">Gait</span>
            </Tippy>
        </p>

        
        </div>

        {/* Right Box */}
        <div className="lg:w-[60%] h-full border border-[#3a3b3c] p-6 pb-6 rounded-md bg-[#3a3b3c] shadow-sm flex flex-col w-[50%]">
        <h2 className="text-xl font-semibold mb-4">Questions</h2>

        {/* intial Thoughts */}
        <div className="mb-6">
            <label htmlFor="thoughts" className="block text-xl font-medium">
            1. What is your initial thoughts?
            </label>
            <input
            id="thoughts"
            className="mt-2 block w-full border border-[#FFFFFF]   rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your answer here..."
            />
        </div>

        {/* Multi-select Dropdown */}
        <div>
        <label className = "block text-base font-medium mb-1">
          Examinations (can tick multiple boxes)
        </label>
        <select
          multiple
          className ="w-full border border-[#FFFFF] bg-[#FFFFF] rounded-md p-2 h-32 text-[#000000]"
          >
            <option> Cardiology </option>
            <option> Respiratory </option>
            <option> Abdominal </option>
            <option> Neurology </option>          
          </select>
        </div>

        {/* Search Input */}
        <div>
          <input
          type = "text"
          className = "w-full border border-gray-300 rounded-md p-2"
          placeholder = "search"
          />
        </div>

        {/* Selected Items */}
        <div>
          <label className = "block text-base font-medium mb-1">
            Selected
          </label>
          <div className = "border border-gray-300 rounded-md p-2 min-h-[40px] text-sm">
            Cardiology, Abdominal, Neurology
          </div>
        </div>

        {/* Information Note */}
        <div className = "text-sm">
          Abdominal and Neurology is not needed in this scenario. (Expand Text with AI?)
        </div>

        {/* Buttons */}
        <div className = "mt-auto flex justify-between pt-4">
          <button className = "px-4 py-2 bg-gray-200 text-gray-800 rounded">Back</button>
          <div className = "flex gap-2">
            <button className = "px-4 py-2 bg-blue-600 text-white rounded"> Proceed</button>
            <button className = "px-4 py-2 bg-blue-600 text-white rounded"> Submit</button>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
}
