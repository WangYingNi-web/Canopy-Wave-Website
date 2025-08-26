import React, { useState } from 'react';
import { useRouter } from 'next/router';
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: Record<string, any>[];
  }
}
// Google Analytics 事件追踪函数

const trackFeedbackEvent = (feedbackType: string, pageTitle: string, pagePath: string) => {
  // 添加调试日志
  console.log('发送 GA 事件前:', { feedbackType, pageTitle, pagePath });
  
  // 检查 gtag 是否可用
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'document_feedback', {
      event_category: 'engagement',
      event_label: pageTitle,
      feedback_type: feedbackType,
      page_path: pagePath,
      value: feedbackType === 'yes' ? 1 : 0
    });
    console.log('gtag 事件已发送');
  } else {
    console.error('gtag 未定义');
  }

  // 检查 dataLayer 是否可用
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'document_feedback_custom',
      event_category: 'engagement',
      event_label: pageTitle,
      feedback_type: feedbackType,
      page_path: pagePath,
      value: feedbackType === 'yes' ? 1 : 0
    });
    console.log('dataLayer 事件已发送');
  } else {
    console.error('dataLayer 未定义');
  }
};

export default function DocumentFeedback({ pageTitle }: { pageTitle?: string }) {
  const router = useRouter();
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleFeedback = (value: 'yes' | 'no') => {
    const currentPageTitle = pageTitle || document.title;
    const currentPagePath = router.asPath;

    // 发送 Google Analytics 事件
    trackFeedbackEvent(value, currentPageTitle, currentPagePath);

    setFeedback(value);
    setHasSubmitted(true);

    console.log('反馈已发送到Google Analytics:', {
      feedback: value,
      pageTitle: currentPageTitle,
      pagePath: currentPagePath
    });
  };

  return (
    <div className="bg-gray-50">
      <h3 className="text-l text-gray-600 mb-4">
        Was this page helpful ?
      </h3>

      {!hasSubmitted ? (
        <div className="flex gap-3">
          <button
            onClick={() => handleFeedback('yes')}
            className="flex items-center gap-2 px-4 py-1 bg-white border-[1px] border-[#80B224] text-sm text-[#80B224] rounded-md hover:bg-green-50 transition-colors font-medium"
          >
            👍 Yes
          </button>
          <button
            onClick={() => handleFeedback('no')}
            className="flex items-center gap-2 px-4 py-1 bg-white border-[1px] border-[#80B224] text-sm text-[#80B224] rounded-md hover:bg-green-50 transition-colors font-medium"
          >
            👎 No
          </button>
        </div>
      ) : (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mr-6">
          <p className="text-[#80B224] text-sm">
            Thank you! <br />
            Your opinion helps us make better documentation.
          </p>
        </div>
      )}
    </div>
  );
}