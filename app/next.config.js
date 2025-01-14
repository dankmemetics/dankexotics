/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')([
    '@solana/wallet-adapter-base',
    '@solana/wallet-adapter-react',
    '@solana/wallet-adapter-wallets',
    '@solana/wallet-adapter-react-ui',
]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
    reactStrictMode: true,
    webpack5: true,
});