
var pull_example = new Lungo.Element.Pull('#listado', {
    onPull: "Pull down to refresh",
    onRelease: "Release to get new data",
    onRefresh: "Refreshing...",
    callback: function() {
        alert("Pull & Refresh completed!");
        cargarDatos();
        pull_example.hide();
    }
});


/*
$$('.arrow a').tap(function() {
    var id = this.getAttribute("data-id");
    console.log(id);
});



 Lungo.dom('#detalle_terremoto').on("load", function(event) {
		  Lungo.Core.log(1," - detalle - ");
		  var id = this.getAttribute("data-id");
    console.log(id);

});*/