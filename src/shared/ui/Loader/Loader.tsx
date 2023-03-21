import { classNames } from 'helpers/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames('lds-dual-ring', {}, [className])} />
  );
};
