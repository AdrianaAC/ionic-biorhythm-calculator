import React from "react";
import dayjs from "dayjs";
import { LineChart, ResponsiveContainer, Line, XAxis, ReferenceLine, CartesianGrid } from "recharts";
import { calculateBiorhythmsSeries } from "../calculations";

function formatDate(isoString) {
    return dayjs(isoString).format("D MMM");
}


function BiorhythmChart({ birthDate, targetDate }) {
  const startDate = dayjs(targetDate).subtract(15, "days").toISOString();
  const data = calculateBiorhythmsSeries(birthDate, startDate, 31)
  .map((item) => ({...item, date: formatDate(item.date)}));
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="date" 
        ticks={[data[2].date, data[15].date, data[28].date]}/>
        <CartesianGrid vertical={false} strokeDasharray="3 3"/>
        <ReferenceLine x={data[15].date}/>
        <Line type="natural" dot={false} dataKey="physical" stroke="blue" />
        <Line type="natural" dot={false} dataKey="emotional" stroke="green" />
        <Line type="natural" dot={false} dataKey="intellectual" stroke="yellow" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default BiorhythmChart;
