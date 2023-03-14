import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'helpers/classNames/classNames';
import { useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button onClick={onToggle}>toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </aside>
  );
};
