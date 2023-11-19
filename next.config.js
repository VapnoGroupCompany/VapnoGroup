/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/de', // можна змінити на іншу мову, якщо потрібно
            permanent: true,
          },
        ];
      },
}
const withNextIntl = require('next-intl/plugin')(
  
)
module.exports = withNextIntl(nextConfig);
