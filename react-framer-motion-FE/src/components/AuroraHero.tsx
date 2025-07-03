// import { animate } from 'motion'
// import { motion, useMotionTemplate, useMotionValue } from 'motion/react'
// import React, { useEffect } from 'react'
// import { FiArrowRight } from 'react-icons/fi'
// import { Canvas } from "@react-three/fiber"
// import { Stars } from "@react-three/drei"

// const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]
// export const AuroraHero = () => {
//     const color = useMotionValue(COLORS[0])
//     const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`
//     const border = useMotionTemplate`1px solid ${color}`;
//     const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

//     useEffect(() => {
//         animate(color, COLORS, {
//             ease: "easeInOut",
//             duration: 10,
//             repeat: Infinity,
//             repeatType: "mirror"
//         }) 
//     }, [])
//   return (
//     <motion.section 
//     style={{
//         backgroundImage, 
//     }}
//     className='relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200'>
//         <div className='relative z-10 flex flex-col items-center'>
//             <span className='mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm'>
//                 Beta Now Live!
//             </span>
//             <h1 className='max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight'>
//                 Decrease your SaaS churn by over 90%
//             </h1>
//             <p className='my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed'>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis debitis similique voluptatibus!
//             </p>
//             <motion.button
//             whileHover={{
//                 scale: 1.015,
//             }}
//             whileTap={{
//                 scale: 0.985
//             }}
//             style={{
//                 border,
//                 boxShadow
//             }}
//             className='group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50'
//             >
//                 Start free trail
//                 <FiArrowRight className='transition-transform group-hover:-rotate-45 group-active:-rotate-12' />
//             </motion.button>
//         </div>

//         <div className="absolute inset-0 z-0">
//             <Canvas>
//                 <Stars radius={50} count={2500} factor={4} fade speed={2} /> 
//             </Canvas>
//         </div>
//     </motion.section>
//   )
// }




//STAR VER
import React, { useEffect, useRef } from 'react'
import { animate, MotionValue, useMotionValue } from 'motion/react'
import { motion, useMotionTemplate } from 'motion/react'
import { FiArrowRight } from 'react-icons/fi'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

const COLORS = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']

export const AuroraHero: React.FC = () => {
  // Animate background color
  const color: MotionValue<string> = useMotionValue(COLORS[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    })
  }, [color])

  // Animate stars Y position
  const y: MotionValue<number> = useMotionValue(0)
  const starsRef = useRef<any>(null)

  useEffect(() => {
    const controls = animate(y, [0, 5, 0], {
      duration: 20,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    })

    const unsubscribe = y.onChange((v: number) => {
      if (starsRef.current) {
        starsRef.current.position.y = v
      }
    })

    return () => {
      controls.cancel()
      unsubscribe()
    }
  }, [y])

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Beta Now Live!
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl md:text-7xl">
          Decrease your SaaS churn by over 90%
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis debitis similique voluptatibus!
        </p>
        <motion.button
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          style={{ border, boxShadow }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Start free trial
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars ref={starsRef} radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  )
}






// // GRID VER
// import React, { useEffect } from 'react'
// import { animate, MotionValue, useMotionValue } from 'motion/react'
// import { motion, useMotionTemplate } from 'motion/react'
// import { FiArrowRight } from 'react-icons/fi'

// const COLORS = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']

// export const AuroraHero: React.FC = () => {
//   // Animate the accent color
//   const color: MotionValue<string> = useMotionValue(COLORS[0])

//   useEffect(() => {
//     animate(color, COLORS, {
//       ease: 'easeInOut',
//       duration: 10,
//       repeat: Infinity,
//       repeatType: 'mirror',
//     })
//   }, [color])

//   // Define the grid CSS (20px spacing, 1px lines at 10% opacity)
//   const grid = `
//     repeating-linear-gradient(
//       90deg,
//       rgba(255,255,255,0.1) 0,
//       rgba(255,255,255,0.1) 2px,
//       transparent 2px,
//       transparent 60px
//     ),
//     repeating-linear-gradient(
//       0deg,
//       rgba(255,255,255,0.1) 0,
//       rgba(255,255,255,0.1) 2px,
//       transparent 2px,
//       transparent 60px
//     )
//   `

//   // Composite the grid + animated radial aurora
//   const backgroundImage = useMotionTemplate`${grid}, radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`
//   const border = useMotionTemplate`1px solid ${color}`
//   const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

//   return (
//     <motion.section
//       style={{ backgroundImage, backgroundSize: 'auto' }}
//       className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
//     >
//       <div className="relative z-10 flex flex-col items-center">
//         <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
//           Beta Now Live!
//         </span>
//         <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl md:text-7xl">
//           Decrease your SaaS churn by over 90%
//         </h1>
//         <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis debitis similique voluptatibus!
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.015 }}
//           whileTap={{ scale: 0.985 }}
//           style={{ border, boxShadow }}
//           className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
//         >
//           Start free trial
//           <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
//         </motion.button>
//       </div>
//     </motion.section>
//   )
// }
