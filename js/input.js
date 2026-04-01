
(function () {
    var pressedKeys = {};

    function setKey(event, status) {
        var code = event.key;
        var key;

        switch (code.toLowerCase()) {
            case 'k':
                key = 'SHOOT'; break;
            case 'w':
                key = 'UP'; break;
            case 's':
                key = 'DOWN'; break;
            default:
                key = code;
        }

        pressedKeys[key.toUpperCase()] = status;
    }

    document.addEventListener('keydown', function (e) {
        setKey(e, true);
    });

    document.addEventListener('keyup', function (e) {
        setKey(e, false);
    });

    window.addEventListener('blur', function () {
        pressedKeys = {};
    });

    window.input = {
        isDown: function (key) {
            return pressedKeys[key.toUpperCase()];
        }
    };
})();