import React from 'react';
import loadercss from '../Assets/loader.Module.css';

export default function Loader() {
  return (
    <div className={loadercss.loaderContainer}>
      <div className={loadercss.fadingBars}>
        <div className={loadercss.bar}></div>
        <div className={loadercss.bar}></div>
        <div className={loadercss.bar}></div>
        <div className={loadercss.bar}></div>
        <div className={loadercss.bar}></div>
      </div>
    </div>
  );
}
