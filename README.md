# iOS Silent Bypass

iOS Silent Bypass is a library that allows you to play audio context even if the user has the [action button/silent switch on](https://support.apple.com/guide/iphone/silence-iphone-iph81c7fd7d1/ios).
You'll need to wait for an user interaction to check if the audio context is allowed.

## Usage

```bash
npm install @activetheory/ios-silent-bypass
```

```js
import SilentBypass from '@activetheory/ios-silent-bypass';

function isIOS() {
  return navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad');
}

let silentBypass;

if (isIOS()) {
  silentBypass = new SilentBypass();
}

// after the library is initialized, you can check if the audio context is allowed
console.log(silentBypass?.allowed);

// if you want to remove the event listeners after the audio context is allowed, you can call the destroy method
silentBypass?.destroy();
```

## License

MIT
