import Showcase from '../components/Showcase';
import ProfileCard from '../components/ProfileCard';
import IconsLinks from '../components/IconsLinks';
import IconsShare from '../components/IconsShare';
import Divider from '../components/Divider';
import About from '../components/About';
import RecommendsCarousel from '../components/RecommendsCarousel';

const HomeScreen = () => {
 return (
  <>
   <Showcase />
   <ProfileCard />
   <IconsLinks />
   <IconsShare />
   <Divider />
   <About />
   <Divider />
   <RecommendsCarousel />
  </>
 );
};

export default HomeScreen;
