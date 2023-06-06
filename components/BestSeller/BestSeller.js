import classNames from 'classnames/bind';
import styles from './BestSeller.module.scss';
import Products from '../Products';
import { Product2, Product4, Product5, Product6, Product7, Product8, 
} from '../ImagesItem';
import FollowProducts from "@/components/FollowProducts";

const cx = classNames.bind(styles);

const BestSeller = () => {
    const BestSellersItem = [
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
            id: 2,
            name: 'Nike Sportswear Futura Luxe',
            cate: 'Bag',
            price: 130,
            sale: 0,
            image: Product2,
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
        <div className={cx('best__sellers')}>
            <Products 
                slider
                title='Best Sellers'
                data={BestSellersItem}
                filterText='Show All'
            />
            <FollowProducts />
        </div>
    )
}

export default BestSeller;
