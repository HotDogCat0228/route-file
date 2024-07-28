import { Outlet,Link } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from "react";
import List from '../components/List'

const api = 'https://api.unsplash.com/search/photos';
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;
export default function AlbumLayout() {
    const [list, setList] = useState([]);
    // https://api.unsplash.com/search/collections?page=1&query=office
    useEffect(()=>{
        (async ()=>{
            const res = await axios.get(`${api}?client_id=${accessId}&query=animal`)
            // console.log(res);
            const {results} = res.data;
            setList(results);
        })()
    },
    []) 
    return (<div className="row">
    <div className="col-4">
        左側選單列表
        <Link to='search'>搜尋連結</Link>
        {/* {list.map(item => <li key={item.id}><Link to={item.id}>{item.id}</Link></li>)} */}
        <List list={list} />
    </div>
    <div className="col-8">
        <Outlet context={list}></Outlet>
    </div>
</div>)
}