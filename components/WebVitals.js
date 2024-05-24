/*
 * @Date: 2024-05-24 14:26:02
 * @Description: description
 */
'use client'

import { useReportWebVitals } from 'next/web-vitals';

/* 上报网络的数据 */
export default function WenVitals() {
    useReportWebVitals((metric) => {
        console.log(metric);

        const body = JSON.stringify(metric);
        const url = 'http://localhost:4001/report';

        if (navigator.sendBeacon) {
            navigator.sendBeacon(url, body);
        } else {
            fetch(url, { body, method: 'POST', keepalive: true });
        }
    })
}