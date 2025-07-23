import React from "react";
import 'remixicon/fonts/remixicon.css';
import Navbar from "../components/Navbar";


export default function Home() {
    return (
        <div className="bg-white text-slate-900 ">
            
            <Navbar/>
            <section
                className="w-full h-screen bg-no-repeat bg-cover bg-center flex items-center px-6 md:px-26"
                style={{
                    backgroundImage: "url('/robo.png')",
                }}
            >
                <div className="grid md:grid-cols-2 gap-10 w-full items-center px-24">
                    <div className="">
                        <h1 className="top-0 text-4xl md:text-5xl font-bold mb-4">
                            Your Voice. Your Rights. One AI Assistant.
                        </h1>
                        <p className="mb-6 text-lg font-semibold">
                            No forms, no confusion — just speak, and we’ll apply for you.
                        </p>
                        <div className="flex px-32">
                            <button className="bg-slate-900 text-white px-16 py-3 rounded-full font-semibold transition-transform duration-200 hover:scale-105">
                                Find and Apply Now
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <div className="absolute top-120 left-120 text-blue-900 font-bold text-xl">हिंदी</div>
                        <div className="absolute top-[14rem] right-[18rem] text-orange-500 font-bold text-xl">घऱां</div>
                        <div className="absolute top-[8rem] right-[12rem] text-blue-900 font-bold text-xl">سنڌي</div>
                        <div className="absolute top-[10rem] right-[30rem] text-yellow-400 font-bold text-xl">தமிழ்</div>
                        <div className="absolute top-[16rem] right-[38rem] text-pink-500 font-bold text-xl">বাংলা</div>
                        <div className="absolute top-[28rem] right-[39rem] text-green-600 font-extrabold text-xl">ગુજરાતી</div>
                        <div className="absolute top-[15rem] right-[5rem] text-purple-600 font-bold text-xl">ਪੰਜਾਬੀ</div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="px-6 md:px-20 py-16 bg-blue-50 h-full">
                <h2 className="text-2xl font-bold mb-6">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-blue-100 p-10 rounded-2xl flex flex-col items-center transition-transform duration-200 hover:scale-105 min-h-[180px]">
                        <i className="ri-mic-line text-4xl mb-4 text-blue-900 mx-auto"></i>
                        <h3 className="text-xl font-bold mb-2 text-center">Speak in Your Language</h3>
                        <p className="text-center">We understand 10+ Indian languages via voice.</p>
                    </div>
                    <div className="bg-blue-100 p-10 rounded-2xl flex flex-col items-center transition-transform duration-200 hover:scale-105 min-h-[180px]">
                        <i className="ri-lightbulb-flash-line text-4xl mb-4 text-blue-900 mx-auto"></i>
                        <h3 className="text-xl font-bold mb-2 text-center">Get Matching Schemes</h3>
                        <p className="text-center">AI recommends schemes based on your situation.</p>
                    </div>
                    <div className="bg-blue-100 p-10 rounded-2xl flex flex-col items-center transition-transform duration-200 hover:scale-105 min-h-[180px]">
                        <i className="ri-file-edit-line text-4xl mb-4 text-blue-900 mx-auto"></i>
                        <h3 className="text-xl font-bold mb-2 text-center">Get Forms Filled Automatically</h3>
                        <p className="text-center">Upload Aadhaar, we handle the paperwork.</p>
                    </div>
                    <div className="bg-blue-100 p-10 rounded-2xl flex flex-col items-center transition-transform duration-200 hover:scale-105 min-h-[180px]">
                        <i className="ri-eye-line text-4xl mb-4 text-blue-900 mx-auto"></i>
                        <h3 className="text-xl font-bold mb-2 text-center">Review Before You Submit</h3>
                        <p className="text-center">You’ll get to verify all details before submission.</p>
                    </div>
                    <div className="bg-blue-100 p-10 rounded-2xl flex flex-col items-center transition-transform duration-200 hover:scale-105 min-h-[180px]">
                        <i className="ri-notification-3-line text-4xl mb-4 text-blue-900 mx-auto"></i>
                        <h3 className="text-xl font-bold mb-2 text-center">Stay Notified</h3>
                        <p className="text-center">We notify you when new schemes you’re eligible for go live.</p>
                    </div>
                    <div className="bg-blue-100 p-10 rounded-2xl flex flex-col items-center transition-transform duration-200 hover:scale-105 min-h-[180px]">
                        <i className="ri-chat-voice-line text-4xl mb-4 text-blue-900 mx-auto"></i>
                        <h3 className="text-xl font-bold mb-2 text-center">Ask in Your Voice</h3>
                        <p className="text-center">Not sure what you need? Just ask — your AI assistant listens.</p>
                    </div>
                </div>
            </section>



            {/* Why Sahayak Connect Section */}
            <section className="bg-white px-6 md:px-20 py-16">
                {/* Top Subsection */}
                <div className="grid md:grid-cols-2 gap-16 items-start mb-16">

                    {/* Left Text Block */}
                    <div className="pl-28">
                        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">Why Sahayak Connect?</h2>
                        <h3 className="font-bold text-gray-800 mb-1 text-l">Multilingual AI Agent</h3>
                        <p className="text-l font-semibold text-gray-600 mb-4">
                            Understands voice and text in native Indian languages.
                        </p>
                        <button className="bg-orange-50 transition-transform duration-200 hover:scale-105 text-sm px-20 py-2 rounded-full flex items-center gap-2 text-gray-800 shadow font-semibold">
                            See how we fill the form <span className="text-lg">→</span>
                        </button>
                    </div>
                    <div className="pr-36">
                    {/* Right Language Box */}
                    <div className="bg-white p-6 rounded-xl shadow-md space-y-4 ">
                        <div className="bg-[#002645] text-white rounded-lg p-4 text-sm leading-relaxed font-bold">
                            हमर पतिक निधन भऽ गेल अछि,<br /> आ हम गर्भवती छी।
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-800">Suggested Scheme</h4>
                            <p className="text-sm text-gray-600 font-bold">Pradhan Mantri Matru Vandana Yojana</p>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Bottom Feature Cards */}
                <div className="bg-orange-50 rounded-xl p-6 md:p-10">
                    <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900 mb-10">Your Guide to Government Support<br/> Helping Every Citizen, Every Step</h2>

                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center">
                            <i class="ri-translate-2 text-3xl mb-4"></i>
                            <h3 className="font-semibold mb-1">Multilingual AI Agent</h3>
                            <p className="text-sm text-gray-700 font-semibold">Understands voice and text in native Indian languages.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center">
                            <i class="ri-file-copy-line text-3xl mb-4"></i>
                            <h3 className="font-semibold mb-1">End-to-End Support</h3>
                            <p className="text-sm text-gray-700 font-semibold">From eligibility check to pre-filled form PDF.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-center">
                            <i class="ri-community-line text-3xl mb-4"></i>
                            <h3 className="font-semibold mb-1">Built for Bharat</h3>
                            <p className="text-sm text-gray-700 font-semibold">Designed for citizens with low digital access and literacy.</p>
                        </div>
                    </div>
                    
                </div>
                
            </section>
            <h2 className="text-center text-sm font-semibold text-gray-500 mb-4"> • Built with Care by Team SahaayakConnect • </h2>



        </div>
    );
}
