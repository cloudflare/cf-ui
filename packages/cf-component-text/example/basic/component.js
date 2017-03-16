import React from 'react';
import { Text, TextTheme } from 'cf-component-text';
import { applyTheme } from 'cf-style-container';

const StyledText = applyTheme(Text, TextTheme);

const TextComponent = () => (
    <div>
        <p>Specify a <code>size</code></p>
        <StyledText size="normal">Hello World</StyledText>
        <StyledText size="small">Hello World</StyledText>

        <p>and/or an <code>align</code></p>
        <StyledText align="start">Hello World</StyledText>
        <StyledText align="center">Hello World</StyledText>
        <StyledText align="justify">Hello World</StyledText>
        <StyledText align="end">Hello World</StyledText>

        <p>and/or a <code>type</code></p>
        <StyledText type="info">Hello World</StyledText>
        <StyledText type="success">Hello World</StyledText>
        <StyledText type="warning">Hello World</StyledText>
        <StyledText type="error">Hello World</StyledText>
        <StyledText type="muted">Hello World</StyledText>

        <p>and/or a <code>case</code></p>
        <StyledText case="capitalize">hello world</StyledText>
        <StyledText case="titlecase">hello world</StyledText>
        <StyledText case="lowercase">Hello World</StyledText>
        <StyledText case="uppercase">Hello World</StyledText>
    </div>
);

export default TextComponent;
