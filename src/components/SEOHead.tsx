import Head from 'next/head'
import { useRouter } from 'next/router'

interface SEOHeadProps {
  title?: string
  description?: string
  image?: string
  type?: string
}

export default function SEOHead({ 
  title = "Canopy Wave - High-Performance Computing Solutions",
  description = "Leading provider of GPU computing, cloud infrastructure, and AI solutions with sustainable data centers in Iceland.",
  image = "/canopy.png",
  type = "website"
}: SEOHeadProps) {
  const router = useRouter()
  const currentUrl = `https://canopywave.com${router.asPath}`
  const fullImageUrl = image.startsWith('http') ? image : `https://canopywave.com${image}`
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Canopy Wave" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* LinkedIn */}
      <meta property="article:author" content="Canopy Wave" />
      <link rel="canonical" href={currentUrl} />
    </Head>
  )
}