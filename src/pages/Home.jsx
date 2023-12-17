import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [tutorials, setTutorials] = useState([])
  const getTutorials = async () => {
  
    const res = await axios(process.env.url);
    setTutorials(res.data);
  };
  useEffect(()=>{
  getTutorials()
  }, [])

  return (
    <>
      <AddTutorial getTutorials={getTutorials}/>
      <TutorialList tutorials={tutorials}/>
    </>
  );
};

export default Home;
