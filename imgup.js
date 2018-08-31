$(document).ready(function(){
	$pic = $('<img id = "image" width = "100%" height = "100%"/>');
	$("#file").change(function(){
		var files = !!this.files ? this.files : [];
		if(!files.length || !window.FileReader){
			$("#image").remove();
		}
		if(/^image/.test(files[0].type)){
			var reader = new FileReader();
			reader.readAsDataURL(files[0]);
			reader.onloadend = function(){
				$pic.appendTo("#preview");
				$("#image").attr("src", this.result);
			}
 
		}
	});
});
