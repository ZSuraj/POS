import React, { useState } from "react";
import './Alert.css'
import icon from '../../Media/tick_icon.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export const Alert = ({close}) => {
    return (
      <div
        className="alert-container">
        <div
          className="symbol-container"
        >
          <img src={icon} class="material-symbols-outlined symbol" />
        </div>
        <div className="description-container">
          <span className="description-text">Cash Paid</span>
        </div>
        <a className="symbol-close-link">
          <FontAwesomeIcon icon={faX} className='x-symbol' onClick={() => {close()}}/>
        </a>
      </div>
    );
};