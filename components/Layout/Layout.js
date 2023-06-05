import Header from "../Header";
import Footer from "../Footer";
import classNames from 'classnames/bind';
import styles from './Layout.module.scss';

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
    return (
        <main>
            <div className={cx('container')}>
                <Header />
                {children}
                <Footer />
            </div>
        </main>
    )
}

export default Layout;