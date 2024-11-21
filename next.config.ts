import type { NextConfig } from 'next'

const path = require('node:path')

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            titleProp: true,
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    })
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
}

export default nextConfig
