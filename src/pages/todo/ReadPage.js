import React from "react";
import { useParams } from "react-router-dom";

function ReadPage() {

    const obj = useParams()

    console.log(obj) // 2번 출력 --> index.js -> React.StrictMode 여부 확인, 지우면 1번만 출력됨
    return <div className={"text-3xl"}>Todo Read Page</div>;
}

export default ReadPage;
