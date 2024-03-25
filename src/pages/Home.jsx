import { useLoaderData } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";
import HomeBooks from "../components/HomeBooks";

const Home = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <div>
      <HomeBanner />
      <h2 className="mt-16 mb-10 text-center text-5xl font-bold">Books</h2>
      <HomeBooks data={data} />
    </div>
  );
};

export default Home;
