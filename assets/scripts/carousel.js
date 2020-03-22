
    var images = [
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR43jTmWTzNyqMYknZyfVbx6m-UTK01zze7hL_xXqApNL2xV7dz",
        alt: "birthday-card"
    },
    {
        src: "https://image.shutterstock.com/image-photo/fountain-pen-on-aged-paper-260nw-586546133.jpg",
        alt: "Wedding-card",
    }
    ]

    $(document).ready(function () {
        console.log("jkrfjek");
        $(".carousel").on("click", function () {
            $(".carousel-item").each(function(){
                console.log("bfeutk");
                if($(this).hasClass("active")){
                    var img = $(this).find(".img-item")[0]
                    var src = $(img).attr("src")
                    $("#dispImg").attr("src", src)
                }
            })
        })
        buildCarousel()
    })

    function buildCarousel() {
    for (var i = 0; i < images.length; i++) {
        var li = $("<li>")
        li.data("slide-to", i)
        var div = $("<div class='carousel-item'>")
        var img = $("<img>")
        img.addClass("img-item")
        img.attr("src", images[i].src)
        img.attr("alt", images[i].alt)
        if (i === 0) {
            li.addClass("active")
            div.addClass("active")
        }
        div.append(img)
        $(".carousel-inner").append(div)
        $(".carousel-indicators").append(li)
    }
}