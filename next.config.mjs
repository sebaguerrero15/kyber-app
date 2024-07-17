/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pics.filmaffinity.com',
        port: '',
        pathname: '/aOye_Arnold_Serie_de_TV-451908137-large.jpg',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/originals/64/18/8f/64188faa180afde4d36e69cf5636d4e2.jpg',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/M/MV5BMzYyNDU3ZTctYTQwYi00NjVmLTgwN2QtYmFmMTY5MjI0NDdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg',
      },
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
        port: '',
        pathname: '/images/hd/tmnt-1920-x-1080-wallpaper-bfheoo5r7l5m3qcs.jpg',
      },
      {
        protocol: 'https',
        hostname: 'pics.filmaffinity.com',
        port: '',
        pathname: '/samurai_jack_the_premiere_movie-766900773-large.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.adultswim.com',
        port: '',
        pathname: 'misc/samurai-jack-backgrounds/media/SAMURAI_JACK_1920X1080_Skulls.png',
      },
      {
        protocol: 'https',
        hostname: 'images.justwatch.com',
        port: '',
        pathname: '/poster/300678811/s718/fenomenoide.jpg',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/originals/fb/1a/97/fb1a97b949c12a30269f813ab996e2da.jpg',
      }
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Aplica CORS a todas las rutas
        headers: [
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://kyber-swart.vercel.app/api/series', // Cambia esto por el dominio que necesites permitir
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
