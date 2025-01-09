import { motion } from "framer-motion";

interface CertificationCardProps {
  name: string;
  issuer: string;
  year: string;
}

export function CertificationCard({
  name,
  issuer,
  year,
}: CertificationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-50 rounded-lg p-4 transition-shadow duration-300 hover:shadow-md">
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-gray-600">{issuer}</p>
      <p className="text-gray-500 text-sm">{year}</p>
    </motion.div>
  );
}
