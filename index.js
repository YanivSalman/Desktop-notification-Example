function notifyMe() {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        facebookN()
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission(function(permission) {
            if (permission === "granted") {
                facebookN()
            }
        });
    }

    function facebookN() {
        const notification = new Notification('like us on facebook', {
            icon: 'faceb.jpg',
            body: 'YanivMedia',
        });
        notification.onclick = function() {
            window.open('http://facebook.com');
        };
        SetTimeout(notification.close.bind(notification), 8000)
    }
}

notifyMe()