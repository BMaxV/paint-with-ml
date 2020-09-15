import React from 'react';
import { Component } from 'react';


class TweetButton extends Component {
    render() {
        return <a className="output-button" href="https://twitter.com/intent/tweet?text=Check%20out%20this%20cool%20landscape%20painting%20I%20made%20using%20a%20GAN%20model%20trained%20on%20@spellml&url=http://paintwith.spell.ml/" target="_blank">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.94737 11.9454C3.71368 11.9454 4.40674 11.6439 4.93221 11.1623L10.2038 14.1745C10.1414 14.4089 10.1083 14.6502 10.1053 14.8928C10.1053 16.518 11.4274 17.8402 13.0526 17.8402C14.6779 17.8402 16 16.518 16 14.8928C16 13.2675 14.6779 11.9454 13.0526 11.9454C12.2863 11.9454 11.5933 12.2469 11.0678 12.7286L5.79621 9.71636C5.84926 9.50836 5.88295 9.29363 5.88716 9.06963L11.0669 6.10963C11.5933 6.59131 12.2863 6.89278 13.0526 6.89278C14.6779 6.89278 16 5.57068 16 3.94542C16 2.32015 14.6779 0.998047 13.0526 0.998047C11.4274 0.998047 10.1053 2.32015 10.1053 3.94542C10.1053 4.19468 10.1457 4.43215 10.2038 4.66373L5.41726 7.39973C5.15094 6.98653 4.78539 6.6466 4.35396 6.41096C3.92253 6.17531 3.43896 6.05145 2.94737 6.05068C1.32211 6.05068 0 7.37278 0 8.99805C0 10.6233 1.32211 11.9454 2.94737 11.9454ZM13.0526 13.6296C13.7491 13.6296 14.3158 14.1964 14.3158 14.8928C14.3158 15.5892 13.7491 16.1559 13.0526 16.1559C12.3562 16.1559 11.7895 15.5892 11.7895 14.8928C11.7895 14.1964 12.3562 13.6296 13.0526 13.6296ZM13.0526 2.68226C13.7491 2.68226 14.3158 3.24899 14.3158 3.94542C14.3158 4.64184 13.7491 5.20857 13.0526 5.20857C12.3562 5.20857 11.7895 4.64184 11.7895 3.94542C11.7895 3.24899 12.3562 2.68226 13.0526 2.68226ZM2.94737 7.73489C3.64379 7.73489 4.21053 8.30163 4.21053 8.99805C4.21053 9.69447 3.64379 10.2612 2.94737 10.2612C2.25095 10.2612 1.68421 9.69447 1.68421 8.99805C1.68421 8.30163 2.25095 7.73489 2.94737 7.73489Z" fill="white"/>
            </svg>
        </a>;
    }
}

export default TweetButton;