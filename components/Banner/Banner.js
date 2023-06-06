import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import Image from '../ImageComp';
import { BannerBg, BannerLogo, BannerLogo2 } from '../ImagesItem';
import Button from '../Button';
const cx = classNames.bind(styles);

const Banners = () => {
    return (
        <div className={cx('banner')}>
            <Image className={cx('banner__background')} src={BannerBg} />
            <Image className={cx('banner__logo')} src={BannerLogo2} />
            
            <div className={cx('banner__content')}>
                <Image className={cx('banner__content__logo')} src={BannerLogo} />
                <div className={cx('banner__content__desc')}>
                    Lustrous yet understated. The new evening
                    wear collection exclusively offered at the
                    reopened Giorgio Armani boutique in Los
                    Angeles.
                </div>
                <Button 
                    className={cx('banner__content__btn')}
                    text='See Collection'
                />
            </div>

        </div>
    )
}
export default Banners;
