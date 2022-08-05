import PropTypes from 'prop-types';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function HeaderMenu({ title, onBack }) {
    return (
        <div className={cx('header-menu')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </div>
    );
}

HeaderMenu.propTypes = {
    title: PropTypes.string,
    onBack: PropTypes.func,
};

export default HeaderMenu;
