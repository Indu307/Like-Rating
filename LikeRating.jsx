import {useState} from "react";
import Like from "./Like";
const myStyle={
    backgroundColor:"black",
    color:"white",
    padding:"20px",
    margin:"20px",
    border:"2px solid Orange",
    width:"fix-content",
};
export default function LikeRating(){
    const [count,setCount]=useState(0);
    function updateCount(params){
        setCount(count+params);
    }
    return(
        <div style ={myStyle}>
            <div>Like:{count}</div>
            <Like updateCount={updateCount}/>
            <Like updateCount={updateCount}/>
            <Like updateCount={updateCount}/>
            <Like updateCount={updateCount}/>
            <Like updateCount={updateCount}/>
        </div>
    );
}
