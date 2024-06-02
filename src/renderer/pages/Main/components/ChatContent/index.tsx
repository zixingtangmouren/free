import styles from './styles.module.less';
import ChatWindowHeader from '../ChatWindowHeader';
import ChatSend from '../ChatSend';
import MessageScroller from '../MessageScroller';

function ChatContent() {
  return (
    <div className={styles['chat-content']}>
      <ChatWindowHeader />
      <MessageScroller />
      <ChatSend />
    </div>
  );
}

export default ChatContent;
