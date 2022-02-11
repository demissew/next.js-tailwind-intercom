import Image from 'next/image'
import profilePic1 from '../public/art-hauntington-jzY0KRJopEI-unsplash.jpg'
import profilePic2 from '../public/conor-obrien-nKZuhvCGGQU-unsplash.jpg'
import profilePic3 from '../public/mika-W0i1N6FdCWA-unsplash.jpg'

export default function Home() {
    return (
        <div className="bg-gray-600 h-screen flex flex-col items-end">
            <div className="flex-1 mt-16 mr-4 w-96 shadow-xl rounded-lg bg-white relative overflow-hidden">
                <div className="bg-blue-700 h-64 absolute w-full z-0"/>
                <div
                    className="flex space-y-3 p-4 flex-col h-full w-full overflow-y-auto absolute z-10 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    <TopCard/>
                    <StartConversation/>
                    <SearchCard/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            <Button/>
        </div>
    )
}

function TopCard() {
    return <div className="flex flex flex-col ml-4 mt-4 mb-4 text-white">
        <img className="w-6 mb-3"
             src="https://downloads.intercomcdn.com/i/o/37840/636907e0fb5448742836e4c5/1bb87d41d15fe27b500a4bfcde01bb0e.png"
             alt="Intercom logo"/>

        <div className="text-3xl mb-3">Hi David 👋</div>
        <div className="w-60 text-gray-400 text-sm">We help your business grow by connecting you to your customer</div>
    </div>
}

function SearchCard() {
    return <div className="border-0 border-t-4 border-blue-400 rounded">
        <div className="flex flex-col bg-white border rounded rounded-t-none shadow-md p-4 space-y-2">
            <div className="font-semibold text-sm">Search for help</div>
            <div className="flex flex-row">
                <input type="text"
                       className="border flex-1 shadow-inner outline-none bg-gray-100 focus:bg-white rounded-l p-2 text-sm"
                       placeholder="Search our articles"/>
                <button className="bg-blue-700 p-2 rounded-r">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
}

function StartConversation() {
    return <div className="border-0 border-t-4 border-blue-400 rounded">
        <div className="flex flex-col bg-white border rounded rounded-t-none shadow-md justify-center">
            <div className="flex flex-col py-6 px-4 items-start space-y-3">
                <div className="font-semibold text-sm">Start a conversation</div>
                <div className="flex flex-row">
                    <div className="flex flex-row -space-x-10 mr-3">
                        <div className="w-16 h-16 relative border-2 border-white rounded-full">
                            <Image
                                src={profilePic1}
                                alt="Picture of the author"
                                layout="fill"
                                objectFit="fill"
                                className="rounded-full"
                            />
                        </div>
                        <div className="w-16 h-16 relative border-2 border-white rounded-full">
                            <Image
                                src={profilePic2}
                                alt="Picture of the author"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                        <div className="w-16 h-16 relative border-2 border-white rounded-full">
                            <Image
                                src={profilePic3}
                                alt="Picture of the author"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="text-sm text-gray-500">Our usual reply time</div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1 text-blue-700" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <p className="text-sm text-gray-700 font-semibold">
                                A few minutes
                            </p>
                        </div>
                    </div>
                </div>
                <button type="button"
                        className="bg-blue-700 hover:bg-blue-500 p-2 px-5 rounded-full text-white font-semibold flex flex-row items-center space-x-2">
                    <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                    <p>Send us a message</p>
                </button>
            </div>
            <div className="px-6 py-4 border-t">
                <a href="#" className="text-blue-500 text-sm hover:text-blue-300">
                    See all your conversations
                </a>
            </div>
        </div>
    </div>
}

function Card() {
    return <div className="flex bg-white border rounded flex items-center justify-center p-8">
        card
    </div>
}

function Button() {
    return <button
        className="bg-blue-600 rounded-full w-16 h-16 flex-none items-center flex justify-center m-4 cursor-pointer shadow-xl">
        <svg className="w-6 h-6 text-white"
             fill="none"
             stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
        </svg>
    </button>

}