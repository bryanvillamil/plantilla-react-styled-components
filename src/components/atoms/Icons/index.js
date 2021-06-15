import React from 'react';
import { PropTypes } from 'prop-types';

const Icons = props => {
  const { backgroundColor, iconName, width, height } = props;

  switch (iconName) {
    case 'close':
      return (
        // style="enable-background:new 0 0 512 512;"
        <svg height={height} width={width} version="1.1" viewBox="0 0 512 512">
          <path 
            d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"
            fill={backgroundColor}
          />
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
    case 'cart':
      return (
        <svg height={height} width={width} viewBox="0 0 32 32">
          <g data-name="Layer 61" id="Layer_61">
            <path 
              d="M10,20a1,1,0,0,1-1-.8L6.66,7.41A3,3,0,0,0,3.72,5H2A1,1,0,0,1,2,3H3.72a5,5,0,0,1,4.9,4L11,18.8A1,1,0,0,1,10.2,20Z"
              fill={backgroundColor} 
            />
            <path 
              d="M11,27H9.14a4.14,4.14,0,0,1-.38-8.26l18.41-1.67L28.78,9H8A1,1,0,0,1,8,7H30a1,1,0,0,1,.77.37A1,1,0,0,1,31,8.2l-2,10a1,1,0,0,1-.89.8L8.94,20.74A2.13,2.13,0,0,0,9.14,25H11a1,1,0,0,1,0,2Z"
              fill={backgroundColor} 
            />
            <path 
              d="M26,30a4,4,0,1,1,4-4A4,4,0,0,1,26,30Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,26,24Z"
              fill={backgroundColor} 
            />
            <path 
              d="M14,30a4,4,0,1,1,4-4A4,4,0,0,1,14,30Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,14,24Z"
              fill={backgroundColor} 
            />
            <path 
              d="M23,27H17a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"
              fill={backgroundColor} 
            />
          </g>
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