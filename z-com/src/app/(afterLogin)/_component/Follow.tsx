'use client'
import style from './follow.module.css'

const user = {
    id: 'Elon Musk',
    image: 'imge',
    nickname: 'elonmusk',
};

const Follow = () => {

    const onFollow = () => {
        console.log('팔로우')
    }

    return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
          <div className={style.userLogo}>
              <img src={user.image} alt={user.id}/>
          </div>
      </div>
      <div className={style.userInfo}>
          <div className={style.title}>{user.nickname}</div>
          <div className={style.count}>@${user.id}</div>
      </div>
      <div className={style.followButton}>
          <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
};

export default Follow;
