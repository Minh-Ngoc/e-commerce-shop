import classNames from 'classnames/bind';
import styles from './Collections.module.scss';
import Slider from "../Slider";
import Brands from "../Brands";
const cx = classNames.bind(styles);

const Collections = () => {
    return (
        <div className={cx('collections')}>
            <Slider />        
            <Brands />        
        </div>
    )
}

export default Collections;