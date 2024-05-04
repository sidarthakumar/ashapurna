import Carousels from "./HomeComponents/Carousels/Carousels";
import HomeContact from "./HomeComponents/HomeContact/HomeContact";
import CopyRightFooter from "./common/footer/copyrightFooter/CopyRightFooter";
import Header from "./common/header/Header";
let Home = () => {
  return (
    <>
      <Header />
      <Carousels />
      <HomeContact />
      <CopyRightFooter />
    </>
  );
};
export default Home;
 