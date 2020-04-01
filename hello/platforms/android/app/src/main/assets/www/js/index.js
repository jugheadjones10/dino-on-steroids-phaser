
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false)
        document.addEventListener('pause', this.onDevicePause, false)
        document.addEventListener('resume', this.onDeviceResume, false)
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready')

    },

    onDevicePause: function(){
        this.sound.pauseAll()
    },

    onDeviceResume: function(){
        this.sound.resumeAll()
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
        //screen.orientation.lock('landscape')
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
    }
}

app.initialize()