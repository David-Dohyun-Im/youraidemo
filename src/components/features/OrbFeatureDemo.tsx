import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

const OrbFeatureDemo = () => {
  const [clickedCursor, setClickedCursor] = useState<{ id: number; x: number; y: number } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isVideoBackground, setIsVideoBackground] = useState(false);
  const [imageChanged, setImageChanged] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    // 커서가 이미 있으면 제거
    if (clickedCursor) {
      setClickedCursor(null);
      return;
    }
    
    // 커서가 없으면 생성 - 클릭한 정확한 위치에 커서 생성
    const newCursor = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    };
    
    setClickedCursor(newCursor);
  };

  const handleMessageSubmit = (message: string) => {
    if (message.toLowerCase() === 'make it move') {
      setIsProcessing(true);
      setClickedCursor(null);
      setTimeout(() => {
        setIsVideoBackground(true);
        setIsProcessing(false);
      }, 4000);
    } else if (message.toLowerCase().includes('support')) {
      setIsProcessing(true);
      setClickedCursor(null);
      setTimeout(() => {
        setImageChanged(true);
        setIsProcessing(false);
      }, 2000);
    }
  };
  return (
    <section className="py-20 px-4 relative" id="features" onClick={handleClick} style={{ cursor: isProcessing ? 'wait' : 'auto' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <span 
              className="text-black inline-block text-center"
              style={{
                fontSize: '56px',
                fontWeight: 500,
                letterSpacing: '-0.56px',
                lineHeight: '67.2px',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              <span style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>How we </span>
              <span style={{ fontFamily: 'PlayfairDisplay-Italic, serif' }}>work</span>
            </span>
          </motion.h2>
          
        </div>

        {/* Features Container - 1200x560 */}
        <div 
          className="mx-auto flex flex-col"
          style={{
            width: '1200px',
            height: '560px',
            gap: '24px'
          }}
        >
          {/* Top Row Container */}
          <div 
            className="flex"
            style={{
              width: '1200px',
              height: '268px',
              gap: '24px'
            }}
          >
            {/* Top Left - Image + Text Card */}
            <motion.div 
              className="bg-[#F0F0EE] rounded-2xl border-2 border-transparent hover:border-sky-400 transition-all flex flex-row items-center justify-center"
              style={{
                width: '705.6px',
                height: '268px'
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
            {/* Image Section - 336x228 */}
            <div 
              className="relative rounded-2xl overflow-hidden m-6 border-2 border-transparent hover:border-sky-400 transition-all"
              style={{
                width: '312px',
                height: '196px'
              }}
            >
              <img 
                src="/images/cutting-edge-ai.jpg" 
                alt="Cutting-Edge AI" 
                className="w-full h-full object-cover block"
                style={{ borderRadius: 'inherit' }}
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(50% 100% at -5.4% 35.5%, rgba(240, 248, 255, 0.9) 0%, rgba(4, 7, 13, 0) 100%)',
                  borderRadius: 'inherit',
                  opacity: 0.3
                }}
              ></div>
            </div>
            
            {/* Content Section - 336x228 */}
            <div 
              className="p-6 flex items-center border-2 border-transparent hover:border-sky-400 transition-all rounded-2xl"
              style={{
                width: '312px',
                height: '196px'
              }}
            >
              <div className="w-full">
                <h3 
                  className="text-gray-900 mb-2 border-2 border-transparent hover:border-sky-400 transition-all rounded-lg px-2 py-1"
                  style={{
                    fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif',
                    fontSize: '23px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                  }}
                >
                  AI Strategy Consulting
                </h3>
                <p className="text-gray-600 leading-relaxed opacity-80">
                  Develop comprehensive AI strategies tailored to your business goals and industry requirements.
                </p>
              </div>
            </div>
            </motion.div>

            {/* Top Right - Text Only Card */}
            <motion.div 
              className="bg-[#F0F0EE] rounded-2xl border-2 border-transparent hover:border-sky-400 transition-all"
              style={{
                width: '470px',
                height: '268px'
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
            <div className="p-6 h-full flex flex-col justify-center">
              <h3 
                className="text-gray-900 mb-2 border-2 border-transparent hover:border-sky-400 transition-all rounded-lg px-2 py-1"
                style={{
                  fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif',
                  fontSize: '23px',
                  fontWeight: 'bold',
                  textAlign: 'left'
                }}
              >
                Process Automation
              </h3>
              <p className="text-gray-600 leading-relaxed opacity-80">
                Transform your operations with intelligent automation solutions that reduce costs and increase productivity.
              </p>
            </div>
            </motion.div>
          </div>

          {/* Bottom Row Container */}
          <div 
            className="flex"
            style={{
              width: '1200px',
              height: '268px',
              gap: '24px'
            }}
          >
            {/* Bottom Left - Text Only Card */}
            <motion.div 
              className="bg-[#F0F0EE] rounded-2xl border-2 border-transparent hover:border-sky-400 transition-all"
              style={{
                width: '470px',
                height: '268px'
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
            <div className="p-6 h-full flex flex-col justify-center">
              <h3 
                className="text-gray-900 mb-2 border-2 border-transparent hover:border-sky-400 transition-all rounded-lg px-2 py-1"
                style={{
                  fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif',
                  fontSize: '23px',
                  fontWeight: 'bold',
                  textAlign: 'left'
                }}
              >
                Data Intelligence
              </h3>
              <p className="text-gray-600 leading-relaxed opacity-80">
                Unlock the power of your data with advanced AI analytics and machine learning models for better decision-making.
              </p>
            </div>
            </motion.div>

            {/* Bottom Right - Image + Text Card */}
            <motion.div 
              className="bg-[#F0F0EE] rounded-2xl border-2 border-transparent hover:border-sky-400 transition-all flex flex-row items-center justify-center"
              style={{
                width: '705.6px',
                height: '268px'
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
            {/* Image Section - 336x228 */}
            <div 
              className="relative rounded-2xl overflow-hidden m-6 border-2 border-transparent hover:border-sky-400 transition-all"
              style={{
                width: '312px',
                height: '196px'
              }}
            >
              <img 
                src={imageChanged ? "/images/support.png" : "/images/ai-powered-support.jpg"} 
                alt="AI-Powered Support" 
                className="w-full h-full object-cover block"
                style={{ borderRadius: 'inherit' }}
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(50% 100% at -5.4% 35.5%, rgba(240, 248, 255, 0.9) 0%, rgba(4, 7, 13, 0) 100%)',
                  borderRadius: 'inherit',
                  opacity: 0.3
                }}
              ></div>
            </div>
            
            {/* Content Section - 336x228 */}
            <div 
              className="p-6 flex items-center border-2 border-transparent hover:border-sky-400 transition-all rounded-2xl"
              style={{
                width: '312px',
                height: '196px'
              }}
            >
              <div className="w-full">
                <h3 
                  className="text-gray-900 mb-2 border-2 border-transparent hover:border-sky-400 transition-all rounded-lg px-2 py-1"
                  style={{
                    fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif',
                    fontSize: '23px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                  }}
                >
                  Customer Support
                </h3>
                <p className="text-gray-600 leading-relaxed opacity-80">
                  Enhance customer experience with AI-powered support systems and intelligent chatbots for 24/7 assistance.
                </p>
              </div>
            </div>
            </motion.div>
          </div>
        </div>

      </div>

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
          <GeneralChatCursor 
            onChatClick={() => {}} 
            onMessageSubmit={handleMessageSubmit} 
            isProcessing={isProcessing} 
          />
        </motion.div>
      )}
      
      {/* 로딩 오버레이 - 전체 화면 cursor: wait */}
      {isProcessing && (
        <div 
          className="fixed inset-0 z-[9999999]" 
          style={{ cursor: 'wait' }}
        />
      )}
    </section>
  );
};

export default OrbFeatureDemo;
