import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import Button from "../Button";
import { CartIconWhite, ImageSlider, ImageFlower, ImageFlower1 } from '../ImagesItem';
import Image from "../ImageComp";

const cx = classNames.bind(styles);

const Slider = () => {
    return (
        <Wrapper className={cx('slider')}>
            <div className={cx('slider__container')}>
                <div className={cx('slider__content')}>
                    <h4>Collections</h4>
                    <p>you can explore ans shop many differnt collection
                        from various barands here.
                    </p>
                    <Button border='none' src={CartIconWhite} text='Shop Now' />
                </div>
                <Image className={cx('slider__image')} src={ImageSlider} />
            </div>
            <div className={cx('sldier__svg')}>
                <ImageFlower1 className={cx('svg1')} aria-label="Website logo" />
                <ImageFlower className={cx('svg')} aria-label="Website logo" />
            </div>
        </Wrapper>
    )
}

export default Slider;