/*
 * @Date: 2024-05-22 10:12:28
 * @Description: next config
 */
import { withContentlayer } from 'next-contentlayer';
import bundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
// const nextConfig = {};

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(withContentlayer({

}));
