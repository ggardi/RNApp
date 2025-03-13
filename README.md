# React Native WebView Login App

A simple React Native application that demonstrates a login flow using WebView to display a web-based authentication page.

## Features

- Clean and modern UI with a simple login button
- WebView integration for displaying web content
- Navigation between screens using React Navigation
- Safe area support for modern devices
- Error handling and navigation state tracking

## Prerequisites

- Node.js >= 18
- Yarn package manager
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- JDK 17

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd RNApp
```

2. Install dependencies:
```bash
yarn install
```

3. For iOS, install pods:
```bash
cd ios && pod install && cd ..
```

## Running the App

### Android

1. Start Metro bundler:
```bash
yarn start
```

2. In a new terminal, run the app:
```bash
yarn android
```

### iOS

1. Start Metro bundler:
```bash
yarn start
```

2. In a new terminal, run the app:
```bash
yarn ios
```

## Project Structure

```
RNApp/
├── App.js              # Main application component with navigation setup
├── Home.js             # Home screen with login button
├── WebViewScreen.js    # WebView component for displaying web content
├── android/            # Android specific files
├── ios/               # iOS specific files
└── package.json       # Project dependencies and scripts
```

## Dependencies

- @react-navigation/native
- @react-navigation/native-stack
- react-native-webview
- react-native-safe-area-context
- react-native-screens
- react-native-gesture-handler

## Development

The app uses:
- React Native 0.74.1
- React Navigation for screen management
- WebView for displaying web content
- SafeAreaView for proper layout on devices with notches

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
