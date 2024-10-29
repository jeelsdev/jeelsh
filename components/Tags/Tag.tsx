"use client";

import { motion } from 'framer-motion';

const Tag = ({ skill }: {skill: string}) => {
    return (
        <motion.div
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="text-sm border-2 bg-gray-200 border-gray-200 text-gray-950 font-semibold rounded-md hover:bg-opacity-80 dark:bg-background dark:text-gray-200 dark:border-gray-700 cursor-default"
        >
            <span className="px-2">{skill}</span>
        </motion.div>
    );
}

export default Tag;
