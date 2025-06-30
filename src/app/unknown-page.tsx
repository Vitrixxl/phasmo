import { useNavigate } from 'react-router';

export const UnknownRoutePage = () => {
  const navigate = useNavigate();
  navigate('/entities');

  return <></>;
};
