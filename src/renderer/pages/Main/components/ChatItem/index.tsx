import Avatar from '@renderer/components/Avatar';
import styles from './styles.module.less';
function ChatItem() {
  return (
    <div className={styles['chat-item']}>
      <Avatar />
      <div className={styles['chat-item-content']}>
        <p className={styles['user-name']}>Lucas Williams</p>
        <p className={styles['user-msg']}>Hey, how is it going?</p>

        <span className={styles['chat-time']}>10:30 PM</span>
      </div>
    </div>
  );
}

export default ChatItem;
