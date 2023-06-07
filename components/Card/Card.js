import { Heart, Search, Cart } from '../ImagesItem';
import Button from "../Button";
import Image from "../ImageComp";
import classNames from 'classnames/bind';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

const Card = ({ product, className }) => {
    return (
        <div className={cx('card__item', className)}>
            <Image 
                className={cx('product__image')}
                src={product.image} 
                alt='ErrorProduct' 
                children={(
                    <div className={cx('item__hover')}>
                        <div className={cx('item__icon-group')}>
                            <Heart />
                            <Search />
                        </div>
                        <Button 
                            svg={<Cart />} 
                            text='Shop Now' 
                            bg='transparent !important'
                            color='#fff'
                            border='none'
                        />
                    </div>
            )}/>
            <p> {product.name} </p>
            <div className={cx('card__item-group')}>
                <span> {product.cate} </span>
                {
                    product.sale > 0 ? (
                        <div className={cx('card__item-sale')}>
                            <span> ${product.price.toFixed(2)} </span>
                            <p> ${(product.price - product.sale).toFixed(2)} </p>
                        </div> 
                    ) : (
                        <p> ${product.price.toFixed(2)} </p>
                    )
                }
            </div>

            {
                product.hot ? (
                    <span 
                        style={{backgroundColor: '#ff6f61'}} 
                        className={cx('coupon')}
                    > 
                        Hot
                    </span>
                ) : product.sale > 0  ? (
                    <span 
                        style={{backgroundColor: '#1e2832'}} 
                        className={cx('coupon')}
                    > 
                        Sale
                    </span>
                ) : ''
            }
            
        </div>
    )
}

export default Card;