import Echo from 'laravel-echo';
import Pusher from 'pusher-js'; // لازال مطلوب لأن Reverb يعتمد على نفس البروتوكول

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'reverb',
    key: 'local', // أو أي قيمة لأن Reverb لا يتحقق من المفتاح فعليًا
    wsHost: 'localhost',
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
});
