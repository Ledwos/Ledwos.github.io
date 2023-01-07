import React from 'react';
import './Career.css';

const CareerMap: React.FunctionComponent = () => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <svg
        className=''
        id='egrAJNhqY7U1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 1920 1080'
        shape-rendering='geometricPrecision'
        text-rendering='geometricPrecision'
        width={'auto'}
        height={'90vh'}
      >
        <path
          className='careerPath'
          d='M105.69278,959.35956c26.30423-15.78254,11.51306-96.81759,11.51306-124.34104c0-103.42701,23.3622-218.24586,145.06454-232.56379c68.74482-8.08763,171.97955,90.0373,204.93245,142.76193c15.81744,25.30791,25.75785,55.73948,46.05224,78.2888c76.39027,84.87808,197.5569,70.46152,297.03692,48.35485c34.07853-7.57301,81.22134-13.56411,108.22275-39.1444c31.39131-29.73914,54.92161-73.32553,71.38096-112.82798c60.48396-145.16151-107.67454-170.16558-172.69588-260.19513-65.60891-90.8431-68.38298-227.31567,48.35485-274.0108c51.04568-20.41827,268.88032-40.55833,308.54997-20.7235c53.87442,26.93721,107.02852,70.44753,145.06454,117.4332c29.26355,36.14909,41.54481,73.71497,64.47313,112.82798c53.2174,90.78263,122.13805,148.38245,223.35334,177.30111c70.60914,20.17404,110.96071-31.33815,145.06454-89.80186c22.70351-38.92031,36.54037-78.68657,52.96007-119.73581'
          transform='translate(0 0.000001)'
          fill='none'
          stroke='#3f5787'
          stroke-width='24'
          stroke-dasharray='50'
        />
        <ellipse
          className='careerPoint'
          rx='45.476582'
          ry='45.476582'
          transform='matrix(1.120251 0 0 1.120251 112.811062 991.596125)'
          fill='#d2dbed'
          stroke-width='0'
          data-careerPoint={'university'}
          onClick={(e: any) => console.log(e.target.dataset.careerPoint)}
        />
        <ellipse
          className='careerPoint'
          rx='45.476582'
          ry='45.476582'
          transform='matrix(1.120251 0 0 1.120251 595.241248 875.25509)'
          fill='#d2dbed'
          stroke-width='0'
          data-careerPoint={'futureproof'}
        />
        <ellipse
          className='careerPoint'
          rx='45.476582'
          ry='45.476582'
          transform='matrix(1.120251 0 0 1.120251 931.119952 553.2046)'
          fill='#d2dbed'
          stroke-width='0'
          data-careerPoint={'cognizant'}
        />
        <ellipse
          className='careerPoint'
          rx='45.476582'
          ry='45.476582'
          transform='matrix(1.120251 0 0 1.120251 1289.537831 251.431636)'
          fill='#d2dbed'
          stroke-width='0'
          data-careerPoint={'ubsconfluence'}
        />
        <g
          transform='matrix(-1.890788 0.342495-.356284-1.966912 2820.390899 393.741506)'
          className='careerNext'
        >
          <path
            d='M497.13678,79.76188c9.13802,22.84504,25.91034,48.93645,43.74962,66.77574'
            transform='translate(1.409662 0)'
            stroke='#ff0014'
            stroke-width='20'
          />
          <path
            d='M474.11066,141.93239c29.53308-4.92218,48.45702-20.82568,69.07835-41.44701'
            transform='matrix(.989678 0.143307-.143307 0.989678 29.460437-82.075432)'
            stroke='#ff0014'
            stroke-width='20'
          />
        </g>
      </svg>
    </div>
  );
};

export default CareerMap;
