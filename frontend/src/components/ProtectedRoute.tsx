import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = localStorage.getItem('lumina_token');
  
  // Se não houver token, redireciona para a página de auth
  if (!token) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
}
