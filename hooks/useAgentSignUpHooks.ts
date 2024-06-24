import { useForm } from 'react-hook-form';
import { agentSignUpSchema } from '@/libs/schemas/agentSignUpSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useAgentSignUpHooks = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({resolver: zodResolver(agentSignUpSchema)});
  
  return {register, handleSubmit, errors, setValue}
}