
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

    // Controles táctiles
    const touchMap = {
        'btn-up':    'UP',
        'btn-down':  'DOWN',
        'btn-shoot': 'SHOOT'
    };
    
    Object.keys(touchMap).forEach(function(id) {
        const btn = document.getElementById(id);
        const key = touchMap[id];
    
        btn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            pressedKeys[key] = true;
        }, { passive: false });
    
        btn.addEventListener('touchend', function(e) {
            e.preventDefault();
            pressedKeys[key] = false;
        }, { passive: false });
    });
})();
