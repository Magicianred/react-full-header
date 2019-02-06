# React Full Header Component

[![Build Status](https://travis-ci.org/gabriel-hahn/react-full-header.svg?branch=master)](https://travis-ci.org/gabriel-hahn/react-full-header) [![Coverage Status](https://coveralls.io/repos/github/gabriel-hahn/react-full-header/badge.svg?branch=master)](https://coveralls.io/github/gabriel-hahn/react-full-header?branch=master) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/gabriel-hahn/react-full-header/pulls) [![Bugs](https://img.shields.io/github/issues/gabriel-hahn/react-full-header/bug.svg)](https://github.com/gabriel-hahn/react-full-header/issues?utf8=?&q=is%3Aissue+is%3Aopen+label%3Abug) [![The MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)

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
