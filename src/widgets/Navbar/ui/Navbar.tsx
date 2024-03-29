import { classNames } from 'helpers/classNames/classNames';
import { t } from 'i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <nav className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
        {t('Main page')}
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        {t('About page')}
      </AppLink>
    </div>
  </nav>
);
