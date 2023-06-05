// import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Button } from 'antd';
import Image from "next/image";

const cx = classNames.bind(styles);

const ButtonComp = ({ svg, src, text, icon, border, bg, color }) => {
    const style = {
        border: border && border,
        backgroundColor: bg && bg,
        color: color && color,
    }
    return (
        <Button 
            style={style}
            className={cx('button')} 
            icon={ 
                icon && ( <Image src={icon} alt="ErrorIcon" /> )
            }
        >
            {src && ( <Image src={src} alt="ErrorIcon" /> )}
            { svg && svg }
            { text && text }
        </Button>
    )
}

export default ButtonComp;
