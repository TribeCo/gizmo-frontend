import React from 'react';
import { Box } from '@mui/material';

const LevelofOrdering = ({ level }) => {
    // Function to render the correct SVG based on the level
    const renderSvgForLevel = () => {
        switch (level) {
            case 1:
                return (
                    <svg width="680" height="200" viewBox="-50 0 740 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M639.333 42C639.333 30.2179 629.782 20.6667 618 20.6667C606.218 20.6667 596.667 30.2179 596.667 42C596.667 53.7821 606.218 63.3333 618 63.3333C629.782 63.3333 639.333 53.7821 639.333 42ZM618 38L440 38L440 46L618 46L618 38Z" fill="#22668D" />
                        <path d="M625 37L615 47L610 42" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M440.333 42C440.333 30.2179 430.782 20.6667 419 20.6667C407.218 20.6667 397.667 30.2179 397.667 42C397.667 53.7821 407.218 63.3333 419 63.3333C430.782 63.3333 440.333 53.7821 440.333 42ZM419 38L241 38L241 46L419 46L419 38Z" fill="#FFCC70" fill-opacity="0.42" />
                        <path d="M241.333 42C241.333 30.2179 231.782 20.6667 220 20.6667C208.218 20.6667 198.667 30.2179 198.667 42C198.667 53.7821 208.218 63.3333 220 63.3333C231.782 63.3333 241.333 53.7821 241.333 42ZM43.3333 42C43.3333 30.2179 33.7821 20.6667 22 20.6667C10.2179 20.6667 0.666672 30.2179 0.666672 42C0.666671 53.7821 10.2179 63.3333 22 63.3333C33.7821 63.3333 43.3333 53.7821 43.3333 42ZM220 38L22 38L22 46L220 46L220 38Z" fill="#FFCC70" fill-opacity="0.42" />
                        <rect x="213.5" y="34.5" width="15" height="15" rx="4.5" stroke="#747678" />
                        <rect x="411.5" y="34.5" width="15" height="15" rx="4.5" stroke="#747678" />
                        <rect x="15.5" y="34.5" width="15" height="15" rx="4.5" stroke="#747678" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/FirstLevel.png" x="580" y="-60" width="70" height="70" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/SecondLevel.png" x="380" y="-60" width="70" height="70" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/ThirdLevel.png" x="180" y="-60" width="70" height="70" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/FourthLevel.png" x="-20" y="-60" width="70" height="70" />
                    </svg>
                );
            case 2:
                return (
                    <svg width="680" height="200" viewBox="-50 -20 740 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M639.333 22C639.333 10.2179 629.782 0.666667 618 0.666666C606.218 0.666665 596.667 10.2179 596.667 22C596.667 33.7821 606.218 43.3333 618 43.3333C629.782 43.3333 639.333 33.7821 639.333 22ZM618 18L440 18L440 26L618 26L618 18Z" fill="#22668D" />
                        <path d="M625 17L615 27L610 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M440.333 22C440.333 10.2179 430.782 0.666667 419 0.666666C407.218 0.666665 397.667 10.2179 397.667 22C397.667 33.7821 407.218 43.3333 419 43.3333C430.782 43.3333 440.333 33.7821 440.333 22ZM419 18L241 18L241 26L419 26L419 18Z" fill="#22668D" />
                        <path d="M427 17L417 27L412 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M241.333 22C241.333 10.2179 231.782 0.666667 220 0.666666C208.218 0.666665 198.667 10.2179 198.667 22C198.667 33.7821 208.218 43.3333 220 43.3333C231.782 43.3333 241.333 33.7821 241.333 22ZM43.3333 22C43.3333 10.2179 33.7821 0.66665 22 0.666649C10.2179 0.666648 0.666673 10.2179 0.666672 22C0.666671 33.7821 10.2179 43.3333 22 43.3333C33.7821 43.3333 43.3333 33.7821 43.3333 22ZM220 18L22 18L22 26L220 26L220 18Z" fill="#FFCC70" fill-opacity="0.42" />
                        <rect x="213.5" y="14.5" width="15" height="15" rx="4.5" stroke="#747678" />
                        <rect x="15.5" y="14.5" width="15" height="15" rx="4.5" stroke="#747678" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/FirstLevel.png" x="580" y="-80" width="70" height="70" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/SecondLevel.png" x="380" y="-80" width="70" height="70" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/ThirdLevel.png" x="180" y="-80" width="70" height="70" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/FourthLevel.png" x="-20" y="-80" width="70" height="70" />
                    </svg>
                );
            case 3:
                return (
                    <svg width="680" height="200" viewBox="-50 -20 740 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M639.333 22C639.333 10.2179 629.782 0.666667 618 0.666666C606.218 0.666665 596.667 10.2179 596.667 22C596.667 33.7821 606.218 43.3333 618 43.3333C629.782 43.3333 639.333 33.7821 639.333 22ZM618 18L440 18L440 26L618 26L618 18Z" fill="#22668D" />
                        <path d="M625 17L615 27L610 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M440.333 22C440.333 10.2179 430.782 0.666667 419 0.666666C407.218 0.666665 397.667 10.2179 397.667 22C397.667 33.7821 407.218 43.3333 419 43.3333C430.782 43.3333 440.333 33.7821 440.333 22ZM419 18L241 18L241 26L419 26L419 18Z" fill="#22668D" />
                        <path d="M427 17L417 27L412 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M43.3333 22C43.3333 10.2179 33.7821 0.66665 22 0.666649C10.2179 0.666648 0.666673 10.2179 0.666672 22C0.666671 33.7821 10.2179 43.3333 22 43.3333C33.7821 43.3333 43.3333 33.7821 43.3333 22ZM220 18L22 18L22 26L220 26L220 18Z" fill="#FFCC70" fill-opacity="0.42" />
                        <rect x="15.5" y="14.5" width="15" height="15" rx="4.5" stroke="#747678" />
                        <path d="M241.333 22C241.333 10.2179 231.782 0.666667 220 0.666666C208.218 0.666665 198.667 10.2179 198.667 22C198.667 33.7821 208.218 43.3333 220 43.3333C231.782 43.3333 241.333 33.7821 241.333 22ZM220 18L42 18L42 26L220 26L220 18Z" fill="#22668D" />
                        <path d="M228 17L218 27L213 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/FirstLevel.png" x="580" y="-80" width="70" height="70" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/SecondLevel.png" x="380" y="-80" width="70" height="70" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/ThirdLevel.png" x="180" y="-80" width="70" height="70" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/FourthLevel.png" x="-20" y="-80" width="70" height="70" />
                    </svg>
                );
            case 4:
                return (
                    <svg width="680" height="200" viewBox="-50 -20 740 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M639.333 22C639.333 10.2179 629.782 0.666667 618 0.666666C606.218 0.666665 596.667 10.2179 596.667 22C596.667 33.7821 606.218 43.3333 618 43.3333C629.782 43.3333 639.333 33.7821 639.333 22ZM618 18L440 18L440 26L618 26L618 18Z" fill="#22668D" />
                        <path d="M625 17L615 27L610 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M440.333 22C440.333 10.2179 430.782 0.666667 419 0.666666C407.218 0.666665 397.667 10.2179 397.667 22C397.667 33.7821 407.218 43.3333 419 43.3333C430.782 43.3333 440.333 33.7821 440.333 22ZM419 18L241 18L241 26L419 26L419 18Z" fill="#22668D" />
                        <path d="M427 17L417 27L412 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M241.333 22C241.333 10.2179 231.782 0.666667 220 0.666666C208.218 0.666665 198.667 10.2179 198.667 22C198.667 33.7821 208.218 43.3333 220 43.3333C231.782 43.3333 241.333 33.7821 241.333 22ZM43.3333 22C43.3333 10.2179 33.7821 0.66665 22 0.666649C10.2179 0.666648 0.666673 10.2179 0.666672 22C0.666671 33.7821 10.2179 43.3333 22 43.3333C33.7821 43.3333 43.3333 33.7821 43.3333 22ZM220 18L22 18L22 26L220 26L220 18Z" fill="#22668D" />
                        <path d="M228 17L218 27L213 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30 17L20 27L15 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/FirstLevel.png" x="580" y="-80" width="70" height="70" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/SecondLevel.png" x="380" y="-80" width="70" height="70" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/ThirdLevel.png" x="180" y="-80" width="70" height="70" />
                        <image href="https://gizmoshop.liara.run/images/media/pictures/FourthLevel.png" x="-20" y="-80" width="70" height="70" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {renderSvgForLevel()}
        </Box>
    );
};

export default LevelofOrdering;
