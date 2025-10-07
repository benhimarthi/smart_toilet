
import React from 'react';
import { Facebook, Twitter, Youtube, MessageCircle } from 'lucide-react';

const EventFooter = () => {
    return (
        <div className="bg-gray-800/55 text-gray-300 px-20 py-5 relative w-full">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                    <div className="flex items-center space-x-2">
                        <a href="#">
                            <img src="/images/smart_toilet_title.png" alt="logo" width={350}/>
                        </a>
                    </div>
                        <div className="border-l border-gray-600 h-10 mx-6"></div>
                        <div>
                            <div className="flex space-x-4 text-sm">
                                <a href="#" className="hover:text-white">About</a>
                                <a href="#" className="hover:text-white">Benefits</a>
                                <a href="#" className="hover:text-white">Career</a>
                                <a href="#" className="hover:text-white">Support</a>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">&copy; 2019 Mudassar. All right reserved.</p>
                        </div>
                    </div>
                    <div>
                    <div className="flex space-x-3 justify-end">
                            <a href="#" className="hover:text-white"><Facebook size={16} /></a>
                            <a href="#" className="hover:text-white"><Twitter size={16} /></a>
                            <a href="#" className="hover:text-white"><Youtube size={16} /></a>
                            <a href="#" className="hover:text-white"><MessageCircle size={16} /></a>
                        </div>
                        <p className="text-xs mt-2 text-right">Support: mudassar@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventFooter;
