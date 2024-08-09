import Follow from "@/app/(afterLogin)/_component/Follow";
import style from "./followRecommend.module.css"

const FollowRecommend = () => {
  return (
    <div className={style.followBg}>
        <div className={style.follow}>
            <h3>팔로우 추천</h3>
            <Follow/>
        </div>
    </div>
  );
};

export default FollowRecommend;
