
import React from 'react';
import MVLogo from '@/components/MVLogo';
import LoginForm from '@/components/LoginForm';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Lado esquerdo - Logo e Gradiente */}
      <div className="login-gradient w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <MVLogo />
          <div className="text-center text-white">
            <h1 className="text-2xl font-semibold mb-4">Portal de Acesso Seguro</h1>
            <p className="opacity-90 mb-4">
              Sistema integrado de gestão hospitalar e clínica
            </p>
            <div className="mt-8">
              <p className="text-sm opacity-70">© 2025 MV Sistemas. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lado direito - Formulário */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md">
          <LoginForm />
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Versão 2.5.1</p>
            <p>Precisa de ajuda? Entre em contato com o suporte</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
