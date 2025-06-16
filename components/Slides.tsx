import React from 'react';
import SliderCard from './SliderCard';
import { Data } from './SliderPage';

type Props = {
  data: Data[];
};

function Slides({ data }: Props) {
  return (
    <div className=" flex w-full gap-6">
      {data.map((data) => {
        console.log('Rendering key:', data.id);
        return <SliderCard key={data.id} data={data} />;
      })}
    </div>
  );
}

export default Slides;
