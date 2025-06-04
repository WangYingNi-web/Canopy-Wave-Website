// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import Image from 'next/image';

// export default function EuropeMap() {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { amount: 0.5 });
  
//     return (
//       <div ref={ref} className="w-full h-[600px] relative">
//         {/* 背景世界地图 */}
//         <Image
//           src="/World.svg"
//           alt="World Map"
//           width={1000}
//           height={600}
//           className="w-full h-full object-contain"
//           priority
//         />
  
//         {/* 发光点效果层 */}
//         <div className="absolute inset-0">
//           <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
//             {/* 冰岛发光点 */}
//             <motion.circle
//               cx="500"
//               cy="100"
//               r="8"
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: isInView ? 0.8 : 0,
//                 scale: isInView ? [1, 1.5, 1] : 1
//               }}
//               transition={{
//                 duration: 2,
//                 ease: "easeInOut",
//                 repeat: Infinity,
//                 repeatType: "reverse"
//               }}
//               fill="#8CC63F"
//               filter="url(#glow)"
//             />
  
//             {/* 英国发光点 */}
//             <motion.circle
//               cx="450"
//               cy="150"
//               r="8"
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: isInView ? 0.8 : 0,
//                 scale: isInView ? [1, 1.5, 1] : 1
//               }}
//               transition={{
//                 duration: 2,
//                 ease: "easeInOut",
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 delay: 0.3
//               }}
//               fill="#8CC63F"
//               filter="url(#glow)"
//             />
  
//             {/* 西班牙发光点 */}
//             <motion.circle
//               cx="420"
//               cy="200"
//               r="8"
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: isInView ? 0.8 : 0,
//                 scale: isInView ? [1, 1.5, 1] : 1
//               }}
//               transition={{
//                 duration: 2,
//                 ease: "easeInOut",
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 delay: 0.6
//               }}
//               fill="#8CC63F"
//               filter="url(#glow)"
//             />
  
//             {/* 发光效果滤镜 */}
//             <defs>
//               <filter id="glow">
//                 <feGaussianBlur stdDeviation="4" result="coloredBlur" />
//                 <feMerge>
//                   <feMergeNode in="coloredBlur" />
//                   <feMergeNode in="SourceGraphic" />
//                 </feMerge>
//               </filter>
//             </defs>
//           </svg>
//         </div>
//       </div>
//     );
//   }