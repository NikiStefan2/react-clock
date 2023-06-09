import React from 'react';
import styles from './styles.module.css';

const NavPanel = ({
    keyId,
    children
}: {
    keyId: string;
    children?: React.ReactNode;
}) => {
    return <div className={styles['nav-panel']}>{children}</div>;
};

export default NavPanel;
