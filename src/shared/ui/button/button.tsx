import { classNames } from 'helpers/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';
import cls from './button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      {...otherProps}
      className={classNames(cls.Button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  );
};
