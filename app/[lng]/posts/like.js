/*
 * @Date: 2024-05-24 10:22:29
 * @Description: description
 */
'use client';

import { useTranslation } from '@/app/i18n/client.js';

export default function Like({ lng }) {
    const { t } = useTranslation(lng);
    return <button>{t('like')}</button>
}