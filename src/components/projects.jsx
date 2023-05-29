import { useEffect, useState } from 'react'
import '../styles/projects.css'

const Projects = () => {
  let [data,setData]=useState([])   

 useEffect(()=>{
    let fecthData=async()=>{
     let resp=await fetch('http://localhost:3005/projects')
     let data=await resp.json()
     setData(data)
    }
    fecthData()
 },[])
    return ( 
        <section className="projects">
<div className="projectsb1">
<div className="projectsb2">
<div className="projectstxt1">
<h1 style={{textAlign:"center"}}>Projects</h1>

</div>
<div className="projectstxt2">
<div className="projects">
{data.map((x)=>(
  <div className="projectsb3">
<div className="imagep">
<img src={x.image} alt="" />
</div>
<div className="titlep">
  <h3>{x.title}</h3>
</div>
<div className="descp">
  <p>{x.description}</p>
</div>

  </div>

))}
</div>
</div>


</div>


</div>      
  </section>
     );
}
 
export default Projects;