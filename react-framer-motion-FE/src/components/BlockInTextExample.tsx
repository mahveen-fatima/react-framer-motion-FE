import React, { useEffect, useState, type ReactNode } from 'react'

export const BlockInTextExample = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-neutral-100 px-8 py-24 text-neutral-800'>
        <BlockInTextCard 
            tag="/ Support"
            text={
                <>
                    <strong>Have questions?</strong> We'd love to help! Contact support for any issue you may face.
                </>
            }
            examples={[
                "Does your product work for SMBs?",
                "Can I pause my membership without losing my data?",
                "How does seat based pricing work?",
                "What's the meaning of life?"
            ]}
        />
    </div>
  )
}

// type textType = {
//     tag: string;
//     text: ReactNode;
//     examples: {}
// }

const BlockInTextCard = ({ tag, text, examples }) => {
    return (
        <div className='w-full max-w-xl space-y-6'>
            <div>
                <p className='mb-1.5 text-sm font-light uppercase'>
                    {tag}
                </p>
                <hr className='border-neutral-700' />
            </div>
            <p className='max-w-lg text-xl leading-relaxed'>{text}</p>
            {/* TODO typewrite */}
            <div>
                <Typewrite examples={examples} />
                <hr className='border-neutral-300' />
            </div>
            <button className='w-full rounded-full border border-neutral-950 py-2 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100'>
                Contact Support
            </button>
        </div>
    )
}

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({examples}) => {
    const [exampleIndex, setExampleIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setExampleIndex((pv) => (pv + 1) % examples.length)
        }, SWAP_DELAY_IN_MS)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <p className='mb-2.5 text-sm font-light uppercase'>
            <span className='inline-block size-2 bg-neutral-950' />
            <span className='ml-3'>EXAMPLE: {examples[0]}</span>
        </p>
    )
}
