import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from "../Button";
import { SearchIcon, Account, Cart } from '../ImagesItem';

const cx = classNames.bind(styles);

const Header = () => {
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
        </Wrapper>
    )
}
export default Header;
