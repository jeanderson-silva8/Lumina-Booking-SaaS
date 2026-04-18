import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Server, Link, Activity, Zap } from 'lucide-react';

export default function IntegrationShowcase() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container" style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
      <header className="dashboard-header animate-fade-in" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={() => navigate('/dashboard')}
            className="glass-panel"
            style={{ padding: '0.5rem', borderRadius: '50%', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}
            title="Voltar ao Dashboard"
          >
            <ArrowLeft className="text-gray-400 hover:text-white transition-colors" size={20} />
          </button>
          <div>
            <div className="dashboard-subtitle">Lumina Arquitetura</div>
            <h1 className="dashboard-title text-gradient">Como o Flow Real Funciona</h1>
          </div>
        </div>
      </header>

      <main className="animate-fade-in" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        <section className="glass-panel" style={{ padding: '2.5rem', background: 'rgba(10, 15, 30, 0.6)' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(45, 212, 191, 0.1)', borderRadius: '12px' }}>
              <Lock size={24} color="var(--accent-cyan)" />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>01. Multi-Tenant & Setup</h2>
          </div>
          <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: '1.05rem' }}>
            No momento em que o cliente decide avançar além da demonstração, isolamos o ambiente B2B. Nossa base em <strong>PostgreSQL</strong> aloca um <code>tenant_id</code> único garantindo que dados de diferentes empresas jamais se misturem (Enterprise Security Rules). O usuário cria a conta final recebendo painéis de autenticação criptografados via JWT Auth no nosso backend Django, preparando o cofre para injetar a operação dele.
          </p>
        </section>

        <section className="glass-panel" style={{ padding: '2.5rem', background: 'rgba(10, 15, 30, 0.6)' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '12px' }}>
              <Link size={24} color="var(--accent-purple)" />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>02. Handshake de APIs (Stripe / Hotmart)</h2>
          </div>
          <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: '1.05rem' }}>
            Em uma tela segura de Integrações, o cliente preenche chaves de API com permissão apenas de Leitura (Read-Only). O backend as valida instantaneamente trocando tokens criptográficos e confirma o Webhook para os pagamentos futuros. O <em>Handshake</em> avisa o sistema que agora temos permissão para acessar os dados na fonte.
          </p>
        </section>

        <section className="glass-panel" style={{ padding: '2.5rem', background: 'rgba(10, 15, 30, 0.6)' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(234, 179, 8, 0.1)', borderRadius: '12px' }}>
              <Server size={24} color="#eab308" />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>03. Ingestão de Dados em Nuvem (Background Tasks)</h2>
          </div>
          <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: '1.05rem' }}>
            Como a primeira carga pode englobar milhares de pagamentos de anos anteriores, nós não podemos travar o site do cliente aguardando o fim do upload. O Django repassa esse trabalho sujo para mensagerias escaláveis (frequentemente usando <strong>Celery e Redis</strong>). O cliente é liberado pra passear na plataforma enquanto um "progress bar" roda async puxando transações financeiras nos bastidores (IaaS).
          </p>
        </section>

        <section className="glass-panel" style={{ padding: '2.5rem', background: 'rgba(10, 15, 30, 0.6)' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px' }}>
              <Activity size={24} color="var(--accent-red)" />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>04. O Motor Analítico Entra em Ação</h2>
          </div>
          <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            Com a tabela <code>Subscription</code> totalmente alimentada do Stripe, disparamos consultas <code>aggregation</code> massivas direto no PostgreSQL para decodificar LTV verdadeiro e categorizar as perdas como <strong>Churn Voluntário</strong> (Insatisfação) e <strong>Involuntário</strong> (Cartão Falho). 
          </p>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', border: '1px border rgba(255,255,255,0.05)' }}>
            <pre style={{ color: '#38bdf8', fontSize: '0.85rem', overflowX: 'auto' }}>
              <code>
                {`--> "O Momento Aha!"
Quando a carga termina de classificar quem parou de pagar por falta de saldo, o botão de Update acende pro usuário. A tela antes vazia/fictícia, pisca e entrega o cenário real (que construímos na demo) onde ele descobre perfeitamente pra onde a receita vaza todo santo dia.`}
              </code>
            </pre>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button 
            className="demo-btn-primary animate-pulse-glow"
            style={{ padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: 'bold' }}
            onClick={() => navigate('/dashboard')}
          >
            <Zap size={20} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
            Retornar ao Dashboard
          </button>
        </div>

      </main>
    </div>
  );
}
