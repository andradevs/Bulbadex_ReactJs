import React, { useState, useEffect } from "react";
import { RadarChart, Radar,PolarGrid,PolarAngleAxis,PolarRadiusAxis,Tooltip, ResponsiveContainer } from "recharts";

const PokeStats = (props) => {  
    const [screenWidth,setWidth] = useState(window.innerWidth);


    useState()
    return (
        <ResponsiveContainer width='50%' height={300}>
        <RadarChart outerRadius={70} data={props.data}>
            <PolarGrid stroke="#000000" />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 'auto']} stroke='#f00000' />
            <Radar name="Status Base" dataKey="A" stroke="#000000" fill="#3D7DCA" fillOpacity={0.9} />
            <Tooltip></Tooltip>
        </RadarChart>
        </ResponsiveContainer>
    )
}

export default PokeStats;