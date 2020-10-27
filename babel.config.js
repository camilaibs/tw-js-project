module.exports = {
  plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-private-methods'],
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]]
};
