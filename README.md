# iOS Silent Bypass

iOS Silent Bypass is a library that allows you to play audio context even if the user has the Silent switch on.
You'll need to wait for an user interaction to check if the audio context is allowed.

## Usage

```bash
npm install @activetheory/ios-silent-bypass
```

```js
import SilentHack from '@activetheory/ios-silent-bypass';

const silentHack = new SilentHack();

// after the library is initialized, you can check if the audio context is allowed
console.log(silentHack.allowed);

// if you want to remove the event listeners after the audio context is allowed, you can call the destroy method
silentHack.destroy();
```

## License

MIT
