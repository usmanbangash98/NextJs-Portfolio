import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SkillIconProps {
  icon: IconType;
  name: string;
  color: string;
}

export function SkillIcon({ icon: Icon, name, color }: SkillIconProps) {
  const randomMovement = () => ({
    x: Math.random() * 30 - 10,
    y: Math.random() * 30 - 10,
    rotate: Math.random() * 30 - 10,
  });

  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      animate={randomMovement()}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5 + Math.random() * 1,
      }}>
      <Icon className="text-4xl mb-2" style={{ color }} />
      <span className="text-sm text-gray-600">{name}</span>
    </motion.div>
  );
}
