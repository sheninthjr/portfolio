import { Terminal } from 'lucide-react';

export default function Resume() {
  return (
    <div className="bg-blackish/80 p-6 backdrop-blur-lg h-[90%] md:h-[85%] top-6 rounded-xl max-w-6xl mx-auto fixed w-full left-0 right-0 md:border border-white/10 md:shadow-lg shadow-white/5 overflow-hidden">
      <div className="flex flex-col space-y-4 h-full">
        <div className="font-robotoFlex font-extrabold text-4xl text-lightwhite">
          RESUME
        </div>
        <div className="flex flex-col space-y-20 overflow-y-auto h-full">
          <div className="flex flex-col space-y-4">
            <div className="font-bold text-2xl font-metrophobic text-orange">
              Education
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8 md:space-y-0 mx-auto lg:mx-0">
              <div className="font-metrophobic relative">
                <div className="flex flex-col space-y-1 p-2 w-80 rounded-xl h-48 border-4 border-neutral-700">
                  <span className="text-lightwhite text-lg">
                    Velammal Institute of Technology
                  </span>
                  <span className="text-white text-lg">
                    B.Tech(Artificial Intelligence & Data Science)
                  </span>
                  <span className="font-semibold text-white/40">
                    November 2021 - Present
                  </span>
                  <div className="flex justify-between rounded-xl bg-gray p-2 items-center">
                    <span>CGPA</span>
                    <span className="bg-lightwhite text-blackish px-2 rounded-lg font-bold">
                      8.6/10
                    </span>
                  </div>
                </div>
                <div className="absolute left-[40%]">
                  <div className="bg-gray h-8 w-10"></div>
                  <div className="absolute bg-gray h-4 w-24 -right-[70%]"></div>
                </div>
              </div>
              <div className="font-metrophobic relative">
                <div className="flex flex-col space-y-1 p-2 w-80 rounded-xl h-48 border-4 border-neutral-700">
                  <span className="text-lightwhite text-lg">
                    Hebron Matriculation and Higher Secondary School
                  </span>
                  <span className="text-white text-lg">
                    Computer Science(11th & 12th)
                  </span>
                  <span className="font-semibold text-white/40">
                    June 2019 - March 2021
                  </span>
                  <div className="flex justify-between rounded-xl bg-gray p-2 items-center">
                    <span>Percentage</span>
                    <span className="bg-lightwhite text-blackish px-2 rounded-lg font-bold">
                      88.5/100
                    </span>
                  </div>
                </div>
                <div className="absolute left-[40%]">
                  <div className="bg-gray h-8 w-10"></div>
                  <div className="absolute bg-gray h-4 w-24 -right-[70%]"></div>
                </div>
              </div>
              <div className="font-metrophobic relative pt-0 md:pt-10 lg:pt-0">
                <div className="flex flex-col space-y-1 p-2 w-80 rounded-xl h-48 border-4 border-neutral-700">
                  <span className="text-lightwhite text-lg">
                    Hebron Matriculation and Higher Secondary School
                  </span>
                  <span className="text-white text-lg">Common Education</span>
                  <span className="font-semibold text-white/40">
                    June 2007 - March 2019
                  </span>
                  <div className="flex justify-between rounded-xl bg-gray p-2 items-center">
                    <span>Percentage</span>
                    <span className="bg-lightwhite text-blackish px-2 rounded-lg font-bold">
                      84/100
                    </span>
                  </div>
                </div>
                <div className="absolute left-[40%]">
                  <div className="bg-gray h-8 w-10"></div>
                  <div className="absolute bg-gray h-4 w-24 -right-[70%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="font-bold text-2xl font-metrophobic text-orange">
              Internship
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto lg:mx-0">
              <div className="bg-[#1E1E1E] rounded-xl overflow-hidden border w-80 border-white/10">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5">
                  <Terminal size={16} className="text-white/60" />
                  <span className="text-sm font-medium font-robotoFlex text-white/60">
                    Yar Tech Services
                  </span>
                </div>
                <pre className="p-4 overflow-x-auto text-sm">
                  <code className="text-white/90 font-metrophobic">
                    {`{
  "Name": "Yar Tech Services",
  "Internship Period": "3 Months",
  "Role": "R&D Innovation Engineer",
}`}
                  </code>
                </pre>
              </div>
              <div className="bg-[#1E1E1E] rounded-xl overflow-hidden border w-80 border-white/10">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5">
                  <Terminal size={16} className="text-white/60" />
                  <span className="text-sm font-medium font-robotoFlex text-white/60">
                    Marchello Tech
                  </span>
                </div>
                <pre className="p-4 overflow-x-auto text-sm">
                  <code className="text-white/90 font-metrophobic">
                    {`{
  "Name": "Marchello Tech",
  "Internship Period": "1 Months",
  "Role": "Full Stack Developer",
}`}
                  </code>
                </pre>
              </div>
              <div className="bg-[#1E1E1E] rounded-xl overflow-hidden border w-80 border-white/10">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5">
                  <Terminal size={16} className="text-white/60" />
                  <span className="text-sm font-medium font-robotoFlex text-white/60">
                    DLK Career Development
                  </span>
                </div>
                <pre className="p-4 overflow-x-auto text-sm">
                  <code className="text-white/90 font-metrophobic">
                    {`{
  "Name": "DLK Career Development",
  "Internship Period": "1 Months",
  "Role": "Data Science",
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="font-bold text-2xl font-metrophobic text-orange">
              Certificates
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto lg:mx-0">
              <div className="relative">
                <img
                  src="/c5.jpg"
                  alt="certificate"
                  className="w-80 h-40 rounded-xl object-cover"
                />
                <div className="py-2 absolute -bottom-0.5 rounded-b-xl bg-gray w-full font-bold font-metrophobic text-center">
                  FULLSTACK
                </div>
              </div>
              <div className="relative">
                <img
                  src="/c2.png"
                  alt="certificate"
                  className="w-80 h-40 rounded-xl object-cover"
                />
                <div className="py-2 absolute -bottom-0.5 rounded-b-xl bg-gray w-full font-bold font-metrophobic text-center">
                  MONGODB
                </div>
              </div>
              <div className="relative">
                <img
                  src="/c3.png"
                  alt="certificate"
                  className="w-80 h-40 rounded-xl object-cover"
                />
                <div className="py-2 absolute -bottom-0.5 rounded-b-xl bg-gray w-full font-bold font-metrophobic text-center">
                  BUSINESS ANALYTICS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
