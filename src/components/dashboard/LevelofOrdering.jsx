import React from 'react';
import { Box } from '@mui/material';

const LevelofOrdering = ({ level }) => {
    // Function to render the correct SVG based on the level
    const renderSvgForLevel = () => {
        switch (level) {
            case 1:
                return (
                    <svg width="680" height="160" viewBox="-50 0 700 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M639.333 42C639.333 30.2179 629.782 20.6667 618 20.6667C606.218 20.6667 596.667 30.2179 596.667 42C596.667 53.7821 606.218 63.3333 618 63.3333C629.782 63.3333 639.333 53.7821 639.333 42ZM618 38L440 38L440 46L618 46L618 38Z" fill="#22668D" />
                        <path d="M625 37L615 47L610 42" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M440.333 42C440.333 30.2179 430.782 20.6667 419 20.6667C407.218 20.6667 397.667 30.2179 397.667 42C397.667 53.7821 407.218 63.3333 419 63.3333C430.782 63.3333 440.333 53.7821 440.333 42ZM419 38L241 38L241 46L419 46L419 38Z" fill="#FFCC70" fill-opacity="0.42" />
                        <path d="M241.333 42C241.333 30.2179 231.782 20.6667 220 20.6667C208.218 20.6667 198.667 30.2179 198.667 42C198.667 53.7821 208.218 63.3333 220 63.3333C231.782 63.3333 241.333 53.7821 241.333 42ZM43.3333 42C43.3333 30.2179 33.7821 20.6667 22 20.6667C10.2179 20.6667 0.666672 30.2179 0.666672 42C0.666671 53.7821 10.2179 63.3333 22 63.3333C33.7821 63.3333 43.3333 53.7821 43.3333 42ZM220 38L22 38L22 46L220 46L220 38Z" fill="#FFCC70" fill-opacity="0.42" />
                        <rect x="213.5" y="34.5" width="15" height="15" rx="4.5" stroke="#747678" />
                        <rect x="411.5" y="34.5" width="15" height="15" rx="4.5" stroke="#747678" />
                        <rect x="15.5" y="34.5" width="15" height="15" rx="4.5" stroke="#747678" />
                        <image href="https://gn01.liara.run/images/media/pictures/FirstLevel.png" x="580" y="-60" width="70" height="70" />
                        <image href="https://gn01.liara.run/images/media/pictures/SecondLevel.png" x="380" y="-60" width="70" height="70" />
                        <image href="https://gn01.liara.run/images/media/pictures/ThirdLevel.png" x="180" y="-60" width="70" height="70" />
                        <image href="https://gn01.liara.run/images/media/pictures/FourthLevel.png" x="-20" y="-60" width="70" height="70" />
                    </svg>
                );
            case 2:
                return (
                    <svg width="680" height="160" viewBox="-50 0 740 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M639.333 22C639.333 10.2179 629.782 0.666667 618 0.666666C606.218 0.666665 596.667 10.2179 596.667 22C596.667 33.7821 606.218 43.3333 618 43.3333C629.782 43.3333 639.333 33.7821 639.333 22ZM618 18L440 18L440 26L618 26L618 18Z" fill="#22668D" />
                        <path d="M625 17L615 27L610 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M440.333 22C440.333 10.2179 430.782 0.666667 419 0.666666C407.218 0.666665 397.667 10.2179 397.667 22C397.667 33.7821 407.218 43.3333 419 43.3333C430.782 43.3333 440.333 33.7821 440.333 22ZM419 18L241 18L241 26L419 26L419 18Z" fill="#22668D" />
                        <path d="M427 17L417 27L412 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M241.333 22C241.333 10.2179 231.782 0.666667 220 0.666666C208.218 0.666665 198.667 10.2179 198.667 22C198.667 33.7821 208.218 43.3333 220 43.3333C231.782 43.3333 241.333 33.7821 241.333 22ZM43.3333 22C43.3333 10.2179 33.7821 0.66665 22 0.666649C10.2179 0.666648 0.666673 10.2179 0.666672 22C0.666671 33.7821 10.2179 43.3333 22 43.3333C33.7821 43.3333 43.3333 33.7821 43.3333 22ZM220 18L22 18L22 26L220 26L220 18Z" fill="#FFCC70" fill-opacity="0.42" />
                        <rect x="213.5" y="14.5" width="15" height="15" rx="4.5" stroke="#747678" />
                        <rect x="15.5" y="14.5" width="15" height="15" rx="4.5" stroke="#747678" />
                        <image href="https://gn01.liara.run/images/media/pictures/FirstLevel.png" x="580" y="-80" width="70" height="70" />
                        <image href="https://gn01.liara.run/images/media/pictures/SecondLevel.png" x="380" y="-80" width="70" height="70" />
                        <image href="https://gn01.liara.run/images/media/pictures/ThirdLevel.png" x="180" y="-80" width="70" height="70" />
                        <image href="https://gn01.liara.run/images/media/pictures/FourthLevel.png" x="-20" y="-80" width="70" height="70" />
                    </svg>
                );
            case 3:
                return (
                    <svg width="680" height="160" viewBox="-50 0 740 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M639.333 22C639.333 10.2179 629.782 0.666667 618 0.666666C606.218 0.666665 596.667 10.2179 596.667 22C596.667 33.7821 606.218 43.3333 618 43.3333C629.782 43.3333 639.333 33.7821 639.333 22ZM618 18L440 18L440 26L618 26L618 18Z" fill="#22668D" />
                        <path d="M625 17L615 27L610 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M440.333 22C440.333 10.2179 430.782 0.666667 419 0.666666C407.218 0.666665 397.667 10.2179 397.667 22C397.667 33.7821 407.218 43.3333 419 43.3333C430.782 43.3333 440.333 33.7821 440.333 22ZM419 18L241 18L241 26L419 26L419 18Z" fill="#22668D" />
                        <path d="M427 17L417 27L412 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M43.3333 22C43.3333 10.2179 33.7821 0.66665 22 0.666649C10.2179 0.666648 0.666673 10.2179 0.666672 22C0.666671 33.7821 10.2179 43.3333 22 43.3333C33.7821 43.3333 43.3333 33.7821 43.3333 22ZM220 18L22 18L22 26L220 26L220 18Z" fill="#FFCC70" fill-opacity="0.42" />
                        <rect x="15.5" y="14.5" width="15" height="15" rx="4.5" stroke="#747678" />
                        <path d="M241.333 22C241.333 10.2179 231.782 0.666667 220 0.666666C208.218 0.666665 198.667 10.2179 198.667 22C198.667 33.7821 208.218 43.3333 220 43.3333C231.782 43.3333 241.333 33.7821 241.333 22ZM220 18L42 18L42 26L220 26L220 18Z" fill="#22668D" />
                        <path d="M228 17L218 27L213 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <image href="https://gn01.liara.run/images/media/pictures/FirstLevel.png" x="580" y="-80" width="70" height="70" />
                        <image href="https://gn01.liara.run/images/media/pictures/SecondLevel.png" x="380" y="-80" width="70" height="70" />
                        <image href="https://gn01.liara.run/images/media/pictures/ThirdLevel.png" x="180" y="-80" width="70" height="70" />
                        <image href="https://gn01.liara.run/images/media/pictures/FourthLevel.png" x="-20" y="-80" width="70" height="70" />
                    </svg>
                );
            case 4:
                return (
                    <svg width="680" height="160" viewBox="-50 0 740 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M639.333 22C639.333 10.2179 629.782 0.666667 618 0.666666C606.218 0.666665 596.667 10.2179 596.667 22C596.667 33.7821 606.218 43.3333 618 43.3333C629.782 43.3333 639.333 33.7821 639.333 22ZM618 18L440 18L440 26L618 26L618 18Z" fill="#22668D" />
                        <path d="M625 17L615 27L610 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M440.333 22C440.333 10.2179 430.782 0.666667 419 0.666666C407.218 0.666665 397.667 10.2179 397.667 22C397.667 33.7821 407.218 43.3333 419 43.3333C430.782 43.3333 440.333 33.7821 440.333 22ZM419 18L241 18L241 26L419 26L419 18Z" fill="#22668D" />
                        <path d="M427 17L417 27L412 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M241.333 22C241.333 10.2179 231.782 0.666667 220 0.666666C208.218 0.666665 198.667 10.2179 198.667 22C198.667 33.7821 208.218 43.3333 220 43.3333C231.782 43.3333 241.333 33.7821 241.333 22ZM43.3333 22C43.3333 10.2179 33.7821 0.66665 22 0.666649C10.2179 0.666648 0.666673 10.2179 0.666672 22C0.666671 33.7821 10.2179 43.3333 22 43.3333C33.7821 43.3333 43.3333 33.7821 43.3333 22ZM220 18L22 18L22 26L220 26L220 18Z" fill="#22668D" />
                        <path d="M228 17L218 27L213 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30 17L20 27L15 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <image href="https://gn01.liara.run/images/media/pictures/FirstLevel.png" x="580" y="-80" width="70" height="70" />
                        <image href="https://gn01.liara.run/images/media/pictures/SecondLevel.png" x="380" y="-80" width="70" height="70" />
                        <image href="https://gn01.liara.run/images/media/pictures/ThirdLevel.png" x="180" y="-80" width="70" height="70" />
                        <image href="https://gn01.liara.run/images/media/pictures/FourthLevel.png" x="-20" y="-80" width="70" height="70" />
                    </svg>
                );
            case 5:
                return (
                    <svg width="210" height="540" viewBox="0 -50 210 740" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 0.666666C10.2179 0.666665 0.666667 10.2179 0.666666 22C0.666665 33.7821 10.2179 43.3333 22 43.3333C33.7821 43.3333 43.3333 33.7821 43.3333 22C43.3333 10.2179 33.7821 0.666667 22 0.666666ZM18 22L18 200L26 200L26 22L18 22Z" fill="#22668D" />
                        <path d="M30 18L20 28L15 23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22 199.667C10.2179 199.667 0.666667 209.218 0.666666 221C0.666665 232.782 10.2179 242.333 22 242.333C33.7821 242.333 43.3333 232.782 43.3333 221C43.3333 209.218 33.7821 199.667 22 199.667ZM18 221L18 399L26 399L26 221L18 221Z" fill="#FFCC70" fill-opacity="0.42" />
                        <rect x="14.5" y="228.5" width="15" height="15" rx="4.5" transform="rotate(-90 14.5 228.5)" stroke="#747678" />
                        <path d="M22 398.667C10.2179 398.667 0.666667 408.218 0.666666 420C0.666665 431.782 10.2179 441.333 22 441.333C33.7821 441.333 43.3333 431.782 43.3333 420C43.3333 408.218 33.7821 398.667 22 398.667ZM22 596.667C10.2179 596.667 0.66665 606.218 0.666649 618C0.666648 629.782 10.2179 639.333 22 639.333C33.7821 639.333 43.3333 629.782 43.3333 618C43.3333 606.218 33.7821 596.667 22 596.667ZM18 420L18 618L26 618L26 420L18 420Z" fill="#FFCC70" fill-opacity="0.42" />
                        <rect x="14.5" y="426.5" width="15" height="15" rx="4.5" transform="rotate(-90 14.5 426.5)" stroke="#747678" />
                        <rect x="14.5" y="625.5" width="15" height="15" rx="4.5" transform="rotate(-90 14.5 625.5)" stroke="#747678" />
                        <image href="https://gn01.liara.run/images/media/pictures/FirstLevel.png" x="150" y="-10" height="70px" width="70px" />
                        <image href="https://gn01.liara.run/images/media/pictures/SecondLevel.png" x="150" y="180" height="70px" width="70px" />
                        <image href="https://gn01.liara.run/images/media/pictures/ThirdLevel.png" x="150" y="380" height="70px" width="70px" />
                        <image href="https://gn01.liara.run/images/media/pictures/FourthLevel.png" x="150" y="580" height="70px" width="70px" />
                    </svg>
                );
            case 6:
                return (
                    <svg width="210" height="540" viewBox="0 -50 210 740" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 0.666666C10.2179 0.666665 0.666667 10.2179 0.666666 22C0.666665 33.7821 10.2179 43.3333 22 43.3333C33.7821 43.3333 43.3333 33.7821 43.3333 22C43.3333 10.2179 33.7821 0.666667 22 0.666666ZM18 22L18 200L26 200L26 22L18 22Z" fill="#22668D" />
                        <path d="M22 199.667C10.2179 199.667 0.666667 209.218 0.666666 221C0.666665 232.782 10.2179 242.333 22 242.333C33.7821 242.333 43.3333 232.782 43.3333 221C43.3333 209.218 33.7821 199.667 22 199.667ZM18 221L18 399L26 399L26 221L18 221Z" fill="#22668D" />
                        <path d="M30 18L20 28L15 23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30 217L20 227L15 222" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22 398.667C10.2179 398.667 0.666667 408.218 0.666666 420C0.666665 431.782 10.2179 441.333 22 441.333C33.7821 441.333 43.3333 431.782 43.3333 420C43.3333 408.218 33.7821 398.667 22 398.667ZM22 596.667C10.2179 596.667 0.66665 606.218 0.666649 618C0.666648 629.782 10.2179 639.333 22 639.333C33.7821 639.333 43.3333 629.782 43.3333 618C43.3333 606.218 33.7821 596.667 22 596.667ZM18 420L18 618L26 618L26 420L18 420Z" fill="#FFCC70" fill-opacity="0.42" />
                        <rect x="14.5" y="427.5" width="15" height="15" rx="4.5" transform="rotate(-90 14.5 427.5)" stroke="#747678" />
                        <rect x="14.5" y="625.5" width="15" height="15" rx="4.5" transform="rotate(-90 14.5 625.5)" stroke="#747678" />
                        <image href="https://gn01.liara.run/images/media/pictures/FirstLevel.png" x="150" y="-10" height="70px" width="70px" />
                        <image href="https://gn01.liara.run/images/media/pictures/SecondLevel.png" x="150" y="180" height="70px" width="70px" />
                        <image href="https://gn01.liara.run/images/media/pictures/ThirdLevel.png" x="150" y="380" height="70px" width="70px" />
                        <image href="https://gn01.liara.run/images/media/pictures/FourthLevel.png" x="150" y="580" height="70px" width="70px" />
                    </svg>
                );
            case 7:
                return (
                    <svg width="210" height="540" viewBox="0 -50 210 740" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 0.666666C10.2179 0.666665 0.666667 10.2179 0.666666 22C0.666665 33.7821 10.2179 43.3333 22 43.3333C33.7821 43.3333 43.3333 33.7821 43.3333 22C43.3333 10.2179 33.7821 0.666667 22 0.666666ZM18 22L18 200L26 200L26 22L18 22Z" fill="#22668D" />
                        <path d="M22 199.667C10.2179 199.667 0.666667 209.218 0.666666 221C0.666665 232.782 10.2179 242.333 22 242.333C33.7821 242.333 43.3333 232.782 43.3333 221C43.3333 209.218 33.7821 199.667 22 199.667ZM18 221L18 399L26 399L26 221L18 221Z" fill="#22668D" />
                        <path d="M30 18L20 28L15 23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30 217L20 227L15 222" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22 398.667C10.2179 398.667 0.666667 408.218 0.666666 420C0.666665 431.782 10.2179 441.333 22 441.333C33.7821 441.333 43.3333 431.782 43.3333 420C43.3333 408.218 33.7821 398.667 22 398.667ZM18 420L18 598L26 598L26 420L18 420Z" fill="#22668D" />
                        <path d="M30 416L20 426L15 421" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22 597.667C10.2179 597.667 0.666667 607.218 0.666666 619C0.666665 630.782 10.2179 640.333 22 640.333C33.7821 640.333 43.3333 630.782 43.3333 619C43.3333 607.218 33.7821 597.667 22 597.667ZM18 619L18 619L26 619L26 619L18 619Z" fill="#FFCC70" fill-opacity="0.42" />
                        <rect x="14.5" y="626.5" width="15" height="15" rx="4.5" transform="rotate(-90 14.5 626.5)" stroke="#747678" />
                        <image href="https://gn01.liara.run/images/media/pictures/FirstLevel.png" x="150" y="-10" height="70px" width="70px" />
                        <image href="https://gn01.liara.run/images/media/pictures/SecondLevel.png" x="150" y="180" height="70px" width="70px" />
                        <image href="https://gn01.liara.run/images/media/pictures/ThirdLevel.png" x="150" y="380" height="70px" width="70px" />
                        <image href="https://gn01.liara.run/images/media/pictures/FourthLevel.png" x="150" y="580" height="70px" width="70px" />
                    </svg>
                );
            case 8:
                return (
                    <svg width="210" height="540" viewBox="0 -50 210 740" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 0.666666C10.2179 0.666665 0.666667 10.2179 0.666666 22C0.666665 33.7821 10.2179 43.3333 22 43.3333C33.7821 43.3333 43.3333 33.7821 43.3333 22C43.3333 10.2179 33.7821 0.666667 22 0.666666ZM18 22L18 200L26 200L26 22L18 22Z" fill="#22668D" />
                        <path d="M22 199.667C10.2179 199.667 0.666667 209.218 0.666666 221C0.666665 232.782 10.2179 242.333 22 242.333C33.7821 242.333 43.3333 232.782 43.3333 221C43.3333 209.218 33.7821 199.667 22 199.667ZM18 221L18 399L26 399L26 221L18 221Z" fill="#22668D" />
                        <path d="M30 18L20 28L15 23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30 217L20 227L15 222" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22 398.667C10.2179 398.667 0.666667 408.218 0.666666 420C0.666665 431.782 10.2179 441.333 22 441.333C33.7821 441.333 43.3333 431.782 43.3333 420C43.3333 408.218 33.7821 398.667 22 398.667ZM22 596.667C10.2179 596.667 0.66665 606.218 0.666649 618C0.666648 629.782 10.2179 639.333 22 639.333C33.7821 639.333 43.3333 629.782 43.3333 618C43.3333 606.218 33.7821 596.667 22 596.667ZM18 420L18 618L26 618L26 420L18 420Z" fill="#22668D" />
                        <path d="M30 416L20 426L15 421" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30 613L20 623L15 618" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <image href="https://gn01.liara.run/images/media/pictures/FirstLevel.png" x="150" y="-10" height="70px" width="70px" />
                        <image href="https://gn01.liara.run/images/media/pictures/SecondLevel.png" x="150" y="180" height="70px" width="70px" />
                        <image href="https://gn01.liara.run/images/media/pictures/ThirdLevel.png" x="150" y="380" height="70px" width="70px" />
                        <image href="https://gn01.liara.run/images/media/pictures/FourthLevel.png" x="150" y="580" height="70px" width="70px" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: {
                    xs: '100%', // Full width on xs screens
                    // sm: '50%', // 75% width on sm screens
                    // md: '75%', // 50% width on md screens
                    // lg: '100%' // 25% width on lg screens
                },
                height: {
                    xs: '100%', // Fixed height on xs screens
                    // sm: '50%', // Larger height on sm screens
                    // md: '75%', // Even larger height on md screens
                    // lg: '100%' // Largest height on lg screens
                },
            }}
        >
            {renderSvgForLevel()}
        </Box>
    );
};

export default LevelofOrdering;
