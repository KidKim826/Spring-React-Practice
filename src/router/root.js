// 라우터 설정 모음

// 기존 하기와 같이 해야하는데, 이러면 너무 오래걸리고 그럴 수 있어서 Code Spliting 필요
// import {createBrowserRouter} from "react-router-dom";
// import MainPage from "../pages/MainPage";

// const root = createBrowserRouter([
//     {
//         path : '',
//         element : <MainPage/>
//     }
// ])

// export default root 

import { Suspense, lazy } from 'react';
import todoRouter from './todoRouter';


// 리액트 라우터를 사용할 시 <a> 태그 사용 불가 대신 <link> 를 통해 이동

const { createBrowserRouter } = require("react-router-dom") ;


const Loading = <div className={'bg-red-700'}>Loading....</div> // loading 메시지를 먼저 출려깅 되는
// router 
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))


const root = createBrowserRouter([

    {
        path : "",
        element : <Suspense fallback= {Loading}><Main/></Suspense>
    },
    {
        path : "about", // path 설정 
        element : <Suspense fallback= {Loading}><About/></Suspense>
    },
    {
        path : "todo", // path 설정 
        element : <Suspense fallback= {Loading}><TodoIndex/></Suspense>,
        // children : [ // children 으로 하위 설정 
        //     {
        //         path : "list", // path 설정 
        //         element : <Suspense fallback= {Loading}><TodoList/></Suspense>
        //     }
        // ]
        children : todoRouter() // 함수로 뺄 수 있다. (너무 child 가 많은 경우 지저분 하니까)
    },
    

])

export default root;