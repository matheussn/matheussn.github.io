$.getJSON("src/core/assets/json/teste.json", function(data){
    NavBar(data.navbar);
    SideNav(data.sidenav);
    Main(data.main);
    Footer(data.footer);
});

$(document).ready(function(){
    $('.sidenav').sidenav();
});

function NavBar(n){
    var nav = $("<nav></nav>").addClass("navbar")
        .append(
            $('<a></a>').addClass('sidenav-trigger').attr('data-target', 'info').append(
                $('<i></i>').addClass("material-icons")
                .append("menu")
                .attr("style", "color: "+n.iconColor + ";")
            )
        )
    $("header").append(nav);
}

function SideNav(s){
    var sidenav = $('<div></div>');
    $('main').append(sidenav);
    var ul = $('<ul></ul>').addClass("sidenav sidenav-fixed user-view").attr('id', 'info');

    sidenav.append(ul);

    s.info.forEach(e => {
        if(Array.isArray(e)){
            var soc = $('<li></li>').addClass("center");
            var socD = $('<div></div>').addClass("container");
            soc.append(socD);
            e.forEach(e => {
                socD.append($('<div></div>').addClass("inline").append(
                    $('<a></a>').attr('href',e.link).append(
                        $('<img></img>').attr('src', e.icon)
                            .attr('height', 40)
                            .attr('width', 40)
                            .attr('style', 'margin-right: 5px;')
                    )
                ));
            });
            ul.append(soc);
        }

        if(e.name){
            var ftname = $('<li></li>').addClass('user-view center');
            var img = $('<div><a><img></img></a></div>');
            img.addClass("divCenter");
            $('img', img).attr("src", e.image).addClass("circle img-user");
            var name = $("<a><span></span></a>");
            name.attr('href', '#name');
            $('span', name).addClass("name").append(e.name);
            ftname.append(img, name);
            ul.append(ftname);
        }

        if(e.contato){
            var init = $('<li><div></div></li>').addClass('center');
            $('div', init)
            .addClass("container")
            .append(
                $('<a></a>').addClass('text-email').append(
                    $("<i></i>").addClass(e.class).append("email"),
                    $("<span></span>").addClass("email").append(e.contato)
                )
            )
            ul.append(init);
        }
    })

    ul.append("<li><div class=\"divider divider-m\"></div></li>");

    s.text.forEach(e => {
        var init = $("<li><div></div></li>");
        var titleicon = $("<i></i>")
            .addClass("material-icons icon-email")
            .append(e.icon);
        var title = $("<span></span>").addClass('titulo-texts').append(e.title);
        var content;

        if(Array.isArray(e.content)){
            content = $("<div></div>");
            e.content.forEach(e =>{
                var contents = $("<div></div>").attr('id', 'informacoes').addClass("row");
                contents.append(
                    $("<h6></h6>").addClass("subtitle").append(e.subtitle)
                )
                e.content.forEach(e => {
                    if(e.title){
                        contents.append(
                            $("<div></div").addClass("container")
                            .append(
                                $("<h6></h6>").append(e.title + ": " + e.content)
                            )
                        )
                    }else{
                        contents.append(
                            $("<div></div").addClass("interesses col s6")
                            .append(
                                $("<i></i>").append(e.icon).addClass("tiny material-icons icon-email"),
                                $("<span></span>").append(e.content)
                            )
                        )
                    }
                })
                content.append(contents);
            });
        }else{
            content = $("<h6></h6>").append(e.content)
        }

        $('div', init).addClass("container")
        .attr('id', 'conteudo')
        .append(
            $("<div></div>").attr('align', "justify").append(
                titleicon, title,content
            )
        )
        ul.append(init);
    })
}

function Main(m){

}

function Footer(f){

}