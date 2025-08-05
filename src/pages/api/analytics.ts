import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { page, timestamp, userAgent } = req.body
    
    // 这里可以记录到你的数据库或日志文件
    console.log('页面访问:', {
      page,
      timestamp,
      userAgent: userAgent?.substring(0, 100), // 截取前100字符
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    })
    
    res.status(200).json({ success: true })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}