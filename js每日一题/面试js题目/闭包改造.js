for (var i = 0; i < 4; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j)
        }, 300)
    })(i)
}