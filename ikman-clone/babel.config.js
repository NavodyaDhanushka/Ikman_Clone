module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
        'react-native-worklets/plugin', // ✅ must be LAST
    ],
};
