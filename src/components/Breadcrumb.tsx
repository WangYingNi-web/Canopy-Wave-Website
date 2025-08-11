import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav className={`flex items-center space-x-2 text-sm text-gray-600 ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index === items.length - 1 ? (
            // 最后一项不可点击，显示为当前页面
            <span className="text-gray-900 font-medium">
              {item.label}
            </span>
          ) : (
            // 其他项可点击
            <Link 
              href={item.href}
              className="hover:text-[#80B224] transition-colors duration-200"
            >
              {item.label}
            </Link>
          )}
          {index < items.length - 1 && (
            <span className="text-gray-400 select-none">`{'>'}`</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

export default Breadcrumb