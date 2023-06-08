import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Card from "../Card";
import Button from '../Button';
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from '../ImagesItem';

const cx = classNames.bind(styles);

const Products = ({ title, data, filterIcon, filterText, slider, ...props }) => {
    const Arrows = ({className, left, icon, onClick}) => {
        return (
          <Button
            left={left}
            className={className}
            onClick={onClick}
            svg={icon}
          />
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        prevArrow: <Arrows className={cx('slick__arrow')} left='-5rem' icon={<ArrowLeft />} />,
        nextArrow: <Arrows className={cx('slick__arrow')} icon={<ArrowRight />} />,
        responsive: [
            {
              breakpoint: 414,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 896,
              settings: {
                slidesToShow: 2,
              },
            },
            {
                breakpoint: 820,
                settings: {
                  slidesToShow: 2,
                },
            },
        ],
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
                <div className={cx('product__btn')} >
                    <Button 
                        svg={filterIcon}
                        text={filterText}
                    />
                </div>
            </div>  
                {
                    slider ? (
                        <div className={cx('product__slider')}>
                            <Slider {...settings}>
                            {
                                data.map(product => 
                                    ( <Card product={product} key={product.id}/> )
                                )
                            }
                            </Slider>
                        </div>
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
    )
}

export default Products;