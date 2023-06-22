import React from 'react'
import WorkItem from "./WorkItems"

const data = [{
    year: 2023,
    title: "Car transport",
    duration: "on going",
    details:
    "lorem ipsum"
},
{
    year: 2023,
    title: "LSS accommodation at Björkängen's kollo camp",
    duration: "1 years",
    details:
    "lorem ipsum"
},
{
    year: 2022,
    title: "Storesupport",
    duration: "2 years",
    details:
    "lorem ipsum"
},
{
    year: 2021,
    title: "Sports Director",
    duration: "1 years",
    details:
    "lorem ipsum"
},
]
const Work = () => {
  return (
    <div id="work" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
    {data.map((item, idx) =>(
        <WorkItem 
        key={idx} 
        year={item.year} 
        title= {item.title} 
        duration={item.duration} 
        details={item.details}
        />
    ))}
    </div>
  );
};

export default Work;
