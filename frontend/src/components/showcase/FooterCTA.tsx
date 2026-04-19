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
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Pronto para transformar dados em decisões?
      </h2>
      <p className="text-sm text-gray-400 mb-8 max-w-lg mx-auto">
        Veja como o Lumina pode integrar seus dados de pagamento e gerar inteligência analítica em tempo real.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#030712] transition-shadow duration-300"
          style={{
            background: 'linear-gradient(135deg, #22D3EE, #A78BFA)',
            boxShadow: '0 4px 20px rgba(34, 211, 238, 0.25)',
          }}
        >
          Vamos elevar o nível de sua empresa
        </motion.button>
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
