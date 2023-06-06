import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Brands.module.scss';
import { Brand1, Brand2, Brand3, Brand4, Brand5, 
    CateIndex, CateItem1, CateItem2, CateItem3, CateItem4, 
    Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8, 
    FilterIcon,
} from '../ImagesItem';
import Image from "../ImageComp";
import Products from "../Products";

const cx = classNames.bind(styles);

const Brands = () => {
    const brandsItem = [ Brand1, Brand5, Brand3, Brand4, Brand2 ]
    const CatesItem = [
        {
            id: 1,
            image: CateIndex,
            cate: 'Manto',
            quantity: 86,
        },
        {
            id: 2,
            image: CateItem1,
            cate: 'Pant',
            quantity: 200,
        },
        {
            id: 3,
            image: CateItem2,
            cate: 'Coat',
            quantity: 520,
        },
        {
            id: 4,
            image: CateItem3,
            cate: 'Shirt',
            quantity: 320,
        },
        {
            id: 5,
            image: CateItem4,
            cate: 'Jacket',
            quantity: 103,
        },
    ];
    const productsItem = [
        {
            id: 1,
            name: 'Adicolor classics Joggers',
            cate: 'Dress',
            price: 63.85,
            sale: 0,
            image: Product1,
            hot: false,
        },
        {
            id: 2,
            name: 'Nike Sportswear Futura Luxe',
            cate: 'Bag',
            price: 130,
            sale: 0,
            image: Product2,
            hot: false,
        },
        {
            id: 3,
            name: 'Geometric print Scarf',
            cate: 'Scaf',
            price: 53,
            sale: 0,
            image: Product3,
            hot: false,
        },
        {
            id: 4,
            name: 'Yellow Reserved Hoodie',
            cate: 'Dress',
            price: 364,
            sale: 209,
            image: Product4,
            hot: false,
        },
        {
            id: 5,
            name: 'Basic Dress Green',
            cate: 'Dress',
            price: 236,
            sale: 0,
            image: Product5,
            hot: true,
        },
        {
            id: 6,
            name: 'Nike Air Zoom Pegasus',
            cate: 'Shoe',
            price: 220,
            sale: 22,
            image: Product6,
            hot: false,
        },
        {
            id: 7,
            name: 'Nike Repel Miler',
            cate: 'Dress',
            price: 120.5,
            sale: 0,
            image: Product7,
            hot: false,
        },
        {
            id: 8,
            name: 'Nike Sportswear Futura Luxe',
            cate: 'Glasses',
            price: 160,
            sale: 0,
            image: Product8,
            hot: false,
        },
    ]
    return (
        <Wrapper className={cx('brands')}>
            <div className={cx('brands__header')}>
            {
                brandsItem.map((brand, index) => 
                    <Image src={brand} alt='ErrorImage' key={index}/>
                )
            }
            </div>

            <div className={cx('brands__content')}>
                <div className={cx('brands__left')}>
                   <p> Explore new and popular styles</p>
                    <Image 
                        className={cx('brands__index')} 
                        src={ CatesItem[0].image } 
                        alt='ErrorImage' 
                        children={
                            <div className={cx('item__hover')}>
                                <p> {CatesItem[0].cate} </p>
                                <p> {CatesItem[0].quantity} Product </p>
                            </div>
                        }
                    />
                </div>
                
                <div className={cx('brands__right')}>
                    {
                        CatesItem.map(cate => 
                            cate.id != 1 && (
                                <Image 
                                    key={cate.id}
                                    className={cx('brands__right__item')} 
                                    src={cate.image} alt='ErrorImage' 
                                    width={312} 
                                    height={312} 
                                    children={ <>
                                            <div className={cx('item__hover')}>
                                                <p> {cate.cate} </p>
                                                <p> {cate.quantity} Product </p>
                                            </div>
                                            {
                                                cate.id === 3 && ( 
                                                    <span   
                                                        style={{backgroundColor: '#1e2832'}} 
                                                        className={cx('coupon')}
                                                    > 
                                                        Sale
                                                    </span> 
                                                )
                                            }
                                        </>
                                    }
                                />
                            )
                        )
                    }
                </div>
            </div>

            <Products 
                title='Or Subscribe To The Newsletter' 
                data={productsItem}
                filterIcon={ <FilterIcon/> }
                filterText='Filter'
            />    

        </Wrapper>
    )
}

export default Brands;