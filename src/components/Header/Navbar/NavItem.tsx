import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../assets/styles/Header/header.css';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  ariaLabel: string;
}

function NavItem({ to, icon, label, onClick, ariaLabel }: NavItemProps) {
  return (
    <Nav.Item>
      <Nav.Link as={Link} to={to} onClick={onClick} aria-label={ariaLabel}>
        {icon} {label}
      </Nav.Link>
    </Nav.Item>
  );
}

export default NavItem;
