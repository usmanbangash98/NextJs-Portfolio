import { motion } from "framer-motion";

interface EducationCardProps {
  degree: string;
  school: string;
  year: string;
}

export function EducationCard({ degree, school, year }: EducationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-50 rounded-lg p-4 transition-shadow duration-300 hover:shadow-md">
      <h3 className="text-lg font-semibold mb-1">{degree}</h3>
      <p className="text-gray-600">{school}</p>
      <p className="text-gray-500 text-sm">{year}</p>
    </motion.div>
  );
}
