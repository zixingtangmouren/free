import styles from './App.module.less';
import ChatContent from './components/ChatContent';
import ChatList from './components/ChatList';

function App(): JSX.Element {
  return (
    <div className={styles['main-window']}>
      <ChatList />
      <ChatContent />
    </div>
  );
}

export default App;
