import SideBar from "../components/sideBar";
import Blogs from "../components/blogs";
function Home() {
  return (
    <div className="flex flex-row">
      <SideBar />
      <section>
        <Blogs />
      </section>
    </div>
  );
}

export default Home;
