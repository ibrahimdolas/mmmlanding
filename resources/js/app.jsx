import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import {lang} from "@/commonFunctions.js";

import moment from "moment-timezone";
import 'moment/dist/locale/tr'
import 'moment/dist/locale/it'
import 'moment/dist/locale/ro'

const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
    const [name, value] = cookie.split('=')
    acc[name] = value
    return acc
}, {})

const locale = cookies['Accept-Language'] || 'en'
moment.locale(locale)

const appName = lang(import.meta.env.VITE_APP_NAME) || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(document.getElementById('page_root'));

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
