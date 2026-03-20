import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: Props) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className={`relative px-6 py-24 md:py-32 ${className}`}
  >
    <div className="mx-auto max-w-6xl">{children}</div>
  </motion.section>
);

export default SectionWrapper;
