import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import { SiBlender, SiAdobecreativecloud } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

const Technologies = () => {
    // Define the custom animation variants
    const variants = {
        visible: i => ({
            x: 0,
            opacity: 1,
            transition: { delay: i * 0.2 + 0.5, type: 'spring' }  // spring generates a bouncy effect
        }),
        hidden: { x: 100, opacity: 0 }  // Start from an offset and hidden
    };

    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center text-4xl'>Technologies</h1>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                {[RiReactjsLine, TbBrandNextjs, FaNodeJs, SiBlender, SiAdobecreativecloud, FiFigma].map((Icon, index) => (
                    <motion.div
                        className='rounded-2xl border-4 border-neutral-800 p-4'
                        key={index}
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"  // Ensure animation triggers when the icon is in view
                        custom={index}  // Passing index for customizing delay
                        viewport={{ once: true }}  // Animation triggers only once
                    >
                        <Icon className='text-7xl text-cyan-400' />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
