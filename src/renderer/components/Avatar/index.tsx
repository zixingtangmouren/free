import classNames from 'classnames';
import styles from './styles.module.less';

interface AvatarProps {
  size?: number;
  className?: string;
  src?: string;
}

function Avatar({ size = 50, className = '', src = '' }: AvatarProps) {
  return (
    <div
      className={classNames(styles['avatar'], className)}
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
    >
      {src ? <img src={src} alt="" /> : null}
    </div>
  );
}

export default Avatar;
