import styles from './styles.module.less';
import AppIconSVG from '@renderer/assets/svg/app-icon.svg?react';
import AddFriendSVG from '@renderer/assets/svg/add-friend.svg?react';
import ChatItem from '../ChatItem';

function ChatList() {
  return (
    <div className={styles['chat-list']}>
      <div className={styles['friend-search']}>
        <div className={styles['friend-search-title']}>
          <AppIconSVG />
          <span>Free Chat</span>
        </div>

        <div className={styles['friend-search-input']}>
          <input type="text" placeholder="搜索好友名称、消息" />
          <AddFriendSVG className={styles['add-friend-icon']} />
        </div>
      </div>
      <div className={styles['chat-list-content']}>
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  );
}

export default ChatList;
