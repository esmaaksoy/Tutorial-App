import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
const Home = () => {
  const getTutorials = async () => {
    const url = "https://tutorial-api.fullstack.clarusway.com/tutorials"
    const res = await axios(url);
  };
  getTutorials()
  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
