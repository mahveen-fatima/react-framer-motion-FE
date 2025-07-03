
import React, { useRef } from 'react'
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg"
import f4 from "../assets/f4.jpg"
import f5 from "../assets/f5.jpg"
import f6 from "../assets/f6.jpg"
import f7 from "../assets/f7.jpg"

import { motion, useTransform, useScroll } from 'motion/react'

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

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"])
  return (
    <section ref={targetRef} className='relative h-[300vh] bg-neutral-900'>
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
        className='group relative h-[450px] w-[450px] overflow-hidden'
        >
            <div
            style={{
                backgroundImage: `url(${card.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
            ></div>
            <div className='absolute inset-0 z-10 grid place-content-center'>
                <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-bold uppercase text-white'>
                {card.title}
                </p>
            </div>
        </div>
    )
}

export default Example

type CardType = {
    src: string;
    title: string;
    id: number;
}

const cards: CardType[] = [
    {
        src: f1,
        title: "Title 1",
        id: 1
    },
    {
        src: f2,
        title: "Title 2",
        id: 2
    },
    {
        src: f3,
        title: "Title 3",
        id: 3
    },
    {
        src: f4,
        title: "Title 4",
        id: 4
    },
    {
        src: f5,
        title: "Title 5",
        id: 5
    },
    {
        src: f6,
        title: "Title 6",
        id: 6
    },
    {
        src: f7,
        title: "Title 7",
        id: 7
    },
]