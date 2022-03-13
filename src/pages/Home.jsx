import { Link } from "react-router-dom";
import { URL } from "../constants/url";

function Home () {
  return(
    <main>
      <h1>페이지 목록</h1>
      <ul>
        <li><Link to={URL.CHECKBOX}>Checkbox</Link></li>
      </ul>
    </main>
  )
}

export default Home;