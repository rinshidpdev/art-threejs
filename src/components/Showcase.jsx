import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Cyber Defense
                        </h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p className="text-lg leading-relaxed text-gray-300 font-medium">
                                Introducing {" "}
                                <span className="text-white font-bold">
                                    Next-Gen Security Platform
                                </span>
                                . Artiflex powers enterprise protection
                            </p>
                            <p className="text-base leading-loose text-gray-400">
                                It drives AI-powered threat detection on your infrastructure, so you can defend, respond, and protect with ease. All in a solution that's reliable, scalable, and powerful.
                            </p>
                            <p className="text-base leading-loose text-gray-400">
                                A brand-new security engine delivers real-time monitoring, incident response, and compliance. And next-gen threat intelligence with automated defense brings enterprise-level protection to your business.
                            </p>
                            <p className="text-primary font-semibold hover:underline cursor-pointer transition-all">
                                Learn more about our solutions →
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Up to</p>
                            <h3 className="text-6xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                99.9%
                            </h3>
                            <p className="text-base text-gray-300 font-medium">threat detection accuracy</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Under</p>
                            <h3 className="text-6xl font-black bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                                15 min
                            </h3>
                            <p className="text-base text-gray-300 font-medium">incident response time</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase
