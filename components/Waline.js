/*
 * @Date: 2024-05-24 17:08:58
 * @Description: description
 */
'use client'

import React, { useEffect, useRef } from 'react';
import { init } from '@waline/client';

import '@waline/client/style';

const Waline = (props) => {
    const walineInstanceRef = useRef(null);
    const containerRef = React.createRef();

    useEffect(() => {
        walineInstanceRef.current = init({
          ...props,
          el: containerRef.current,
        });
    
        return () => walineInstanceRef.current?.destroy();
      }, []);
    
      useEffect(() => {
        walineInstanceRef.current?.update(props);
      }, [props]);
    
      return <div ref={containerRef} />;
}

export default Waline