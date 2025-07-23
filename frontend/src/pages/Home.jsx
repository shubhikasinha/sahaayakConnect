import React from "react";
import 'remixicon/fonts/remixicon.css';


export default function Home() {
    return (
        <div className="bg-orange-50 text-slate-900 ">
            <div class="fixed left-5 z-20">
                <img src="sahaayaklogo.png" alt="Logo" class="w-1/5 py-5" />
            </div>
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
                            <button className="bg-slate-900 text-white px-16 py-3 rounded-full font-semibold">
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



            {/* Why Sahayak Connect */}
            <section className="px-6 md:px-20 py-16">
                <h2 className="text-2xl font-semibold mb-6">Why Sahayak Connect?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">🗣️</div>
                        <h3 className="font-bold mb-1">Multilingual AI Agent</h3>
                        <p>Understands voice and text in native Indian languages.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">📋</div>
                        <h3 className="font-bold mb-1">End-to-End Support</h3>
                        <p>From eligibility check to pre-filled form PDF.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">🌍</div>
                        <h3 className="font-bold mb-1">Built for Bharat</h3>
                        <p>Designed for citizens with low digital access and literacy.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
