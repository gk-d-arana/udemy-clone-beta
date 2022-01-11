import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRouteMatch } from 'react-router'
import TransComp from './TransComp'
import { URL_ROOT }  from '../../utils/js'


const CheckTrans = () => {
    const [transes, setTranses] = useState([])
    const [page, setPage]= useState(1)
    const [count, setCount]= useState(1)
    const { path } = useRouteMatch()
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        console.log()
        axios({
            method: "GET",
            url : `${URL_ROOT}/transes/?page=` + page
          }).then(res=>{
            setTranses(res.data.results)
            setCount(Math.ceil(res.data.count/10))
            //setPage(res.data.next ?parseInt( res.data.next.split('?')[1].split('=')[1]) : 1)
          }).catch(err=>console.log(err))
    },[page])
    return (
        <div>
            <TransComp setTranses={setTranses} transes={transes}/>
        </div>
    )
}

export default CheckTrans
