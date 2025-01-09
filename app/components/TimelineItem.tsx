import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

export function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="w-px h-full bg-gray-500"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
      </div>
      <div className="pb-8">
        <p className="text-sm text-blue-500 font-semibold mb-1">{year}</p>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
