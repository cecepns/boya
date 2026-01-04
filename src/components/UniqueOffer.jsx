import { useRef, useEffect, useState } from 'react';

const UniqueOffer = () => {
  const containerRef = useRef(null);
  const mainOfferRef = useRef(null);
  const publicSpeakingRef = useRef(null);
  const financialLiteracyRef = useRef(null);
  const creativeThinkingRef = useRef(null);
  const leadershipRef = useRef(null);
  
  const [arrowPaths, setArrowPaths] = useState({
    topLeft: '',
    topRight: '',
    leftDiagonal: '',
    rightDiagonal: ''
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const calculateArrows = () => {
      if (!containerRef.current || !mainOfferRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      
      // Get main offer text position
      const mainOfferRect = mainOfferRef.current.getBoundingClientRect();
      const mainOfferBottomX = mainOfferRect.left + mainOfferRect.width / 2 - containerRect.left;
      const mainOfferBottomY = mainOfferRect.bottom - containerRect.top + 20;

      // Get box positions with offset for better spacing
      // Responsive arrow offset - smaller on mobile
      const arrowOffset = isMobile ? 8 : 20; // Smaller offset on mobile
      let publicSpeakingTop = { x: 0, y: 0 };
      let publicSpeakingBottom = { x: 0, y: 0 };
      let financialLiteracyTop = { x: 0, y: 0 };
      let financialLiteracyBottom = { x: 0, y: 0 };
      let creativeThinkingTop = { x: 0, y: 0 };
      let leadershipTop = { x: 0, y: 0 };

      if (publicSpeakingRef.current) {
        const rect = publicSpeakingRef.current.getBoundingClientRect();
        publicSpeakingTop.x = rect.left + rect.width / 2 - containerRect.left;
        publicSpeakingTop.y = rect.top - containerRect.top;
        publicSpeakingBottom.x = rect.left + rect.width / 2 - containerRect.left;
        publicSpeakingBottom.y = rect.bottom - containerRect.top;
      }

      if (financialLiteracyRef.current) {
        const rect = financialLiteracyRef.current.getBoundingClientRect();
        financialLiteracyTop.x = rect.left + rect.width / 2 - containerRect.left;
        financialLiteracyTop.y = rect.top - containerRect.top;
        financialLiteracyBottom.x = rect.left + rect.width / 2 - containerRect.left;
        financialLiteracyBottom.y = rect.bottom - containerRect.top;
      }

      if (creativeThinkingRef.current) {
        const rect = creativeThinkingRef.current.getBoundingClientRect();
        creativeThinkingTop.x = rect.left + rect.width / 2 - containerRect.left;
        creativeThinkingTop.y = rect.top - containerRect.top;
      }

      if (leadershipRef.current) {
        const rect = leadershipRef.current.getBoundingClientRect();
        leadershipTop.x = rect.left + rect.width / 2 - containerRect.left;
        leadershipTop.y = rect.top - containerRect.top;
      }

      // Calculate arrow paths with offset to avoid touching boxes
      // Arrows end slightly before reaching the box (arrowOffset pixels)
      const topLeft = `M ${mainOfferBottomX} ${mainOfferBottomY} L ${publicSpeakingTop.x} ${publicSpeakingTop.y - arrowOffset}`;
      const topRight = `M ${mainOfferBottomX} ${mainOfferBottomY} L ${financialLiteracyTop.x} ${financialLiteracyTop.y - arrowOffset}`;
      
      // Diagonal arrows from top boxes to bottom boxes with offset
      const leftDiagonal = `M ${publicSpeakingBottom.x} ${publicSpeakingBottom.y + arrowOffset} L ${creativeThinkingTop.x} ${creativeThinkingTop.y - arrowOffset}`;
      const rightDiagonal = `M ${financialLiteracyBottom.x} ${financialLiteracyBottom.y + arrowOffset} L ${leadershipTop.x} ${leadershipTop.y - arrowOffset}`;

      setArrowPaths({
        topLeft,
        topRight,
        leftDiagonal,
        rightDiagonal
      });
    };

    // Delay to ensure DOM is rendered
    const timeoutId = setTimeout(calculateArrows, 100);
    window.addEventListener('resize', calculateArrows);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', calculateArrows);
    };
  }, [isMobile]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Subtle diagonal striped pattern background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-6 sm:mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-8">
            What You Won&apos;t Find Anywhere Else
          </h2>
        </div>

        {/* Main Offer Text and Diagram Section */}
        <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="relative">
            {/* Main Offer Text - positioned for arrows to connect */}
            <div className="text-center mb-8 sm:mb-16 relative z-10">
              <p className="text-sm sm:text-base lg:text-2xl text-gray-700 mb-2 sm:mb-4 max-w-4xl mx-auto px-2">
                not only teach Business, but also essential life skills such as:
              </p>
              <p 
                ref={mainOfferRef}
                className="text-base sm:text-lg lg:text-3xl font-bold text-gray-900 underline max-w-4xl mx-auto relative px-2" 
                id="main-offer-text"
              >
                Pay once in Business Class for teenagers GET Free tuition Program
              </p>
            </div>

            {/* Diagram with arrows connecting from main offer */}
            <div ref={containerRef} className="relative" style={{ minHeight: isMobile ? '150px' : '500px' }}>
              {/* SVG Container for all arrows - positioned absolutely with precise coordinates */}
              <svg 
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                style={{ height: '100%', overflow: 'visible' }}
              >
                <defs>
                  <marker 
                    id="arrowhead-diagonal" 
                    markerWidth="8" 
                    markerHeight="8" 
                    refX="4" 
                    refY="2.5" 
                    orient="auto"
                    markerUnits="strokeWidth"
                  >
                    <polygon points="0 0, 8 2.5, 0 5" fill="#1f2937" />
                  </marker>
                </defs>
                
                {/* Left arrow from center (below main offer text) to left box top */}
                {arrowPaths.topLeft && (
                  <path 
                    d={arrowPaths.topLeft} 
                    stroke="#1f2937" 
                    strokeWidth={isMobile ? 1.5 : 2.5}
                    fill="none"
                    markerEnd="url(#arrowhead-diagonal)"
                  />
                )}
                
                {/* Right arrow from center (below main offer text) to right box top */}
                {arrowPaths.topRight && (
                  <path 
                    d={arrowPaths.topRight} 
                    stroke="#1f2937" 
                    strokeWidth={isMobile ? 1.5 : 2.5}
                    fill="none"
                    markerEnd="url(#arrowhead-diagonal)"
                  />
                )}
                
                {/* Left diagonal arrow from PUBLIC SPEAKING CLASS to CREATIVE THINKING */}
                {arrowPaths.leftDiagonal && (
                  <path 
                    d={arrowPaths.leftDiagonal} 
                    stroke="#1f2937" 
                    strokeWidth={isMobile ? 1.5 : 2.5}
                    fill="none"
                    markerEnd="url(#arrowhead-diagonal)"
                  />
                )}
                
                {/* Right diagonal arrow from FINANCIAL LITERACY to LEADERSHIP */}
                {arrowPaths.rightDiagonal && (
                  <path 
                    d={arrowPaths.rightDiagonal} 
                    stroke="#1f2937" 
                    strokeWidth={isMobile ? 1.5 : 2.5}
                    fill="none"
                    markerEnd="url(#arrowhead-diagonal)"
                  />
                )}
              </svg>

              {/* Content Grid with precise positioning - always 2 columns, smaller on mobile */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8 lg:gap-16 relative z-10">
                {/* Left Branch: Public Speaking Class */}
                <div className="relative mt-12 sm:mt-20 lg:mt-24">
                  {/* Main Skill Box */}
                  <div 
                    ref={publicSpeakingRef}
                    id="public-speaking-box"
                    className="bg-white border-2 border-gray-900 rounded-lg p-2 sm:p-4 lg:p-6 shadow-lg text-center"
                  >
                    <h3 className="text-[10px] sm:text-sm md:text-lg lg:text-2xl font-bold text-gray-900 leading-tight">
                      PUBLIC SPEAKING CLASS
                    </h3>
                  </div>

                  {/* Sub-skill Box - positioned diagonally down-left */}
                  <div 
                    ref={creativeThinkingRef}
                    id="creative-thinking-box"
                    className="bg-white border-2 border-gray-900 rounded-lg p-2 sm:p-4 lg:p-6 shadow-lg text-center mt-8 sm:mt-12 lg:mt-16 -ml-1 sm:-ml-2 md:-ml-4 lg:-ml-8"
                  >
                    <h4 className="text-[10px] sm:text-sm md:text-base lg:text-xl font-bold text-gray-900 leading-tight">
                      CREATIVE THINKING
                    </h4>
                  </div>
                </div>

                {/* Right Branch: Financial Literacy */}
                <div className="relative mt-12 sm:mt-20 lg:mt-24">
                  {/* Main Skill Box */}
                  <div 
                    ref={financialLiteracyRef}
                    id="financial-literacy-box"
                    className="bg-white border-2 border-gray-900 rounded-lg p-2 sm:p-4 lg:p-6 shadow-lg text-center"
                  >
                    <h3 className="text-[10px] sm:text-sm md:text-lg lg:text-2xl font-bold text-gray-900 leading-tight">
                      FINANCIAL LITERACY
                    </h3>
                  </div>

                  {/* Sub-skill Box - positioned diagonally down-right */}
                  <div 
                    ref={leadershipRef}
                    id="leadership-box"
                    className="bg-white border-2 border-gray-900 rounded-lg p-2 sm:p-4 lg:p-6 shadow-lg text-center mt-8 sm:mt-12 lg:mt-16 -mr-1 sm:-mr-2 md:-mr-4 lg:-mr-8"
                  >
                    <h4 className="text-[10px] sm:text-sm md:text-base lg:text-xl font-bold text-gray-900 leading-tight">
                      LEADERSHIP
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueOffer;

