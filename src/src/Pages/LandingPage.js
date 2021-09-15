// import { Center, HStack, Text } from 'native-base'
import Image from "../assets/images/image1.jpg"
import React from 'react'
import { useHistory } from "react-router"


function LandingPage() {
    return (
        <div className="overflow-x-hidden" >
            <Navbar />
            <StaticBackground />
            <FirsPart />
            <SecondPart />
        </div>

    )
}

const StaticBackground = () => {
    return (
        <div className="relative -z-10">
            <div className="fixed h-screen w-screen gradient-lp "></div>
            <img src={Image} className="fixed h-screen w-4/5 -z-10" alt="" srcset="" />
        </div>

    )
}
const Navbar = () => {
    const listStyle = "block center mx-3 px-7 h-1/2 rounded-xl  font-bold cursor-pointer hover:shadow-md transition-all"

    return (
        <div id="navbar" className="h-20 flex justify-evenly fixed w-full z-10 text-gray-300">
            <div id="left" className=" self-center mx-5">
                <p className="font-bold text-2xl">CERTIFICATE GENERATOR</p>
            </div>
            <div id="middle" className="flex items-center">
                <a href="#first" className={`${listStyle} bg-white text-gray-600`}>Home</a>
                <a href="#second" className={`${listStyle}`}>Start</a>
                <a href="#3" className={`${listStyle}`}>Navbar3</a>
                <a href="#4" className={`${listStyle}`}>Navbar4</a>
            </div>
            <div id="right" className=" flex items-center">
                <a href="#5" className={`${listStyle}`}>Sign In </a>
                <a href="#6" className={`${listStyle} bg-white text-gray-600 `}>Sign Up</a>
            </div>
        </div>
    )
}
const FirsPart = () => {
    const buttonStyle = "h-14 w-52 bg-blue-300 font-bold rounded-xl mr-5 text-gray-300 bg-gradient-to-br from-blue-600 to-blue-500"
    return (
        <div id="first" className="h-screen w-screen  m-0">

            <div id="body" className="h-screen w-1/2 transform translate-x-full center px-10 ">
                <div className="">
                    <div id="title" className="text-4xl font-bold text-white my-3">
                        <p>CERTIFICATE GENERATOR</p>
                    </div>
                    <div id="content" className="font-semibold my-3 text-white">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, doloribus! Dolorem delectus a, neque qui modi blanditiis similique iusto animi amet illo dignissimos consectetur fugiat nam excepturi asperiores ut nihil!</p>
                    </div>
                    <div id="buttons" className="my-3">
                        <button className={`${buttonStyle}`}>FREE SIGN UP</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

const SecondPart = () => {
    const buttonStyle = "h-16 w-52 bg-blue-300 font-bold rounded-xl mx-10  bg-gradient-to-br from-blue-600 to-blue-500 text-2xl"

    const history = useHistory();
    const navigate = (params) => {
        history.push(params)
    }
    return <div id="second" className="h-screen w-screen center flex-col gap-5 text-gray-300">

        <p className="text-6xl">Already Sign Up..?</p>
        <p className="text-xl">Sign In right now as</p>
        <div>
            <button className={`${buttonStyle}`} onClick={() => navigate('/Certificate')}>RECEIVER</button>
            <button className={`${buttonStyle}`} onClick={() => navigate('/Admin')}>PRODUCER</button>

        </div>
    </div>
}
export default LandingPage
