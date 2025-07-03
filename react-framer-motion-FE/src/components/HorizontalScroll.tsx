
import React, { useRef } from 'react'
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"
import p5 from "../assets/p5.jpg"
import p6 from "../assets/p6.jpg"
import p7 from "../assets/p7.jpg"
import p8 from "../assets/p8.jpg"
import p9 from "../assets/p9.jpg"
import p10 from "../assets/p10.jpg"

import { motion, useTransform, useScroll } from 'motion/react'
// import { GiP90 } from 'react-icons/gi';
// import { FiArrowRight } from 'react-icons/fi';

const Example = () => {
    return (
        <div className='bg-neutral-800'>
            <div className='flex h-48 items-center justify-center'>
                <span className='font-semibold uppercase text-neutral-500'>
                    Sroll down
                </span>
            </div>
            <HorizontalScrollCarousel />
            <div className='flex h-48 items-center justify-center'>
                <span className='font-semibold uppercase text-neutral-500'>
                    Scroll up
                </span>
            </div>
        </div>
    )
}

export const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef
    })

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"])
  return (
    <section ref={targetRef} className='relative h-[300vh] bg-neutral-950'>
        <h1 className='text-white text-center md:text-4xl justify-center font-bold underline pt-20'>Services</h1>
        <div className='sticky top-0 h-screen flex items-center overflow-hidden'>
            
            <motion.div style={{ x }} className='flex gap-4'>
                {cards.map((card) => {
                    return <Card card={card} key={card.id} />
                })}
            </motion.div>
        </div>
    </section>
  )
}


const Card = ({ card }: {card: CardType}) => {
    return (
        <div 
        key={card.id}
        className='group relative h-[440px] w-[350px] overflow-hidden bg-white/95 rounded-2xl'
        >
            <div className=' flex flex-col'>
                <img className='h-[250px] w-[450px]' src={card.src} alt="" />
                <div className='text-center'>
                <p className='text-2xl pt-5 font-semibold text-black'>{card.title}</p>
                <p className='text-lg pt-2 pb-4 text-neutral-600'>{card.para}</p>
                <button className='px-3 py-2 text-sm bg-pink-950 rounded-full text-white'>
                    Explore
                </button>
                
                </div>
            </div>
        </div>
    )
}

export default Example

type CardType = {
    src: string;
    title: string;
    para: string;
    id: number;
}

const cards: CardType[] = [
    {
        src: p1,
        title: "Stunning animations.",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: 1
    },
    {
        src: p2,
        title: "Lightning-fast load times.",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: 2
    },
    {
        src: p3,
        title: "Custom Integrations.",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: 3
    },
    {
        src: p4,
        title: "Pixel-Perfect Development.",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: 4
    },
    {
        src: p5,
        title: "Responsive Design.",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: 5
    },
    {
        src: p6,
        title: "Clean code.",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: 6
    },
    {
        src: p7,
        title: "Scalable CMS.",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: 7
    },
    {
        src: p8,
        title: "Make it pop.",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: 8
    },
    {
        src: p9,
        title: "Optimize SEO.",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: 9
    },
    {
        src: p10,
        title: "No coding needed.",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: 10
    },
]