import classNames from 'classnames/bind';
import styles from './FollowProducts.module.scss';
import Image from '../ImageComp';
import {
    FlPrd1, FlPrd2, FlPrd3, FlPrd4, FlPrd5, FlPrd6,
    Instagram
} from '../ImagesItem';
const cx = classNames.bind(styles);

const FollowProducts = () => {
    const followPrdsItem = [ FlPrd1, FlPrd2, FlPrd3, FlPrd4, FlPrd5, FlPrd6 ];
    return (
        <div className={cx('follow__products')}>
            <h1>Follow products and discounts on Instagram</h1>
            <div className={cx('follow__products__container')}>
                {
                    followPrdsItem.map(pd => (
                        <Image 
                            className={cx('follow__products__item')} 
                            src={pd} 
                            children={(
                                <div className={cx('follow__products__item-hover')}>
                                    <Instagram fill='#fff' width={50} />
                                </div>
                            )}
                        />
                    ))
                }
            </div>
            <div className={cx('follow__products__info')}>
                @Lisa.Official
            </div>
        </div>
    )
}

export default FollowProducts;