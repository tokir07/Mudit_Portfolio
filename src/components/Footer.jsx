import React from 'react';
import { Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/p4.PNG';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto container-padding flex flex-col md:flex-row justify-between items-center gap-6">


                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                    <a href="#" className="flex items-center gap-2 mb-2">
                        <img src={logo} alt="BehindTheSceneGuy" className="h-10 w-auto object-contain" />
                        <span className="text-2xl font-bold tracking-tighter text-white">
                            BehindTheScene<span className="text-brand-gold">Guy</span>
                        </span>
                    </a>
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
                </div>

                <div className="flex space-x-6">
                    {[
                        { Icon: Instagram, href: "https://insta.openinapp.co/9vved" },
                        { Icon: Youtube, href: "https://yt.openinapp.co/efi9l" },
                        { Icon: Linkedin, href: "#" },
                        { Icon: Twitter, href: "#" }
                    ].map(({ Icon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            target={href !== "#" ? "_blank" : "_self"}
                            rel={href !== "#" ? "noopener noreferrer" : ""}
                            className="text-gray-400 hover:text-brand-gold transition-colors hover:scale-110 transform duration-200"
                        >
                            <Icon size={24} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
