import Tag from '@/components/Tags/Tag';
import { Data } from '@/lib/data';
import { AnimatePresence } from 'framer-motion';

const Skills: React.FC = () => {
    return (
        <section className="mb-6">
            <h2 className="font-bold text-start my-5">Skills</h2>
            <div className="flex flex-wrap gap-2">
                <AnimatePresence>
                    {Data.Skills.map((skill, index) => (
                        <Tag skill={skill} key={index} />
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}

export default Skills;
