import gsap from 'gsap';
import { useEffect, useRef } from 'react';


const capabilities = [
    {
        title: "Sheet Metal",
        description: "At Hygenists Shield, we deliver custom sheet metal fabrication with precise cutting, bending, and welding. Our durable and lightweight solutions meet industry-specific requirements efficiently.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Reverse Engineering",
        description: "Hygenists Shield specializes in reverse engineering to replicate and modernize components. We use advanced 3D scanning and CAD modeling to enhance design accuracy and optimize performance.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Additive Manufacturing",
        description: "We offer cutting-edge additive manufacturing services to produce complex, custom parts with reduced waste and rapid prototyping. Unlock innovation with our 3D printing expertise.",
        image: "https://images.unsplash.com/photo-1582879304171-8041c73bedbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFkZGl0aXZlJTIwbWFudWZhY3R1cmluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Precision",
        description: "At Hygenists Shield, we specialize in high-precision engineering solutions, using advanced CNC machining to deliver accurate, durable components for critical applications in various industries.",
        image: "https://images.unsplash.com/photo-1769147339214-076740872485?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Automation Components",
        description: "We provide advanced automation components designed for seamless integration and high efficiency. Our solutions include sub-assemblies, jigs, fixtures, and value-added services.",
        image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Laser Cut",
        description: "Hygenists Shield offers precision laser cutting services for smooth, burr-free edges and complex geometries. We handle metals, plastics, and composites with minimal waste and maximum accuracy.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Powder Coat",
        description: "We provide high-quality powder coating solutions to enhance durability and visual appeal. Choose from a wide range of colors and textures for long-lasting, professional finishes.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
    }
];

const CapabilityCard = ({ title, description, image }) => {
    const cardRef = useRef(null);
    const borderRef = useRef(null);
    const textWrapperRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const overlayRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.set(borderRef.current, { opacity: 0, scale: 0.95 });
            gsap.set(descRef.current, { opacity: 0, height: 0, marginTop: 0 });
            gsap.set(titleRef.current, { y: 0 });


            tl.current = gsap.timeline({ paused: true })
                .to(overlayRef.current, { backgroundColor: "rgba(0,0,0,0.75)", duration: 0.3 }, 0)
                .to(borderRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }, 0)
                .to(titleRef.current, { y: -10, duration: 0.3, ease: "power2.out" }, 0)
                .to(descRef.current, { opacity: 1, height: "auto", marginTop: 12, duration: 0.3, ease: "power2.out" }, 0);
        }, cardRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = () => tl.current.play();
    const handleMouseLeave = () => tl.current.reverse();

    return (
        <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-[100vw] sm:w-[50vw] md:w-[33.333vw] lg:w-[25vw] h-[400px] md:h-[500px] flex-shrink-0 cursor-pointer overflow-hidden group"
        >
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
            />

            <div ref={overlayRef} className="absolute inset-0 bg-black/40 z-10 transition-colors"></div>

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 md:p-12">

                {/* Crosshair Border */}
                <div ref={borderRef} className="absolute inset-6 md:inset-10 pointer-events-none">
                    <div className="absolute top-0 left-[-15px] right-[-15px] h-[1px] bg-white/80"></div>
                    <div className="absolute bottom-0 left-[-15px] right-[-15px] h-[1px] bg-white/80"></div>
                    <div className="absolute left-0 top-[-15px] bottom-[-15px] w-[1px] bg-white/80"></div>
                    <div className="absolute right-0 top-[-15px] bottom-[-15px] w-[1px] bg-white/80"></div>
                </div>

                {/* Text Content */}
                <div ref={textWrapperRef} className="relative text-center text-white z-30 flex flex-col items-center max-w-[90%]">
                    <h3 ref={titleRef} className="text-xl md:text-2xl font-bold uppercase tracking-widest leading-snug">
                        {title}
                    </h3>
                    <div ref={descRef} className="overflow-hidden">
                        <p className="text-sm font-light leading-relaxed text-neutral-200">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function CapabilitiesSection() {
    const scrollerRef = useRef(null);
    const scrollTween = useRef(null);


    const duplicatedCapabilities = [...capabilities, ...capabilities];

    useEffect(() => {
        const ctx = gsap.context(() => {

            scrollTween.current = gsap.to(scrollerRef.current, {
                xPercent: -50,
                ease: "none",
                duration: 45,
                repeat: -1,
            });
        }, scrollerRef);

        return () => ctx.revert();
    }, []);


    const handleMouseEnter = () => scrollTween.current?.pause();
    const handleMouseLeave = () => scrollTween.current?.play();

    return (
        <section className="bg-white py-16 overflow-hidden font-['Open_Sans']">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-widest">
                    Our Capabilities
                </h2>
            </div>

            {/* Marquee Container */}
            <div
                className="w-full flex"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div ref={scrollerRef} className="flex w-max">
                    {duplicatedCapabilities.map((cap, index) => (
                        <CapabilityCard
                            key={index}
                            title={cap.title}
                            description={cap.description}
                            image={cap.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}