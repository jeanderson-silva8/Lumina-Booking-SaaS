<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lumina - Sistema Core</title>
    
    <!-- Fontes Google -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
    
    <style>
        /* ===== VARIÁVEIS E RESET ===== */
        :root {
            --primary: #00d4ff;
            --primary-glow: rgba(0, 212, 255, 0.3);
            --secondary: #667eea;
            --accent: #8b5cf6;
            --dark: #0a0e1a;
            --dark-card: #0f1419;
            --dark-elevated: #1a1f2e;
            --border: rgba(255, 255, 255, 0.08);
            --text: #ffffff;
            --text-secondary: #94a3b8;
            --text-muted: #64748b;
            --success: #10b981;
            --error: #ef4444;
            --glow-top: linear-gradient(180deg, rgba(102, 126, 234, 0.15) 0%, transparent 100%);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow: hidden;
        }

        /* ===== WRAPPER PRINCIPAL ===== */
        .login-wrapper {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--dark);
            overflow: hidden;
        }

        /* ===== GRID DE FUNDO ===== */
        .grid-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
        }

        /* ===== CAMADAS DE GRADIENTE ANIMADAS ===== */
        .gradient-layer {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            opacity: 0.15;
            animation: float 25s infinite ease-in-out;
        }

        .layer-1 {
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, var(--secondary), transparent);
            top: -300px;
            left: -200px;
            animation-delay: 0s;
        }

        .layer-2 {
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, var(--primary), transparent);
            bottom: -250px;
            right: -150px;
            animation-delay: 8s;
        }

        .layer-3 {
            width: 450px;
            height: 450px;
            background: radial-gradient(circle, var(--accent), transparent);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation-delay: 16s;
        }

        @keyframes float {
            0%, 100% {
                transform: translate(0, 0) scale(1);
            }
            33% {
                transform: translate(100px, -80px) scale(1.2);
            }
            66% {
                transform: translate(-80px, 100px) scale(0.9);
            }
        }

        /* ===== CONTAINER DO LOGIN ===== */
        .login-container {
            position: relative;
            z-index: 10;
            width: 100%;
            max-width: 440px;
            padding: 40px;
            background: rgba(15, 20, 25, 0.7);
            backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid var(--border);
            border-radius: 24px;
            box-shadow: 
                0 20px 60px rgba(0, 0, 0, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.05);
            animation: slideUp 0.6s ease-out;
        }

        .login-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 200px;
            background: var(--glow-top);
            border-radius: 24px 24px 0 0;
            pointer-events: none;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* ===== BADGE DE STATUS ===== */
        .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 14px;
            background: rgba(102, 126, 234, 0.1);
            border: 1px solid rgba(102, 126, 234, 0.2);
            border-radius: 20px;
            margin-bottom: 24px;
            animation: fadeIn 0.8s ease-out 0.2s both;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .pulse-dot {
            width: 8px;
            height: 8px;
            background: var(--primary);
            border-radius: 50%;
            animation: pulse 2s infinite;
            box-shadow: 0 0 10px var(--primary-glow);
        }

        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.3);
                opacity: 0.7;
            }
        }

        .badge-text {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 1.5px;
            color: var(--text-secondary);
            text-transform: uppercase;
        }

        /* ===== HEADER ===== */
        .header {
            margin-bottom: 32px;
            animation: fadeIn 0.8s ease-out 0.3s both;
        }

        .logo-container {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
        }

        .logo-icon {
            width: 40px;
            height: 40px;
            filter: drop-shadow(0 0 20px var(--primary-glow));
        }

        .logo-text {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 32px;
            font-weight: 700;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .subtitle {
            font-size: 14px;
            color: var(--text-muted);
            font-weight: 400;
            letter-spacing: 0.5px;
        }

        /* ===== FORMULÁRIO ===== */
        .login-form {
            animation: fadeIn 0.8s ease-out 0.4s both;
        }

        /* ===== GRUPOS DE INPUT ===== */
        .input-group {
            margin-bottom: 20px;
        }

        .input-label {
            display: block;
            font-size: 13px;
            font-weight: 600;
            color: var(--text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.3px;
        }

        .input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
        }

        .input-icon {
            position: absolute;
            left: 16px;
            width: 20px;
            height: 20px;
            stroke: var(--text-muted);
            stroke-width: 2;
            pointer-events: none;
            transition: stroke 0.3s ease;
        }

        .input-wrapper input {
            width: 100%;
            padding: 14px 16px 14px 48px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border);
            border-radius: 12px;
            color: var(--text);
            font-size: 15px;
            font-weight: 400;
            transition: all 0.3s ease;
            outline: none;
        }

        .input-wrapper input::placeholder {
            color: var(--text-muted);
        }

        .input-wrapper input:focus {
            background: rgba(255, 255, 255, 0.05);
            border-color: var(--primary);
            box-shadow: 0 0 0 3px var(--primary-glow);
        }

        .input-wrapper input:focus + .input-icon,
        .input-wrapper:focus-within .input-icon {
            stroke: var(--primary);
        }

        /* ===== TOGGLE DE SENHA ===== */
        .toggle-password {
            position: absolute;
            right: 16px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            border-radius: 6px;
        }

        .toggle-password:hover {
            background: rgba(255, 255, 255, 0.05);
        }

        .eye-icon,
        .eye-slash-icon {
            width: 20px;
            height: 20px;
            stroke: var(--text-muted);
            stroke-width: 2;
            transition: stroke 0.3s ease;
        }

        .toggle-password:hover .eye-icon,
        .toggle-password:hover .eye-slash-icon {
            stroke: var(--primary);
        }

        .hidden {
            display: none !important;
        }

        /* ===== OPÇÕES DO FORMULÁRIO ===== */
        .form-options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
        }

        /* Checkbox Customizado */
        .checkbox-container {
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;
            position: relative;
        }

        .checkbox-container input[type="checkbox"] {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }

        .checkmark {
            position: relative;
            width: 18px;
            height: 18px;
            background: rgba(255, 255, 255, 0.03);
            border: 1.5px solid var(--border);
            border-radius: 4px;
            margin-right: 10px;
            transition: all 0.3s ease;
        }

        .checkbox-container:hover .checkmark {
            border-color: var(--primary);
            background: rgba(0, 212, 255, 0.05);
        }

        .checkbox-container input:checked ~ .checkmark {
            background: var(--primary);
            border-color: var(--primary);
        }

        .checkmark::after {
            content: '';
            position: absolute;
            display: none;
            left: 5px;
            top: 2px;
            width: 5px;
            height: 9px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }

        .checkbox-container input:checked ~ .checkmark::after {
            display: block;
        }

        .checkbox-label {
            font-size: 14px;
            color: var(--text-secondary);
            font-weight: 500;
        }

        /* Link "Esqueceu a senha?" */
        .forgot-link {
            font-size: 14px;
            color: var(--primary);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }

        .forgot-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 1px;
            background: var(--primary);
            transition: width 0.3s ease;
        }

        .forgot-link:hover::after {
            width: 100%;
        }

        .forgot-link:hover {
            color: var(--text);
        }

        /* ===== BOTÃO DE SUBMIT ===== */
        .submit-btn {
            width: 100%;
            padding: 16px 24px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            border: none;
            border-radius: 12px;
            color: var(--text);
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
        }

        .submit-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.6s ease;
        }

        .submit-btn:hover::before {
            left: 100%;
        }

               .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(0, 212, 255, 0.5);
        }

        .submit-btn:active {
            transform: translateY(0);
        }

        .submit-btn.loading {
            pointer-events: none;
        }

        .btn-text {
            transition: opacity 0.3s ease;
        }

        .btn-loader {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        /* Spinner de Loading */
        .spinner {
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .btn-arrow {
            width: 20px;
            height: 20px;
            stroke: currentColor;
            stroke-width: 2;
            transition: transform 0.3s ease;
        }

        .submit-btn:hover .btn-arrow {
            transform: translateX(4px);
        }

        /* ===== FOOTER ===== */
        .footer {
            margin-top: 32px;
            padding-top: 24px;
            border-top: 1px solid var(--border);
            display: flex;
            flex-direction: column;
            gap: 16px;
            animation: fadeIn 0.8s ease-out 0.5s both;
        }

        /* Badge de Segurança */
        .security-badge {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 16px;
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.2);
            border-radius: 10px;
        }

        .shield-icon {
            width: 18px;
            height: 18px;
            stroke: var(--success);
            stroke-width: 2;
        }

        .security-badge span {
            font-size: 13px;
            color: var(--success);
            font-weight: 600;
        }

        /* Informações de Versão */
        .version-info {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 13px;
            color: var(--text-muted);
        }

        .divider {
            color: var(--text-muted);
            opacity: 0.5;
        }

        .doc-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .doc-link:hover {
            color: var(--primary);
        }

        /* ===== MENSAGEM DE ERRO ===== */
        .error-message {
            padding: 12px 16px;
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 10px;
            color: #ef4444;
            font-size: 14px;
            margin-bottom: 20px;
            animation: shake 0.5s ease;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }

        /* ===== RESPONSIVIDADE ===== */
        @media (max-width: 768px) {
            .login-container {
                max-width: 90%;
                padding: 32px 24px;
            }

            .logo-text {
                font-size: 28px;
            }

            .gradient-layer {
                filter: blur(80px);
            }
        }

        @media (max-width: 480px) {
            .login-container {
                padding: 28px 20px;
            }

            .logo-text {
                font-size: 24px;
            }

            .logo-icon {
                width: 32px;
                height: 32px;
            }

            .form-options {
                flex-direction: column;
                gap: 12px;
                align-items: flex-start;
            }

            .input-wrapper input {
                padding: 12px 14px 12px 44px;
                font-size: 14px;
            }

            .submit-btn {
                padding: 14px 20px;
                font-size: 15px;
            }
        }

        /* ===== ACESSIBILIDADE ===== */
        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }

        button:focus-visible,
        input:focus-visible,
        a:focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
        }
    </style>
</head>
<body>
    <div class="login-wrapper">
        <!-- Grid de fundo animado -->
        <div class="grid-background"></div>
        
        <!-- Camadas de gradiente animadas -->
        <div class="gradient-layer layer-1"></div>
        <div class="gradient-layer layer-2"></div>
        <div class="gradient-layer layer-3"></div>

        <!-- Container do Login -->
        <div class="login-container">
            <!-- Badge de Status -->
            <div class="status-badge">
                <span class="pulse-dot"></span>
                <span class="badge-text">ÁREA RESTRITA</span>
            </div>

            <!-- Logo e Título -->
            <div class="header">
                <div class="logo-container">
                    <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#gradient1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="url(#gradient1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="url(#gradient1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                            <linearGradient id="gradient1" x1="2" y1="2" x2="22" y2="22">
                                <stop offset="0%" stop-color="#00d4ff"/>
                                <stop offset="100%" stop-color="#667eea"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <h1 class="logo-text">Lumina</h1>
                </div>
                <p class="subtitle">Autenticação do Sistema Core</p>
            </div>

            <!-- Formulário -->
            <form id="loginForm" class="login-form">
                <!-- Campo Usuário -->
                <div class="input-group">
                    <label for="username" class="input-label">Usuário</label>
                    <div class="input-wrapper">
                        <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                        <input 
                            type="text" 
                            id="username" 
                            name="username"
                            placeholder="Digite seu usuário"
                            autocomplete="username"
                            required
                        />
                    </div>
                </div>

                <!-- Campo Senha -->
                <div class="input-group">
                    <label for="password" class="input-label">Chave de Acesso</label>
                    <div class="input-wrapper">
                        <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            placeholder="••••••••"
                            autocomplete="current-password"
                            required
                        />
                        <button type="button" class="toggle-password" id="togglePassword" aria-label="Mostrar senha">
                            <svg class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                            <svg class="eye-slash-icon hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                                <line x1="1" y1="1" x2="23" y2="23"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Opções -->
                <div class="form-options">
                    <label class="checkbox-container">
                        <input type="checkbox" id="rememberMe">
                        <span class="checkmark"></span>
                        <span class="checkbox-label">Lembrar-me</span>
                    </label>
                    <a href="#" class="forgot-link">Esqueceu a senha?</a>
                </div>

                <!-- Botão de Submit -->
                <button type="submit" class="submit-btn" id="submitBtn">
                    <span class="btn-text">Acessar Engine</span>
                    <span class="btn-loader hidden">
                        <span class="spinner"></span>
                        Verificando...
                    </span>
                    <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                    </svg>
                </button>
            </form>

            <!-- Footer -->
            <div class="footer">
                <div class="security-badge">
                    <svg class="shield-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <span>Conexão Segura TLS 1.3</span>
                </div>
                <div class="version-info">
                    <span>v2.4.1</span>
                    <span class="divider">•</span>
                    <a href="#" class="doc-link">Documentação</a>
                </div>
            </div>
        </div>
    </div>

    <script>
        // ===== ELEMENTOS DO DOM =====
        const loginForm = document.getElementById('loginForm');
        const submitBtn = document.getElementById('submitBtn');
        const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('password');
        const usernameInput = document.getElementById('username');

        // ===== TOGGLE DE VISIBILIDADE DA SENHA =====
        togglePassword.addEventListener('click', () => {
            const eyeIcon = togglePassword.querySelector('.eye-icon');
            const eyeSlashIcon = togglePassword.querySelector('.eye-slash-icon');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.classList.add('hidden');
                eyeSlashIcon.classList.remove('hidden');
                togglePassword.setAttribute('aria-label', 'Ocultar senha');
            } else {
                passwordInput.type = 'password';
                eyeIcon.classList.remove('hidden');
                eyeSlashIcon.classList.add('hidden');
                togglePassword.setAttribute('aria-label', 'Mostrar senha');
            }
        });

        // ===== ANIMAÇÃO DO BOTÃO DE SUBMIT =====
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validação básica
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            
            if (!username || !password) {
                showError('Por favor, preencha todos os campos');
                return;
            }

            if (password.length < 4) {
                showError('A senha deve ter no mínimo 4 caracteres');
                return;
            }
            
            // Ativar estado de loading
            submitBtn.classList.add('loading');
            submitBtn.querySelector('.btn-text').classList.add('hidden');
            submitBtn.querySelector('.btn-loader').classList.remove('hidden');
            submitBtn.querySelector('.btn-arrow').classList.add('hidden');
            
            // Simular requisição (substitua com sua lógica real)
            setTimeout(() => {
                // Para teste, vamos simular sucesso
                console.log('Login realizado com sucesso!');
                console.log('Usuário:', username);
                
                // AQUI VOCÊ PODE:
                // 1. Redirecionar para dashboard
                // window.location.href = '/dashboard.html';
                
                // 2. Ou fazer uma chamada à API
                // fetch('/api/login', { method: 'POST', body: JSON.stringify({ username, password }) })
                
                // Para demonstração, vamos mostrar sucesso e resetar
                alert('✅ Login bem-sucedido!\n\nUsuário: ' + username);
                resetButton();
                loginForm.reset();
                
            }, 2000);
        });

               // ===== FUNÇÃO PARA RESETAR BOTÃO =====
        function resetButton() {
            submitBtn.classList.remove('loading');
            submitBtn.querySelector('.btn-text').classList.remove('hidden');
            submitBtn.querySelector('.btn-loader').classList.add('hidden');
            submitBtn.querySelector('.btn-arrow').classList.remove('hidden');
        }

        // ===== FUNÇÃO PARA MOSTRAR ERRO =====
        function showError(message) {
            // Remover erro anterior se existir
            const existingError = document.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            
            // Criar elemento de erro
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerHTML = `
                <svg style="width: 18px; height: 18px; stroke: currentColor; float: left; margin-right: 10px;" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke-width="2"/>
                    <line x1="12" y1="8" x2="12" y2="12" stroke-width="2"/>
                    <line x1="12" y1="16" x2="12.01" y2="16" stroke-width="2"/>
                </svg>
                ${message}
            `;
            
            // Inserir antes do formulário
            loginForm.insertBefore(errorDiv, loginForm.firstChild);
            
            // Remover mensagem após 5 segundos
            setTimeout(() => {
                errorDiv.style.opacity = '0';
                errorDiv.style.transform = 'translateY(-10px)';
                setTimeout(() => errorDiv.remove(), 300);
            }, 5000);
        }

        // ===== VALIDAÇÃO EM TEMPO REAL =====
        usernameInput.addEventListener('input', () => {
            const existingError = document.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
        });

        passwordInput.addEventListener('input', () => {
            const existingError = document.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
        });

        // ===== ATALHO DE TECLADO (Enter para submit) =====
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && (document.activeElement === usernameInput || document.activeElement === passwordInput)) {
                loginForm.dispatchEvent(new Event('submit'));
            }
        });

        // ===== ANIMAÇÃO DE ENTRADA DOS INPUTS =====
        document.querySelectorAll('.input-wrapper input').forEach((input, index) => {
            input.style.animation = `fadeIn 0.6s ease-out ${0.5 + (index * 0.1)}s both`;
        });

        // ===== EFEITO DE FOCO AUTOMÁTICO =====
        window.addEventListener('load', () => {
            setTimeout(() => {
                usernameInput.focus();
            }, 800);
        });

        // ===== PREVENÇÃO DE MÚLTIPLOS SUBMITS =====
        let isSubmitting = false;
        loginForm.addEventListener('submit', (e) => {
            if (isSubmitting) {
                e.preventDefault();
                return false;
            }
            isSubmitting = true;
            setTimeout(() => {
                isSubmitting = false;
            }, 2000);
        });

        // ===== LOG DE DEBUG (REMOVER EM PRODUÇÃO) =====
        console.log('%c🔐 Sistema Lumina v2.4.1', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
        console.log('%cSistema de autenticação carregado com sucesso!', 'color: #10b981; font-size: 12px;');
        console.log('%c⚠️ Este é um ambiente de desenvolvimento', 'color: #f59e0b; font-size: 12px;');
    </script>
</body>
</html>