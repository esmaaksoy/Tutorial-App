import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
const Home =  () => {
  const getTutorials= async()=>{
await axios()
  }
  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
