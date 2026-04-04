
(function() {
    var resourceCache = {};
    var readyCallbacks = [];

    // Load an image url or an array of image urls
    function load(urlOrArr) {
        if(urlOrArr instanceof Array) {
            urlOrArr.forEach(function(url) {
                _load(url);
            });
        }
        else {
            _load(urlOrArr);
        }
    }

    function _load(url) {
        if(resourceCache[url]) {
            return resourceCache[url];
        }
        else {
            var img = new Image();
            img.onload = function() {
                resourceCache[url] = img;
                
                if(isReady()) {
                    readyCallbacks.forEach(function(func) { func(); });
                }
            };
            resourceCache[url] = false;
            img.src = url;
        }
    }

    function get(url) {
        return resourceCache[url];
    }

    function isReady() {
        var ready = true;
        for(var k in resourceCache) {
            if(resourceCache.hasOwnProperty(k) &&
               !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    function onReady(func) {
        readyCallbacks.push(func);
    }

    // Lista de imágenes de tecnologías para enemigos
    var techImages = [
        'img/game/tech/c.png',
        'img/game/tech/c_.png',
        'img/game/tech/c__.png',
        'img/game/tech/java.png',
        'img/game/tech/python.png',
        'img/game/tech/swift.png',
        'img/game/tech/html5.png',
        'img/game/tech/css3.png',
        'img/game/tech/javascript.png',
        'img/game/tech/bootstrap.png',
        'img/game/tech/angular.png',
        'img/game/tech/androidstudio.png',
        'img/game/tech/mysql.png',
        'img/game/tech/unity.png',
        'img/game/tech/opengl.png',
        'img/game/tech/blender.png',
        'img/game/tech/autodesk3dsmax.png',
        'img/game/tech/cocos2d.png',
        'img/game/tech/cpctelera.png',
        'img/game/tech/ensamblador.png'
    ];

    // Dimensiones de cada imagen
    var techSizes = {
        'img/game/tech/c.png': [35, 36],
        'img/game/tech/c_.png': [46, 36],
        'img/game/tech/c__.png': [58, 36],
        'img/game/tech/java.png': [65, 36],
        'img/game/tech/python.png': [88, 36],
        'img/game/tech/swift.png': [68, 36],
        'img/game/tech/html5.png': [87, 36],
        'img/game/tech/css3.png': [73, 36],
        'img/game/tech/javascript.png': [122, 36],
        'img/game/tech/bootstrap.png': [115, 36],
        'img/game/tech/angular.png': [96, 36],
        'img/game/tech/androidstudio.png': [165, 36],
        'img/game/tech/mysql.png': [89, 36],
        'img/game/tech/unity.png': [70, 36],
        'img/game/tech/opengl.png': [99, 36],
        'img/game/tech/blender.png': [95, 36],
        'img/game/tech/autodesk3dsmax.png': [196, 36],
        'img/game/tech/cocos2d.png': [105, 36],
        'img/game/tech/cpctelera.png': [120, 36],
        'img/game/tech/ensamblador.png': [147, 36]
    };

    window.resources = { 
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady,
        techImages: techImages,
        techSizes: techSizes
    };
})();
