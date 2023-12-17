import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [tutorials, setTutorials] = useState([])
  const getTutorials = async () => {
    const url = "https://tutorial-api.fullstack.clarusway.com/tutorials"
    const res = await axios(url);
    setTutorials(res.data);
  };
  useEffect(()=>{
  getTutorials()
  }, [])

  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
