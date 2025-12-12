module.exports = function(api) {
  api.cache(true);
  
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: 'auto',
        },
      ],
      '@babel/preset-react',
    ],
    // Asegurar que los módulos ES se procesen correctamente
    sourceType: 'unambiguous',
  };
};

