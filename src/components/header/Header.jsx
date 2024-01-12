import React from 'react';
import Button from '../button/Button';
import { useTelegram } from '../hooks/useTelegram';

const Header1 = () => {
    const {user, onClose} = useTelegram()
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
            
        </div>
    );
};

export default Header1;