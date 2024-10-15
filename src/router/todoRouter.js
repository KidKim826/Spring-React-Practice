
import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Loading = <div className={'bg-red-700'}>Loading....</div> // loading 메시지를 먼저 출려깅 되는

const TodoList = lazy(() => import("../pages/todo/ListPage"))
const TodoRead = lazy(() => import("../pages/todo/ReadPage"))
const TodoAdd = lazy(() => import("../pages/todo/AddPage"))
const TodoModify = lazy(() => import("../pages/todo/ModifyPage"))
const todoRouter = () => {
    return [
        {
            path : "list", // path 설정 
            element : <Suspense fallback= {Loading}><TodoList/></Suspense>
        },
        {
            path : "", 
            element : <Navigate replace= {true} to={'list'}/>
        },
        {
            path : "read/:tno", 
            element :  <Suspense fallback= {Loading}><TodoRead/></Suspense>
        },
        {
            path : "add", 
            element :  <Suspense fallback= {Loading}><TodoAdd/></Suspense>
        },
        {
            path : "modify/:tno", 
            element :  <Suspense fallback= {Loading}><TodoModify/></Suspense>
        },
    ]
}

export default todoRouter