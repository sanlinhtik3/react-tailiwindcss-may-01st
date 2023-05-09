import { useContext } from "react"
import { StudentContext } from "./App"

const Home = () => {
    return (
      <div className="">
        <h1>{useContext(StudentContext)} | Home.jsx</h1>
      </div>
    );
}

export default Home