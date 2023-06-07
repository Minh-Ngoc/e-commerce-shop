import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from "../Button";
import { SearchIcon, Account, Cart, MenuIcon, CloseIcon } from '../ImagesItem';
import { useState } from "react";

const cx = classNames.bind(styles);

const Header = () => {
    const [modal, setModal] = useState(false)
    return (
        <Wrapper className={cx('header')}>
            <div className={cx('header__search')}>
                <Button border='none' icon={SearchIcon} />
            </div>

            <div className={cx('header__logo')}>
                Lisa Store
            </div>

            <div className={cx('header__btn__icon')}>
                <Button border='none' svg={<Account />} text='Account' />
                <Button border='none' svg={<Cart />} text='Shopping' />
            </div>

            <div className={cx('header__btn__menu')}>
                <Button 
                    onClick={() => setModal('active')}
                    border='none' 
                    src={MenuIcon} 
                />
                <div className={cx('header__btn__menu-active', modal)}>
                    <div className={cx('menu-active__icon')}>
                        <Button className={cx('menu-active__item')} bg='transparent' border='none' svg={<Account />} text='Account' />
                        <Button className={cx('menu-active__item')} bg='transparent' border='none' svg={<Cart />} text='Shopping' />
                    </div>
                    <Button 
                        className={cx('close__icon')} 
                        bg='transparent' border='none' 
                        svg={<CloseIcon />} 
                        onClick={() => setModal(false)}
                    />
                </div>
            </div>
        </Wrapper>
    )
}
export default Header;
