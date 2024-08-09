'use client'

import style from './logoutButton.module.css'

const me = {
    id: 'jihwan',
    nickname: '지환',
    image: '/5Udwvqim.jpg'
}

const LogoutButton = () => {

    const onLogout = () => {
    }

    return (
        <button className={style.logOutButton} onClick={onLogout}>
            <div className={style.logOutUserImage}>
                <img src={me.image} alt={me.id}/>
            </div>
            <div className={style.logOutUserName}>
                <div>{me.nickname}</div>
                <div>@{me.id}</div>
            </div>
        </button>
    );
};

export default LogoutButton;
