import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Post from "@/app/(afterLogin)/_component/post/Post";

const Home = () => {
  return (
    <main className="main">
        <TabProvider>
            <Tab />
            <PostForm />
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </TabProvider>
    </main>
  );
};

export default Home;
