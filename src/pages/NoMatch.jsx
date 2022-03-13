import { Link } from "react-router-dom";
import { URL } from "../constants/url";

function NoMatch () {
  return(
    <main>
    <h1>존재하지 않는 페이지입니다.</h1>
    <Link to={URL.HOME}>홈으로 돌아가기</Link>
    </main>
  )
}

export default NoMatch;