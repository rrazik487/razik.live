import { motion } from 'framer-motion';

const skills = [
  { name: "Cybersecurity & Ethical Hacking", level: 90 },
  { name: "Networking & Web Security", level: 85 },
  { name: "Embedded Systems & IoT", level: 80 },
  { name: "Programming: Python, Bash, C, Verilog", level: 75 }
];

export default function Skills() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}