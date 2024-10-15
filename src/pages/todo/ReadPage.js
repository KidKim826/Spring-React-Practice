import React from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

function ReadPage() {

    const navigate = useNavigate()
    const { tno } = useParams()

    const [queryParams] = useSearchParams()

    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1
    const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10

    // navigate 시 query string 활용. (쿼리 파람이 유지되도록 만들 수 있다.)
    const queryStr = createSearchParams({page, size}).toString()

    console.log(tno); // 2번 출력 --> index.js -> React.StrictMode 여부 확인, 지우면 1번만 출력됨
    
    const moveToModify = () => {
        navigate({
            pathname: `/todo/modify/${tno}`
            , search : queryStr
        })
    }
    
    const moveToList = () => {
        navigate({
            pathname: `/todo/list`
            , search : queryStr
        })
    }

    return (
        <div className={"text-3xl"}>
            Todo Read Page {tno}
            
            <div>
                {/* 파라미터가 있는 경우 아래와 같이 */}
                <button onClick={() => moveToModify(tno)}> 
                    Test Modify
                </button>
                {/* 
                    파라미터가 없는 경우 그냥 객체로 지정해도 무방 
                    Query String 을 이용해서 쿼리파람이 유지된 상태로 List 화면으로 이동되는 것이 포인트
                */}
                <button onClick={moveToList}>
                    Test List
                </button>
            </div>
        </div>
    );
}

export default ReadPage;
