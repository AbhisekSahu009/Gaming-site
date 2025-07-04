import React, { useEffect, useRef } from 'react';
import CursorGlowCss from './../Cursorglow/Cursorglow.module.css'

const CursorGlow = () => {
    const glowRef = useRef(null);

    useEffect(() => {
        const moveGlow = (e) => {
            if (glowRef.current) {
                glowRef.current.style.left = `${e.clientX}px`;
                glowRef.current.style.top = `${e.clientY}px`;
            }
        };

        document.addEventListener('mousemove', moveGlow);
        return () => document.removeEventListener('mousemove', moveGlow);
    }, []);

    return <div className={CursorGlowCss.cursorGlow} ref={glowRef}></div>;

};


export default CursorGlow;