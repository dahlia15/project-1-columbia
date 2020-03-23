$(document).ready(function(){
    $("select.form-control").on("change", function() {      
        if(this.value == '0') {
            $(".birthday").hide();
        }
        if(this.value == '1') {
            $(".birthday").show();
        }
})});