"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  // 如果有用户权限系统，可以添加这个逻辑
  // const userPermissions = useStore((state) => state.userPermissions);

  useEffect(() => {
    const script = document.createElement("script");
    script.id = "ze-snippet";
    script.src = "https://static.zdassets.com/ekr/snippet.js?key=5add6091-74b0-4922-b931-e76bf7e10a24";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.zE) {
        // 监听Zendesk聊天窗口的开关状态
        window.zE("messenger:on", "open", () => {
          setIsOpen(true);
        });
        window.zE("messenger:on", "close", () => {
          setIsOpen(false);
        });

        // 如果需要用户认证，可以添加这个逻辑
        // window.zE(
        //   "messenger",
        //   "loginUser",
        //   function (callback) {
        //     callback(userJWT); // 你的JWT token
        //   }
        // );
      }
    };

    return () => {
      const existingScript = document.getElementById("ze-snippet");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // 如果有管理员权限检查，取消注释下面这行
  // if (userPermissions?.isAdmin) return null;

  return (
    <button
      className={`${
        isOpen ? "opacity-0" : "opacity-100"
      } ${
        isOpen ? "-translate-y-1/2" : "translate-y-0"
      } transition-all duration-300 ease-in-out`}
      onClick={() => {
        if (window.zE) {
          window.zE("messenger", isOpen ? "close" : "open");
        }
      }}
    >
      <Image src="/chat.svg" alt="Chat" width={65} height={65} className="z-10"/>
    </button>
  );
}