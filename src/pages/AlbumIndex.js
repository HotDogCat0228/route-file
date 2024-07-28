import { useOutletContext } from "react-router-dom"
import List from "../components/List";
export default function AlbumIndex(){
    const list = useOutletContext();
    console.log(list);
    return (
    <div>
        這是相簿首頁內容
        <List list={list} />
    </div>
    )
}