import React from 'react';
import { useSelector } from 'react-redux';
import ContentLoader from 'react-content-loader';

const Sceleton = (props) => (
  <ContentLoader
    speed={2}
    width={200}
    height={330}
    viewBox='0 0 200 330'
    backgroundColor='#dbdbdb'
    foregroundColor='#f7f7f7'
    {...props}
  >
    <rect x='2' y='66' rx='0' ry='0' width='200' height='200' />
    <rect x='50' y='22' rx='0' ry='0' width='100' height='21' />
    <rect x='0' y='286' rx='0' ry='0' width='200' height='21' />
  </ContentLoader>
);

const Sceletons = () => {
  const { perPage } = useSelector((state) => state.filter);

  return (
    <>
      {[...new Array(perPage)].map((_, ind) => (
        <Sceleton className='card' key={ind} />
      ))}
    </>
  );
};

export default Sceletons;
