import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Card from "../Card";
import Button from '../Button';
import Slider from "react-slick";

const cx = classNames.bind(styles);

const Products = ({ title, data, filterIcon, filterText, slider, ...props }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div className={cx('products')}>
            <h1> { title } </h1>
            <div className={cx('products__content')}>
                <div className={cx('products__nav')}>
                        <span className={cx('active')}>All Products</span>
                        <span>T-Shirt</span>
                        <span>Hoodies</span>
                        <span>Jacket</span>
                    </div>
                <Button 
                    className={cx('product__btn')} 
                    svg={filterIcon}
                    text={filterText}
                />
            </div>  
            <div>
                {
                    slider ? (
                        <Slider {...settings}>
                        {
                            data.map(product => 
                                ( <Card product={product} key={product.id}/> )
                            )
                        }
                        </Slider>
                    ) : (
                        <div className={cx('products__container')}>
                            {
                                data.map(product => 
                                    ( <Card product={product} key={product.id}/> )
                                )
                            }
                        </div>
                    )
                    
                }
            </div>
        </div>    
    )
}

export default Products;