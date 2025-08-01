import { useEffect, useState } from "react";
import Image from "next/image";

export default function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    // 如果你有用户权限系统，可以添加这个逻辑
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
                    setShowTooltip(false); // 打开聊天时隐藏提示
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
        <div className="relative flex items-center">
            {/* 提示气泡 */}
            {showTooltip && (
                <div className="relative mr-3 bg-white rounded-lg shadow-lg border border-gray-200 p-3 max-w-xs animate-fade-in">
                    {/* 关闭按钮 */}
                    <button
                        onClick={() => setShowTooltip(false)}
                        className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 w-4 h-4 flex items-center justify-center text-lg font-bold rounded-full hover:bg-gray-100 transition-colors"
                    >
                        ×
                    </button>

                    {/* 提示文本 */}
                    <p className="text-sm text-gray-800 pr-4">Hi. Need any help?</p>

                    {/* 气泡箭头 */}
                    <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
                        <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                        <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2">
                            <div className="w-0 h-0 border-l-8 border-l-gray-200 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                        </div>
                    </div>
                </div>
            )}

            {/* 聊天按钮 */}
            <button
                className={`${isOpen ? "opacity-0" : "opacity-100"
                    } ${isOpen ? "-translate-y-1/2" : "translate-y-0"
                    } transition-all duration-300 ease-in-out`}
                onClick={() => {
                    if (window.zE) {
                        window.zE("messenger", isOpen ? "close" : "open");
                    }
                }}
            >
                <Image 
                    src="/chat.svg" 
                    alt="Chat" 
                    width={65} 
                    height={65} 
                    priority={true}
                />
            </button>
        </div>
    );
}