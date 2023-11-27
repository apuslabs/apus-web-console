'use client';

import React from 'react';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { ConfigProvider, theme } from 'antd'

const StyledComponentsRegistry = ({ children }: { children: React.ReactNode }) => {
    const cache = React.useMemo<Entity>(() => createCache(), []);
    const isServerInserted = React.useRef<boolean>(false);
    useServerInsertedHTML(() => {
        // avoid duplicate css insert
        if (isServerInserted.current) {
            return;
        }
        isServerInserted.current = true;
        return <style id="antd" dangerouslySetInnerHTML={{__html: extractStyle(cache, true)}}/>
    });
    return <StyleProvider cache={cache}>
        <ConfigProvider theme={{
            token: {
                borderRadius: 8,
                colorBgBase: '#121212',
                colorError: '#FF4081',
                colorInfo: '#2196F3',
                colorLink: '#82B1FF',
                colorPrimary: '#673AB7',
                colorSuccess: '#4CAF50',
                colorTextBase: '#E0E0E0',
                colorWarning: '#FFC107',
                controlHeight: 32,
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
                fontSize: 14,
                lineType: 'solid',
                lineWidth: 1,
                motion: true,
                motionBase: 0,
                motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
                motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
                motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
                motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
                motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
                motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
                motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
                motionUnit: 0.1,
                opacityImage: 1,
                sizePopupArrow: 16,
                sizeStep: 4,
                sizeUnit: 4,
                wireframe: false,
                zIndexBase: 0,
                zIndexPopupBase: 1000
            },
            algorithm: [theme.darkAlgorithm]
        }}>{children}</ConfigProvider>
    </StyleProvider>;
};

export default StyledComponentsRegistry;