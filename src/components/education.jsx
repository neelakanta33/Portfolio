import { useEffect, useState } from 'react';
import '../styles/education.css'

const Education = () => {
 let [data,setData]=useState([])   

 useEffect(()=>{
    let fecthData=async()=>{
     let resp=await fetch('http://localhost:3005/education')
     let data=await resp.json()
     setData(data)
    }
    fecthData()
 },[])

    return ( 
        <section className="education">
<div className="educationb1">
<div className="educationb2">
<div className="edu">
<h1 style={{textAlign:"center"}}>My Education</h1>

</div>
<div className="edu1">
{data.map((x)=>(
    <div className="edu2">
<div className="duration">
<h1>{x.duration}</h1>
</div><div className="stream">
<p>{x.stream}</p>
</div>
<div className="institute">
<p>{x.Institution_name}</p>
</div>
<div className="percentage">
<p>{x.percentage}</p>
</div>
    </div>
))}
</div>
</div>
</div>

        </section>
     );
}
 
export default Education;