import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/Components/layout';

// ─── lazy-load Tippy (no-SSR) ─────────────────────────────────────────
const Tippy = dynamic(() => import('@tippyjs/react'), { ssr: false });

export default function FirstCase() {
  /* state */
  const [selected, setSelected]         = useState<string[]>([]);
  const [validation, setValidation]     = useState<string | null>(null);
  const options = ['Cardiology', 'Respitory', 'Abdominal', 'Neurology'];

  const toggle = (opt: string) =>
    setSelected(prev =>
      prev.includes(opt) ? prev.filter(x => x !== opt) : [...prev, opt]
    );

  /* render */
  return (
    <Layout>
      <div className="grid grid-cols-[540px_1fr] gap-12 max-w-7xl mx-auto ">

        {/* Left Side*/}
        <section className="bg-[#1b1c1a] text-white rounded-2xl p-12 space-y-6 mt-12">



          <h2 className="text-2xl font-semibol">Case Overview</h2>

          <p>
            Case:&nbsp;78&nbsp;year-old female complaining of SOB and right-sided
            chest pain for 3&nbsp;hours, associated with nausea.
          </p>

          <Tippy theme="light-border" content="The manner or style of walking">
            <span className="underline cursor-help text-blue-400">Gait</span>
          </Tippy>

          {/* video */}
          <div className="aspect-video rounded-lg overflow-hidden shadow">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/hxvhCubYGrE?si=kfYCQJBuNj26plkR"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* image & caption */}
          <div className="flex gap-4">
            <img
              src="/Images/oldwoman.jpg"
              alt="Old woman with bracelet button"
              className="w-40 rounded-md object-cover"
            />
            <p className="text-sm self-center">
              On her wrist is a bracelet with a red button.
            </p>
          </div>
        </section>

        {/* Right Side */}
        <section className="p-3 space-y-6 mt-12 mx-5">


          <h2 className=" text-2xl font-semibold">Question&nbsp;1</h2>

          {/* initial thoughts */}
          <div>
            <label htmlFor="thoughts" className="block mb-2">
              1.&nbsp;What is your initial thoughts?
            </label>
            <input
              id="thoughts"
              placeholder="Write your answer here…"
              className="w-full rounded border border-white/40 px-3 py-2 text-black"
            />
          </div>

          {/* check-box list */}
          <div>
            <label className="block mb-2">
              Examinations (can tick multiple boxes)
            </label>

            <div className="border border-white/40 rounded-lg bg-white p-3 text-black space-y-1">
              {options.map(opt => (
                <label key={opt} className="flex items-center gap-2 text-black">
                  <input
                    type="checkbox"
                    checked={selected.includes(opt)}
                    onChange={() => toggle(opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}

              {/* search stub */}
              <input
                type="text"
                disabled
                placeholder="Search…"
                className="mt-2 w-full rounded border p-1 text-gray-500 cursor-not-allowed"
              />
            </div>
          </div>

          {/* selected list */}
          <div>
            <label className="block mb-1">Selected</label>
            <div className="bg-white text-black rounded px-3 py-2">
              {selected.length ? selected.join(', ') : 'None'}
            </div>
          </div>

          {/* validation / helper text */}
          <p className="text-sm min-h-[1.25rem] text-red-300">
            {validation || '\u00A0'}
          </p>



          {/* buttons */}
          <div className="flex justify-between items-end pt-4">
            <button
              onClick={() => {
                /* Validate */
                const correct = ['Cardiology', 'Respitory'];
                const ok =
                  selected.length === correct.length &&
                  correct.every(o => selected.includes(o));

                setValidation(
                  ok
                    ? 'You are correct!'
                    : 'Incorrect, Abdominal and Neurology are not needed here.'
                );
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded self-start"
            >
              Submit
            </button>

            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">
              Proceed
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
