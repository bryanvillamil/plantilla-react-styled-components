import React from 'react';
import { PropTypes } from 'prop-types';

const Icons = props => {
  const { backgroundColor, iconName, width, height } = props;

  switch (iconName) {
    case 'close':
      return (
        <svg viewBox="0 0 32 32" height={height} width={width}>          
          <g id="cross">
            <line className="cls-1" x1="8" x2="25" y1="7" y2="25" stroke={backgroundColor} />
            <line className="cls-1" x1="8" x2="25" y1="25" y2="7" stroke={backgroundColor} />
          </g>
        </svg>
      );  
    case 'arrow-down':
      return (
        <svg height={height} width={width} viewBox="0 0 48 48">
          <path 
            d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"
            fill={backgroundColor}
          />
          <path 
            d="M0-.75h48v48h-48z" fill="none"
          />
        </svg>
      );  
    case 'arrow':
      return (
        <svg height={height} width={width} viewBox="0 0 64 64">
          <g transform="translate(-4005 -2662)">
            <g transform="translate(4005 2662)">
              <path
                d="M67.23,28.077c-7-.22-10.007,1.19-15.024,3.814C47.376,34.419,44.751,35.98,41.558,40a2.1,2.1,0,0,1-.335-.106c-.166-.07-.4-.434-1.156.51S34.7,49.813,33.831,53.914s-.346,9.269,1.557,15.5,2.156,9.675,8.3,15.476c2.735,2.889,6.063,3.839,9.2,4.936.4.14.715.864,1.2,1.02,2.5.813,7.875,1.206,11.512,1.206,8.658,0,17.449-2.444,22.985-8.022S97.1,69.748,97.4,58.589c.283-10.322-2.184-15-7.526-20-.381-.357-.83-1.753-1.3-2.148A36.106,36.106,0,0,0,67.23,28.077Z"
                transform="translate(-33.425 -28.054)" 
                fill={backgroundColor}
              />
              <g transform="translate(16 16)">
                <rect width="32" height="32" fill="none"/>
                <path
                  d="M190,12.382l-13.093,8.951-2.687-4.476,10.5-6.266L174,3.9,176.345,0,189.9,7.736h.1Z" 
                  transform="translate(-165.999 5.333)" 
                  fill="#fff"
                />
              </g>
            </g>
          </g>
        </svg>
      );
    default:
      break;
  }
};

Icons.protoTypes = {
  iconName: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.string || PropTypes.number,
  height: PropTypes.string || PropTypes.number,
};

Icons.defaultProps = {
  iconName: '',
  backgroundColor: '#000',
  width: 20,
  height: 20,
};

export default Icons;