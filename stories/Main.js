import React from 'react';
import FullHeader from '../src/Main';
import { storiesOf } from '@storybook/react';

storiesOf('<FullHeader />', module)
    .add('with title', () => (
        <FullHeader title="TDD" />
    ))
    .add('with title and subtitle', () => (
        <FullHeader title="TDD" subtitle="What is tested may never break." />
    ))
    .add('with title, subtitle and bgColor', () => (
        <FullHeader
            title="TDD"
            subtitle="What is tested may never break."
            bgColor="#3299BB"
        />
    ))
    .add('with title, subtitle, bgColor and textColor', () => (
        <FullHeader
            title="TDD"
            subtitle="What is tested may never break."
            bgColor="#3299BB"
            textColor="#FF9900"
        />
    ))
    .add('with title, subtitle, bgColor, textColor, font', () => (
        <FullHeader
            title="TDD"
            subtitle="What is tested may never break."
            bgColor="#3299BB"
            textColor="#FF9900"
            font="cursive"
        />
    ))
    .add('with title, subtitle and bgImage', () => (
        <FullHeader
            title="TDD"
            subtitle="What is tested may never break."
            bgImage="https://i.imgur.com/YBFJOJd.png"
        />
    ))
    .add('with title, subtitle and video', () => (
        <FullHeader
            title="TDD"
            subtitle="What is tested may never break."
            video="http://callmenick.com/_development/video/full-screen-background-video/media/demo.mp4"
        />
    ));
