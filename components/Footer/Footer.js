import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FooterImage, ArrowIcon } from '../ImagesItem';
import Image from "../ImageComp";
import Button from "../Button";

const cx = classNames.bind(styles);
const Footer = () => {
    return (
        <Wrapper className={cx('footer')}>
            <div className={cx('footer__item')}>
                &#169; 2023 LISA, Inc.
            </div>
            <div className={cx('footer__item')}>
                <Image src={FooterImage} />
            </div>
            <div className={cx('footer__item')}>
                <Button text='Scroll to top' svg={<ArrowIcon />} />
            </div>
        </Wrapper>
    )
}

export default Footer;
