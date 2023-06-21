import classNames from 'classnames/bind';
import styles from './NavFooter.module.scss';
import Wrapper from '../Wrapper';
import {
    FacebookIcon, TwitterIcon, LinkedIcon, InstagramIcon
} from '../ImagesItem';

const cx = classNames.bind(styles);

const NavFooter = () => {
    const imagesIcon = [FacebookIcon, TwitterIcon, LinkedIcon, InstagramIcon];

    return (
        <Wrapper className={cx('nav__footer')}>
            <div className={cx('nav__footer__desc')}>
                <h2>Lisa</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua
                </p>
                <div className={cx('nav__footer__item-icon')}>
                    {
                        imagesIcon.map((Icon, index) => <Icon key={index} />)
                    }
                </div>
            </div>
            <div className={cx('nav__footer__item')}>
                <h3>Catalog</h3>
                <ul>
                    <li>Necklaces</li>
                    <li>Hoodies</li>
                    <li>Jewelry Box</li>
                    <li>T-Shirt</li>
                    <li>Jacket</li>
                </ul>
            </div>
            <div className={cx('nav__footer__item')}>
                <h3>About Us</h3>
                <ul>
                    <li>Our Producer</li>
                    <li>Sitemap</li>
                    <li>FAQ</li>
                    <li>About Us</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className={cx('nav__footer__item')}>
                <h3>Customer services</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>Track Your Order</li>
                    <li>Product Care & Repair</li>
                    <li>Book An Appointment</li>
                    <li>Shipping & Returns</li>
                </ul>
            </div>
        </Wrapper>
    )
}

export default NavFooter;