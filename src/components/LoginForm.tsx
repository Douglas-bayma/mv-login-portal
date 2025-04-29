
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Building, KeyRound, User } from "lucide-react";

interface LoginFormData {
  username: string;
  password: string;
  company: string;
}

const LoginForm: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
    company: ''
  });
  
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  
  const validate = (): boolean => {
    const newErrors: Partial<LoginFormData> = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Usuário é obrigatório';
    }
    
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Empresa é obrigatória';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when typing
    if (errors[name as keyof LoginFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      toast({
        title: "Erro de validação",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulação de autenticação
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulação de login bem-sucedido
      toast({
        title: "Login bem-sucedido!",
        description: `Bem-vindo ${formData.username} à ${formData.company}`,
      });
      
      console.log('Login realizado com:', formData);
      
      // Aqui seria redirecionado para a dashboard
    } catch (error) {
      toast({
        title: "Erro ao fazer login",
        description: "Usuário, senha ou empresa inválidos.",
        variant: "destructive"
      });
      console.error('Erro no login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg animate-fade-in">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center text-mv-blue">Portal de Acesso</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="company">Empresa</Label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <Input
                id="company"
                name="company"
                placeholder="Digite o código da empresa"
                className={`pl-10 ${errors.company ? 'border-red-500' : ''}`}
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="username">Usuário</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <Input
                id="username"
                name="username"
                placeholder="Digite seu usuário"
                className={`pl-10 ${errors.username ? 'border-red-500' : ''}`}
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Digite sua senha"
                className={`pl-10 ${errors.password ? 'border-red-500' : ''}`}
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button 
          className="w-full bg-gradient-mv hover:bg-mv-blue-dark text-white font-medium"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Autenticando..." : "Entrar"}
        </Button>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-mv-blue hover:underline">
            Esqueceu sua senha?
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
