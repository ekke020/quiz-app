import styles from '../css/loadingScreen.module.css';

const LoadingScreen = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div style={style}>
      <svg className={styles.graphic}>
        <circle className={styles.circle} cx={70} cy={70} r={70}></circle>
      </svg>
    </div>
  );
};

export default LoadingScreen;
