

//run at page load
window.onload = function() {
    generateProjects();
    generateGallery();
};

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
        $('.navbar-toggle:visible').click();
    }
});



projects = {
    alphabet:{
        title:"Alphabet Learning Assistant",
        date: "July, 2016",
        description:"A website meant to assist people wanting to learn different alphabets. The website heavily relies on javascript for displaying almost every element. It has been optimized for both mobile and pc usage. Currently allows the learning of 5 different alphabets, 3 of which belong to the japanese language.",
        img:"img/programming/8.png",
        buttons:{
            button_1:{
                text:"<i class='fa fa-link' aria-hidden='true'></i> <span class='network-name'>Visit Site</span>",
                link:"https://alexandra-mihalcea.github.io/Alphabet-Learning-Assistant/"
            },
            button_2:{
                text:"<i class='fa fa-github-alt' aria-hidden='true'></i> <span class='network-name'>View on GitHub</span>",
                link: "https://github.com/alexandra-mihalcea/Alphabet-Learning-Assistant"
            }
        }
    },
    gradecalc:{
        title:"Grade Calculator",
        date: "July, 2016",
        description:"I have made this short summer project website in order to practice and refine my webdesign skills while creating a useful tool for me and my fellow students to evaluate our obtained grades in a quick manner. Using the dynamic form, students can input their grades and, if needed, their individual weight to find out their overall result.",
        img:"img/programming/7.png",
        buttons:{
            button_1:{
                text:"<i class='fa fa-link' aria-hidden='true'></i> <span class='network-name'>Visit Site</span>",
                link:"https://alexandra-mihalcea.github.io/Grade-Calculator/"
            },
            button_2:{
                text:"<i class='fa fa-github-alt' aria-hidden='true'></i> <span class='network-name'>View on GitHub</span>",
                link: "https://github.com/alexandra-mihalcea/Grade-Calculator"
            }
        }
    },
    laguna:{
        title:"Laguna Residence Website",
        date: "June, 2016",
        description:"A website I have designed and written using the twitter bootstrap interface for Laguna Residence in order to assist them in promoting their re-branding. My main goals when designing the website were simplicity and elegance, to catch a customer's attention without making the content hard to interact with. ",
        img:"img/programming/6.png",
        buttons:{
            button_1:{
                text:"<i class='fa fa-link' aria-hidden='true'></i> <span class='network-name'>Visit Site</span>",
                link:"https://alexandra-mihalcea.github.io/Laguna-Residence/index_en.html"
            },
            button_2:{
                text:"<i class='fa fa-github-alt' aria-hidden='true'></i> <span class='network-name'>View on GitHub</span>",
                link: "https://github.com/alexandra-mihalcea/Laguna-Residence"
            }
        }
    },
    allproj:{
        title:"ALL Project",
        date: "March, 2015",
        description:"This was the final version of my group project made at Coventry University during my first year. It contains a robot programmed to search the map for treasure chests generated and moved though a drag-and-drop method by the user. While searching the robot has a chance of stepping over traps which sabotage it to lose the last treasure held in his inventory. The GUI contains various interactions for the user, allowing him to set up a wish list, drop a bomb which halves the overall value of all treasures currently held, adjust the robot’s speed or simply reset the entire program.",
        img:"img/programming/5.png",
        buttons:{
            button_1:{
                text:"<i class='fa fa-youtube' aria-hidden='true'></i> <span class='network-name'>View Demonstration</span>",
                link:"https://youtu.be/0V6EZlNrUtc"
            },

        }
    },
    animals:{
        title:"Wonderful World of Animals",
        date: "May, 2012",
        description:"A flash website made during my second year of high school for the E-biko project competition in collaboration with 3 other classmates. The programming was done in ActionScript using the Adobe Flash Interface and the images were edited using Photoshop. This project brought us the silver medals for E-biko and firSTep.",
        img:"img/programming/1.png",
        buttons:{
            button_1:{
                text:"<i class='fa fa-link' aria-hidden='true'></i> <span class='network-name'>Visit Site</span>",
                link:"http://ichc.ro/wonderfulworldofanimals/"
            },

        }
    }

};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function theMouseWheel(e) {
    preventDefault(e);
}

function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', theMouseWheel, false);
    }
    window.onmousewheel = document.onmousewheel = theMouseWheel;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', theMouseWheel, false);
    }
    window.onmousewheel = document.onmousewheel = null;
}

$(function () {
    // disable page scrolling when modal is shown
    $("#myModal").on('show', function () { disable_scroll(); });
    // enable page scrolling when modal is hidden
    $("#myModal").on('hide', function () { enable_scroll(); });
});
function generateGallery(){
    var container = document.getElementById("grid");
    var modalImg = document.getElementById("img01");
    var modal = document.getElementById('myModal');
    var temp, counter=10,div;
    while(counter>0){
        temp = document.createElement('img');
        div = document.createElement('div');
        temp.src="img/design/"+counter+".png";
        temp.className="img-thumbnail";
        temp.alt="";
        temp.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                modalImg.alt = this.alt;
                disable_scroll();
        }
        div.className="grid-item";
        if(counter===2) {
            div.className="grid-item wide";
        }
        container.appendChild(div);
        div.appendChild(temp);
        counter--;
    }
}

function generateProjects(){
    var row, div, temp, counter=0;
    var container = document.getElementById("programming");
    for(item in projects){
        row = document.createElement('div');
        row.className="row row-proj";
        container.appendChild(row);
        div = document.createElement('div');
        if(counter%2==0){
            div.className="col-md-7";
            row.appendChild(div);
            generateDescription(item,div);
            div = document.createElement('div');
            div.className="col-md-5";
            row.appendChild(div);
            generateImage(row,div);
            if(item!==Object.keys(projects)[Object.keys(projects).length-1])
            {
                temp = document.createElement('hr');
                temp.className = "scissor small right";
                container.appendChild(temp);
            }
        }
        else{
            div.className="col-md-5";
            generateImage(row,div);
            row.appendChild(div);
            div = document.createElement('div');
            div.className="col-md-7";
            row.appendChild(div);
            generateDescription(item,div);
            if(item!==!Object.keys(projects)[Object.keys(projects).length-1])
            {
                temp = document.createElement('hr');
                temp.className = "scissor small left";
                container.appendChild(temp);
            }
        }
        counter++;
    };

}

function generateDescription(item,div){
    var temp;
    generateTextElement('h3', projects[item].title, div);
    generateTextElement('h6', projects[item].date, div);
    generateTextElement('p2', projects[item].description, div);

    for(button in projects[item].buttons) {
        temp = document.createElement('a');
        temp.innerHTML = projects[item].buttons[button].text;
        temp.href = projects[item].buttons[button].link;
        temp.className="btn btn-default btn-md btn-proj";
        div.appendChild(temp);
    }
}

function generateImage(row,target){
    row.appendChild(target);
    temp = document.createElement('img');
    temp.src=projects[item].img;
    temp.className="img-proj";
    target.appendChild(temp);

}

function generateTextElement(type, info, target){
    var temp = document.createElement(type);
    temp.innerHTML=info;
    target.appendChild(temp);
}