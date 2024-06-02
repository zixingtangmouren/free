import Avatar from '@renderer/components/Avatar';
import styles from './styles.module.less';

function ChatWindowHeader() {
  return (
    <div className={styles['chat-window-header']}>
      <Avatar />
      <div className={styles['friend-info']}>
        <p className={styles['friend-name']}>Grace Miller</p>
        <p className={styles['friend-status']}>online</p>
      </div>
    </div>
  );
}

export default ChatWindowHeader;
