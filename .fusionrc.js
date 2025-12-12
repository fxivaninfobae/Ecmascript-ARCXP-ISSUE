module.exports = {
  webpack: (config) => {
    // Agregar extensión .mjs a las extensiones resueltas
    config.resolve.extensions.push('.mjs');
    config.resolve.fullySpecified = false;

    // Agregar regla para procesar archivos .mjs de node_modules con babel-loader
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: 'auto',
              },
            ],
            '@babel/preset-react',
          ],
          sourceType: 'unambiguous',
        },
      },
    });

    return config;
  },
};

