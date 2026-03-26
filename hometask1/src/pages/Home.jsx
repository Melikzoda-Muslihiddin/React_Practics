import SwiperOne from "../components/swipers/SwiperOne";
import SwiperTwo from "../components/swipers/SwiperTwo";
import SwiperThree from "../components/swipers/SwiperThree";
import { users } from "../data/users";

const Home = () => {
  
  return (
    <div>
      <SwiperOne data={users} />
      <SwiperTwo data={users} />
      <SwiperThree data={users} />
    </div>
  );
};

export default Home;