import { motion } from 'framer-motion';
import { LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FooterCTA() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center py-12 sm:py-16"
    >
      <div className="flex justify-center">
        <motion.button
          onClick={() => navigate('/dashboard')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer"
          style={{ background: 'rgba(34, 211, 238, 0.05)' }}
        >
          <LayoutDashboard size={16} />
          Voltar ao dashboard
        </motion.button>
      </div>
    </motion.div>
  );
}
