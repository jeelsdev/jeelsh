"use client";

import { motion } from 'framer-motion';

const Tag = ({ skill }: {skill: string}) => {
    return (
        <motion.div
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="text-sm border-2 border-gray-500 text-gray-300 rounded-md hover:bg-gray-200 hover:bg-opacity-80 hover:border-gray-500 hover:text-gray-800 dark:border-gray-600"
        >
            <span className="px-2">{skill}</span>
        </motion.div>
    );
}

export default Tag;
