const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio-site' : '',
    images: {
      unoptimized: true,
    },
  };
  