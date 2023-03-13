import React, { useState } from "react";
import Job from "./Job";
import JobData from "./JobData";

const JobCards = (props) => {
  const [items] = useState(JobData);

  return (
    <div className="flex items-center justify-center flex-wrap gap-7 py-12">
      {items.map((item) => {
        return <Job key={item.id} item={item} />;
      })}
    </div>
  );
};

export default JobCards;
