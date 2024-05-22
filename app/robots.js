/*
 * @Date: 2024-05-22 15:58:45
 * @Description: description
 */
import siteMetadata from '@/data/siteMetadata'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
    host: siteMetadata.siteUrl,
  }
}