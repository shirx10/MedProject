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
        
        {/*Video*/}
    <div className ="p-4"></div>
      <div className= "w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-lg border border-[#3a3b3c]">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/hxvhCubYGrE?si=kfYCQJBuNj26plkR"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  

        {/* Images */}
        <div className ="flex items-start space-x-4 p-2">
          <img src ="/Images/oldwoman.jpg" 
          alt="Old Woman Button" 
          className="w-64 h-50 rounded-md object-cover"/>
        <p className = "text-sm" >
        On her wrist is a bracelet with a red button.
        </p>
      </div>
      </div>
        {/* Right Box */}
        <div className="lg:w-[60%] w-[50%] h-full relative border border-[#3a3b3c] p-6 pb-20 rounded-md bg-[#3a3b3c] shadow-sm flex flex-col">
          <div className="flex flex-col gap-y-4">

        <h2 className="text-xl font-semibold mb-4">Question 1</h2>

        {/* intial Thoughts */}
        <div className="mb-6 text-black">
            <label htmlFor="thoughts" className="block text-xl font-medium">
            1. What is your initial thoughts?
            </label>
            <input
            id="thoughts"
            className="mt-2 block w-full border border-[#FFFFFF]   rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your answer here..."
            />
        </div>

        {/* Multi-select Dropdown with Search*/}
        <div>
          <label className = "block text-base font-medium mb-1 text-white">
            Examinations (can tick multiple boxes)
          </label>

          <div className = "w-full border border-white bg-white rounded-md p-2 text-black flex flex-col">

            {/* Checkboxes */}
            <div className="overflow-y-auto flex flex-col space-y-1 text-[#000000]">
              <div> <input type = "checkbox"/> Cardiology </div>
              <div> <input type = "checkbox"/> Respitory </div>
              <div> <input type = "checkbox"/> Abdominal </div>
              <div> <input type = "checkbox"/> Neurology </div>
            </div>
          

          {/* Search bar now inside the box at the bottom */}
          <input
            type = "text"
            className = "w-full border border-gray-300 rounded-md p-1 text-black mt-2"
            placeholder = "Search..."
            />
        </div>

        {/* Selected Items */}
        <div>
          <label className = "block text-base font-medium mb-1">
            Selected
          </label>
          <div className = "border border-gray-300 rounded-md p-2 min-h-[40px] text-sm bg-[#FFFFFF] text-[#000000]">
            Cardiology, Abdominal, Neurology
          </div>
        </div>

        {/* Information Note */}
        <div className = "text-sm">
          Abdominal and Neurology is not needed in this scenario. (Expand Text with AI?)
        </div>
      
        {/* Submit Button */}
        <div className = "mt-4">
          <button className = "px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
        </div>
      </div>
        {/* Proceed Button*/}
        <div className="absolute bottom-4 right-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Proceed</button>
        </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
