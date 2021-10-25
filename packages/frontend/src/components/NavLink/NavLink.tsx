import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';

type NavLinkProps = {
  to: string;
  activeOnlyWhenExact?: boolean;
};

export const NavLink: React.FC<NavLinkProps> = ({ children, to, activeOnlyWhenExact = false }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({
    path: resolved.pathname,
    end: activeOnlyWhenExact,
  });

  const classNames = useMemo(() => {
    const classNames = 'items-center text-blue-100 p-2 flex justify-start hover:bg-blue-800';
    const active = 'bg-blue-400 text-green-100';

    return match ? active + ' ' + classNames : classNames;
  }, [match]);

  return (
    <Link className={classNames} to={to}>
      {children}
    </Link>
  );
};
