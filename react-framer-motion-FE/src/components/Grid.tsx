import React from 'react'
import { motion, type MotionProps } from 'motion/react'
import { twMerge } from 'tailwind-merge'
import { IconArrowWaveRightUp, IconBoxAlignRightFilled, IconBoxAlignTopLeft, IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from '@tabler/icons-react'


export const Grid = () => {
  return (
    <div className='min-h-screen bg-zinc-950 px-4 py-12 text-zinc-50'>
      <motion.div 
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.05
      }}
      className='mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4'>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <FourthBlock /> 
        <FifthBlock />
        <SixthBlock />
        <SeventhBlock />
      </motion.div>
    </div>
  )
}

type Props = {
  className?: string;
} & MotionProps

const Block = ({ className, ...rest}: Props) => {
  return (
    <motion.div
    variants={{
      initial: {
        scale: 0.5,
        y: 50,
        opacity: 0
      },
      animate: {
        scale: 1, 
        y: 0,
        opacity: 1
      }
    }}
    transition={{
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50
    }}
    className={twMerge(
      "col-span-4 rounded-lg border border-zinc-700 bg-black p-6",
      className
    )}
    {...rest}
    />
  )
}

const FirstBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-4"> 
        <div className='bg-zinc-800 h-40 w-full rounded-lg'></div>
          <IconClipboardCopy className='h-4 w-4 text-neutral-500 mt-2' />
          <h1 className='font-bold mt-2'>The draw of innovation</h1>
          <p className='text-[12px] text-neutral-400'>Explore the birth of groundbreaking ideas and inventions.</p>
    </Block>
  )
}
const SecondBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-4"> 
        <div className='bg-zinc-800 h-40 w-full rounded-lg'></div>
        <div>
          <IconFileBroken className='h-4 w-4 text-neutral-500 mt-2' />
          <h1 className='font-bold mt-2'>The Digital Revolution</h1>
          <p className='text-[12px] text-neutral-400'>Dive into the transformative power of technology.</p>
        </div>
    </Block>
  )
}
const ThirdBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-4"> 
        <div className='bg-zinc-800 h-40 w-full rounded-lg'></div>

          <IconSignature className='h-4 w-4 text-neutral-500 mt-2' />
          <h1 className='font-bold mt-2'>The Art of Design</h1>
          <p className='text-[12px] text-neutral-400'>Discover the beauty of thoughtful and functional design.</p>
    </Block>
  )
}

const FourthBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-8">
        <div className='bg-zinc-800 h-40 w-full rounded-lg'></div>
        <div>
          <IconTableColumn className='h-4 w-4 text-neutral-500 mt-2' />
          <h1 className='font-bold mt-2'>The Power of Communication</h1>
          <p className='text-[12px] text-neutral-400'>Understand the impact of effective communication in our lives.</p>
        </div>
    </Block>
  )
}

const FifthBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-4">
        <div className='bg-zinc-800 h-40 w-full rounded-lg'></div>
        <div>
          <IconArrowWaveRightUp className='h-4 w-4 text-neutral-500 mt-2' />
          <h1 className='font-bold mt-2'>The Pursuit of Knowledge</h1>
          <p className='text-[12px] text-neutral-400'>Join the quest for understanding and enlightenment.</p>
        </div>    
    </Block>
  )
}

const SixthBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-4">
        <div className='bg-zinc-800 h-40 w-full rounded-lg'></div>
        <div>
          <IconBoxAlignTopLeft className='h-4 w-4 text-neutral-500 mt-2' />
          <h1 className='font-bold mt-2'>The Joy of Creation</h1>
          <p className='text-[12px] text-neutral-400'>Experience the thrill of bringing ideas to life.</p>
        </div>
    </Block>
  )
}

const SeventhBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-8">
        <div className='bg-zinc-800 h-40 w-full rounded-lg'></div>
        <div>
          <IconBoxAlignRightFilled className='h-4 w-4 text-neutral-500 mt-2' />
          <h1 className='font-bold mt-2'>The Spirit of Adventure
</h1>
          <p className='text-[12px] text-neutral-400'>Embark on exciting journeys and thrilling discoveries.</p>
        </div>
    </Block>
  )
}