import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";

const Home = () => {
  return (
    <main className="main">
        <TabProvider>
            <Tab />
        </TabProvider>
    </main>
  );
};

export default Home;
