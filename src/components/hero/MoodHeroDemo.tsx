"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CTAButtonVariant } from "../ui/cta-buttons";
import { FlowButton } from "@/components/ui/flow-button";
import { Button } from "@/components/ui/stateful-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import DesignaliDemo from "../navbar/DesignaliDemo";
import { RealNavbarDemo } from "../navbar/RealNavbarDemo";
import SimpleSaaSNavbarDemo from "../navbar/SimpleSaaSNavbarDemo";
import { PearlNavbar } from "../navbar/PearlNavbarDemo";

// 일반 채팅창 컴포넌트 (작은 박스)
const GeneralChatCursor = ({ 
  onChatClick,
  onMessageSubmit,
  isProcessing
}: { 
  onChatClick: (e: React.MouseEvent) => void;
  onMessageSubmit: (message: string) => void;
  isProcessing: boolean;
}) => {
  const [message, setMessage] = React.useState('');
  const [selectedStyle, setSelectedStyle] = React.useState('Auto');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <div className="relative">
      {/* 작은 채팅 박스 - 처리 중일 때는 숨김 */}
      {!isProcessing && (
        <div 
          className="absolute left-9 top-7 pointer-events-auto"
        >
          <form 
            className="rounded-xl flex items-center justify-between px-3 gap-2"
            style={{
              width: '302px',
              height: '36px',
              backgroundColor: '#2C2C2C',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.25)'
            }}
            onSubmit={(e) => {
              e.preventDefault();
              onMessageSubmit(message);
              setMessage(''); // 입력창 초기화
            }}
          >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Change image/video"
            className="flex-1 bg-transparent text-white text-sm outline-none placeholder-white/60 text-left"
            style={{ fontFamily: 'Arial, sans-serif' }}
            autoFocus
          />
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.6759 9.30377C12.4566 9.52315 12.1005 9.52315 11.8806 9.30377L9.5625 6.98064V12.9375C9.5625 13.2469 9.31106 13.5 9 13.5C8.68894 13.5 8.4375 13.2469 8.4375 12.9375V6.98064L6.11944 9.30377C5.8995 9.52315 5.54287 9.52315 5.32406 9.30377C5.10412 9.07877 5.10412 8.72437 5.32406 8.505L8.50556 5.32123C8.64056 5.18623 8.82506 5.14685 9 5.1806C9.17494 5.14685 9.35944 5.18623 9.49444 5.32123L12.6759 8.505C12.8959 8.72437 12.8959 9.07877 12.6759 9.30377ZM9 0C4.02919 0 0 4.0275 0 9C0 13.9725 4.02919 18 9 18C13.9708 18 18 13.9725 18 9C18 4.0275 13.9708 0 9 0Z" fill="white"/>
          </svg>
          <svg width="1" height="21" viewBox="0 0 1 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <line x1="0.25" x2="0.25" y2="21" stroke="white" strokeWidth="0.5"/>
          </svg>
          <div className="relative">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(!isDropdownOpen);
              }}
              className="text-white text-xs hover:opacity-80 transition-opacity rounded flex items-center justify-center gap-0.5"
              style={{ 
                minWidth: '50px',
                height: '20px',
                fontFamily: 'Arial, sans-serif',
                border: '0.5px solid white',
                lineHeight: '1',
                cursor: 'pointer',
                padding: '0 8px'
              }}
            >
              <span style={{ marginTop: '2px' }}>{selectedStyle}</span>
              <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '1px' }}>
                <path d="M2.4707 4.87109L0.214844 0.408203L1.12305 0.408203L2.73437 3.78711L2.79297 3.78711L4.41406 0.408203L5.32227 0.408203L3.05664 4.87109L2.4707 4.87109Z" fill="white"/>
              </svg>
            </button>
            {isDropdownOpen && (
              <div 
                className="absolute top-full mt-1 right-0 bg-[#2C2C2C] rounded-lg shadow-lg py-1 z-50"
                style={{ minWidth: '100px' }}
              >
                {['Auto', 'Cartoon','Cinematic', 'Pastel', 'Minimal', 'Realistic', 'Abstract'].map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedStyle(style);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 text-white text-xs hover:bg-white/10 transition-colors"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  >
                    {style}
                  </button>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>
      )}
    
    {/* 파란색 커서 - 처리 중일 때는 숨김 */}
    {!isProcessing && (
      <svg
      width="36"
      height="39"
      viewBox="0 0 397 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-sky-400"
    >
      <g filter="url(#filter0_d_general)">
        <path d="M40.7003 32.7814C38.9441 24.3881 47.9293 17.86 55.3691 22.1239L351.836 192.032C359.379 196.356 358.126 207.597 349.816 210.154L205.925 254.417C203.697 255.102 201.78 256.549 200.511 258.504L128.496 369.439C123.666 376.879 112.249 374.745 110.433 366.063L40.7003 32.7814Z" fill="#38bdf8"/>
        <path d="M346.894 200.655L203.003 244.918C198.547 246.288 194.714 249.183 192.175 253.093L120.16 364.027L50.4271 30.7463L346.894 200.655Z" stroke="white" strokeWidth="19.8759"/>
      </g>
      <defs>
        <filter id="filter0_d_general" x="0.725891" y="0.905533" width="395.86" height="432.694" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="19.8759"/>
          <feGaussianBlur stdDeviation="19.8759"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"/>
          <feBlend mode="normal" in="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
        </filter>
      </defs>
    </svg>
    )}
    </div>
  );
};

// 파란색 커서와 말풍선을 함께 표시하는 컴포넌트
const BlueCursorWithTooltip = ({ 
  onTooltipClick, 
  showBox,
  showImages,
  ctaButtonClicked,
  onButtonHover,
  navbarClicked,
  onNavItemHover,
  onButtonClick,
  onNavItemClick
}: { 
  onTooltipClick: (e: React.MouseEvent) => void;
  showBox: boolean;
  showImages: boolean;
  ctaButtonClicked: boolean;
  onButtonHover: (buttonNumber: number | null) => void;
  navbarClicked: boolean;
  onNavItemHover: (item: number | null) => void;
  onButtonClick: (buttonNumber: number) => void;
  onNavItemClick: (item: number) => void;
}) => (
  <div className="relative">
    {/* 말풍선 */}
    <div 
      className="absolute left-9 top-7 pointer-events-auto cursor-pointer"
      onClick={onTooltipClick}
    >
      <svg width="278" height="44" viewBox="0 0 278 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_0_1)">
          <rect x="4" width="270" height="36" rx="11" fill="#2C2C2C"/>
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M180.676 19.3038C180.457 19.5231 180.101 19.5231 179.881 19.3038L177.562 16.9806V22.9375C177.562 23.2469 177.311 23.5 177 23.5C176.689 23.5 176.438 23.2469 176.438 22.9375V16.9806L174.119 19.3038C173.899 19.5231 173.543 19.5231 173.324 19.3038C173.104 19.0788 173.104 18.7244 173.324 18.505L176.506 15.3212C176.641 15.1862 176.825 15.1469 177 15.1806C177.175 15.1469 177.359 15.1862 177.494 15.3212L180.676 18.505C180.896 18.7244 180.896 19.0788 180.676 19.3038ZM177 10C172.029 10 168 14.0275 168 19C168 23.9725 172.029 28 177 28C181.971 28 186 23.9725 186 19C186 14.0275 181.971 10 177 10Z" fill="white"/>
        <path d="M18.1709 23L21.8418 13.1357H23.0586L26.7227 23H25.4307L24.4326 20.1768H20.4609L19.4629 23H18.1709ZM22.4365 14.6123L20.8369 19.1309H24.0635L22.4639 14.6123H22.4365ZM30.1953 23.1367C28.5205 23.1367 27.5088 22.2822 27.3652 21.0107L27.3584 20.9492H28.5479L28.5615 21.0176C28.7051 21.7285 29.2314 22.1455 30.2021 22.1455C31.166 22.1455 31.7402 21.7422 31.7402 21.0996V21.0928C31.7402 20.5801 31.4736 20.293 30.667 20.0947L29.5391 19.8213C28.1992 19.5 27.5498 18.8779 27.5498 17.8525V17.8457C27.5498 16.6221 28.623 15.7539 30.1611 15.7539C31.7197 15.7539 32.7109 16.6631 32.7998 17.8525L32.8066 17.9414H31.6719L31.665 17.8936C31.5693 17.2031 31.043 16.7451 30.1611 16.7451C29.2998 16.7451 28.7666 17.1621 28.7666 17.791V17.7979C28.7666 18.2832 29.0879 18.6182 29.874 18.8096L31.002 19.083C32.4375 19.4316 32.957 19.999 32.957 21.0107V21.0176C32.957 22.2617 31.7812 23.1367 30.1953 23.1367ZM34.29 23V13.1357H35.4795V19.0283H35.5068L38.624 15.8906H40.0664L36.9834 18.96L40.1621 23H38.7812L36.1426 19.6846L35.4795 20.3203V23H34.29ZM44.2432 23V16.875H43.252V15.8906H44.2432V15.0156C44.2432 13.6484 44.8789 12.999 46.1914 12.999C46.458 12.999 46.7383 13.0195 46.916 13.0469V14.0107C46.7725 13.9902 46.5879 13.9834 46.4033 13.9834C45.7471 13.9834 45.4189 14.3184 45.4189 15.0225V15.8906H46.8818V16.875H45.4326V23H44.2432ZM50.375 23.1367C48.3994 23.1367 47.0801 21.708 47.0801 19.4453V19.4316C47.0801 17.1689 48.4062 15.7539 50.3682 15.7539C52.3301 15.7539 53.6631 17.1621 53.6631 19.4316V19.4453C53.6631 21.7148 52.3369 23.1367 50.375 23.1367ZM50.3818 22.084C51.6328 22.084 52.4463 21.1133 52.4463 19.4453V19.4316C52.4463 17.7637 51.626 16.8066 50.3682 16.8066C49.1309 16.8066 48.2969 17.7705 48.2969 19.4316V19.4453C48.2969 21.1201 49.124 22.084 50.3818 22.084ZM54.8662 23V15.8906H56.0557V17.0938H56.083C56.3223 16.2734 56.9375 15.7539 57.7373 15.7539C57.9424 15.7539 58.1201 15.7881 58.2158 15.8018V16.957C58.1201 16.9229 57.8672 16.8887 57.5801 16.8887C56.6572 16.8887 56.0557 17.5312 56.0557 18.6113V23H54.8662ZM67.0137 25.3926V21.8447H66.9863C66.5625 22.624 65.7422 23.123 64.7236 23.123C62.9326 23.123 61.709 21.6738 61.709 19.4385V19.4316C61.709 17.21 62.9463 15.7676 64.751 15.7676C65.7559 15.7676 66.5488 16.3076 66.9863 17.0938H67.0137V15.8906H68.2031V25.3926H67.0137ZM64.9834 22.0703C66.1934 22.0703 67.0137 21.0312 67.0137 19.4385V19.4316C67.0137 17.8525 66.1865 16.8203 64.9834 16.8203C63.7188 16.8203 62.9258 17.8389 62.9258 19.4316V19.4385C62.9258 21.0654 63.7188 22.0703 64.9834 22.0703ZM72.168 23.1367C70.6094 23.1367 69.707 22.125 69.707 20.5049V15.8906H70.8965V20.293C70.8965 21.4482 71.4365 22.084 72.5303 22.084C73.6514 22.084 74.3828 21.2842 74.3828 20.0742V15.8906H75.5723V23H74.3828V21.9883H74.3555C73.9727 22.6514 73.248 23.1367 72.168 23.1367ZM77.7939 14.6875C77.3838 14.6875 77.0488 14.3525 77.0488 13.9424C77.0488 13.5254 77.3838 13.1973 77.7939 13.1973C78.2109 13.1973 78.5391 13.5254 78.5391 13.9424C78.5391 14.3525 78.2109 14.6875 77.7939 14.6875ZM77.1992 23V15.8906H78.3887V23H77.1992ZM82.9551 23.1367C80.9385 23.1367 79.6602 21.7012 79.6602 19.4385V19.4316C79.6602 17.1895 80.9658 15.7539 82.9414 15.7539C84.7119 15.7539 85.7578 16.9297 85.9082 18.1465L85.915 18.2012H84.7529L84.7393 18.1465C84.5615 17.4355 83.9873 16.8066 82.9414 16.8066C81.7041 16.8066 80.877 17.832 80.877 19.4453V19.4521C80.877 21.1064 81.7246 22.084 82.9551 22.084C83.9258 22.084 84.5479 21.5371 84.7461 20.7441L84.7598 20.6895H85.9287L85.9219 20.7373C85.7305 22.0908 84.5615 23.1367 82.9551 23.1367ZM87.1182 23V13.1357H88.3076V19.0283H88.335L91.4521 15.8906H92.8945L89.8115 18.96L92.9902 23H91.6094L88.9707 19.6846L88.3076 20.3203V23H87.1182ZM99.6348 23.1367C97.6182 23.1367 96.3398 21.7012 96.3398 19.4385V19.4316C96.3398 17.1895 97.6455 15.7539 99.6211 15.7539C101.392 15.7539 102.438 16.9297 102.588 18.1465L102.595 18.2012H101.433L101.419 18.1465C101.241 17.4355 100.667 16.8066 99.6211 16.8066C98.3838 16.8066 97.5566 17.832 97.5566 19.4453V19.4521C97.5566 21.1064 98.4043 22.084 99.6348 22.084C100.605 22.084 101.228 21.5371 101.426 20.7441L101.439 20.6895H102.608L102.602 20.7373C102.41 22.0908 101.241 23.1367 99.6348 23.1367ZM103.764 23V13.1357H104.953V17.0254H104.98C105.363 16.2256 106.136 15.7539 107.195 15.7539C108.706 15.7539 109.738 16.9229 109.738 18.6455V23H108.549V18.8506C108.549 17.5654 107.893 16.8066 106.785 16.8066C105.685 16.8066 104.953 17.6406 104.953 18.8506V23H103.764ZM113.327 23.1367C111.912 23.1367 110.962 22.2822 110.962 20.9902V20.9766C110.962 19.7666 111.905 19.0078 113.539 18.9121L115.576 18.7959V18.2012C115.576 17.333 115.009 16.8066 114.018 16.8066C113.102 16.8066 112.527 17.2441 112.391 17.8799L112.377 17.9414H111.229L111.235 17.8662C111.338 16.6973 112.356 15.7539 114.031 15.7539C115.713 15.7539 116.766 16.6631 116.766 18.085V23H115.576V21.8447H115.549C115.132 22.624 114.277 23.1367 113.327 23.1367ZM112.179 20.9902C112.179 21.6738 112.739 22.1045 113.594 22.1045C114.715 22.1045 115.576 21.332 115.576 20.2998V19.7188L113.676 19.835C112.726 19.8896 112.179 20.3135 112.179 20.9766V20.9902ZM118.276 23V15.8906H119.466V16.9023H119.493C119.876 16.2393 120.601 15.7539 121.681 15.7539C123.239 15.7539 124.142 16.7656 124.142 18.3857V23H122.952V18.5977C122.952 17.4424 122.412 16.8066 121.318 16.8066C120.197 16.8066 119.466 17.6064 119.466 18.8164V23H118.276ZM128.667 25.5293C126.91 25.5293 125.803 24.7021 125.57 23.6494L125.557 23.5879H126.753L126.78 23.6494C127.006 24.1621 127.683 24.4766 128.653 24.4766C129.904 24.4766 130.615 23.7861 130.615 22.6855V21.7764H130.588C130.164 22.5625 129.344 23.0684 128.325 23.0684C126.534 23.0684 125.311 21.626 125.311 19.4043V19.3975C125.311 17.1895 126.548 15.7539 128.353 15.7539C129.357 15.7539 130.15 16.3008 130.588 17.0938H130.615V15.8906H131.805V22.8018C131.805 24.4492 130.595 25.5293 128.667 25.5293ZM128.585 22.0156C129.795 22.0156 130.615 20.9834 130.615 19.4043V19.3975C130.615 17.832 129.788 16.8066 128.585 16.8066C127.32 16.8066 126.527 17.8184 126.527 19.3975V19.4043C126.527 21.0176 127.32 22.0156 128.585 22.0156ZM136.269 23.1367C134.225 23.1367 132.994 21.708 132.994 19.4727V19.4658C132.994 17.2646 134.252 15.7539 136.193 15.7539C138.135 15.7539 139.317 17.1963 139.317 19.3291V19.7666H134.197C134.225 21.2295 135.031 22.084 136.296 22.084C137.198 22.084 137.834 21.6328 138.039 21.0244L138.06 20.9629H139.229L139.215 21.0312C138.982 22.207 137.82 23.1367 136.269 23.1367ZM136.187 16.8066C135.154 16.8066 134.348 17.5107 134.218 18.8369H138.107C137.991 17.4561 137.226 16.8066 136.187 16.8066ZM143.043 23.1367C141.368 23.1367 140.356 22.2822 140.213 21.0107L140.206 20.9492H141.396L141.409 21.0176C141.553 21.7285 142.079 22.1455 143.05 22.1455C144.014 22.1455 144.588 21.7422 144.588 21.0996V21.0928C144.588 20.5801 144.321 20.293 143.515 20.0947L142.387 19.8213C141.047 19.5 140.397 18.8779 140.397 17.8525V17.8457C140.397 16.6221 141.471 15.7539 143.009 15.7539C144.567 15.7539 145.559 16.6631 145.647 17.8525L145.654 17.9414H144.52L144.513 17.8936C144.417 17.2031 143.891 16.7451 143.009 16.7451C142.147 16.7451 141.614 17.1621 141.614 17.791V17.7979C141.614 18.2832 141.936 18.6182 142.722 18.8096L143.85 19.083C145.285 19.4316 145.805 19.999 145.805 21.0107V21.0176C145.805 22.2617 144.629 23.1367 143.043 23.1367ZM147.773 23.0957C147.336 23.0957 146.994 22.7539 146.994 22.3164C146.994 21.8789 147.336 21.5371 147.773 21.5371C148.211 21.5371 148.553 21.8789 148.553 22.3164C148.553 22.7539 148.211 23.0957 147.773 23.0957ZM150.781 23.0957C150.344 23.0957 150.002 22.7539 150.002 22.3164C150.002 21.8789 150.344 21.5371 150.781 21.5371C151.219 21.5371 151.561 21.8789 151.561 22.3164C151.561 22.7539 151.219 23.0957 150.781 23.0957ZM153.789 23.0957C153.352 23.0957 153.01 22.7539 153.01 22.3164C153.01 21.8789 153.352 21.5371 153.789 21.5371C154.227 21.5371 154.568 21.8789 154.568 22.3164C154.568 22.7539 154.227 23.0957 153.789 23.0957Z" fill="white"/>
        <line x1="196.25" y1="8" x2="196.25" y2="29" stroke="white" strokeWidth="0.5"/>
        <path d="M211.452 24V15.2432H208.342V14.1357H215.793V15.2432H212.683V24H211.452ZM218.107 24V18.9961H216.33V18.3633H220.588V18.9961H218.811V24H218.107Z" fill="white"/>
        <path d="M237.593 13.1042C237.31 12.875 236.88 13.0363 236.451 13.4666C236.062 13.8485 234.028 15.8838 232.982 17.1276C232.245 17.9198 231.687 18.675 231.602 19.1992C231.548 19.5307 231.621 19.8041 231.75 19.9079L232.163 20.2425C232.292 20.3464 232.574 20.3605 232.887 20.2386C233.382 20.0456 234.004 19.3414 234.624 18.4551C235.621 17.1722 237.186 14.7569 237.478 14.2965C237.809 13.7875 237.876 13.3333 237.593 13.1042Z" fill="white"/>
        <path d="M231.208 19.9221C230.701 19.8362 230.165 20.0186 229.819 20.4463C228.989 21.4719 229.081 23.1894 229.8 23.9999C229.8 23.9999 229.867 23.8962 230.104 23.6996C230.76 23.1537 231.553 22.9731 232.103 22.293C232.448 21.8651 232.514 21.3022 232.324 20.8252L231.208 19.9221Z" fill="white"/>
        <rect x="245" y="9" width="19" height="19" rx="5" fill="#378EFF"/>
        <path d="M258.057 17.5283H255.738L257.424 13H252.787L251.943 19.566H253.84L252.997 25L258.057 17.5283Z" fill="white"/>
        <defs>
          <filter id="filter0_d_0_1" x="0" y="0" width="278" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
    
    {/* 확장된 박스 */}
    {showBox && (
      <motion.div
        className="absolute left-[-6px] top-[84px] pointer-events-auto"
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div 
          className={`hide-scrollbar rounded-xl flex items-center gap-2 overflow-x-auto overflow-y-hidden px-4 ${!showImages ? 'justify-center' : 'justify-start'}`}
          style={{
            width: '360px',
            height: '140px',
            backgroundColor: '#2C2C2C',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.25)',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
          }}
        >
          {!showImages ? (
            /* 3개의 로딩 스피너 */
            [1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 rounded-full bg-white"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            ))
          ) : navbarClicked && !ctaButtonClicked ? (
            /* navbar 클릭 시 nav 텍스트 설명들 */
            <>
              <div
                className="h-12 w-24 cursor-pointer flex-shrink-0 flex items-center justify-center"
                onMouseEnter={() => onNavItemHover(1)}
                onMouseLeave={() => onNavItemHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavItemClick(1);
                }}
              >
                <span className="text-white text-sm font-medium" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>
                  Glass
                </span>
              </div>
              <div
                className="h-12 w-24 cursor-pointer flex-shrink-0 flex items-center justify-center"
                onMouseEnter={() => onNavItemHover(2)}
                onMouseLeave={() => onNavItemHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavItemClick(2);
                }}
              >
                <span className="text-white text-sm font-medium" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>
                  Simple
                </span>
              </div>
              <div
                className="h-12 w-24 cursor-pointer flex-shrink-0 flex items-center justify-center"
                onMouseEnter={() => onNavItemHover(3)}
                onMouseLeave={() => onNavItemHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavItemClick(3);
                }}
              >
                <span className="text-white text-sm font-medium" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>
                  Clean
                </span>
              </div>
              <div
                className="h-12 w-24 cursor-pointer flex-shrink-0 flex items-center justify-center"
                onMouseEnter={() => onNavItemHover(4)}
                onMouseLeave={() => onNavItemHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavItemClick(4);
                }}
              >
                <span className="text-white text-sm font-medium" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>
                  Calm
                </span>
              </div>
            </>
          ) : ctaButtonClicked && !navbarClicked ? (
            /* CTA 버튼 클릭 시 - 실제 버튼 컴포넌트들 */
            <>
              <div
                className="flex-shrink-0"
                onMouseEnter={() => onButtonHover(1)}
                onMouseLeave={() => onButtonHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  onButtonClick(1);
                }}
              >
                <FlowButton text="Start free exploration" />
              </div>
              
              <div
                className="flex-shrink-0"
                onMouseEnter={() => onButtonHover(3)}
                onMouseLeave={() => onButtonHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  onButtonClick(3);
                }}
              >
                <Button onClick={() => new Promise((resolve) => setTimeout(resolve, 4000))}>
                  Start free exploration
                </Button>
              </div>
              <div
                className="flex-shrink-0"
                onMouseEnter={() => onButtonHover(4)}
                onMouseLeave={() => onButtonHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  onButtonClick(4);
                }}
              >
                <div className="relative justify-center">
                  <InteractiveHoverButton 
                    text="Start free exploration" 
                    className="h-[44px] px-4 text-sm"
                  />
                </div>
              </div>
              <CTAButtonVariant
                variant={5}
                size="thumb"
                className="flex-shrink-0"
                disableHoverBorder
                onMouseEnter={() => onButtonHover(5)}
                onMouseLeave={() => onButtonHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  onButtonClick(5);
                }}
              />
            </>
          ) : null}
        </div>
      </motion.div>
    )}
    
    {/* 파란색 커서 - showBox가 false일 때만 표시 */}
    {!showBox && (
    <svg
      width="36"
      height="39"
      viewBox="0 0 397 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-sky-400"
    >
      <g filter="url(#filter0_d_blue)">
        <path d="M40.7003 32.7814C38.9441 24.3881 47.9293 17.86 55.3691 22.1239L351.836 192.032C359.379 196.356 358.126 207.597 349.816 210.154L205.925 254.417C203.697 255.102 201.78 256.549 200.511 258.504L128.496 369.439C123.666 376.879 112.249 374.745 110.433 366.063L40.7003 32.7814Z" fill="#38bdf8"/>
        <path d="M346.894 200.655L203.003 244.918C198.547 246.288 194.714 249.183 192.175 253.093L120.16 364.027L50.4271 30.7463L346.894 200.655Z" stroke="white" strokeWidth="19.8759"/>
      </g>
      <defs>
        <filter id="filter0_d_blue" x="0.725891" y="0.905533" width="395.86" height="432.694" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="19.8759"/>
          <feGaussianBlur stdDeviation="19.8759"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"/>
          <feBlend mode="normal" in="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
        </filter>
      </defs>
    </svg>
    )}
  </div>
);

// GroundAI 로고 아이콘 (네잎클로버 스타일)
const GroundAIIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"
      fill="currentColor"
    />
    <path
      d="M8 12C8 10.9 8.9 10 10 10H14C15.1 10 16 10.9 16 12V16C16 17.1 15.1 18 14 18H10C8.9 18 8 17.1 8 16V12Z"
      fill="currentColor"
    />
  </svg>
);

// 화살표 아이콘
const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      d="M8 0L9.41 1.41L3.83 7H16V9H3.83L9.41 14.59L8 16L0 8L8 0Z"
      fill="currentColor"
    />
  </svg>
);

export const MoodHeroDemo = () => {
  const [clickedCursor, setClickedCursor] = useState<{ id: number; x: number; y: number } | null>(null);
  const [showBox, setShowBox] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [ctaButtonClicked, setCtaButtonClicked] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [navbarClicked, setNavbarClicked] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState<number | null>(null);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [selectedNavItem, setSelectedNavItem] = useState<number | null>(null);
  const [isGeneralChat, setIsGeneralChat] = useState(false);
  const [isVideoBackground, setIsVideoBackground] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    // 커서가 이미 있으면 제거
    if (clickedCursor) {
      setClickedCursor(null);
      setShowBox(false); // 커서 제거 시 박스도 제거
      setShowImages(false); // 이미지도 초기화
      setCtaButtonClicked(false); // CTA 모드 초기화
      setNavbarClicked(false); // navbar 모드 초기화
      setIsGeneralChat(false); // 일반 채팅 모드 초기화
      setHoveredButton(null);
      setHoveredNavItem(null);
      return;
    }
    
    // 커서가 없으면 생성 (일반 채팅 모드)
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newCursor = {
      id: Date.now(),
      x,
      y
    };
    
    setClickedCursor(newCursor);
    setIsGeneralChat(true); // 일반 채팅 모드 활성화
  };

  const handleTooltipClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 배경 클릭 이벤트 전파 방지
    
    if (showBox) {
      // 박스가 켜져있으면 끄기
      setShowBox(false);
      setShowImages(false);
    } else {
      // 박스를 켜고
      setShowBox(true);
      setShowImages(false);
      
      // 2초 후에 이미지 표시
    setTimeout(() => {
        setShowImages(true);
      }, 2000);
    }
  };

  const handleButtonClick = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
    setClickedCursor(null); // 커서 닫기
    setShowBox(false); // 박스 닫기
    setShowImages(false);
  };

  const handleNavItemClick = (item: number) => {
    setSelectedNavItem(item);
    setClickedCursor(null); // 커서 닫기
    setShowBox(false); // 박스 닫기
    setShowImages(false);
  };

  const handleMessageSubmit = (message: string) => {
    if (message.toLowerCase() === 'make it move') {
      setIsProcessing(true);
      setClickedCursor(null); // 파란 커서 제거
      setShowBox(false);
      setShowImages(false);
      setTimeout(() => {
        setIsVideoBackground(true);
        setIsProcessing(false);
      }, 4000);
    }
  };
  return (
    <div className="relative min-h-screen overflow-hidden" onClick={handleClick} style={{ cursor: isProcessing ? 'wait' : 'auto' }}>
      {/* Custom Navbar - 히어로 위에 투명하게 오버레이 */}
      {selectedNavItem !== null ? (
        /* 선택된 Nav 컴포넌트 - 영구 표시 */
        <div className="absolute top-0 left-0 right-0 z-50 w-full">
          {selectedNavItem === 1 ? (
            <DesignaliDemo isVisible={true} />
          ) : selectedNavItem === 2 ? (
            <RealNavbarDemo isVisible={true} />
          ) : selectedNavItem === 3 ? (
            <SimpleSaaSNavbarDemo isVisible={true} />
          ) : selectedNavItem === 4 ? (
            <PearlNavbar />
          ) : null}
        </div>
      ) : navbarClicked && !ctaButtonClicked && hoveredNavItem !== null ? (
        /* Nav 컴포넌트 미리보기 - navbar 전체 대체 */
        <div className="absolute top-0 left-0 right-0 z-50 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {hoveredNavItem === 1 ? (
              <DesignaliDemo isVisible={true} />
            ) : hoveredNavItem === 2 ? (
              <RealNavbarDemo isVisible={true} />
            ) : hoveredNavItem === 3 ? (
              <SimpleSaaSNavbarDemo isVisible={true} />
            ) : hoveredNavItem === 4 ? (
              <PearlNavbar />
            ) : null}
          </motion.div>
        </div>
      ) : (
        /* 기본 Navbar */
        <nav 
          className="absolute top-0 left-0 right-0 z-50 w-full px-6 py-4 border-2 border-transparent hover:border-sky-400 transition-all cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setNavbarClicked(true);
            setCtaButtonClicked(false); // CTA 모드 해제
            setIsGeneralChat(false); // 일반 채팅 모드 해제
            setHoveredButton(null); // CTA 버튼 호버 초기화
            
            // 마우스 위치에 커서 생성
            if (!clickedCursor) {
              const parentRect = document.querySelector('.relative.min-h-screen')?.getBoundingClientRect();
              
              if (parentRect) {
                const newCursor = {
                  id: Date.now(),
                  x: e.clientX - parentRect.left + 2,
                  y: e.clientY - parentRect.top +4
                };
                setClickedCursor(newCursor);
              }
            }
          }}
        >
          <div className="flex items-center justify-between">
            {/* Left side - Logo and text */}
            <div className="flex items-center space-x-3">
              {/* YourAI Logo */}
              <div className="w-8 h-8 flex items-center justify-center mb-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <g clipPath="url(#clip0_209_2)">
                    <path d="M18.1992 12.5742V21H15.0234V12.5508C15.0234 11.3555 14.7695 10.5156 14.2617 10.0312C13.7539 9.53906 12.8711 9.29297 11.6133 9.29297H5.67188V6.45703H11.8125C13.3516 6.45703 14.5859 6.66406 15.5156 7.07812C16.4531 7.49219 17.1328 8.14844 17.5547 9.04688C17.9844 9.9375 18.1992 11.1133 18.1992 12.5742ZM9.07031 12.1641V21H5.90625V12.1641H9.07031Z" fill="currentColor"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_209_2">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span 
                className="text-white text-lg font-medium"
                style={{ 
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontWeight: '100'
                }}
              >
                YourAI
              </span>
            </div>

            {/* Right side - All items in one container */}
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2">
              <div className="flex items-center space-x-6">
                <a 
                  href="#" 
                  className="text-white text-sm hover:text-white/80 transition-colors"
                  style={{ 
                    fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                    fontWeight: '100'
                  }}
                >
                  Product
                </a>
                <a 
                  href="#" 
                  className="text-white text-sm hover:text-white/80 transition-colors"
                  style={{ 
                    fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                    fontWeight: '100'
                  }}
                >
                  Platform
                </a>
                <a 
                  href="#" 
                  className="text-white text-sm hover:text-white/80 transition-colors"
                  style={{ 
                    fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                    fontWeight: '100'
                  }}
                >
                  Customers
                </a>
                <a 
                  href="#" 
                  className="text-white text-sm hover:text-white/80 transition-colors"
                  style={{ 
                    fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                    fontWeight: '100'
                  }}
                >
                  Company
                </a>
                <button 
                  className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors cursor-default border-2 border-transparent hover:border-sky-400"
                  style={{ 
                    fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                    fontWeight: '550',
                    color: 'black'
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
       {/* 폰트 정의 */}
       <style jsx>{`
         @font-face {
           font-family: 'Playfair Display Italic';
           src: url('/fonts/PlayfairDisplay-Italic.ttf') format('truetype');
           font-weight: 400;
           font-style: italic;
         }
         @font-face {
           font-family: 'Arial Rounded MT Regular';
           src: url('/fonts/ArialRounded/Arial Rounded MT Regular/Arial Rounded MT Regular.ttf') format('truetype');
           font-weight: 100;
           font-style: normal;
         }
       `}</style>
      {/* 배경 - 이미지 또는 비디오 */}
      {isVideoBackground ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
      ) : (
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/mood-1.svg')`
        }}
        />
      )}


       {/* 메인 콘텐츠 - 중앙 배치 */}
       <div className="relative z-10 hero flex items-center justify-center min-h-screen px-4">
         <div className="max-w-[720px] mx-auto text-center">
          
           {/* 1줄: Meet YourAI */}
           <motion.h1
             className="text-[60px] font-light text-white leading-[1.05] border-2 border-transparent hover:border-sky-400 cursor-default"
             style={{ 
               fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
               fontWeight: '100',
               letterSpacing: '-0.05em'
             }}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
           >
             Meet YourAI.
           </motion.h1>
          
           {/* 2줄: Reimagine work with adaptive thinking */}
           <motion.h2 
             className="text-[60px] text-white leading-[1.05] mb-8"
             style={{ 
               fontFamily: 'Inter, SF Pro Display, Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
               letterSpacing: '-0.05em'
             }}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
           >
             <span
               className="font-normal border-2 border-transparent hover:border-sky-400 cursor-default"
               style={{
                 fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                 fontWeight: '400',
                 letterSpacing: '-0.05em'
               }}
             >
               Reimagine work
             </span>
             <span
               className="font-normal border-2 border-transparent hover:border-sky-400 cursor-default"
               style={{
                 fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                 fontWeight: '100',
                 letterSpacing: '-0.05em'
               }}
             >
               {" "}with
             </span>
             <br />
             <span
               className="font-normal border-2 border-transparent hover:border-sky-400 cursor-default"
               style={{
                 fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                 fontWeight: '100',
                 letterSpacing: '-0.05em'
               }}
             >
               adaptive thinking
             </span>
           </motion.h2>

          {/* CTA 버튼 또는 이미지 미리보기 */}
          {selectedButton !== null ? (
            /* 선택된 버튼 - 실제 컴포넌트 표시 */
            <div className="flex items-center justify-center">
              {selectedButton === 2 ? (
                <CTAButtonVariant variant={2} size="display" />
              ) : selectedButton === 3 ? (
                <Button onClick={() => new Promise((resolve) => setTimeout(resolve, 4000))}>Start free exploration</Button>
              ) : selectedButton === 1 ? (
                <FlowButton text="Start free exploration" />
              ) : selectedButton === 4 ? (
                <div className="relative justify-center">
                  <InteractiveHoverButton 
                    text="Start free exploration" 
                  />
                </div>
              ) : (
                <CTAButtonVariant variant={(selectedButton === 3 ? 2 : selectedButton) as any} size="display" />
              )}
            </div>
          ) : ctaButtonClicked && !navbarClicked && hoveredButton !== null ? (
            /* 미리보기 - 실제 컴포넌트 표시 (애니메이션 제거) */
            <div className="flex items-center justify-center">
              {hoveredButton === 2 ? (
                <CTAButtonVariant variant={2} size="display" />
              ) : hoveredButton === 3 ? (
                <Button hoverActive onClick={() => new Promise((resolve) => setTimeout(resolve, 4000))}>Start free exploration</Button>
              ) : hoveredButton === 1 ? (
                <FlowButton hoverActive text="Start free exploration" />
              ) : hoveredButton === 4 ? (
                <div className="relative justify-center">
                  <InteractiveHoverButton 
                    text="Start free exploration" 
                    hoverActive={true}
                  />
                </div>
              ) : (
                <CTAButtonVariant variant={(hoveredButton === 3 ? 2 : hoveredButton) as any} size="display" />
              )}
            </div>
          ) : (
          <motion.button
            className="bg-white text-black rounded-2xl font-medium cursor-default hover:shadow-[0_0_0_2px_#38bdf8] h-[50px]"
            style={{ 
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontWeight: '500',
              padding: '0 22.4px',
              fontSize: '16px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              onClick={(e) => {
                e.stopPropagation();
                setCtaButtonClicked(true);
                setNavbarClicked(false); // navbar 모드 해제
                setIsGeneralChat(false); // 일반 채팅 모드 해제
                setHoveredNavItem(null); // navbar 호버 초기화
                
                // 버튼의 오른쪽 아래 코너에 커서 생성
                if (!clickedCursor) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const parentRect = e.currentTarget.closest('.relative.min-h-screen')?.getBoundingClientRect();
                  
                  if (parentRect) {
                    const newCursor = {
                      id: Date.now(),
                      x: rect.right - parentRect.left + 4,
                      y: rect.bottom - parentRect.top  - 6
                    };
                    setClickedCursor(newCursor);
                  }
                }
              }}
          >
            Start free exploration
          </motion.button>
          )}
        </div>
      </div>

        {/* 하단 좌측: 설명 텍스트 */}
        <motion.div 
          className="absolute bottom-8 left-8 max-w-md z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          <p
            className="text-white/70 text-lg border-2 border-transparent hover:border-sky-400 cursor-default"
            style={{ 
              fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
              fontWeight: '400',
              lineHeight: '1.2'
            }}
          >
            It helps you explore, create, and refine ideas
            through natural interactions.
            From drafting concepts and options to shaping
            workflows and outputs, it adapts to your style.
          </p>
        </motion.div>

       {/* 하단 우측: 버튼들 */}
       <motion.div 
         className="absolute bottom-8 right-8 max-w-sm z-20"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
       >
         <div className="space-y-2">
             <motion.button 
               className="w-full bg-transparent border-2 border-white/30 text-white px-6 rounded-2xl text-left hover:bg-white/10 hover:border-sky-400 transition-all duration-300 flex items-center group cursor-default"
               style={{ 
                 fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                 fontWeight: '100',
                 height: '50px'
               }}
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
             >
               <span className="text-lg font-medium text-white/70">Solutions for complex tasks</span>
             </motion.button>

           <div className="flex items-center gap-2">
              <motion.button 
                className="flex-1 bg-transparent border-2 border-white/30 text-white px-6 rounded-2xl text-left hover:bg-white/10 hover:border-sky-400 transition-all duration-300 flex items-center group cursor-default"
                style={{ 
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontWeight: '100',
                  height: '50px'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg font-medium text-white/70">Conversational & Adaptive</span>
              </motion.button>
             
             <motion.button 
               className="bg-transparent border-2 border-white/30 text-white rounded-2xl hover:bg-white/10 hover:border-sky-400 transition-all duration-300 flex items-center justify-center cursor-default"
               style={{ 
                 width: '50px',
                 height: '50px'
               }}
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
             >
               <svg
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 className="text-white"
               >
                 <path
                   d="M7 17L17 7M17 7H7M17 7V17"
                   stroke="currentColor"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
               </svg>
             </motion.button>
           </div>
        </div>
      </motion.div>

      {/* Hero 끝부분 블러 오버레이 */}
      <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-black/10 via-black/1 to-transparent backdrop-blur-sm z-10"></div>

      {/* 클릭된 커서 렌더링 */}
      {clickedCursor && (
        <motion.div
          key={clickedCursor.id}
          className="fixed pointer-events-none"
          style={{
            zIndex: 999999,
            left: clickedCursor.x - 18,
            top: clickedCursor.y - 19.5,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30,
            duration: 0.3 
          }}
        >
          {isGeneralChat ? (
            /* 일반 채팅창 */
            <GeneralChatCursor onChatClick={handleTooltipClick} onMessageSubmit={handleMessageSubmit} isProcessing={isProcessing} />
          ) : (
            /* CTA/Navbar 채팅창 */
            <BlueCursorWithTooltip 
              onTooltipClick={handleTooltipClick} 
              showBox={showBox} 
              showImages={showImages}
              ctaButtonClicked={ctaButtonClicked}
              onButtonHover={setHoveredButton}
              navbarClicked={navbarClicked}
              onNavItemHover={setHoveredNavItem}
              onButtonClick={handleButtonClick}
              onNavItemClick={handleNavItemClick}
            />
          )}
        </motion.div>
      )}
      
      {/* 로딩 오버레이 - 전체 화면 cursor: wait */}
      {isProcessing && (
        <div 
          className="fixed inset-0 z-[9999999]" 
          style={{ cursor: 'wait' }}
        />
      )}
    </div>
  );
};
