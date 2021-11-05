import { Link } from 'react-router-dom';
import { memo, useMemo } from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';

type NavLinkProps = {
  to: string;
  activeOnlyWhenExact?: boolean;
};

export const NavLink: React.FC<NavLinkProps> = memo(
  ({ children, to, activeOnlyWhenExact = false }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({
      path: resolved.pathname,
      end: activeOnlyWhenExact,
    });

    const classNames = useMemo(() => {
      const classNames = `items-center text-blue-200 p-2 flex justify-start hover:bg-blue-800`;
      const active = 'bg-blue-400 hover:text-blue-100';

      return match ? `${active} ${classNames}` : classNames;
    }, [match]);

    return (
      <Link className={classNames} to={to}>
        {children}
      </Link>
    );
  },
);
