# React Full Header Component

[![Build Status](https://travis-ci.org/gabriel-hahn/react-full-header.svg?branch=master)](https://travis-ci.org/gabriel-hahn/react-full-header)

![A gif with header containing video](https://media.giphy.com/media/l0MYPKsMPCK0YNFvy/giphy.gif)

## Installation

```sh
$ npm install --save react-full-header-generic
```

## Basic Usage

```jsx
import FullHeader from 'react-full-header-generic';

...
render() {
    return (
        <FullHeader
            title="Full Header"
            subtitle="What is tested may never break."
            bgColor="#EBE9EB"
            textColor="#3299BB"
            font="Lobster"
            video="videos/my_video.mp4"
        />
    );
}
...
```

## Props

- `title` (string) - main title
- `subtitle` (string) - subtitle
- `bgColor` (string) - background color
- `bgImg` (string) - image to background
- `video` (string) - video to background
- `textColor` (string) - texts color
- `font` (string) - font-family to texts

## Architecture

We've developed this component using the following boilerplate:
[lyef-react-component](https://github.com/lyef/lyef-react-component).

If you want to contribute with this component:
[Contributing Documentation](https://github.com/gabriel-hahn/react-full-header/blob/master/CONTRIBUTING.md).

## Authors

[Gabriel Hahn Schaeffer](https://github.com/gabriel-hahn/) | 
[Willian Justen](https://github.com/willianjusten/) (Teacher)

## License

[MIT License](https://github.com/gabriel-hahn/react-full-header/blob/master/LICENSE.md)
