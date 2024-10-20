let images = ["assets/images/Canggu\ Beach\ bg.png", "assets/images/Gwk\ Statue\ bg.png", "assets/images/Uluwatu\ Temple\ bg.png", "assets/images/Mengening\ Beach\ bg.png"];
let div = document.querySelector(".div-main");
let i = 0;
let stop_loop = false;
let picked_destination_canggu = false;
let picked_destination_gwk = false;
let picked_destination_uluwatu = false;
let picked_destination_mengening = false;
let queryLaptop = window.matchMedia("(min-width: 1024px)");

if (!sessionStorage.getItem('firstVisit')) {
    sessionStorage.setItem('firstVisit', 'true');

    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 100);
    });

    localStorage.setItem('picked_destination_canggu', 'false');
    localStorage.setItem('picked_destination_gwk', 'false');
    localStorage.setItem('picked_destination_uluwatu', 'false');
    localStorage.setItem('picked_destination_mengening', 'false');
    FirstViewWeb();



} else {
    window.history.scrollRestoration = 'manual';
    window.addEventListener('load', function () {
        window.scrollTo(0, 0);
    });

    if (localStorage.getItem('picked_destination_canggu') === 'false' && localStorage.getItem('picked_destination_gwk') === 'false' && localStorage.getItem('picked_destination_uluwatu') === 'false' && localStorage.getItem('picked_destination_mengening') === 'false') {
        FirstViewWeb();
    }
    else if(localStorage.getItem('picked_destination_canggu') === 'true') {
        if(queryLaptop.matches) {
            CangguBeach();
        }
        else {
            let marquee_down = document.querySelector(".marquee-down");

            marquee_down.setAttribute("behavior", 'alternate');
            CangguBeachPhone();
        }
    }
    else if(localStorage.getItem('picked_destination_gwk') === 'true') {
        if(queryLaptop.matches) {
            GwkStatue();
        }
        else {
            let marquee_down = document.querySelector(".marquee-down");

            marquee_down.setAttribute("behavior", 'alternate');
            GwkStatuePhone();
        }
    }
    else if(localStorage.getItem('picked_destination_uluwatu') === 'true') {
        if(queryLaptop.matches) {
            UluwatuTemple();
        }
        else {
            let marquee_down = document.querySelector(".marquee-down");

            marquee_down.setAttribute("behavior", 'alternate');
            UluwatuTemplePhone();
        }
    }
    else if(localStorage.getItem('picked_destination_mengening') === 'true') {
        if(queryLaptop.matches) {
            MengeningBeach();
        }
        else {
            let marquee_down = document.querySelector(".marquee-down");

            marquee_down.setAttribute("behavior", 'alternate');
            MengeningBeachPhone();
        }
    }
}

function FirstViewWeb() {
    let button_main = document.querySelector(".btn-main");
    let sub_div_main = document.querySelector(".sub-div-main");
    let div_choose_destination = document.querySelector(".div-choose-destination");
    let destination1 = document.querySelector(".img-destination1");
    let destination2 = document.querySelector(".img-destination2");
    let destination3 = document.querySelector(".img-destination3");
    let destination4 = document.querySelector(".img-destination4");
    let isTransitioning = false;
    let header = document.querySelector(".div-header");
    let destination_title = document.querySelector(".destination-title");
    let map_bali = document.querySelector(".img-map-bali");
    let div_main_about = document.querySelector(".div-main-about");
    let div_hotels = document.querySelector(".div-main-hotels");
    let div_hotels_text = document.querySelector(".div-hotels-text");
    let div_choose_hotels = document.querySelector(".div-hotels");
    let div_see_more_hotels = document.querySelector(".div-see-more");
    let div_culinary = document.querySelector(".div-culinary");
    let gallery_section = document.querySelector(".gallery-section");
    let div_main_ratings = document.querySelector(".div-main-ratings");
    let div_main_notification = document.querySelector(".div-main-notification");
    let div_footer = document.querySelector(".div-footer");

    window.onload = function() {
        sub_div_main.style.marginTop = "27vh";
        div_choose_destination.style.display = "none";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
        div_main_notification.style.display = "none";
        div_footer.style.display = "none";
    }

    function preloadImages(imageArray) {
        imageArray.forEach((src) => {
            let img = new Image();
            img.src = src;
        });
    }
    
    preloadImages(images);
    
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function loop_bg() {
        if(images.length != 0) {
            while(!stop_loop) {
                for (i; i <= images.length - 1; i++) {
                    if(stop_loop) {
                        return;
                    }
                    div.style.backgroundImage = `url('${images[i]}')`;
                    div.style.transitionDuration = '2s';
        
                    if(i == images.length - 1) {
                        i = -1;
                    }
                    await delay(7000);
                }
            }
        }
    }
    
    loop_bg();

    button_main.addEventListener("click", function() {
        sub_div_main.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        stop_loop = true;
    });

    function changBackground(imageUrl) {
        if(!isTransitioning) {
            isTransitioning = true;
            div.style.backgroundImage = `url('${imageUrl}')`;

            setTimeout(() => {
                isTransitioning = false;
            }, 2000);
        }
    }

    destination1.addEventListener("mouseenter", function() {
        changBackground(images[0]);
    });

    destination2.addEventListener("mouseenter", function() {
        changBackground(images[1]);
    });

    destination3.addEventListener("mouseenter", function() {
        changBackground(images[2]);
    });

    destination4.addEventListener("mouseenter", function() {
        changBackground(images[3]);
    });

    destination1.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'true');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination2.addEventListener("click", function(){
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'true');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination3.addEventListener("click", function(){
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'true');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination4.addEventListener("click", function(){
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'true');
        window.location.reload();
    });
}

function CangguBeach() {
    let button_main = document.querySelector(".btn-main");
    let sub_div_main = document.querySelector(".sub-div-main");
    let div_choose_destination = document.querySelector(".div-choose-destination");
    let destination1 = document.querySelector(".img-destination1");
    let destination2 = document.querySelector(".img-destination2");
    let destination3 = document.querySelector(".img-destination3");
    let destination4 = document.querySelector(".img-destination4");
    let isTransitioning = false;
    let header = document.querySelector(".div-header");
    let destination_title = document.querySelector(".destination-title");
    let map_bali = document.querySelector(".img-map-bali");
    let div_main_about = document.querySelector(".div-main-about");
    let div_hotels = document.querySelector(".div-main-hotels");
    let div_hotels_text = document.querySelector(".div-hotels-text");
    let div_choose_hotels = document.querySelector(".div-hotels");
    let div_see_more_hotels = document.querySelector(".div-see-more");
    let div_culinary = document.querySelector(".div-culinary");
    let gallery_section = document.querySelector(".gallery-section");
    let div_main_ratings = document.querySelector(".div-main-ratings");
    let div_logo = document.querySelector(".div-logo");
    let title_culinary = document.querySelector(".title-culinary");
    let link_nasi_campur = document.querySelector(".link-nasi-campur");
    let link_ayam_betutu = document.querySelector(".link-ayam-betutu");
    let link_babi_guling = document.querySelector(".link-babi-guling");
    let link_plecing_kangkung = document.querySelector(".link-plecing-kangkung");
    let link_lawar = document.querySelector(".link-lawar");
    let link_sate_lilit = document.querySelector(".link-sate-lilit");
    let map_iframe = document.querySelector(".map-iframe");

    window.onload = function() {
        div_choose_destination.style.display = "none";
        sub_div_main.style.display = "none";
        div_choose_destination.style.display = "none";
        div.style.backgroundImage = `url('${images[0]}')`;
        div.style.transitionDuration = '2s';
        header.style.display = "block";
        div.style.position = "relative";
        destination_title.innerHTML = "Canggu Beach";
        destination_title.style.display = "block";
        destination_title.style.animation = "opacity 2.5s ease-in-out";
        div.style.alignContent = "center";
        div_main_about.style.display = "block";
        div_hotels.style.display = "block";
        notification.style.bottom = '-200px';
        title_culinary.innerHTML = "Dont Forget To Try This Culinary When You In Canggu Beach!";
        link_nasi_campur.href = "https://www.google.com/maps/dir//Jl.+Pantai+Batu+Bolong+No.4,+Canggu,+Kec.+Kuta+Utara,+Kabupaten+Badung,+Bali+80361/@-8.6370809,115.0645038,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd23900188bd78d:0x187c610fa8d2f3f1!2m2!1d115.1469123!2d-8.6370939?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_ayam_betutu.href = "https://www.google.com/maps/dir//Jl.+Pantai+Berawa+gang.+Janur+Kuning+No.42,+Tibubeneng,+Kec.+Kuta+Utara,+Kabupaten+Badung,+Bali+80361/@-8.6607067,115.0643091,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd2473db530845b:0xdd62ea5dbb7e4836!2m2!1d115.1467557!2d-8.6607161?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_babi_guling.href = "https://www.google.com/maps/dir//Jl.+Pantai+Pererenan+No.79,+Pererenan,+Kec.+Mengwi,+Kabupaten+Badung,+Bali+80351/@-8.6350929,115.0587331,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd239708b077571:0x9abe24353b08b9a7!2m2!1d115.141135!2d-8.6351017?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_plecing_kangkung.href = "https://gofood.co.id/yogyakarta/restaurant/plecing-kangkung-argulobang-930723c7-428b-43b2-b107-b1a894cdf3e6";
        link_lawar.href = "https://www.google.com/maps/dir//Jl.+Pantai+Batu+Bolong+No.35-31,+Canggu,+Kec.+Kuta+Utara,+Kabupaten+Badung,+Bali+80351/@-8.6391307,115.0623719,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd23964dc5ab359:0xecc9b763142a77ed!2m2!1d115.1447382!2d-8.6391202?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_sate_lilit.href = "https://www.google.com/maps/dir/-8.6481298,115.1558154/warung+sate+lilit+didekat+canggu/@-8.6443563,115.14937,13.69z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2dd2392f295a5ed1:0xf6e8228283eb2631!2m2!1d115.1693824!2d-8.6455095?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        map_iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.1632351724995!2d115.13003978860199!3d-8.660468497846743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2478626b7677d%3A0x5a838e3317a93564!2sPantai%20Canggu!5e0!3m2!1sid!2sid!4v1729423533843!5m2!1sid!2sid";
    }

    div_logo.addEventListener("click", function(){
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
    });

    map_bali.addEventListener("click", function() {
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
    });

    destination1.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'true');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination2.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'true');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination3.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'true');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination4.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'true');
        window.location.reload();
    });

    window.addEventListener("scroll", function() {
        let scrollY = window.scrollY;
        let div_map_bali_description = document.querySelector(".div-map-bali-description");

        if(scrollY >= 150) {
            div_map_bali_description.style.opacity = '0';
            div_map_bali_description.style.transitionDuration = '1s';
        }
        else if (scrollY <= 150) {
            div_map_bali_description.style.opacity = '1';
            div_map_bali_description.style.transitionDuration = '1s';
        }
    });

    window.addEventListener("scroll", function() {
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;
        let navbar = document.querySelector(".navbar");

        if (scrollY >= (0.7 * windowHeight)) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            navbar.transitionDuration = '2s';
        }
        else if (scrollY <= (0.7 * windowHeight)) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
            navbar.transitionDuration = '2s';
        }
    });

    window.addEventListener("scroll", function() {
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;
        let div_main_about = document.querySelector(".div-about");
        let img_rectangle1 = document.querySelector(".rectangle1");
        let img_square1 = document.querySelector(".square1");
        let img_rectangle2 = document.querySelector(".rectangle2");
        let img_square2 = document.querySelector(".square2");
        let title_about = document.querySelector(".title-about");
        let section_declaration1 = document.querySelector(".section-declaration1");
        let section_declaration2 = document.querySelector(".section-declaration2");
        let div_parent_about = document.querySelector(".div-main-about");
        let description_about = document.querySelector(".description-about");

        if(scrollY >= (0.9 * windowHeight + 50)) {
            div_main_about.style.position = "fixed";
            div_main_about.style.transitionDuration = '2s';
        }

        else if(scrollY <= (0.9 * windowHeight + 50)) {
            div_main_about.style.position = "static";
        }

        if(scrollY >= (1.6 * windowHeight + 50)) {
            img_rectangle1.style.height = '200px';
            img_rectangle2.style.height = '200px';
            img_square1.style.height = '300px';
            img_square2.style.height = '300px';
            title_about.innerHTML = "What Make Us Popular?";
            description_about.innerHTML = "Canggu Beach has gained recognition as one of the best tourist destinations in Badung and Bali due to its unique blend of natural beauty, rich local culture, and modern amenities. Known for its perfect surfing waves, the beach attracts surfers from around the globe, offering ideal conditions for both experienced and novice surfers alike. The relaxed atmosphere created by trendy cafes and beach clubs allows visitors to unwind while enjoying delicious food and refreshing drinks. As the sun sets, Canggu transforms into a vibrant nightlife hub, with beach parties and events that draw in locals and tourists, making every visit a memorable experience.<br><br>In addition to its surf culture and nightlife, Canggu Beach is surrounded by picturesque rice fields and stunning coastal views, providing a serene escape from the hustle and bustle of everyday life. The blend of traditional Balinese charm and contemporary lifestyle creates a unique vibe that appeals to digital nomads, travelers, and families alike. Visitors can explore local markets, take part in yoga classes, or simply relax on the beach, immersing themselves in the laid-back lifestyle that Canggu offers. With its captivating beauty and diverse attractions, Canggu Beach truly stands out as a must-visit destination in Bali.";
            section_declaration2.style.backgroundColor = "var(--blue-color)";
            section_declaration2.style.color = "white";
            section_declaration2.style.border = "none";
            section_declaration1.style.border = "1px solid black";
            section_declaration1.style.color = "black";
            section_declaration1.style.backgroundColor = "transparent";
        }
        else if (scrollY <= (1.6 * windowHeight + 50)) {
            img_rectangle1.style.height = '300px';
            img_rectangle2.style.height = '300px';
            img_square1.style.height = '200px';
            img_square2.style.height = '200px';
            title_about.innerHTML = "About Canggu Beach";
            description_about.innerHTML = "Canggu Beach is one of the most famous tourist destinations in Badung and Bali, renowned for its stunning natural beauty, rich local culture, and modern amenities. The beach offers perfect surfing waves, attracting surfers from all around the world. There is no official entrance fee to Canggu Beach, allowing visitors to access it for free. However, those wishing to enjoy the facilities at beach clubs or nearby resorts may incur charges for access to sunbeds, umbrellas, and dining services. These fees vary depending on the chosen club. <br><br> In addition to surfing and a vibrant nightlife, Canggu Beach is surrounded by beautiful rice paddies and breathtaking ocean views, providing a serene escape from the hustle and bustle of daily life. The combination of traditional Balinese charm and modern lifestyle creates a unique atmosphere that appeals to travelers, digital nomads, and families alike. Visitors can explore local markets, take yoga classes, or simply relax on the beach while enjoying the laid-back vibe that Canggu has to offer. With its captivating beauty and various attractions, Canggu Beach is indeed a must-visit destination for tourists coming to Bali.";
            section_declaration1.style.backgroundColor = "var(--blue-color)";
            section_declaration1.style.color = "white";
            section_declaration1.style.border = "none";
            section_declaration2.style.border = "1px solid black";
            section_declaration2.style.color = "black";
            section_declaration2.style.backgroundColor = "transparent";
        }

        if(scrollY >= (2.2 * windowHeight + 70)) {
            div_main_about.style.position = "static";
            div_parent_about.style.alignContent = "end";
        }

        else if(scrollY <= (2.2 * windowHeight + 70)) {
            div_parent_about.style.alignContent = "start";
        }
    });

    let div_main_hotels = document.querySelector(".div-sub-hotels");

    let scrollY_div = div_main_about.getBoundingClientRect().top + window.scrollY;
    let is_full_width = false;

    const minWidth = 150;
    const minHeight = 80;

    const maxWidth = 100;
    const maxHeight = 100;

    window.addEventListener("scroll", function() {
        let new_scrollY = window.scrollY - scrollY_div;

        if(is_full_width == false) {
            if (new_scrollY > 1100) {
                let newWidth = minWidth + (new_scrollY / 5);
                let newHeight = minHeight + (new_scrollY / 5);
                if (newWidth > maxWidth) {
                    newWidth = maxWidth;
                }
                if (newHeight > maxHeight) {
                    newHeight = maxHeight;
                }
        
                    div_main_hotels.style.width = newWidth + 'vw';
                    div_main_hotels.style.height = newHeight + 'vh';
                if(newWidth == 100) {
                    is_full_width = true;
                    div_hotels_text.style.opacity = 1;
                    div_choose_hotels.style.opacity = 1;
                    div_see_more_hotels.style.opacity = 1;
                }
            }
            else {
                div_main_hotels.style.width = minWidth + 'px';
                div_main_hotels.style.height = minHeight + 'px';
            }
        }
    });

    const track = document.getElementById("image-track");
    const container = document.querySelector('.gallery-container');
    const titleText = document.querySelector('.title-gallery');
    const descriptionText = document.querySelector('.description-gallery');

    track.dataset.mouseDownAt = track.dataset.mouseDownAt || "0";
    track.dataset.prevPercentage = track.dataset.prevPercentage || "0";
    track.dataset.percentage = track.dataset.percentage || "0";

    const initialBackgroundColor = "black";
    const targetBackgroundColor = "rgba(252, 240, 227, 1)";
    const initialTextColor = "white";
    const targetTextColor = "black";

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";  
        track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = e => {
        if(track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        let percentage = (mouseDelta / maxDelta) * -100;
        let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

        if (isNaN(nextPercentage)) {
            console.error("Error: nextPercentage is NaN");
            return;
        }

        nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });

        for(const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }

        const backgroundTransitionFactor = Math.abs(nextPercentage) / 100;
        const r = Math.round(0 + (252 - 0) * backgroundTransitionFactor);
        const g = Math.round(0 + (240 - 0) * backgroundTransitionFactor);
        const b = Math.round(0 + (227 - 0) * backgroundTransitionFactor);
        container.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;

        const textColorTransitionFactor = Math.abs(nextPercentage) / 100;
        const textR = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textG = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textB = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        titleText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
        descriptionText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
    };

    window.onmousedown = e => handleOnDown(e);
    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);
    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);
    window.ontouchmove = e => handleOnMove(e.touches[0]);

    let stars1 = document.querySelector(".stars1");
    let stars2 = document.querySelector(".stars2");
    let stars3 = document.querySelector(".stars3");
    let stars4 = document.querySelector(".stars4");
    let stars5 = document.querySelector(".stars5");

    stars1.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/unactive-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars2.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars3.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars4.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars5.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/active-stars.png";
    });

    let btn_send_message = document.querySelector(".btn-send-message");
    let input_gender = document.querySelectorAll(".input-gender");
    let rating = document.querySelectorAll(".unactive-stars");
    let link_active_stars = "assets/images/active-stars.png";
    let error_message = document.querySelector(".error-message");
    let input_name_elem = document.querySelector(".input-name");
    let notification = document.querySelector('.div-main-notification');

    input_name_elem.addEventListener('keydown', function(event) {
        const key = event.key;
        if (!/^[a-zA-Z]$/.test(key) && key !== 'Backspace' && key !== ' ') {
            event.preventDefault();
        }
    });

    btn_send_message.addEventListener("click", function() {
        let input_name_elem = document.querySelector(".input-name");
        let textarea_elem = document.querySelector(".textarea");
        let input_name = input_name_elem.value;
        let textarea = textarea_elem.value;
        let input_gender_checked = false;

        input_gender.forEach(radio => {
            if (radio.checked) {
                input_gender_checked = true;
            }
        });

        let ratings = false;
        rating.forEach(function(image) {
            if (image.src.includes(link_active_stars)) {
                ratings = true;
            }
        });

        if (input_name === "" || textarea === "" || input_gender_checked == false || ratings == false) {
            error_message.style.display = "block";
        } else {
            error_message.style.display = "none";
            notification.style.transition = '0.5s';
            notification.style.bottom = '100px';
            setTimeout(function(){
                notification.style.transition = '1s';
                notification.style.bottom = '-200px';
            }, 2000);

            input_name_elem.value = "";
            textarea_elem.value = "";

            rating.forEach(function(image) {
                if (image.src.includes(link_active_stars)) {
                    image.src = "assets/images/unactive-stars.png";
                }
            });

            input_gender.forEach(radio => {
                radio.checked = false;
            });
        }
    });
}

function GwkStatue() {
    let button_main = document.querySelector(".btn-main");
    let sub_div_main = document.querySelector(".sub-div-main");
    let div_choose_destination = document.querySelector(".div-choose-destination");
    let destination1 = document.querySelector(".img-destination1");
    let destination2 = document.querySelector(".img-destination2");
    let destination3 = document.querySelector(".img-destination3");
    let destination4 = document.querySelector(".img-destination4");
    let isTransitioning = false;
    let header = document.querySelector(".div-header");
    let destination_title = document.querySelector(".destination-title");
    let map_bali = document.querySelector(".img-map-bali");
    let div_main_about = document.querySelector(".div-main-about");
    let div_hotels = document.querySelector(".div-main-hotels");
    let div_hotels_text = document.querySelector(".div-hotels-text");
    let div_choose_hotels = document.querySelector(".div-hotels");
    let div_see_more_hotels = document.querySelector(".div-see-more");
    let div_culinary = document.querySelector(".div-culinary");
    let gallery_section = document.querySelector(".gallery-section");
    let div_main_ratings = document.querySelector(".div-main-ratings");
    let title_about = document.querySelector(".title-about");
    let img_rectangle1 = document.querySelector(".rectangle1");
    let img_square1 = document.querySelector(".square1");
    let img_rectangle2 = document.querySelector(".rectangle2");
    let img_square2 = document.querySelector(".square2");
    let hotels_title_description = document.querySelector(".hotels-title-description");
    let description_gallery = document.querySelector(".description-gallery");
    let image1 = document.querySelector(".image1");
    let image2 = document.querySelector(".image2");
    let image3 = document.querySelector(".image3");
    let image4 = document.querySelector(".image4");
    let image5 = document.querySelector(".image5");
    let image6 = document.querySelector(".image6");
    let image7 = document.querySelector(".image7");
    let image8 = document.querySelector(".image8");
    let title_ratings = document.querySelector(".title-ratings");
    let description_ratings = document.querySelector(".description-ratings");
    let person1 = document.querySelector(".person1");
    let person2 = document.querySelector(".person2");
    let person3 = document.querySelector(".person3");
    let person4 = document.querySelector(".person4");
    let person5 = document.querySelector(".person5");
    let person6 = document.querySelector(".person6");
    let person7 = document.querySelector(".person7");
    let person8 = document.querySelector(".person8");
    let message1 = document.querySelector(".message1");
    let message2 = document.querySelector(".message2");
    let message3 = document.querySelector(".message3");
    let message4 = document.querySelector(".message4");
    let message5 = document.querySelector(".message5");
    let message6 = document.querySelector(".message6");
    let message7 = document.querySelector(".message7");
    let message8 = document.querySelector(".message8");
    let hotels_img1 = document.querySelector(".hotels-img1");
    let hotels_name1 = document.querySelector(".hotels-name1");
    let hotels_map1 = document.querySelector(".hotels-map1");
    let hotels_link1 = document.querySelector(".hotels-link1");
    let hotels_img2 = document.querySelector(".hotels-img2");
    let hotels_name2 = document.querySelector(".hotels-name2");
    let hotels_map2 = document.querySelector(".hotels-map2");
    let hotels_link2 = document.querySelector(".hotels-link2");
    let hotels_img3 = document.querySelector(".hotels-img3");
    let hotels_name3 = document.querySelector(".hotels-name3");
    let hotels_map3 = document.querySelector(".hotels-map3");
    let hotels_link3 = document.querySelector(".hotels-link3");
    let hotels_img4 = document.querySelector(".hotels-img4");
    let hotels_name4 = document.querySelector(".hotels-name4");
    let hotels_map4 = document.querySelector(".hotels-map4");
    let hotels_link4 = document.querySelector(".hotels-link4");
    let a_see_more = document.querySelector(".a-see-more");
    let div_logo = document.querySelector(".div-logo");
    let title_culinary = document.querySelector(".title-culinary");
    let link_nasi_campur = document.querySelector(".link-nasi-campur");
    let link_ayam_betutu = document.querySelector(".link-ayam-betutu");
    let link_babi_guling = document.querySelector(".link-babi-guling");
    let link_plecing_kangkung = document.querySelector(".link-plecing-kangkung");
    let link_lawar = document.querySelector(".link-lawar");
    let link_sate_lilit = document.querySelector(".link-sate-lilit");
    let map_iframe = document.querySelector(".map-iframe");

    window.onload = function() {
        div_choose_destination.style.display = "none";
        sub_div_main.style.display = "none";
        div_choose_destination.style.display = "none";
        div.style.backgroundImage = `url('${images[1]}')`;
        div.style.transitionDuration = '2s';
        header.style.display = "block";
        div.style.position = "relative";
        destination_title.innerHTML = "Garuda Wisnu Kencana Statue";
        destination_title.style.display = "block";
        destination_title.style.animation = "opacity 2.5s ease-in-out";
        div.style.alignContent = "center";
        div_main_about.style.display = "block";
        div_hotels.style.display = "block";
        img_rectangle1.src = "assets/images/gwk-picture1.jpeg";
        img_rectangle2.src = "assets/images/gwk-picture2.jpeg";
        img_square1.src = "assets/images/gwk-picture11.jpeg";
        img_square2.src = "assets/images/gwk-picture3.jpeg";
        hotels_title_description.innerHTML = "We offer comfortable hotels or villas with beautiful views while on holiday near Garuda Wisnu Kencana Statue";
        description_gallery.innerHTML = "Here is some image that taken in Garuda Wisnu Kencana Statue";
        image1.src = "assets/images/gwk-picture4.jpeg";
        image2.src = "assets/images/gwk-picture5.jpeg";
        image3.src = "assets/images/gwk-picture7.jpeg";
        image4.src = "assets/images/GWK Statue.jpeg";
        image5.src = "assets/images/gwk-picture11.jpeg";
        image6.src = "assets/images/gwk-picture6.jpeg";
        image7.src = "assets/images/gwk-picture10.jpeg";
        image8.src = "assets/images/gwk-picture8.jpeg";
        title_ratings.innerHTML = "What you think about Garuda Wisnu Kencana?";
        description_ratings.innerHTML = "Let us know your opinion about Garuda Wisnu Kencana!";
        person1.innerHTML = "Anna R.";
        person2.innerHTML = "Carlos Maly";
        person3.innerHTML = "Ryan P.";
        person4.innerHTML = "Linda Katherine";
        person5.innerHTML = "Jake Tom";
        person6.innerHTML = "Elena Flown";
        person7.innerHTML = "Noah H";
        person8.innerHTML = "Maya Siska";
        message1.innerHTML = "Visiting Garuda Wisnu Kencana was a highlight of my trip to Bali! The massive statue is breathtaking, and the cultural performances added to the experience. A must-see!";
        message2.innerHTML = "I was in awe of the beauty and scale of Garuda Wisnu Kencana! The views from the site are incredible, and it's a fantastic place to learn about Balinese culture.";
        message3.innerHTML = "Garuda Wisnu Kencana is truly magnificent! The intricate details of the statue and the surrounding gardens are stunning. I highly recommend this place to anyone visiting Bali!";
        message4.innerHTML = "This cultural park exceeded my expectations! The performances were captivating, and the atmosphere is so peaceful. Garuda Wisnu Kencana is a gem in Bali!";
        message5.innerHTML = "I had an unforgettable experience at Garuda Wisnu Kencana! The sunset views from the park were breathtaking. It's a perfect spot for photography and exploration!";
        message6.innerHTML = "If you're in Bali, don't miss Garuda Wisnu Kencana! The statue is impressive, and the entire area is beautifully landscaped. It's an ideal place for a day out.";
        message7.innerHTML = "Garuda Wisnu Kencana is a cultural treasure! I loved learning about the legends behind the statue and enjoying the traditional dances. It's a fantastic cultural experience!";
        message8.innerHTML = "I was amazed by the grandeur of Garuda Wisnu Kencana! The mix of art, culture, and nature makes it a unique destination. Definitely add it to your Bali itinerary!";
        notification.style.bottom = '-200px';
        hotels_img1.src = "assets/images/gwk-hotels1.jpg";
        hotels_img2.src = "assets/images/gwk-hotels2.jpg";
        hotels_img3.src = "assets/images/gwk-hotels3.jpg";
        hotels_img4.src = "assets/images/gwk-hotels4.jpg";
        hotels_name1.innerHTML = "Umana Bali, LXR Hotels & <br> Resorts Hilton";
        hotels_name2.innerHTML = "Renaissance Bali Uluwatu <br> Resort & Spa";
        hotels_name3.innerHTML = "Rimba By Ayana Bali";
        hotels_name4.innerHTML = "AYANA Segara Bali";
        hotels_map1.innerHTML = "Jl. Melasti Banjar Kelod, Ungasan 80364 <br> Indonesia";
        hotels_map2.innerHTML = "Jalan Pantai Balangan 1 No 1 Ungasan, <br> Ungasan 80361 Indonesia";
        hotels_map3.innerHTML = "Jl. Karang Mas Karang Mas Estate, <br> Jimbaran 80364 Indonesia";
        hotels_map4.innerHTML = "Jalan Karang Mas Sejahtera Karang Mas <br> Estate, Jimbaran 80364 Indonesia";
        hotels_link1.href = "https://www.tripadvisor.co.id/Hotel_Review-g1219108-d887047-Reviews-Umana_Bali_LXR_Hotels_Resorts_Hilton-Ungasan_Bukit_Peninsula_Bali.html";
        hotels_link2.href = "https://www.tripadvisor.co.id/Hotel_Review-g1219108-d10202872-Reviews-Renaissance_Bali_Uluwatu_Resort_Spa-Ungasan_Bukit_Peninsula_Bali.html";
        hotels_link3.href = "https://www.tripadvisor.co.id/Hotel_Review-g297696-d5039579-Reviews-Rimba_By_Ayana_Bali-Jimbaran_South_Kuta_Bali.html";
        hotels_link4.href = "https://www.tripadvisor.co.id/Hotel_Review-g297696-d25150919-Reviews-AYANA_Segara_Bali-Jimbaran_South_Kuta_Bali.html";
        a_see_more.href = "https://www.tripadvisor.co.id/HotelsNear-g1219108-d1436488-Garuda_Wisnu_Kencana_Cultural_Park-Ungasan_Bukit_Peninsula_Bali.html";
        title_culinary.innerHTML = "Dont Forget To Try This Culinary When You In Gwk Statue!";
        link_nasi_campur.href = "https://www.google.com/maps/place/D'SAMBAL+%26+Uluwatu+GWK,+nasi+tumpeng,+nasi+box,+kue+kotak,+prasmanan+Bali+halal/@-8.8007136,115.1440428,14.14z/data=!4m10!1m2!2m1!1snasi+campur+didekat+garuda+wisnu+kencana!3m6!1s0x2dd244c1eb9d14a1:0xd84fd2f5d30d34d2!8m2!3d-8.7973208!4d115.161012!15sCihuYXNpIGNhbXB1ciBkaWRla2F0IGdhcnVkYSB3aXNudSBrZW5jYW5hWioiKG5hc2kgY2FtcHVyIGRpZGVrYXQgZ2FydWRhIHdpc251IGtlbmNhbmGSARVpa2FuX2Jha2FyX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11bw1h959z?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_ayam_betutu.href = "https://www.google.com/maps/place/Ayam+Betutu+Bu+Lina+Gilimanuk+Kuta/@-8.7484305,115.1564158,14.22z/data=!4m10!1m2!2m1!1sayam+betutu+didekat+garuda+wisnu+kencana!3m6!1s0x2dd246a810a7df43:0x116e1b294e927008!8m2!3d-8.7329512!4d115.1780187!15sCihheWFtIGJldHV0dSBkaWRla2F0IGdhcnVkYSB3aXNudSBrZW5jYW5hWioiKGF5YW0gYmV0dXR1IGRpZGVrYXQgZ2FydWRhIHdpc251IGtlbmNhbmGSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11c4bfy3jd?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_babi_guling.href = "https://www.google.com/maps/place/BABI+GULING+GWK/@-8.8098669,115.1186285,13z/data=!4m10!1m2!2m1!1sbabi+guling+didekat+garuda+wisnu+kencana!3m6!1s0x2dd2459a072330cb:0x54e26f7576f17fb9!8m2!3d-8.8098722!4d115.1681477!15sCihiYWJpIGd1bGluZyBkaWRla2F0IGdhcnVkYSB3aXNudSBrZW5jYW5hWioiKGJhYmkgZ3VsaW5nIGRpZGVrYXQgZ2FydWRhIHdpc251IGtlbmNhbmGSARNiYWxpbmVzZV9yZXN0YXVyYW504AEA!16s%2Fg%2F11vcmd955j?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_plecing_kangkung.href = "https://gofood.co.id/yogyakarta/restaurant/plecing-kangkung-argulobang-930723c7-428b-43b2-b107-b1a894cdf3e6";
        link_lawar.href = "https://www.google.com/maps/place/Warung+Lawar+Bali/@-8.8196466,115.2225023,12.23z/data=!4m14!1m7!3m6!1s0x2dd2433721be6ebb:0x976f219da1c36b4e!2sWarung+Lawar+Bali!8m2!3d-8.8023157!4d115.216874!16s%2Fg%2F11f122yft1!3m5!1s0x2dd2433721be6ebb:0x976f219da1c36b4e!8m2!3d-8.8023157!4d115.216874!16s%2Fg%2F11f122yft1?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_sate_lilit.href = "https://www.google.com/maps/place/Warung+Muslim+Sate+Lilit+Pekambingan/@-8.679781,115.1688892,14z/data=!4m10!1m2!2m1!1ssate+lilit+didekat+garuda+wisnu+kencana!3m6!1s0x2dd24097ca7ab9c9:0xfda7eced8ff931e3!8m2!3d-8.6627255!4d115.2144751!15sCidzYXRlIGxpbGl0IGRpZGVrYXQgZ2FydWRhIHdpc251IGtlbmNhbmFaKSInc2F0ZSBsaWxpdCBkaWRla2F0IGdhcnVkYSB3aXNudSBrZW5jYW5hkgEQc2F0YXlfcmVzdGF1cmFudOABAA!16s%2Fg%2F11cn9l6f0n?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        map_iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63089.15995155722!2d115.12248332000401!3d-8.779250015635725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd244cf54e1dec7%3A0x1988663e064f5a51!2sTaman%20Budaya%20Garuda%20Wisnu%20Kencana!5e0!3m2!1sid!2sid!4v1729423368576!5m2!1sid!2sid";
    }

    div_logo.addEventListener("click", function(){
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
    });

    map_bali.addEventListener("click", function() {
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
    });

    destination1.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'true');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination2.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'true');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination3.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'true');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination4.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'true');
        window.location.reload();
    });

    window.addEventListener("scroll", function() {
        let scrollY = window.scrollY;
        let div_map_bali_description = document.querySelector(".div-map-bali-description");

        if(scrollY >= 150) {
            div_map_bali_description.style.opacity = '0';
            div_map_bali_description.style.transitionDuration = '1s';
        }
        else if (scrollY <= 150) {
            div_map_bali_description.style.opacity = '1';
            div_map_bali_description.style.transitionDuration = '1s';
        }
    });

    window.addEventListener("scroll", function() {
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;
        let navbar = document.querySelector(".navbar");

        if (scrollY >= (0.7 * windowHeight)) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            navbar.transitionDuration = '2s';
        }
        else if (scrollY <= (0.7 * windowHeight)) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
            navbar.transitionDuration = '2s';
        }
    });

    window.addEventListener("scroll", function() {
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;
        let div_main_about = document.querySelector(".div-about");
        let img_rectangle1 = document.querySelector(".rectangle1");
        let img_square1 = document.querySelector(".square1");
        let img_rectangle2 = document.querySelector(".rectangle2");
        let img_square2 = document.querySelector(".square2");
        let title_about = document.querySelector(".title-about");
        let section_declaration1 = document.querySelector(".section-declaration1");
        let section_declaration2 = document.querySelector(".section-declaration2");
        let div_parent_about = document.querySelector(".div-main-about");
        let description_about = document.querySelector(".description-about");

        if(scrollY >= (0.9 * windowHeight + 50)) {
            div_main_about.style.position = "fixed";
            div_main_about.style.transitionDuration = '2s';
        }

        else if(scrollY <= (0.9 * windowHeight + 50)) {
            div_main_about.style.position = "static";
        }

        if(scrollY >= (1.6 * windowHeight + 50)) {
            img_rectangle1.style.height = '200px';
            img_rectangle2.style.height = '200px';
            img_square1.style.height = '300px';
            img_square2.style.height = '300px';
            title_about.innerHTML = "What Make Us Popular?";
            description_about.innerHTML = "Garuda Wisnu Kencana (GWK) has gained prominence as one of Bali's top tourist destinations due to its cultural significance and monumental scale. The park is home to the iconic Garuda Wisnu Kencana statue, which stands at a staggering 121 meters tall, making it one of the largest statues in the world. This colossal sculpture, depicting the Hindu god Vishnu riding the Garuda bird, serves as a symbol of Indonesian heritage and spirituality, attracting both domestic and international visitors. Its artistic grandeur and spiritual meaning have made GWK a must-visit location for those interested in Bali's rich cultural tapestry. <br><br> </br>Moreover, the GWK Cultural Park offers more than just the statue. Visitors can immerse themselves in daily Balinese dance performances, art exhibitions, and cultural events, which showcase the island's vibrant traditions. The park's vast area, panoramic views, and well-designed infrastructure make it an ideal destination for tourists seeking both educational and recreational experiences. The availability of online ticket booking and packages tailored for different types of visitors further enhances its accessibility and appeal, making Garuda Wisnu Kencana a cornerstone of Bali's cultural tourism.";
            section_declaration2.style.backgroundColor = "var(--blue-color)";
            section_declaration2.style.color = "white";
            section_declaration2.style.border = "none";
            section_declaration1.style.border = "1px solid black";
            section_declaration1.style.color = "black";
            section_declaration1.style.backgroundColor = "transparent";
        }
        else if (scrollY <= (1.6 * windowHeight + 50)) {
            img_rectangle1.style.height = '300px';
            img_rectangle2.style.height = '300px';
            img_square1.style.height = '200px';
            img_square2.style.height = '200px';
            title_about.innerHTML = "About Garuda Wisnu Kencana";
            description_about.innerHTML = "Garuda Wisnu Kencana (GWK) is a famous cultural park in Bali, located in the southern part of Badung. It is home to the towering Garuda Wisnu Kencana statue, one of the largest in the world, representing Lord Vishnu riding the mythical bird Garuda. The park not only showcases this majestic statue but also offers various cultural performances, art exhibitions, and breathtaking views of the surrounding landscape.<br><br> Visitors to GWK need to purchase tickets to enter, with prices starting at IDR 125,000 for a regular ticket, which includes access to cultural performances and a movie theater experience. For a more comprehensive visit, you can opt for an 'Ultimate Bundling Package' that grants access to additional attractions like the top of the GWK statue and the ASANA Artseum, along with refreshments and other perks. Tickets can be conveniently purchased online through the official GWK ticketing website <span><a href='https://ticket.gwkbali.com/' target='_blank'>here</a></span>";
            section_declaration1.style.backgroundColor = "var(--blue-color)";
            section_declaration1.style.color = "white";
            section_declaration1.style.border = "none";
            section_declaration2.style.border = "1px solid black";
            section_declaration2.style.color = "black";
            section_declaration2.style.backgroundColor = "transparent";
        }

        if(scrollY >= (2.2 * windowHeight + 70)) {
            div_main_about.style.position = "static";
            div_parent_about.style.alignContent = "end";
        }

        else if(scrollY <= (2.2 * windowHeight + 70)) {
            div_parent_about.style.alignContent = "start";
        }
    });

    let div_main_hotels = document.querySelector(".div-sub-hotels");
    let scrollY_div = div_main_about.getBoundingClientRect().top + window.scrollY;
    let is_full_width = false;
    const minWidth = 150;
    const minHeight = 80;

    const maxWidth = 100;
    const maxHeight = 100;

    window.addEventListener("scroll", function() {
        let new_scrollY = window.scrollY - scrollY_div;

        if(is_full_width == false) {
            if (new_scrollY > 1100) {
                let newWidth = minWidth + (new_scrollY / 5);
                let newHeight = minHeight + (new_scrollY / 5);

                if (newWidth > maxWidth) {
                    newWidth = maxWidth;
                }
                if (newHeight > maxHeight) {
                    newHeight = maxHeight;
                }
                    div_main_hotels.style.width = newWidth + 'vw';
                    div_main_hotels.style.height = newHeight + 'vh';
                if(newWidth == 100) {
                    is_full_width = true;
                    div_hotels_text.style.opacity = 1;
                    div_choose_hotels.style.opacity = 1;
                    div_see_more_hotels.style.opacity = 1;
                }
            }
            else {
                div_main_hotels.style.width = minWidth + 'px';
                div_main_hotels.style.height = minHeight + 'px';
            }
        }
    });

    const track = document.getElementById("image-track");
    const container = document.querySelector('.gallery-container');
    const titleText = document.querySelector('.title-gallery');
    const descriptionText = document.querySelector('.description-gallery');

    track.dataset.mouseDownAt = track.dataset.mouseDownAt || "0";
    track.dataset.prevPercentage = track.dataset.prevPercentage || "0";
    track.dataset.percentage = track.dataset.percentage || "0";

    const initialBackgroundColor = "black";
    const targetBackgroundColor = "rgba(252, 240, 227, 1)";
    const initialTextColor = "white";
    const targetTextColor = "black";

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";  
        track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = e => {
        if(track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;
        let percentage = (mouseDelta / maxDelta) * -100;
        let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

        if (isNaN(nextPercentage)) {
            console.error("Error: nextPercentage is NaN");
            return;
        }

        nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });

        for(const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }

        const backgroundTransitionFactor = Math.abs(nextPercentage) / 100;
        const r = Math.round(0 + (252 - 0) * backgroundTransitionFactor);
        const g = Math.round(0 + (240 - 0) * backgroundTransitionFactor);
        const b = Math.round(0 + (227 - 0) * backgroundTransitionFactor);
        container.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;

        const textColorTransitionFactor = Math.abs(nextPercentage) / 100;
        const textR = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textG = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textB = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        titleText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
        descriptionText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
    };

    window.onmousedown = e => handleOnDown(e);
    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);
    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);
    window.ontouchmove = e => handleOnMove(e.touches[0]);

    let stars1 = document.querySelector(".stars1");
    let stars2 = document.querySelector(".stars2");
    let stars3 = document.querySelector(".stars3");
    let stars4 = document.querySelector(".stars4");
    let stars5 = document.querySelector(".stars5");

    stars1.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/unactive-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars2.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars3.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars4.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars5.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/active-stars.png";
    });

    let btn_send_message = document.querySelector(".btn-send-message");
    let input_gender = document.querySelectorAll(".input-gender");
    let rating = document.querySelectorAll(".unactive-stars");
    let link_active_stars = "assets/images/active-stars.png";
    let error_message = document.querySelector(".error-message");
    let input_name_elem = document.querySelector(".input-name");
    let notification = document.querySelector('.div-main-notification');

    input_name_elem.addEventListener('keydown', function(event) {
        const key = event.key;

        if (!/^[a-zA-Z]$/.test(key) && key !== 'Backspace' && key !== ' ') {
            event.preventDefault();
        }
    });

    btn_send_message.addEventListener("click", function() {
        let input_name_elem = document.querySelector(".input-name");
        let textarea_elem = document.querySelector(".textarea");
        let input_name = input_name_elem.value;
        let textarea = textarea_elem.value;
        let input_gender_checked = false;

        input_gender.forEach(radio => {
            if (radio.checked) {
                input_gender_checked = true;
            }
        });

        let ratings = false;
        rating.forEach(function(image) {
            if (image.src.includes(link_active_stars)) {
                ratings = true;
            }
        });

        if (input_name === "" || textarea === "" || input_gender_checked == false || ratings == false) {
            error_message.style.display = "block";
        } else {
            error_message.style.display = "none";

            notification.style.transition = '0.5s';
            notification.style.bottom = '100px'
            setTimeout(function(){
                notification.style.transition = '1s';
                notification.style.bottom = '-200px';
            }, 2000);

            input_name_elem.value = "";
            textarea_elem.value = "";

            rating.forEach(function(image) {
                if (image.src.includes(link_active_stars)) {
                    image.src = "assets/images/unactive-stars.png";
                }
            });

            input_gender.forEach(radio => {
                radio.checked = false;
            });
        }
    });
}

function UluwatuTemple() {
    let button_main = document.querySelector(".btn-main");
    let sub_div_main = document.querySelector(".sub-div-main");
    let div_choose_destination = document.querySelector(".div-choose-destination");
    let destination1 = document.querySelector(".img-destination1");
    let destination2 = document.querySelector(".img-destination2");
    let destination3 = document.querySelector(".img-destination3");
    let destination4 = document.querySelector(".img-destination4");
    let isTransitioning = false;
    let header = document.querySelector(".div-header");
    let destination_title = document.querySelector(".destination-title");
    let map_bali = document.querySelector(".img-map-bali");
    let div_main_about = document.querySelector(".div-main-about");
    let div_hotels = document.querySelector(".div-main-hotels");
    let div_hotels_text = document.querySelector(".div-hotels-text");
    let div_choose_hotels = document.querySelector(".div-hotels");
    let div_see_more_hotels = document.querySelector(".div-see-more");
    let div_culinary = document.querySelector(".div-culinary");
    let gallery_section = document.querySelector(".gallery-section");
    let div_main_ratings = document.querySelector(".div-main-ratings");
    let title_about = document.querySelector(".title-about");
    let img_rectangle1 = document.querySelector(".rectangle1");
    let img_square1 = document.querySelector(".square1");
    let img_rectangle2 = document.querySelector(".rectangle2");
    let img_square2 = document.querySelector(".square2");
    let hotels_title_description = document.querySelector(".hotels-title-description");
    let description_gallery = document.querySelector(".description-gallery");
    let image1 = document.querySelector(".image1");
    let image2 = document.querySelector(".image2");
    let image3 = document.querySelector(".image3");
    let image4 = document.querySelector(".image4");
    let image5 = document.querySelector(".image5");
    let image6 = document.querySelector(".image6");
    let image7 = document.querySelector(".image7");
    let image8 = document.querySelector(".image8");
    let title_ratings = document.querySelector(".title-ratings");
    let description_ratings = document.querySelector(".description-ratings");
    let person1 = document.querySelector(".person1");
    let person2 = document.querySelector(".person2");
    let person3 = document.querySelector(".person3");
    let person4 = document.querySelector(".person4");
    let person5 = document.querySelector(".person5");
    let person6 = document.querySelector(".person6");
    let person7 = document.querySelector(".person7");
    let person8 = document.querySelector(".person8");
    let message1 = document.querySelector(".message1");
    let message2 = document.querySelector(".message2");
    let message3 = document.querySelector(".message3");
    let message4 = document.querySelector(".message4");
    let message5 = document.querySelector(".message5");
    let message6 = document.querySelector(".message6");
    let message7 = document.querySelector(".message7");
    let message8 = document.querySelector(".message8");
    let hotels_img1 = document.querySelector(".hotels-img1");
    let hotels_name1 = document.querySelector(".hotels-name1");
    let hotels_map1 = document.querySelector(".hotels-map1");
    let hotels_link1 = document.querySelector(".hotels-link1");
    let hotels_img2 = document.querySelector(".hotels-img2");
    let hotels_name2 = document.querySelector(".hotels-name2");
    let hotels_map2 = document.querySelector(".hotels-map2");
    let hotels_link2 = document.querySelector(".hotels-link2");
    let hotels_img3 = document.querySelector(".hotels-img3");
    let hotels_name3 = document.querySelector(".hotels-name3");
    let hotels_map3 = document.querySelector(".hotels-map3");
    let hotels_link3 = document.querySelector(".hotels-link3");
    let hotels_img4 = document.querySelector(".hotels-img4");
    let hotels_name4 = document.querySelector(".hotels-name4");
    let hotels_map4 = document.querySelector(".hotels-map4");
    let hotels_link4 = document.querySelector(".hotels-link4");
    let a_see_more = document.querySelector(".a-see-more");
    let title_culinary = document.querySelector(".title-culinary");
    let link_nasi_campur = document.querySelector(".link-nasi-campur");
    let link_ayam_betutu = document.querySelector(".link-ayam-betutu");
    let link_babi_guling = document.querySelector(".link-babi-guling");
    let link_plecing_kangkung = document.querySelector(".link-plecing-kangkung");
    let link_lawar = document.querySelector(".link-lawar");
    let link_sate_lilit = document.querySelector(".link-sate-lilit");
    let map_iframe = document.querySelector(".map-iframe");

    window.onload = function() {
        div_choose_destination.style.display = "none";
        sub_div_main.style.display = "none";
        div_choose_destination.style.display = "none";
        div.style.backgroundImage = `url('${images[2]}')`;
        div.style.transitionDuration = '2s';
        header.style.display = "block";
        div.style.position = "relative";
        destination_title.innerHTML = "Uluwatu Temple";
        destination_title.style.display = "block";
        destination_title.style.animation = "opacity 2.5s ease-in-out";
        div.style.alignContent = "center";
        div_main_about.style.display = "block";
        div_hotels.style.display = "block";
        img_rectangle1.src = "assets/images/uluwatu-picture9.jpeg";
        img_rectangle2.src = "assets/images/Uluwatu Tample.jpeg";
        img_square1.src = "assets/images/uluwatu-picture11.jpeg";
        img_square2.src = "assets/images/uluwatu-picture10.jpeg";
        hotels_title_description.innerHTML = "We offer comfortable hotels or villas with beautiful views while on holiday near Uluwatu Temple";
        description_gallery.innerHTML = "Here is some image that taken in Uluwatu Temple";
        image1.src = "assets/images/uluwatu-picture1.jpeg";
        image2.src = "assets/images/uluwatu-picture11.jpeg";
        image3.src = "assets/images/uluwatu-picture3.jpeg";
        image4.src = "assets/images/uluwatu-picture4.jpeg";
        image5.src = "assets/images/Uluwatu\ Tample.jpeg";
        image6.src = "assets/images/uluwatu-picture6.jpeg";
        image7.src = "assets/images/uluwatu-picture7.jpeg";
        image8.src = "assets/images/uluwatu-picture9.jpeg";
        title_ratings.innerHTML = "What you think about Uluwatu Temple?";
        description_ratings.innerHTML = "Let us know your opinion about Uluwatu Temple!";
        person1.innerHTML = "Sarah W.";
        person2.innerHTML = "Daniel Jordan";
        person3.innerHTML = "Liam Telni";
        person4.innerHTML = "Grace L.";
        person5.innerHTML = "Michael Raen";
        person6.innerHTML = "Emmaly Cown";
        person7.innerHTML = "James B.";
        person8.innerHTML = "Olivia Kely";
        message1.innerHTML = "Uluwatu Temple is absolutely breathtaking! The views from the cliffs are stunning, and the sunset here is a sight you won't want to miss. Truly a magical experience!";
        message2.innerHTML = "Visiting Uluwatu Temple was a highlight of my Bali trip! The architecture is incredible, and the Kecak dance performance at sunset was unforgettable. Highly recommend it!";
        message3.innerHTML = "I fell in love with Uluwatu Temple! The location on the cliffside offers panoramic views of the ocean. It's a perfect blend of beauty and spirituality!";
        message4.innerHTML = "Uluwatu Temple is a must-see in Bali! The stunning backdrop of the ocean combined with the rich culture made my visit truly special. I can't wait to come back!";
        message5.innerHTML = "The beauty of Uluwatu Temple took my breath away! Watching the sunset while enjoying the Kecak dance was one of the best experiences of my life. Don't miss it!";
        message6.innerHTML = "I had an amazing time at Uluwatu Temple! The views are spectacular, and the atmosphere is so peaceful. It's a great place to reflect and enjoy nature.";
        message7.innerHTML = "Uluwatu Temple is simply stunning! The cliffs, the sea, and the intricate temple architecture create a perfect setting. A photographer's paradise for sure!";
        message8.innerHTML = "I can't recommend Uluwatu Temple enough! The cultural significance, coupled with the breathtaking views, makes it a top destination in Bali. You have to experience it!";
        notification.style.bottom = '-200px';
        hotels_img1.src = "assets/images/uluwatu-hotels1.jpg";
        hotels_img2.src = "assets/images/uluwatu-hotels2.jpg";
        hotels_img3.src = "assets/images/uluwatu-hotels3.jpg";
        hotels_img4.src = "assets/images/uluwatu-hotels4.jpg";
        hotels_name1.innerHTML = "Anantara Uluwatu Bali <br> Resort";
        hotels_name2.innerHTML = "Radisson Blu Resort, Bali <br> Uluwatu";
        hotels_name3.innerHTML = "Swiss-belresort Pecatu";
        hotels_name4.innerHTML = "Le Grande Bali";
        hotels_map1.innerHTML = "Jl. Pemutih - Labuan Sait, Pecatu 80364 <br> Indonesia";
        hotels_map2.innerHTML = "Jl. Pemutih Bali Uluwatu, Pecatu 80364 <br> Indonesia";
        hotels_map3.innerHTML = "Jl. Pecatu Indah Raya Blok G2 Pecatu <br> Indah Resort, Pecatu 80361 Indonesia";
        hotels_map4.innerHTML = "Jl. Le Grande Acess, Pecatu 80361 <br> Indonesia";
        hotels_link1.href = "https://www.tripadvisor.com/Hotel_Review-g1380108-d2151983-Reviews-Anantara_Uluwatu_Bali_Resort-Pecatu_Bukit_Peninsula_Bali.html";
        hotels_link2.href = "https://www.tripadvisor.com/Hotel_Review-g1380108-d13169927-Reviews-Radisson_Blu_Resort_Bali_Uluwatu-Pecatu_Bukit_Peninsula_Bali.html";
        hotels_link3.href = "https://www.tripadvisor.com/Hotel_Review-g1380108-d12416276-Reviews-Swiss_belresort_Pecatu-Pecatu_Bukit_Peninsula_Bali.html";
        hotels_link4.href = "https://www.tripadvisor.com/Hotel_Review-g1380108-d1379463-Reviews-Le_Grande_Bali-Pecatu_Bukit_Peninsula_Bali.html";
        a_see_more.href = "https://www.tripadvisor.com/SmartDeals-g1380108-Pecatu_Bukit_Peninsula_Bali-Hotel-Deals.html"
        title_culinary.innerHTML = "Dont Forget To Try This Culinary When You In Uluwatu Temple!";
        link_nasi_campur.href = "https://www.google.com/maps/place/Warung+nasi+campur,buk+nita/@-8.8216268,115.0820557,14z/data=!4m10!1m2!2m1!1snasi+campur+didekat+uluwatu+temple!3m6!1s0x2dd2450031801059:0x8c1f4fd6d69562c2!8m2!3d-8.8094591!4d115.1160815!15sCiJuYXNpIGNhbXB1ciBkaWRla2F0IHVsdXdhdHUgdGVtcGxlkgERYnJ1bmNoX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11y7d0lh7b?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_ayam_betutu.href = "https://www.google.com/maps/place/Warung+Bejana+Uluwatu/@-8.8246282,115.0535057,12.7z/data=!4m10!1m2!2m1!1sayam+betutu+didekat+uluwatu+temple!3m6!1s0x2dd2500429aae6e1:0x4aefa18f4e692523!8m2!3d-8.8281288!4d115.0881038!15sCiBheWFtIGJldHV0dSBkZWthdCB1bHV3YXR1IHRlbXBsZVoiIiBheWFtIGJldHV0dSBkZWthdCB1bHV3YXR1IHRlbXBsZZIBFWluZG9uZXNpYW5fcmVzdGF1cmFudOABAA!16s%2Fg%2F11clsnp00q?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_babi_guling.href = "https://www.google.com/maps/place/Warung+Babi+Guling+Pura+Uluwatu/@-8.8290035,115.0505823,14z/data=!4m10!1m2!2m1!1snasi+campur+didekat+uluwatu+temple!3m6!1s0x2dd251e2cb17956f:0x8cd40955ac7a44a1!8m2!3d-8.8290014!4d115.0866196!15sCiJuYXNpIGNhbXB1ciBkaWRla2F0IHVsdXdhdHUgdGVtcGxlWiQiIm5hc2kgY2FtcHVyIGRpZGVrYXQgdWx1d2F0dSB0ZW1wbGWSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11f69dzms3?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_plecing_kangkung.href = "https://gofood.co.id/yogyakarta/restaurant/plecing-kangkung-argulobang-930723c7-428b-43b2-b107-b1a894cdf3e6";
        link_lawar.href = "https://www.google.com/maps/place/Warung+nasi+lawar+Bali/@-8.7422641,115.0877761,12z/data=!4m10!1m2!2m1!1swarung+lawar+didekat+uluwatu+temple!3m6!1s0x2dd245006ddc3999:0xeb0d84cf155192!8m2!3d-8.799688!4d115.1605237!15sCiN3YXJ1bmcgbGF3YXIgZGlkZWthdCB1bHV3YXR1IHRlbXBsZZIBDHNvdXBfa2l0Y2hlbuABAA!16s%2Fg%2F11y3wgnj0w?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_sate_lilit.href = "https://www.google.com/maps/place/Warung+Bejana+Uluwatu/@-8.8281288,114.9356685,12z/data=!4m10!1m2!2m1!1ssate+lilir+didekat+uluwatu+temple!3m6!1s0x2dd2500429aae6e1:0x4aefa18f4e692523!8m2!3d-8.8281288!4d115.0881038!15sCh9zYXRlIGxpbGl0IGRla2F0IHVsdXdhdHUgdGVtcGxlWiEiH3NhdGUgbGlsaXQgZGVrYXQgdWx1d2F0dSB0ZW1wbGWSARVpbmRvbmVzaWFuX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11clsnp00q?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        map_iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.2692200157053!2d115.08388463860246!3d-8.829356647806053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24ffc20cb8191%3A0xcb98d1ba7db0495!2sPura%20Luhur%20Uluwatu!5e0!3m2!1sid!2sid!4v1729423740542!5m2!1sid!2sid";
    }

    map_bali.addEventListener("click", function() {
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
    });

    destination1.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'true');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination2.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'true');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination3.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'true');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination4.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'true');
        window.location.reload();
    });

    window.addEventListener("scroll", function() {
        let scrollY = window.scrollY;
        let div_map_bali_description = document.querySelector(".div-map-bali-description");

        if(scrollY >= 150) {
            div_map_bali_description.style.opacity = '0';
            div_map_bali_description.style.transitionDuration = '1s';
        }
        else if (scrollY <= 150) {
            div_map_bali_description.style.opacity = '1';
            div_map_bali_description.style.transitionDuration = '1s';
        }
    });

    window.addEventListener("scroll", function() {
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;
        let navbar = document.querySelector(".navbar");

        if (scrollY >= (0.7 * windowHeight)) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            navbar.transitionDuration = '2s';
        }
        else if (scrollY <= (0.7 * windowHeight)) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
            navbar.transitionDuration = '2s';
        }
    });

    window.addEventListener("scroll", function() {
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;
        let div_main_about = document.querySelector(".div-about");
        let img_rectangle1 = document.querySelector(".rectangle1");
        let img_square1 = document.querySelector(".square1");
        let img_rectangle2 = document.querySelector(".rectangle2");
        let img_square2 = document.querySelector(".square2");
        let title_about = document.querySelector(".title-about");
        let section_declaration1 = document.querySelector(".section-declaration1");
        let section_declaration2 = document.querySelector(".section-declaration2");
        let div_parent_about = document.querySelector(".div-main-about");
        let description_about = document.querySelector(".description-about");

        if(scrollY >= (0.9 * windowHeight + 50)) {
            div_main_about.style.position = "fixed";
            div_main_about.style.transitionDuration = '2s';
        }

        else if(scrollY <= (0.9 * windowHeight + 50)) {
            div_main_about.style.position = "static";
        }

        if(scrollY >= (1.6 * windowHeight + 50)) {
            img_rectangle1.style.height = '200px';
            img_rectangle2.style.height = '200px';
            img_square1.style.height = '300px';
            img_square2.style.height = '300px';
            title_about.innerHTML = "What Make Us Popular?";
            description_about.innerHTML = "Uluwatu Temple is renowned as one of the top tourist destinations in Bali and Badung due to its stunning architecture and breathtaking location. Perched on a cliff overlooking the Indian Ocean, the temple offers panoramic views that captivate visitors. The intricate designs and rich cultural significance of the temple enhance its appeal, making it a must-visit site for those exploring Bali's spiritual heritage.<br><br>In addition to its visual allure, Uluwatu Temple is famous for its cultural experiences, particularly the mesmerizing Kecak dance performances held during sunset. This traditional Balinese dance, set against the backdrop of the setting sun, adds a unique dimension to the visit, immersing tourists in local customs and storytelling. Together, the natural beauty, historical value, and vibrant cultural performances make Uluwatu Temple a highlight of any trip to Bali.";
            section_declaration2.style.backgroundColor = "var(--blue-color)";
            section_declaration2.style.color = "white";
            section_declaration2.style.border = "none";
            section_declaration1.style.border = "1px solid black";
            section_declaration1.style.color = "black";
            section_declaration1.style.backgroundColor = "transparent";
        }
        else if (scrollY <= (1.6 * windowHeight + 50)) {
            img_rectangle1.style.height = '300px';
            img_rectangle2.style.height = '300px';
            img_square1.style.height = '200px';
            img_square2.style.height = '200px';
            title_about.innerHTML = "About Uluwatu Temple";
            description_about.innerHTML = "Uluwatu Temple, known as Pura Luhur Uluwatu, is a renowned Balinese sea temple perched on top of a 70-meter-high cliff overlooking the Indian Ocean. This temple is not only revered for its religious significance but also for the breathtaking views it offers, especially during sunset. Visitors flock to Uluwatu to witness the stunning combination of the temple's spiritual aura and natural beauty. <br><br> One of the main attractions at Uluwatu Temple is the famous Kecak Fire Dance performance, which takes place daily at sunset. The Kecak dance tells the story of the Ramayana and is performed by a group of men chanting in unison, creating an unforgettable cultural experience. Visitors can purchase tickets to the dance, which is separate from the temple entry fee. The dance takes place in an open-air amphitheater, where the backdrop of the temple and the ocean adds to the mystique of the performance. <br><br> To enter Uluwatu Temple, visitors need to pay an entrance fee, which is used for the temple's maintenance and preservation. Additionally, tickets for the Kecak Fire Dance can be purchased either on-site or online, offering a convenient option for tourists who want to ensure they secure a spot for the performance. The online ticket purchase option can often be found on popular travel websites or the official temple booking sites, making it easier for visitors to plan their trip.";
            section_declaration1.style.backgroundColor = "var(--blue-color)";
            section_declaration1.style.color = "white";
            section_declaration1.style.border = "none";
            section_declaration2.style.border = "1px solid black";
            section_declaration2.style.color = "black";
            section_declaration2.style.backgroundColor = "transparent";
        }

        if(scrollY >= (2.2 * windowHeight + 70)) {
            div_main_about.style.position = "static";
            div_parent_about.style.alignContent = "end";
        }

        else if(scrollY <= (2.2 * windowHeight + 70)) {
            div_parent_about.style.alignContent = "start";
        }
    });

    let div_main_hotels = document.querySelector(".div-sub-hotels");

    let scrollY_div = div_main_about.getBoundingClientRect().top + window.scrollY;
    let is_full_width = false;

    const minWidth = 150;
    const minHeight = 80;

    const maxWidth = 100;
    const maxHeight = 100;

    window.addEventListener("scroll", function() {
        let new_scrollY = window.scrollY - scrollY_div;

        if(is_full_width == false) {
            if (new_scrollY > 1100) {
                let newWidth = minWidth + (new_scrollY / 5);
                let newHeight = minHeight + (new_scrollY / 5);

                if (newWidth > maxWidth) {
                    newWidth = maxWidth;
                }
                if (newHeight > maxHeight) {
                    newHeight = maxHeight;
                }
                    div_main_hotels.style.width = newWidth + 'vw';
                    div_main_hotels.style.height = newHeight + 'vh';
                if(newWidth == 100) {
                    is_full_width = true;
                    div_hotels_text.style.opacity = 1;
                    div_choose_hotels.style.opacity = 1;
                    div_see_more_hotels.style.opacity = 1;
                }
            }
            else {
                div_main_hotels.style.width = minWidth + 'px';
                div_main_hotels.style.height = minHeight + 'px';
            }
        }
    });

    const track = document.getElementById("image-track");
    const container = document.querySelector('.gallery-container');
    const titleText = document.querySelector('.title-gallery');
    const descriptionText = document.querySelector('.description-gallery');

    track.dataset.mouseDownAt = track.dataset.mouseDownAt || "0";
    track.dataset.prevPercentage = track.dataset.prevPercentage || "0";
    track.dataset.percentage = track.dataset.percentage || "0";

    const initialBackgroundColor = "black";
    const targetBackgroundColor = "rgba(252, 240, 227, 1)";
    const initialTextColor = "white";
    const targetTextColor = "black";

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";  
        track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = e => {
        if(track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        let percentage = (mouseDelta / maxDelta) * -100;
        let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

        if (isNaN(nextPercentage)) {
            console.error("Error: nextPercentage is NaN");
            return;
        }

        nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });

        for(const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }

        const backgroundTransitionFactor = Math.abs(nextPercentage) / 100;
        const r = Math.round(0 + (252 - 0) * backgroundTransitionFactor);
        const g = Math.round(0 + (240 - 0) * backgroundTransitionFactor);
        const b = Math.round(0 + (227 - 0) * backgroundTransitionFactor);
        container.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;

        const textColorTransitionFactor = Math.abs(nextPercentage) / 100;
        const textR = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textG = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textB = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        titleText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
        descriptionText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
    };

    window.onmousedown = e => handleOnDown(e);
    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);
    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);
    window.ontouchmove = e => handleOnMove(e.touches[0]);


    let stars1 = document.querySelector(".stars1");
    let stars2 = document.querySelector(".stars2");
    let stars3 = document.querySelector(".stars3");
    let stars4 = document.querySelector(".stars4");
    let stars5 = document.querySelector(".stars5");

    stars1.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/unactive-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars2.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars3.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars4.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars5.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/active-stars.png";
    });

    let btn_send_message = document.querySelector(".btn-send-message");
    let input_gender = document.querySelectorAll(".input-gender");
    let rating = document.querySelectorAll(".unactive-stars");
    let link_active_stars = "assets/images/active-stars.png";
    let error_message = document.querySelector(".error-message");
    let input_name_elem = document.querySelector(".input-name");
    let notification = document.querySelector('.div-main-notification');

    input_name_elem.addEventListener('keydown', function(event) {
        const key = event.key;
        
        if (!/^[a-zA-Z]$/.test(key) && key !== 'Backspace' && key !== ' ') {
            event.preventDefault();
        }
    });

    btn_send_message.addEventListener("click", function() {
        let input_name_elem = document.querySelector(".input-name");
        let textarea_elem = document.querySelector(".textarea");
        let input_name = input_name_elem.value;
        let textarea = textarea_elem.value;

        let input_gender_checked = false;
        input_gender.forEach(radio => {
            if (radio.checked) {
                input_gender_checked = true;
            }
        });

        let ratings = false;
        rating.forEach(function(image) {
            if (image.src.includes(link_active_stars)) {
                ratings = true;
            }
        });

        if (input_name === "" || textarea === "" || input_gender_checked == false || ratings == false) {
            error_message.style.display = "block";
        } else {
            error_message.style.display = "none";

            notification.style.transition = '0.5s',
            notification.style.bottom = '100px'
            setTimeout(function(){
                notification.style.transition = '1s',
                notification.style.bottom = '-200px'
            }, 2000);

            input_name_elem.value = "";
            textarea_elem.value = "";

            rating.forEach(function(image) {
                if (image.src.includes(link_active_stars)) {
                    image.src = "assets/images/unactive-stars.png";
                }
            });

            input_gender.forEach(radio => {
                radio.checked = false;
            });
        }
    });
}

function MengeningBeach() {
    let button_main = document.querySelector(".btn-main");
    let sub_div_main = document.querySelector(".sub-div-main");
    let div_choose_destination = document.querySelector(".div-choose-destination");
    let destination1 = document.querySelector(".img-destination1");
    let destination2 = document.querySelector(".img-destination2");
    let destination3 = document.querySelector(".img-destination3");
    let destination4 = document.querySelector(".img-destination4");
    let isTransitioning = false;
    let header = document.querySelector(".div-header");
    let destination_title = document.querySelector(".destination-title");
    let map_bali = document.querySelector(".img-map-bali");
    let div_main_about = document.querySelector(".div-main-about");
    let div_hotels = document.querySelector(".div-main-hotels");
    let div_hotels_text = document.querySelector(".div-hotels-text");
    let div_choose_hotels = document.querySelector(".div-hotels");
    let div_see_more_hotels = document.querySelector(".div-see-more");
    let div_culinary = document.querySelector(".div-culinary");
    let gallery_section = document.querySelector(".gallery-section");
    let div_main_ratings = document.querySelector(".div-main-ratings");
    let title_about = document.querySelector(".title-about");
    let img_rectangle1 = document.querySelector(".rectangle1");
    let img_square1 = document.querySelector(".square1");
    let img_rectangle2 = document.querySelector(".rectangle2");
    let img_square2 = document.querySelector(".square2");
    let hotels_title_description = document.querySelector(".hotels-title-description");
    let description_gallery = document.querySelector(".description-gallery");
    let image1 = document.querySelector(".image1");
    let image2 = document.querySelector(".image2");
    let image3 = document.querySelector(".image3");
    let image4 = document.querySelector(".image4");
    let image5 = document.querySelector(".image5");
    let image6 = document.querySelector(".image6");
    let image7 = document.querySelector(".image7");
    let image8 = document.querySelector(".image8");
    let title_ratings = document.querySelector(".title-ratings");
    let description_ratings = document.querySelector(".description-ratings");
    let person1 = document.querySelector(".person1");
    let person2 = document.querySelector(".person2");
    let person3 = document.querySelector(".person3");
    let person4 = document.querySelector(".person4");
    let person5 = document.querySelector(".person5");
    let person6 = document.querySelector(".person6");
    let person7 = document.querySelector(".person7");
    let person8 = document.querySelector(".person8");
    let message1 = document.querySelector(".message1");
    let message2 = document.querySelector(".message2");
    let message3 = document.querySelector(".message3");
    let message4 = document.querySelector(".message4");
    let message5 = document.querySelector(".message5");
    let message6 = document.querySelector(".message6");
    let message7 = document.querySelector(".message7");
    let message8 = document.querySelector(".message8");
    let hotels_img1 = document.querySelector(".hotels-img1");
    let hotels_name1 = document.querySelector(".hotels-name1");
    let hotels_map1 = document.querySelector(".hotels-map1");
    let hotels_link1 = document.querySelector(".hotels-link1");
    let hotels_img2 = document.querySelector(".hotels-img2");
    let hotels_name2 = document.querySelector(".hotels-name2");
    let hotels_map2 = document.querySelector(".hotels-map2");
    let hotels_link2 = document.querySelector(".hotels-link2");
    let hotels_img3 = document.querySelector(".hotels-img3");
    let hotels_name3 = document.querySelector(".hotels-name3");
    let hotels_map3 = document.querySelector(".hotels-map3");
    let hotels_link3 = document.querySelector(".hotels-link3");
    let hotels_img4 = document.querySelector(".hotels-img4");
    let hotels_name4 = document.querySelector(".hotels-name4");
    let hotels_map4 = document.querySelector(".hotels-map4");
    let hotels_link4 = document.querySelector(".hotels-link4");
    let a_see_more = document.querySelector(".a-see-more");
    let title_culinary = document.querySelector(".title-culinary");
    let link_nasi_campur = document.querySelector(".link-nasi-campur");
    let link_ayam_betutu = document.querySelector(".link-ayam-betutu");
    let link_babi_guling = document.querySelector(".link-babi-guling");
    let link_plecing_kangkung = document.querySelector(".link-plecing-kangkung");
    let link_lawar = document.querySelector(".link-lawar");
    let link_sate_lilit = document.querySelector(".link-sate-lilit");
    let map_iframe = document.querySelector(".map-iframe");

    window.onload = function() {
        div_choose_destination.style.display = "none";
        sub_div_main.style.display = "none";
        div_choose_destination.style.display = "none";
        div.style.backgroundImage = `url('${images[3]}')`;
        div.style.transitionDuration = '2s';
        header.style.display = "block";
        div.style.position = "relative";
        destination_title.innerHTML = "Mengening Beach";
        destination_title.style.display = "block";
        destination_title.style.animation = "opacity 2.5s ease-in-out";
        div.style.alignContent = "center";
        div_main_about.style.display = "block";
        div_hotels.style.display = "block";
        img_rectangle1.src = "assets/images/mengening-picture9.jpeg";
        img_rectangle2.src = "assets/images/mengening-picture11.jpeg";
        img_square1.src = "assets/images/mengening-picture1.jpeg";
        img_square2.src = "assets/images/mengening-picture3.jpeg";
        hotels_title_description.innerHTML = "We offer comfortable hotels or villas with beautiful views while on holiday near Mengening Beach";
        description_gallery.innerHTML = "Here is some image that taken in Mengening Beach";
        image1.src = "assets/images/mengening-picture1.jpeg";
        image2.src = "assets/images/mengening-picture2.jpeg";
        image3.src = "assets/images/mengening-picture3.jpeg";
        image4.src = "assets/images/mengening-picture4.jpeg";
        image5.src = "assets/images/mengening-picture5.jpeg";
        image6.src = "assets/images/mengening-picture6.jpeg";
        image7.src = "assets/images/mengening-picture9.jpeg";
        image8.src = "assets/images/mengening-picture8.jpeg";
        title_ratings.innerHTML = "What you think about Mengening Beach?";
        description_ratings.innerHTML = "Let us know your opinion about Mengening Beach!";
        person1.innerHTML = "Ava Lois";
        person2.innerHTML = "Ethan Pemn";
        person3.innerHTML = "David L.";
        person4.innerHTML = "Emilyin A.";
        person5.innerHTML = "Chloe M";
        person6.innerHTML = "Ella Sheryl";
        person7.innerHTML = "Noah Reig";
        person8.innerHTML = "Mia Nabila";
        message1.innerHTML = "Mengening Beach is a hidden gem! The serene atmosphere and stunning views made my day so relaxing. I can't believe I hadn't discovered this place sooner!";
        message2.innerHTML = "I absolutely loved my time at Mengening Beach! The soft sand and clear water created the perfect environment for sunbathing. It's a must-visit spot in Bali!";
        message3.innerHTML = "Mengening Beach took my breath away! The sunsets here are magical, and it's the perfect place for a romantic photo shoot. I can't recommend it enough!";
        message4.innerHTML = "This beach is a piece of paradise! The tranquil vibe and beautiful scenery made it a perfect escape from the hustle and bustle of Bali. I'll definitely be back!";
        message5.innerHTML = "I found Mengening Beach to be so peaceful and beautiful! It's a great spot for a family picnic or a quiet day by the sea. A fantastic place to unwind!";
        message6.innerHTML = "I was amazed by the beauty of Mengening Beach! The stunning landscape and the sound of the waves were so calming. It's the perfect getaway in Bali!";
        message7.innerHTML = "Mengening Beach is a must-see! The natural beauty and tranquil setting are incredible. I spent hours just enjoying the view. Definitely add it to your Bali itinerary!";
        message8.innerHTML = "What a beautiful spot! Mengening Beach is perfect for a day of relaxation and fun. I loved the atmosphere and can't wait to return for more amazing memories!";
        notification.style.bottom = '-200px';
        hotels_img1.src = "assets/images/mengening-hotels1.jpg";
        hotels_img2.src = "assets/images/mengening-hotels2.jpg";
        hotels_img3.src = "assets/images/mengening-hotels3.jpg";
        hotels_img4.src = "assets/images/mengening-hotels4.jpg";
        hotels_name1.innerHTML = "Viva Dash Hotel Seminyak";
        hotels_name2.innerHTML = "Kokonut Suites";
        hotels_name3.innerHTML = "Amadea Resort & Villas <br> Seminyak Bali";
        hotels_name4.innerHTML = "Tijili Hotel Seminyak";
        hotels_map1.innerHTML = "Jl. Petitenget, Kerobokan";
        hotels_map2.innerHTML = "JI. Raya Petitenget, No. 88, Kerobokan";
        hotels_map3.innerHTML = "Jl. Kayu Aya 55";
        hotels_map4.innerHTML = "Jl. Drupadi No. 9";
        hotels_link1.href = "https://hotel.co.id/hotel/102447-viva-dash-hotel-seminyak";
        hotels_link2.href = "https://hotel.co.id/hotel/32244-kokonut-suites";
        hotels_link3.href = "https://hotel.co.id/hotel/52299-amadea-resort-villas-seminyak-bali";
        hotels_link4.href = "https://hotel.co.id/hotel/117289-tijili-hotel-seminyak";
        a_see_more.href = "https://hotel.co.id/tempat/pantai-mengening"
        title_culinary.innerHTML = "Dont Forget To Try This Culinary When You In Mengening Beach!";
        link_nasi_campur.href = "https://www.google.com/maps/place/Warung+Pantai+Seseh/@-8.6541165,115.0767373,13z/data=!4m10!1m2!2m1!1snasi+campur+didekat+pantai+mengening!3m6!1s0x2dd239db2199d6c3:0x3011b2d2c7bf50f3!8m2!3d-8.6451661!4d115.110005!15sCiRuYXNpIGNhbXB1ciBkaWRla2F0IHBhbnRhaSBtZW5nZW5pbmdaJiIkbmFzaSBjYW1wdXIgZGlkZWthdCBwYW50YWkgbWVuZ2VuaW5nkgEKcmVzdGF1cmFudOABAA!16s%2Fg%2F11qp2vgg8n?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_ayam_betutu.href = "https://www.google.com/maps/place/Ayam+Betutu+Ibu+Mira+Asli+Gilimanuk/@-8.6541999,115.0544944,13z/data=!4m10!1m2!2m1!1sayam+betutu+didekat+pantai+mengening!3m6!1s0x2dd2478ff4833167:0x3949b40abe77f294!8m2!3d-8.7006286!4d115.1768664!15sCiRheWFtIGJldHV0dSBkaWRla2F0IHBhbnRhaSBtZW5nZW5pbmdaJiIkYXlhbSBiZXR1dHUgZGlkZWthdCBwYW50YWkgbWVuZ2VuaW5nkgEFZGluZXLgAQA!16s%2Fg%2F11sfk60mnl?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_babi_guling.href = "https://www.google.com/maps/place/Wr+Babi+Guling+Singaraja/@-8.6392153,115.0991291,14.05z/data=!4m10!1m2!2m1!1sbabi+guliing+didekat+pantai+mengening!3m6!1s0x2dd239a2b990d4ef:0x645a1bed3633db84!8m2!3d-8.6186994!4d115.1168242!15sCiViYWJpIGd1bGluZyBkaSBkZWthdCBwYW50YWkgbWVuZ2VuaW5nWiciJWJhYmkgZ3VsaW5nIGRpIGRla2F0IHBhbnRhaSBtZW5nZW5pbmeSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11gvzvgprd?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_plecing_kangkung.href = "https://gofood.co.id/yogyakarta/restaurant/plecing-kangkung-argulobang-930723c7-428b-43b2-b107-b1a894cdf3e6";
        link_lawar.href = "https://www.google.com/maps/place/WARUNG+NASI+LAWAR/@-8.6448348,115.1239097,14.68z/data=!4m6!3m5!1s0x2dd2386f7a7d9a07:0x9d1f6316541fe92c!8m2!3d-8.6430488!4d115.1288503!16s%2Fg%2F11tk8lz7p2?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_sate_lilit.href = "https://www.google.com/maps/place/WR.+Sate+Lilit+Men+Ari/@-8.5419775,114.932103,12z/data=!4m10!1m2!2m1!1ssate+lilit+didekat+pantai+mengening!3m6!1s0x2dd2314f557b2599:0xa493bfc43f672f06!8m2!3d-8.5419775!4d115.0845383!15sCiNzYXRlIGxpbGl0IGRpZGVrYXQgcGFudGFpIG1lbmdlbmluZ1olIiNzYXRlIGxpbGl0IGRpZGVrYXQgcGFudGFpIG1lbmdlbmluZ5IBEHNhdGF5X3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11h1mb8f6s?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        map_iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.545737132412!2d115.09595519678955!3d-8.6395322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23821f5031d75%3A0xc34126863786026b!2sPantai%20Mengening!5e0!3m2!1sid!2sid!4v1729423888020!5m2!1sid!2sid";
    }

    map_bali.addEventListener("click", function() {
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
    });

        destination1.addEventListener("click", function() {
            localStorage.setItem('picked_destination_canggu', 'true');
            localStorage.setItem('picked_destination_gwk', 'false');
            localStorage.setItem('picked_destination_uluwatu', 'false');
            localStorage.setItem('picked_destination_mengening', 'false');
            window.location.reload();
        });

    destination2.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'true');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination3.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'true');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination4.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'true');
        window.location.reload();
    });

    window.addEventListener("scroll", function() {
        let scrollY = window.scrollY;
        let div_map_bali_description = document.querySelector(".div-map-bali-description");

        if(scrollY >= 150) {
            div_map_bali_description.style.opacity = '0';
            div_map_bali_description.style.transitionDuration = '1s';
        }
        else if (scrollY <= 150) {
            div_map_bali_description.style.opacity = '1';
            div_map_bali_description.style.transitionDuration = '1s';
        }
    });

    window.addEventListener("scroll", function() {
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;
        let navbar = document.querySelector(".navbar");

        if (scrollY >= (0.7 * windowHeight)) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            navbar.transitionDuration = '2s';
        }
        else if (scrollY <= (0.7 * windowHeight)) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
            navbar.transitionDuration = '2s';
        }
    });

    window.addEventListener("scroll", function() {
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;
        let div_main_about = document.querySelector(".div-about");
        let img_rectangle1 = document.querySelector(".rectangle1");
        let img_square1 = document.querySelector(".square1");
        let img_rectangle2 = document.querySelector(".rectangle2");
        let img_square2 = document.querySelector(".square2");
        let title_about = document.querySelector(".title-about");
        let section_declaration1 = document.querySelector(".section-declaration1");
        let section_declaration2 = document.querySelector(".section-declaration2");
        let div_parent_about = document.querySelector(".div-main-about");
        let description_about = document.querySelector(".description-about");

        if(scrollY >= (0.9 * windowHeight + 50)) {
            div_main_about.style.position = "fixed";
            div_main_about.style.transitionDuration = '2s';
        }

        else if(scrollY <= (0.9 * windowHeight + 50)) {
            div_main_about.style.position = "static";
        }

        if(scrollY >= (1.6 * windowHeight + 50)) {
            img_rectangle1.style.height = '200px';
            img_rectangle2.style.height = '200px';
            img_square1.style.height = '300px';
            img_square2.style.height = '300px';
            title_about.innerHTML = "What Make Us Popular?";
            description_about.innerHTML = "Mengening Beach has gained popularity as one of the top tourist destinations in Bali and Badung due to its breathtaking natural scenery and serene atmosphere. The beach's pristine white sand, crystal-clear waters, and stunning coastal views create an idyllic setting that attracts visitors seeking relaxation and tranquility away from the bustling tourist hotspots. Its relatively secluded location allows for a more intimate experience with nature, making it a favored spot for those looking to unwind.<br><br> Additionally, Mengening Beach's reputation as a prime location for pre-wedding photoshoots has contributed to its fame. Many couples flock to the beach to capture their special moments against the picturesque backdrop of the ocean and cliffs, further enhancing the beach's appeal. The combination of its scenic beauty, peaceful ambiance, and suitability for romantic photography makes Mengening Beach a must-visit destination for tourists exploring the enchanting island of Bali.";
            section_declaration2.style.backgroundColor = "var(--blue-color)";
            section_declaration2.style.color = "white";
            section_declaration2.style.border = "none";
            section_declaration1.style.border = "1px solid black";
            section_declaration1.style.color = "black";
            section_declaration1.style.backgroundColor = "transparent";
        }
        else if (scrollY <= (1.6 * windowHeight + 50)) {
            img_rectangle1.style.height = '300px';
            img_rectangle2.style.height = '300px';
            img_square1.style.height = '200px';
            img_square2.style.height = '200px';
            title_about.innerHTML = "About Mengening Beach";
            description_about.innerHTML = "Mengening Beach is a hidden gem located in Bali, renowned for its tranquil atmosphere and stunning natural beauty. This picturesque beach is characterized by its soft white sand, clear turquoise waters, and lush greenery, making it an ideal spot for relaxation and recreation. Visitors can enjoy a day sunbathing, swimming, or simply soaking in the serene surroundings. Access to Mengening Beach is typically free, allowing tourists to enjoy its beauty without the burden of entry fees.<br><br> In addition to its scenic allure, Mengening Beach has become a popular location for pre-wedding photo shoots. Many couples choose this idyllic setting to capture their special moments, donning elegant wedding attire against the stunning backdrop of the ocean and cliffs. The beach's unique charm provides an unforgettable experience for couples looking to create lasting memories. Furthermore, Mengining Beach is also suitable for various events, including family gatherings and beach parties, offering a perfect venue for creating cherished memories with loved ones.<br><br> Whether you are seeking a peaceful escape, planning a romantic photo session, or looking to celebrate a special occasion, Mengening Beach provides a versatile space to accommodate your needs. Its combination of natural beauty, accessibility, and versatility makes it a must-visit destination for anyone exploring Bali.";
            section_declaration1.style.backgroundColor = "var(--blue-color)";
            section_declaration1.style.color = "white";
            section_declaration1.style.border = "none";
            section_declaration2.style.border = "1px solid black";
            section_declaration2.style.color = "black";
            section_declaration2.style.backgroundColor = "transparent";
        }

        if(scrollY >= (2.2 * windowHeight + 70)) {
            div_main_about.style.position = "static";
            div_parent_about.style.alignContent = "end";
        }

        else if(scrollY <= (2.2 * windowHeight + 70)) {
            div_parent_about.style.alignContent = "start";
        }
    });

    let div_main_hotels = document.querySelector(".div-sub-hotels");

    let scrollY_div = div_main_about.getBoundingClientRect().top + window.scrollY;
    let is_full_width = false;

    const minWidth = 150;
    const minHeight = 80;

    const maxWidth = 100;
    const maxHeight = 100;

    window.addEventListener("scroll", function() {
        let new_scrollY = window.scrollY - scrollY_div;

        if(is_full_width == false) {
            if (new_scrollY > 1100) {
                let newWidth = minWidth + (new_scrollY / 5);
                let newHeight = minHeight + (new_scrollY / 5);
        
                if (newWidth > maxWidth) {
                    newWidth = maxWidth;
                }
                if (newHeight > maxHeight) {
                    newHeight = maxHeight;
                }
                    div_main_hotels.style.width = newWidth + 'vw';
                    div_main_hotels.style.height = newHeight + 'vh';
                if(newWidth == 100) {
                    is_full_width = true;
                    div_hotels_text.style.opacity = 1;
                    div_choose_hotels.style.opacity = 1;
                    div_see_more_hotels.style.opacity = 1;
                }
            }
            else {
                div_main_hotels.style.width = minWidth + 'px';
                div_main_hotels.style.height = minHeight + 'px';
            }
        }
    });

    const track = document.getElementById("image-track");
    const container = document.querySelector('.gallery-container');
    const titleText = document.querySelector('.title-gallery');
    const descriptionText = document.querySelector('.description-gallery');

    track.dataset.mouseDownAt = track.dataset.mouseDownAt || "0";
    track.dataset.prevPercentage = track.dataset.prevPercentage || "0";
    track.dataset.percentage = track.dataset.percentage || "0";

    const initialBackgroundColor = "black";
    const targetBackgroundColor = "rgba(252, 240, 227, 1)";
    const initialTextColor = "white";
    const targetTextColor = "black";

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";  
        track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = e => {
        if(track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        let percentage = (mouseDelta / maxDelta) * -100;
        let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

        if (isNaN(nextPercentage)) {
            console.error("Error: nextPercentage is NaN");
            return;
        }

        nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });

        for(const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }

        const backgroundTransitionFactor = Math.abs(nextPercentage) / 100;
        const r = Math.round(0 + (252 - 0) * backgroundTransitionFactor);
        const g = Math.round(0 + (240 - 0) * backgroundTransitionFactor);
        const b = Math.round(0 + (227 - 0) * backgroundTransitionFactor);
        container.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;

        const textColorTransitionFactor = Math.abs(nextPercentage) / 100;
        const textR = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textG = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textB = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        titleText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
        descriptionText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
    };

    window.onmousedown = e => handleOnDown(e);
    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);
    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);
    window.ontouchmove = e => handleOnMove(e.touches[0]);

    let stars1 = document.querySelector(".stars1");
    let stars2 = document.querySelector(".stars2");
    let stars3 = document.querySelector(".stars3");
    let stars4 = document.querySelector(".stars4");
    let stars5 = document.querySelector(".stars5");

    stars1.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/unactive-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars2.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars3.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars4.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars5.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/active-stars.png";
    });

    let btn_send_message = document.querySelector(".btn-send-message");
    let input_gender = document.querySelectorAll(".input-gender");
    let rating = document.querySelectorAll(".unactive-stars");
    let link_active_stars = "assets/images/active-stars.png";
    let error_message = document.querySelector(".error-message");
    let input_name_elem = document.querySelector(".input-name");
    let notification = document.querySelector('.div-main-notification');

    input_name_elem.addEventListener('keydown', function(event) {
        const key = event.key;

        if (!/^[a-zA-Z]$/.test(key) && key !== 'Backspace' && key !== ' ') {
            event.preventDefault();
        }
    });

    btn_send_message.addEventListener("click", function() {
        let input_name_elem = document.querySelector(".input-name");
        let textarea_elem = document.querySelector(".textarea");
        let input_name = input_name_elem.value;
        let textarea = textarea_elem.value;
        let input_gender_checked = false;

        input_gender.forEach(radio => {
            if (radio.checked) {
                input_gender_checked = true;
            }
        });

        let ratings = false;
        rating.forEach(function(image) {
            if (image.src.includes(link_active_stars)) {
                ratings = true;
            }
        });

        if (input_name === "" || textarea === "" || input_gender_checked == false || ratings == false) {
            error_message.style.display = "block";
        } else {
            error_message.style.display = "none";

            notification.style.transition = '0.5s';
            notification.style.bottom = '100px';
            setTimeout(function(){
                notification.style.transition = '1s';
                notification.style.bottom = '-200px';
            }, 2000);

            input_name_elem.value = "";
            textarea_elem.value = "";

            rating.forEach(function(image) {
                if (image.src.includes(link_active_stars)) {
                    image.src = "assets/images/unactive-stars.png";
                }
            });

            input_gender.forEach(radio => {
                radio.checked = false;
            });
        }
    });
}

function CangguBeachPhone() {
    let button_main = document.querySelector(".btn-main");
    let sub_div_main = document.querySelector(".sub-div-main");
    let div_choose_destination = document.querySelector(".div-choose-destination");
    let destination1 = document.querySelector(".img-destination1");
    let destination2 = document.querySelector(".img-destination2");
    let destination3 = document.querySelector(".img-destination3");
    let destination4 = document.querySelector(".img-destination4");
    let isTransitioning = false;
    let header = document.querySelector(".div-header");
    let destination_title = document.querySelector(".destination-title");
    let map_bali = document.querySelector(".img-map-bali");
    let div_main_about = document.querySelector(".div-main-about");
    let div_hotels = document.querySelector(".div-main-hotels");
    let div_hotels_text = document.querySelector(".div-hotels-text");
    let div_choose_hotels = document.querySelector(".div-hotels");
    let div_see_more_hotels = document.querySelector(".div-see-more");
    let div_culinary = document.querySelector(".div-culinary");
    let gallery_section = document.querySelector(".gallery-section");
    let div_main_ratings = document.querySelector(".div-main-ratings");
    let div_logo = document.querySelector(".div-logo");
    let bars_menu = document.querySelector(".fa-bars");
    let side_menu = document.querySelector(".div-nav-with-map");
    let isShowSideMenu = false;
    let marquee_down = document.querySelector(".marquee-down");
    let title_culinary = document.querySelector(".title-culinary");
    let link_nasi_campur = document.querySelector(".link-nasi-campur");
    let link_ayam_betutu = document.querySelector(".link-ayam-betutu");
    let link_babi_guling = document.querySelector(".link-babi-guling");
    let link_plecing_kangkung = document.querySelector(".link-plecing-kangkung");
    let link_lawar = document.querySelector(".link-lawar");
    let link_sate_lilit = document.querySelector(".link-sate-lilit");
    let map_iframe = document.querySelector(".map-iframe");

    bars_menu.addEventListener("click", function() {
        if(isShowSideMenu === false) {
            isShowSideMenu = true;
            side_menu.style.display = "block";
        }
        else if(isShowSideMenu === true) {
            isShowSideMenu = false;
            side_menu.style.display = "none";
        }
    });

    window.onload = function() {
        marquee_down.setAttribute("behavior", 'alternate');
        div_choose_destination.style.display = "none";
        sub_div_main.style.display = "none";
        div_choose_destination.style.display = "none";
        div.style.backgroundImage = `url('${images[0]}')`;
        div.style.transitionDuration = '2s';
        header.style.display = "block";
        div.style.position = "relative";
        destination_title.innerHTML = "Canggu Beach";
        destination_title.style.display = "block";
        destination_title.style.animation = "opacity 2.5s ease-in-out";
        div.style.alignContent = "center";
        div_main_about.style.display = "block";
        div_hotels.style.display = "block";
        notification.style.bottom = '-200px';
        title_culinary.innerHTML = "Dont Forget To Try This Culinary When You In Canggu Beach!";
        link_nasi_campur.href = "https://www.google.com/maps/dir//Jl.+Pantai+Batu+Bolong+No.4,+Canggu,+Kec.+Kuta+Utara,+Kabupaten+Badung,+Bali+80361/@-8.6370809,115.0645038,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd23900188bd78d:0x187c610fa8d2f3f1!2m2!1d115.1469123!2d-8.6370939?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_ayam_betutu.href = "https://www.google.com/maps/dir//Jl.+Pantai+Berawa+gang.+Janur+Kuning+No.42,+Tibubeneng,+Kec.+Kuta+Utara,+Kabupaten+Badung,+Bali+80361/@-8.6607067,115.0643091,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd2473db530845b:0xdd62ea5dbb7e4836!2m2!1d115.1467557!2d-8.6607161?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_babi_guling.href = "https://www.google.com/maps/dir//Jl.+Pantai+Pererenan+No.79,+Pererenan,+Kec.+Mengwi,+Kabupaten+Badung,+Bali+80351/@-8.6350929,115.0587331,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd239708b077571:0x9abe24353b08b9a7!2m2!1d115.141135!2d-8.6351017?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_plecing_kangkung.href = "https://gofood.co.id/yogyakarta/restaurant/plecing-kangkung-argulobang-930723c7-428b-43b2-b107-b1a894cdf3e6";
        link_lawar.href = "https://www.google.com/maps/dir//Jl.+Pantai+Batu+Bolong+No.35-31,+Canggu,+Kec.+Kuta+Utara,+Kabupaten+Badung,+Bali+80351/@-8.6391307,115.0623719,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd23964dc5ab359:0xecc9b763142a77ed!2m2!1d115.1447382!2d-8.6391202?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_sate_lilit.href = "https://www.google.com/maps/dir/-8.6481298,115.1558154/warung+sate+lilit+didekat+canggu/@-8.6443563,115.14937,13.69z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2dd2392f295a5ed1:0xf6e8228283eb2631!2m2!1d115.1693824!2d-8.6455095?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        map_iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.1632351724995!2d115.13003978860199!3d-8.660468497846743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2478626b7677d%3A0x5a838e3317a93564!2sPantai%20Canggu!5e0!3m2!1sid!2sid!4v1729423533843!5m2!1sid!2sid";
    }

    div_logo.addEventListener("click", function(){
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
    });

    map_bali.addEventListener("click", function() {
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
    });

    destination1.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'true');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination2.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'true');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination3.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'true');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination4.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'true');
        window.location.reload();
    });

    const track = document.getElementById("image-track");
    const container = document.querySelector('.gallery-container');
    const titleText = document.querySelector('.title-gallery');
    const descriptionText = document.querySelector('.description-gallery');

    track.dataset.mouseDownAt = track.dataset.mouseDownAt || "0";
    track.dataset.prevPercentage = track.dataset.prevPercentage || "0";
    track.dataset.percentage = track.dataset.percentage || "0";

    const initialBackgroundColor = "black";
    const targetBackgroundColor = "rgba(252, 240, 227, 1)";
    const initialTextColor = "white";
    const targetTextColor = "black";

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";  
        track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = e => {
        if(track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        let percentage = (mouseDelta / maxDelta) * -100;
        let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

        if (isNaN(nextPercentage)) {
            console.error("Error: nextPercentage is NaN");
            return;
        }

        nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });

        for(const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }

        const backgroundTransitionFactor = Math.abs(nextPercentage) / 100;
        const r = Math.round(0 + (252 - 0) * backgroundTransitionFactor);
        const g = Math.round(0 + (240 - 0) * backgroundTransitionFactor);
        const b = Math.round(0 + (227 - 0) * backgroundTransitionFactor);
        container.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;

        const textColorTransitionFactor = Math.abs(nextPercentage) / 100;
        const textR = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textG = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textB = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        titleText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
        descriptionText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
    };

    window.onmousedown = e => handleOnDown(e);
    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);
    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);
    window.ontouchmove = e => handleOnMove(e.touches[0]);

    let stars1 = document.querySelector(".stars1");
    let stars2 = document.querySelector(".stars2");
    let stars3 = document.querySelector(".stars3");
    let stars4 = document.querySelector(".stars4");
    let stars5 = document.querySelector(".stars5");

    stars1.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/unactive-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars2.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars3.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars4.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars5.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/active-stars.png";
    });

    let btn_send_message = document.querySelector(".btn-send-message");
    let input_gender = document.querySelectorAll(".input-gender");
    let rating = document.querySelectorAll(".unactive-stars");
    let link_active_stars = "assets/images/active-stars.png";
    let error_message = document.querySelector(".error-message");
    let input_name_elem = document.querySelector(".input-name");
    let notification = document.querySelector('.div-main-notification');

    input_name_elem.addEventListener('keydown', function(event) {
        const key = event.key;
        
        if (!/^[a-zA-Z]$/.test(key) && key !== 'Backspace' && key !== ' ') {
            event.preventDefault();
        }
    });

    btn_send_message.addEventListener("click", function() {
        let input_name_elem = document.querySelector(".input-name");
        let textarea_elem = document.querySelector(".textarea");
        let input_name = input_name_elem.value;
        let textarea = textarea_elem.value;
        let input_gender_checked = false;

        input_gender.forEach(radio => {
            if (radio.checked) {
                input_gender_checked = true;
            }
        });

        let ratings = false;
        rating.forEach(function(image) {
            if (image.src.includes(link_active_stars)) {
                ratings = true;
            }
        });

        if (input_name === "" || textarea === "" || input_gender_checked == false || ratings == false) {
            error_message.style.display = "block";
        } else {
            error_message.style.display = "none";

            notification.style.transition = '0.5s';
            notification.style.bottom = '100px';
            setTimeout(function(){
                notification.style.transition = '1s';
                notification.style.bottom = '-200px';
            }, 2000);

            input_name_elem.value = "";
            textarea_elem.value = "";

            rating.forEach(function(image) {
                if (image.src.includes(link_active_stars)) {
                    image.src = "assets/images/unactive-stars.png";
                }
            });

            input_gender.forEach(radio => {
                radio.checked = false;
            });
        }
    });
}

function GwkStatuePhone() {
    let button_main = document.querySelector(".btn-main");
    let sub_div_main = document.querySelector(".sub-div-main");
    let div_choose_destination = document.querySelector(".div-choose-destination");
    let destination1 = document.querySelector(".img-destination1");
    let destination2 = document.querySelector(".img-destination2");
    let destination3 = document.querySelector(".img-destination3");
    let destination4 = document.querySelector(".img-destination4");
    let isTransitioning = false;
    let header = document.querySelector(".div-header");
    let destination_title = document.querySelector(".destination-title");
    let map_bali = document.querySelector(".img-map-bali");
    let div_main_about = document.querySelector(".div-main-about");
    let div_hotels = document.querySelector(".div-main-hotels");
    let div_hotels_text = document.querySelector(".div-hotels-text");
    let div_choose_hotels = document.querySelector(".div-hotels");
    let div_see_more_hotels = document.querySelector(".div-see-more");
    let div_culinary = document.querySelector(".div-culinary");
    let gallery_section = document.querySelector(".gallery-section");
    let div_main_ratings = document.querySelector(".div-main-ratings");
    let title_about = document.querySelector(".title-about");
    let img_rectangle1 = document.querySelector(".rectangle1");
    let img_square1 = document.querySelector(".square1");
    let img_rectangle2 = document.querySelector(".rectangle2");
    let img_square2 = document.querySelector(".square2");
    let hotels_title_description = document.querySelector(".hotels-title-description");
    let description_gallery = document.querySelector(".description-gallery");
    let image1 = document.querySelector(".image1");
    let image2 = document.querySelector(".image2");
    let image3 = document.querySelector(".image3");
    let image4 = document.querySelector(".image4");
    let image5 = document.querySelector(".image5");
    let image6 = document.querySelector(".image6");
    let image7 = document.querySelector(".image7");
    let image8 = document.querySelector(".image8");
    let title_ratings = document.querySelector(".title-ratings");
    let description_ratings = document.querySelector(".description-ratings");
    let person1 = document.querySelector(".person1");
    let person2 = document.querySelector(".person2");
    let person3 = document.querySelector(".person3");
    let person4 = document.querySelector(".person4");
    let person5 = document.querySelector(".person5");
    let person6 = document.querySelector(".person6");
    let person7 = document.querySelector(".person7");
    let person8 = document.querySelector(".person8");
    let message1 = document.querySelector(".message1");
    let message2 = document.querySelector(".message2");
    let message3 = document.querySelector(".message3");
    let message4 = document.querySelector(".message4");
    let message5 = document.querySelector(".message5");
    let message6 = document.querySelector(".message6");
    let message7 = document.querySelector(".message7");
    let message8 = document.querySelector(".message8");
    let hotels_img1 = document.querySelector(".hotels-img1");
    let hotels_name1 = document.querySelector(".hotels-name1");
    let hotels_map1 = document.querySelector(".hotels-map1");
    let hotels_link1 = document.querySelector(".hotels-link1");
    let hotels_img2 = document.querySelector(".hotels-img2");
    let hotels_name2 = document.querySelector(".hotels-name2");
    let hotels_map2 = document.querySelector(".hotels-map2");
    let hotels_link2 = document.querySelector(".hotels-link2");
    let hotels_img3 = document.querySelector(".hotels-img3");
    let hotels_name3 = document.querySelector(".hotels-name3");
    let hotels_map3 = document.querySelector(".hotels-map3");
    let hotels_link3 = document.querySelector(".hotels-link3");
    let hotels_img4 = document.querySelector(".hotels-img4");
    let hotels_name4 = document.querySelector(".hotels-name4");
    let hotels_map4 = document.querySelector(".hotels-map4");
    let hotels_link4 = document.querySelector(".hotels-link4");
    let a_see_more = document.querySelector(".a-see-more");
    let div_logo = document.querySelector(".div-logo");
    let bars_menu = document.querySelector(".fa-bars");
    let side_menu = document.querySelector(".div-nav-with-map");
    let isShowSideMenu = false;
    let marquee_down = document.querySelector(".marquee-down");
    let description_about = document.querySelector(".description-about");
    let title_culinary = document.querySelector(".title-culinary");
    let link_nasi_campur = document.querySelector(".link-nasi-campur");
    let link_ayam_betutu = document.querySelector(".link-ayam-betutu");
    let link_babi_guling = document.querySelector(".link-babi-guling");
    let link_plecing_kangkung = document.querySelector(".link-plecing-kangkung");
    let link_lawar = document.querySelector(".link-lawar");
    let link_sate_lilit = document.querySelector(".link-sate-lilit");
    let map_iframe = document.querySelector(".map-iframe");

    bars_menu.addEventListener("click", function() {
        if(isShowSideMenu === false) {
            isShowSideMenu = true;
            side_menu.style.display = "block";
        }
        else if(isShowSideMenu === true) {
            isShowSideMenu = false;
            side_menu.style.display = "none";
        }
    });

    window.onload = function() {
        marquee_down.setAttribute("behavior", 'alternate');
        div_choose_destination.style.display = "none";
        sub_div_main.style.display = "none";
        div_choose_destination.style.display = "none";
        div.style.backgroundImage = `url('${images[1]}')`;
        div.style.transitionDuration = '2s';
        header.style.display = "block";
        div.style.position = "relative";
        destination_title.innerHTML = "Garuda Wisnu Kencana Statue";
        destination_title.style.display = "block";
        destination_title.style.animation = "opacity 2.5s ease-in-out";
        div.style.alignContent = "center";
        div_main_about.style.display = "block";
        div_hotels.style.display = "block";
        img_rectangle1.src = "assets/images/gwk-picture1.jpeg";
        img_rectangle2.src = "assets/images/gwk-picture2.jpeg";
        img_square1.src = "assets/images/gwk-picture11.jpeg";
        img_square2.src = "assets/images/gwk-picture3.jpeg";
        hotels_title_description.innerHTML = "We offer comfortable hotels or villas with beautiful views while on holiday near Garuda Wisnu Kencana Statue";
        description_gallery.innerHTML = "Here is some image that taken in <br> Garuda Wisnu Kencana Statue";
        image1.src = "assets/images/gwk-picture4.jpeg";
        image2.src = "assets/images/gwk-picture5.jpeg";
        image3.src = "assets/images/gwk-picture7.jpeg";
        image4.src = "assets/images/GWK Statue.jpeg";
        image5.src = "assets/images/gwk-picture11.jpeg";
        image6.src = "assets/images/gwk-picture6.jpeg";
        image7.src = "assets/images/gwk-picture10.jpeg";
        image8.src = "assets/images/gwk-picture8.jpeg";
        title_ratings.innerHTML = "What you think about Garuda Wisnu Kencana?";
        description_ratings.innerHTML = "Let us know your opinion about Garuda Wisnu Kencana!";
        person1.innerHTML = "Anna R.";
        person2.innerHTML = "Carlos Maly";
        person3.innerHTML = "Ryan P.";
        person4.innerHTML = "Linda Katherine";
        person5.innerHTML = "Jake Tom";
        person6.innerHTML = "Elena Flown";
        person7.innerHTML = "Noah H";
        person8.innerHTML = "Maya Siska";
        message1.innerHTML = "Visiting Garuda Wisnu Kencana was a highlight of my trip to Bali! The massive statue is breathtaking, and the cultural performances added to the experience. A must-see!";
        message2.innerHTML = "I was in awe of the beauty and scale of Garuda Wisnu Kencana! The views from the site are incredible, and it's a fantastic place to learn about Balinese culture.";
        message3.innerHTML = "Garuda Wisnu Kencana is truly magnificent! The intricate details of the statue and the surrounding gardens are stunning. I highly recommend this place to anyone visiting Bali!";
        message4.innerHTML = "This cultural park exceeded my expectations! The performances were captivating, and the atmosphere is so peaceful. Garuda Wisnu Kencana is a gem in Bali!";
        message5.innerHTML = "I had an unforgettable experience at Garuda Wisnu Kencana! The sunset views from the park were breathtaking. It's a perfect spot for photography and exploration!";
        message6.innerHTML = "If you're in Bali, don't miss Garuda Wisnu Kencana! The statue is impressive, and the entire area is beautifully landscaped. It's an ideal place for a day out.";
        message7.innerHTML = "Garuda Wisnu Kencana is a cultural treasure! I loved learning about the legends behind the statue and enjoying the traditional dances. It's a fantastic cultural experience!";
        message8.innerHTML = "I was amazed by the grandeur of Garuda Wisnu Kencana! The mix of art, culture, and nature makes it a unique destination. Definitely add it to your Bali itinerary!";
        notification.style.bottom = '-200px';
        hotels_img1.src = "assets/images/gwk-hotels1.jpg";
        hotels_img2.src = "assets/images/gwk-hotels2.jpg";
        hotels_img3.src = "assets/images/gwk-hotels3.jpg";
        hotels_img4.src = "assets/images/gwk-hotels4.jpg";
        hotels_name1.innerHTML = "Umana Bali, LXR Hotels & <br> Resorts Hilton";
        hotels_name2.innerHTML = "Renaissance Bali Uluwatu <br> Resort & Spa";
        hotels_name3.innerHTML = "Rimba By Ayana Bali";
        hotels_name4.innerHTML = "AYANA Segara Bali";
        hotels_map1.innerHTML = "Jl. Melasti Banjar Kelod, Ungasan 80364 <br> Indonesia";
        hotels_map2.innerHTML = "Jalan Pantai Balangan 1 No 1 Ungasan, <br> Ungasan 80361 Indonesia";
        hotels_map3.innerHTML = "Jl. Karang Mas Karang Mas Estate, <br> Jimbaran 80364 Indonesia";
        hotels_map4.innerHTML = "Jalan Karang Mas Sejahtera Karang Mas <br> Estate, Jimbaran 80364 Indonesia";
        hotels_link1.href = "https://www.tripadvisor.co.id/Hotel_Review-g1219108-d887047-Reviews-Umana_Bali_LXR_Hotels_Resorts_Hilton-Ungasan_Bukit_Peninsula_Bali.html";
        hotels_link2.href = "https://www.tripadvisor.co.id/Hotel_Review-g1219108-d10202872-Reviews-Renaissance_Bali_Uluwatu_Resort_Spa-Ungasan_Bukit_Peninsula_Bali.html";
        hotels_link3.href = "https://www.tripadvisor.co.id/Hotel_Review-g297696-d5039579-Reviews-Rimba_By_Ayana_Bali-Jimbaran_South_Kuta_Bali.html";
        hotels_link4.href = "https://www.tripadvisor.co.id/Hotel_Review-g297696-d25150919-Reviews-AYANA_Segara_Bali-Jimbaran_South_Kuta_Bali.html";
        a_see_more.href = "https://www.tripadvisor.co.id/HotelsNear-g1219108-d1436488-Garuda_Wisnu_Kencana_Cultural_Park-Ungasan_Bukit_Peninsula_Bali.html"
        title_about.innerHTML = "About Garuda Wisnu Kencana";
        description_about.innerHTML = "Garuda Wisnu Kencana (GWK) is a famous cultural park in Bali, located in the southern part of Badung. It is home to the towering Garuda Wisnu Kencana statue, one of the largest in the world, representing Lord Vishnu riding the mythical bird Garuda. The park not only showcases this majestic statue but also offers various cultural performances, art exhibitions, and breathtaking views of the surrounding landscape.<br><br> Visitors to GWK need to purchase tickets to enter, with prices starting at IDR 125,000 for a regular ticket, which includes access to cultural performances and a movie theater experience. For a more comprehensive visit, you can opt for an 'Ultimate Bundling Package' that grants access to additional attractions like the top of the GWK statue and the ASANA Artseum, along with refreshments and other perks. Tickets can be conveniently purchased online through the official GWK ticketing website <span><a href='https://ticket.gwkbali.com/' target='_blank'>here</a></span>";
        title_culinary.innerHTML = "Dont Forget To Try This Culinary When You In Gwk Statue!";
        link_nasi_campur.href = "https://www.google.com/maps/place/D'SAMBAL+%26+Uluwatu+GWK,+nasi+tumpeng,+nasi+box,+kue+kotak,+prasmanan+Bali+halal/@-8.8007136,115.1440428,14.14z/data=!4m10!1m2!2m1!1snasi+campur+didekat+garuda+wisnu+kencana!3m6!1s0x2dd244c1eb9d14a1:0xd84fd2f5d30d34d2!8m2!3d-8.7973208!4d115.161012!15sCihuYXNpIGNhbXB1ciBkaWRla2F0IGdhcnVkYSB3aXNudSBrZW5jYW5hWioiKG5hc2kgY2FtcHVyIGRpZGVrYXQgZ2FydWRhIHdpc251IGtlbmNhbmGSARVpa2FuX2Jha2FyX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11bw1h959z?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_ayam_betutu.href = "https://www.google.com/maps/place/Ayam+Betutu+Bu+Lina+Gilimanuk+Kuta/@-8.7484305,115.1564158,14.22z/data=!4m10!1m2!2m1!1sayam+betutu+didekat+garuda+wisnu+kencana!3m6!1s0x2dd246a810a7df43:0x116e1b294e927008!8m2!3d-8.7329512!4d115.1780187!15sCihheWFtIGJldHV0dSBkaWRla2F0IGdhcnVkYSB3aXNudSBrZW5jYW5hWioiKGF5YW0gYmV0dXR1IGRpZGVrYXQgZ2FydWRhIHdpc251IGtlbmNhbmGSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11c4bfy3jd?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_babi_guling.href = "https://www.google.com/maps/place/BABI+GULING+GWK/@-8.8098669,115.1186285,13z/data=!4m10!1m2!2m1!1sbabi+guling+didekat+garuda+wisnu+kencana!3m6!1s0x2dd2459a072330cb:0x54e26f7576f17fb9!8m2!3d-8.8098722!4d115.1681477!15sCihiYWJpIGd1bGluZyBkaWRla2F0IGdhcnVkYSB3aXNudSBrZW5jYW5hWioiKGJhYmkgZ3VsaW5nIGRpZGVrYXQgZ2FydWRhIHdpc251IGtlbmNhbmGSARNiYWxpbmVzZV9yZXN0YXVyYW504AEA!16s%2Fg%2F11vcmd955j?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_plecing_kangkung.href = "https://gofood.co.id/yogyakarta/restaurant/plecing-kangkung-argulobang-930723c7-428b-43b2-b107-b1a894cdf3e6";
        link_lawar.href = "https://www.google.com/maps/place/Warung+Lawar+Bali/@-8.8196466,115.2225023,12.23z/data=!4m14!1m7!3m6!1s0x2dd2433721be6ebb:0x976f219da1c36b4e!2sWarung+Lawar+Bali!8m2!3d-8.8023157!4d115.216874!16s%2Fg%2F11f122yft1!3m5!1s0x2dd2433721be6ebb:0x976f219da1c36b4e!8m2!3d-8.8023157!4d115.216874!16s%2Fg%2F11f122yft1?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_sate_lilit.href = "https://www.google.com/maps/place/Warung+Muslim+Sate+Lilit+Pekambingan/@-8.679781,115.1688892,14z/data=!4m10!1m2!2m1!1ssate+lilit+didekat+garuda+wisnu+kencana!3m6!1s0x2dd24097ca7ab9c9:0xfda7eced8ff931e3!8m2!3d-8.6627255!4d115.2144751!15sCidzYXRlIGxpbGl0IGRpZGVrYXQgZ2FydWRhIHdpc251IGtlbmNhbmFaKSInc2F0ZSBsaWxpdCBkaWRla2F0IGdhcnVkYSB3aXNudSBrZW5jYW5hkgEQc2F0YXlfcmVzdGF1cmFudOABAA!16s%2Fg%2F11cn9l6f0n?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        map_iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63089.15995155722!2d115.12248332000401!3d-8.779250015635725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd244cf54e1dec7%3A0x1988663e064f5a51!2sTaman%20Budaya%20Garuda%20Wisnu%20Kencana!5e0!3m2!1sid!2sid!4v1729423368576!5m2!1sid!2sid";
    }

    div_logo.addEventListener("click", function(){
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
    });

    map_bali.addEventListener("click", function() {
        header.style.display = "none";
        div.style.position = "fixed"
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
    });

    destination1.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'true');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination2.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'true');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination3.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'true');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination4.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'true');
        window.location.reload();
    });

    const track = document.getElementById("image-track");
    const container = document.querySelector('.gallery-container');
    const titleText = document.querySelector('.title-gallery');
    const descriptionText = document.querySelector('.description-gallery');

    track.dataset.mouseDownAt = track.dataset.mouseDownAt || "0";
    track.dataset.prevPercentage = track.dataset.prevPercentage || "0";
    track.dataset.percentage = track.dataset.percentage || "0";

    const initialBackgroundColor = "black";
    const targetBackgroundColor = "rgba(252, 240, 227, 1)";
    const initialTextColor = "white";
    const targetTextColor = "black";

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";  
        track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = e => {
        if(track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        let percentage = (mouseDelta / maxDelta) * -100;
        let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

        if (isNaN(nextPercentage)) {
            console.error("Error: nextPercentage is NaN");
            return;
        }

        nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });

        for(const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }

        const backgroundTransitionFactor = Math.abs(nextPercentage) / 100;
        const r = Math.round(0 + (252 - 0) * backgroundTransitionFactor);
        const g = Math.round(0 + (240 - 0) * backgroundTransitionFactor);
        const b = Math.round(0 + (227 - 0) * backgroundTransitionFactor);
        container.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;

        const textColorTransitionFactor = Math.abs(nextPercentage) / 100;
        const textR = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textG = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textB = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        titleText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
        descriptionText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
    };

    window.onmousedown = e => handleOnDown(e);
    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);
    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);
    window.ontouchmove = e => handleOnMove(e.touches[0]);

    let stars1 = document.querySelector(".stars1");
    let stars2 = document.querySelector(".stars2");
    let stars3 = document.querySelector(".stars3");
    let stars4 = document.querySelector(".stars4");
    let stars5 = document.querySelector(".stars5");

    stars1.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/unactive-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars2.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars3.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars4.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png"
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars5.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/active-stars.png";
    });

    let btn_send_message = document.querySelector(".btn-send-message");
    let input_gender = document.querySelectorAll(".input-gender");
    let rating = document.querySelectorAll(".unactive-stars");
    let link_active_stars = "assets/images/active-stars.png";
    let error_message = document.querySelector(".error-message");
    let input_name_elem = document.querySelector(".input-name");
    let notification = document.querySelector('.div-main-notification');

    input_name_elem.addEventListener('keydown', function(event) {
        const key = event.key;
        
        if (!/^[a-zA-Z]$/.test(key) && key !== 'Backspace' && key !== ' ') {
            event.preventDefault();
        }
    });

    btn_send_message.addEventListener("click", function() {
        let input_name_elem = document.querySelector(".input-name");
        let textarea_elem = document.querySelector(".textarea");
        let input_name = input_name_elem.value;
        let textarea = textarea_elem.value;

        let input_gender_checked = false;
        input_gender.forEach(radio => {
            if (radio.checked) {
                input_gender_checked = true;
            }
        });

        let ratings = false;
        rating.forEach(function(image) {
            if (image.src.includes(link_active_stars)) {
                ratings = true;
            }
        });

        if (input_name === "" || textarea === "" || input_gender_checked == false || ratings == false) {
            error_message.style.display = "block";
        } else {
            error_message.style.display = "none";
            notification.style.transition = '0.5s';
            notification.style.bottom = '100px';
            setTimeout(function(){
                notification.style.transition = '1s';
                notification.style.bottom = '-200px';
            }, 2000);

            input_name_elem.value = "";
            textarea_elem.value = "";

            rating.forEach(function(image) {
                if (image.src.includes(link_active_stars)) {
                    image.src = "assets/images/unactive-stars.png";
                }
            });

            input_gender.forEach(radio => {
                radio.checked = false;
            });
        }
    });
}

function UluwatuTemplePhone() {
    let button_main = document.querySelector(".btn-main");
    let sub_div_main = document.querySelector(".sub-div-main");
    let div_choose_destination = document.querySelector(".div-choose-destination");
    let destination1 = document.querySelector(".img-destination1");
    let destination2 = document.querySelector(".img-destination2");
    let destination3 = document.querySelector(".img-destination3");
    let destination4 = document.querySelector(".img-destination4");
    let isTransitioning = false;
    let header = document.querySelector(".div-header");
    let destination_title = document.querySelector(".destination-title");
    let map_bali = document.querySelector(".img-map-bali");
    let div_main_about = document.querySelector(".div-main-about");
    let div_hotels = document.querySelector(".div-main-hotels");
    let div_hotels_text = document.querySelector(".div-hotels-text");
    let div_choose_hotels = document.querySelector(".div-hotels");
    let div_see_more_hotels = document.querySelector(".div-see-more");
    let div_culinary = document.querySelector(".div-culinary");
    let gallery_section = document.querySelector(".gallery-section");
    let div_main_ratings = document.querySelector(".div-main-ratings");
    let title_about = document.querySelector(".title-about");
    let img_rectangle1 = document.querySelector(".rectangle1");
    let img_square1 = document.querySelector(".square1");
    let img_rectangle2 = document.querySelector(".rectangle2");
    let img_square2 = document.querySelector(".square2");
    let hotels_title_description = document.querySelector(".hotels-title-description");
    let description_gallery = document.querySelector(".description-gallery");
    let image1 = document.querySelector(".image1");
    let image2 = document.querySelector(".image2");
    let image3 = document.querySelector(".image3");
    let image4 = document.querySelector(".image4");
    let image5 = document.querySelector(".image5");
    let image6 = document.querySelector(".image6");
    let image7 = document.querySelector(".image7");
    let image8 = document.querySelector(".image8");
    let title_ratings = document.querySelector(".title-ratings");
    let description_ratings = document.querySelector(".description-ratings");
    let person1 = document.querySelector(".person1");
    let person2 = document.querySelector(".person2");
    let person3 = document.querySelector(".person3");
    let person4 = document.querySelector(".person4");
    let person5 = document.querySelector(".person5");
    let person6 = document.querySelector(".person6");
    let person7 = document.querySelector(".person7");
    let person8 = document.querySelector(".person8");
    let message1 = document.querySelector(".message1");
    let message2 = document.querySelector(".message2");
    let message3 = document.querySelector(".message3");
    let message4 = document.querySelector(".message4");
    let message5 = document.querySelector(".message5");
    let message6 = document.querySelector(".message6");
    let message7 = document.querySelector(".message7");
    let message8 = document.querySelector(".message8");
    let hotels_img1 = document.querySelector(".hotels-img1");
    let hotels_name1 = document.querySelector(".hotels-name1");
    let hotels_map1 = document.querySelector(".hotels-map1");
    let hotels_link1 = document.querySelector(".hotels-link1");
    let hotels_img2 = document.querySelector(".hotels-img2");
    let hotels_name2 = document.querySelector(".hotels-name2");
    let hotels_map2 = document.querySelector(".hotels-map2");
    let hotels_link2 = document.querySelector(".hotels-link2");
    let hotels_img3 = document.querySelector(".hotels-img3");
    let hotels_name3 = document.querySelector(".hotels-name3");
    let hotels_map3 = document.querySelector(".hotels-map3");
    let hotels_link3 = document.querySelector(".hotels-link3");
    let hotels_img4 = document.querySelector(".hotels-img4");
    let hotels_name4 = document.querySelector(".hotels-name4");
    let hotels_map4 = document.querySelector(".hotels-map4");
    let hotels_link4 = document.querySelector(".hotels-link4");
    let a_see_more = document.querySelector(".a-see-more");
    let div_logo = document.querySelector(".div-logo");
    let bars_menu = document.querySelector(".fa-bars");
    let side_menu = document.querySelector(".div-nav-with-map");
    let isShowSideMenu = false;
    let marquee_down = document.querySelector(".marquee-down");
    let description_about = document.querySelector(".description-about");
    let title_culinary = document.querySelector(".title-culinary");
    let link_nasi_campur = document.querySelector(".link-nasi-campur");
    let link_ayam_betutu = document.querySelector(".link-ayam-betutu");
    let link_babi_guling = document.querySelector(".link-babi-guling");
    let link_plecing_kangkung = document.querySelector(".link-plecing-kangkung");
    let link_lawar = document.querySelector(".link-lawar");
    let link_sate_lilit = document.querySelector(".link-sate-lilit");
    let map_iframe = document.querySelector(".map-iframe");

    bars_menu.addEventListener("click", function() {
        if(isShowSideMenu === false) {
            isShowSideMenu = true;
            side_menu.style.display = "block";
        }
        else if(isShowSideMenu === true) {
            isShowSideMenu = false;
            side_menu.style.display = "none";
        }
    });

    window.onload = function() {
        marquee_down.setAttribute("behavior", 'alternate');
        div_choose_destination.style.display = "none";
        sub_div_main.style.display = "none";
        div_choose_destination.style.display = "none";
        div.style.backgroundImage = `url('${images[2]}')`;
        div.style.transitionDuration = '2s';
        header.style.display = "block";
        div.style.position = "relative";
        destination_title.innerHTML = "Uluwatu Temple";
        destination_title.style.display = "block";
        destination_title.style.animation = "opacity 2.5s ease-in-out";
        div.style.alignContent = "center";
        div_main_about.style.display = "block";
        div_hotels.style.display = "block";
        img_rectangle1.src = "assets/images/uluwatu-picture9.jpeg";
        img_rectangle2.src = "assets/images/Uluwatu Tample.jpeg";
        img_square1.src = "assets/images/uluwatu-picture11.jpeg";
        img_square2.src = "assets/images/uluwatu-picture10.jpeg";
        hotels_title_description.innerHTML = "We offer comfortable hotels or villas with beautiful views while on holiday near Uluwatu Temple";
        description_gallery.innerHTML = "Here is some image that taken in <br> Uluwatu Temple";
        image1.src = "assets/images/uluwatu-picture1.jpeg";
        image2.src = "assets/images/uluwatu-picture11.jpeg";
        image3.src = "assets/images/uluwatu-picture3.jpeg";
        image4.src = "assets/images/uluwatu-picture4.jpeg";
        image5.src = "assets/images/Uluwatu\ Tample.jpeg";
        image6.src = "assets/images/uluwatu-picture6.jpeg";
        image7.src = "assets/images/uluwatu-picture7.jpeg";
        image8.src = "assets/images/uluwatu-picture9.jpeg";
        title_ratings.innerHTML = "What you think about Uluwatu Temple?";
        description_ratings.innerHTML = "Let us know your opinion about Uluwatu Temple!";
        person1.innerHTML = "Sarah W.";
        person2.innerHTML = "Daniel Jordan";
        person3.innerHTML = "Liam Telni";
        person4.innerHTML = "Grace L.";
        person5.innerHTML = "Michael Raen";
        person6.innerHTML = "Emmaly Cown";
        person7.innerHTML = "James B.";
        person8.innerHTML = "Olivia Kely";
        message1.innerHTML = "Uluwatu Temple is absolutely breathtaking! The views from the cliffs are stunning, and the sunset here is a sight you won't want to miss. Truly a magical experience!";
        message2.innerHTML = "Visiting Uluwatu Temple was a highlight of my Bali trip! The architecture is incredible, and the Kecak dance performance at sunset was unforgettable. Highly recommend it!";
        message3.innerHTML = "I fell in love with Uluwatu Temple! The location on the cliffside offers panoramic views of the ocean. It's a perfect blend of beauty and spirituality!";
        message4.innerHTML = "Uluwatu Temple is a must-see in Bali! The stunning backdrop of the ocean combined with the rich culture made my visit truly special. I can't wait to come back!";
        message5.innerHTML = "The beauty of Uluwatu Temple took my breath away! Watching the sunset while enjoying the Kecak dance was one of the best experiences of my life. Don't miss it!";
        message6.innerHTML = "I had an amazing time at Uluwatu Temple! The views are spectacular, and the atmosphere is so peaceful. It's a great place to reflect and enjoy nature.";
        message7.innerHTML = "Uluwatu Temple is simply stunning! The cliffs, the sea, and the intricate temple architecture create a perfect setting. A photographer's paradise for sure!";
        message8.innerHTML = "I can't recommend Uluwatu Temple enough! The cultural significance, coupled with the breathtaking views, makes it a top destination in Bali. You have to experience it!";
        notification.style.bottom = '-200px';
        hotels_img1.src = "assets/images/uluwatu-hotels1.jpg";
        hotels_img2.src = "assets/images/uluwatu-hotels2.jpg";
        hotels_img3.src = "assets/images/uluwatu-hotels3.jpg";
        hotels_img4.src = "assets/images/uluwatu-hotels4.jpg";
        hotels_name1.innerHTML = "Anantara Uluwatu Bali <br> Resort";
        hotels_name2.innerHTML = "Radisson Blu Resort, Bali <br> Uluwatu";
        hotels_name3.innerHTML = "Swiss-belresort Pecatu";
        hotels_name4.innerHTML = "Le Grande Bali";
        hotels_map1.innerHTML = "Jl. Pemutih - Labuan Sait, Pecatu 80364 <br> Indonesia";
        hotels_map2.innerHTML = "Jl. Pemutih Bali Uluwatu, Pecatu 80364 <br> Indonesia";
        hotels_map3.innerHTML = "Jl. Pecatu Indah Raya Blok G2 Pecatu <br> Indah Resort, Pecatu 80361 Indonesia";
        hotels_map4.innerHTML = "Jl. Le Grande Acess, Pecatu 80361 <br> Indonesia";
        hotels_link1.href = "https://www.tripadvisor.com/Hotel_Review-g1380108-d2151983-Reviews-Anantara_Uluwatu_Bali_Resort-Pecatu_Bukit_Peninsula_Bali.html";
        hotels_link2.href = "https://www.tripadvisor.com/Hotel_Review-g1380108-d13169927-Reviews-Radisson_Blu_Resort_Bali_Uluwatu-Pecatu_Bukit_Peninsula_Bali.html";
        hotels_link3.href = "https://www.tripadvisor.com/Hotel_Review-g1380108-d12416276-Reviews-Swiss_belresort_Pecatu-Pecatu_Bukit_Peninsula_Bali.html";
        hotels_link4.href = "https://www.tripadvisor.com/Hotel_Review-g1380108-d1379463-Reviews-Le_Grande_Bali-Pecatu_Bukit_Peninsula_Bali.html";
        a_see_more.href = "https://www.tripadvisor.com/SmartDeals-g1380108-Pecatu_Bukit_Peninsula_Bali-Hotel-Deals.html";
        title_about.innerHTML = "About Uluwatu Temple";
        description_about.innerHTML = "Uluwatu Temple, known as Pura Luhur Uluwatu, is a renowned Balinese sea temple perched on top of a 70-meter-high cliff overlooking the Indian Ocean. This temple is not only revered for its religious significance but also for the breathtaking views it offers, especially during sunset. Visitors flock to Uluwatu to witness the stunning combination of the temple's spiritual aura and natural beauty. <br><br> One of the main attractions at Uluwatu Temple is the famous Kecak Fire Dance performance, which takes place daily at sunset. The Kecak dance tells the story of the Ramayana and is performed by a group of men chanting in unison, creating an unforgettable cultural experience. Visitors can purchase tickets to the dance, which is separate from the temple entry fee. The dance takes place in an open-air amphitheater, where the backdrop of the temple and the ocean adds to the mystique of the performance. <br><br> To enter Uluwatu Temple, visitors need to pay an entrance fee, which is used for the temple's maintenance and preservation. Additionally, tickets for the Kecak Fire Dance can be purchased either on-site or online, offering a convenient option for tourists who want to ensure they secure a spot for the performance. The online ticket purchase option can often be found on popular travel websites or the official temple booking sites, making it easier for visitors to plan their trip.";
        title_culinary.innerHTML = "Dont Forget To Try This Culinary When You In Uluwatu Temple!";
        link_nasi_campur.href = "https://www.google.com/maps/place/Warung+nasi+campur,buk+nita/@-8.8216268,115.0820557,14z/data=!4m10!1m2!2m1!1snasi+campur+didekat+uluwatu+temple!3m6!1s0x2dd2450031801059:0x8c1f4fd6d69562c2!8m2!3d-8.8094591!4d115.1160815!15sCiJuYXNpIGNhbXB1ciBkaWRla2F0IHVsdXdhdHUgdGVtcGxlkgERYnJ1bmNoX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11y7d0lh7b?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_ayam_betutu.href = "https://www.google.com/maps/place/Warung+Bejana+Uluwatu/@-8.8246282,115.0535057,12.7z/data=!4m10!1m2!2m1!1sayam+betutu+didekat+uluwatu+temple!3m6!1s0x2dd2500429aae6e1:0x4aefa18f4e692523!8m2!3d-8.8281288!4d115.0881038!15sCiBheWFtIGJldHV0dSBkZWthdCB1bHV3YXR1IHRlbXBsZVoiIiBheWFtIGJldHV0dSBkZWthdCB1bHV3YXR1IHRlbXBsZZIBFWluZG9uZXNpYW5fcmVzdGF1cmFudOABAA!16s%2Fg%2F11clsnp00q?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_babi_guling.href = "https://www.google.com/maps/place/Warung+Babi+Guling+Pura+Uluwatu/@-8.8290035,115.0505823,14z/data=!4m10!1m2!2m1!1snasi+campur+didekat+uluwatu+temple!3m6!1s0x2dd251e2cb17956f:0x8cd40955ac7a44a1!8m2!3d-8.8290014!4d115.0866196!15sCiJuYXNpIGNhbXB1ciBkaWRla2F0IHVsdXdhdHUgdGVtcGxlWiQiIm5hc2kgY2FtcHVyIGRpZGVrYXQgdWx1d2F0dSB0ZW1wbGWSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11f69dzms3?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_plecing_kangkung.href = "https://gofood.co.id/yogyakarta/restaurant/plecing-kangkung-argulobang-930723c7-428b-43b2-b107-b1a894cdf3e6";
        link_lawar.href = "https://www.google.com/maps/place/Warung+nasi+lawar+Bali/@-8.7422641,115.0877761,12z/data=!4m10!1m2!2m1!1swarung+lawar+didekat+uluwatu+temple!3m6!1s0x2dd245006ddc3999:0xeb0d84cf155192!8m2!3d-8.799688!4d115.1605237!15sCiN3YXJ1bmcgbGF3YXIgZGlkZWthdCB1bHV3YXR1IHRlbXBsZZIBDHNvdXBfa2l0Y2hlbuABAA!16s%2Fg%2F11y3wgnj0w?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_sate_lilit.href = "https://www.google.com/maps/place/Warung+Bejana+Uluwatu/@-8.8281288,114.9356685,12z/data=!4m10!1m2!2m1!1ssate+lilir+didekat+uluwatu+temple!3m6!1s0x2dd2500429aae6e1:0x4aefa18f4e692523!8m2!3d-8.8281288!4d115.0881038!15sCh9zYXRlIGxpbGl0IGRla2F0IHVsdXdhdHUgdGVtcGxlWiEiH3NhdGUgbGlsaXQgZGVrYXQgdWx1d2F0dSB0ZW1wbGWSARVpbmRvbmVzaWFuX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11clsnp00q?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        map_iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.2692200157053!2d115.08388463860246!3d-8.829356647806053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24ffc20cb8191%3A0xcb98d1ba7db0495!2sPura%20Luhur%20Uluwatu!5e0!3m2!1sid!2sid!4v1729423740542!5m2!1sid!2sid";
    }

    div_logo.addEventListener("click", function(){
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
    });

    map_bali.addEventListener("click", function() {
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
    });

    destination1.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'true');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination2.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'true');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination3.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'true');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination4.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'true');
        window.location.reload();
    });

    const track = document.getElementById("image-track");
    const container = document.querySelector('.gallery-container');
    const titleText = document.querySelector('.title-gallery');
    const descriptionText = document.querySelector('.description-gallery');

    track.dataset.mouseDownAt = track.dataset.mouseDownAt || "0";
    track.dataset.prevPercentage = track.dataset.prevPercentage || "0";
    track.dataset.percentage = track.dataset.percentage || "0";

    const initialBackgroundColor = "black";
    const targetBackgroundColor = "rgba(252, 240, 227, 1)";
    const initialTextColor = "white";
    const targetTextColor = "black";

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";  
        track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = e => {
        if(track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        let percentage = (mouseDelta / maxDelta) * -100;
        let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

        if (isNaN(nextPercentage)) {
            console.error("Error: nextPercentage is NaN");
            return;
        }

        nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });

        for(const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }

        const backgroundTransitionFactor = Math.abs(nextPercentage) / 100;
        const r = Math.round(0 + (252 - 0) * backgroundTransitionFactor);
        const g = Math.round(0 + (240 - 0) * backgroundTransitionFactor);
        const b = Math.round(0 + (227 - 0) * backgroundTransitionFactor);
        container.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;

        const textColorTransitionFactor = Math.abs(nextPercentage) / 100;
        const textR = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textG = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textB = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        titleText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
        descriptionText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
    };

    window.onmousedown = e => handleOnDown(e);
    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);
    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);
    window.ontouchmove = e => handleOnMove(e.touches[0]);

    let stars1 = document.querySelector(".stars1");
    let stars2 = document.querySelector(".stars2");
    let stars3 = document.querySelector(".stars3");
    let stars4 = document.querySelector(".stars4");
    let stars5 = document.querySelector(".stars5");

    stars1.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/unactive-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars2.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars3.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars4.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars5.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/active-stars.png";
    });

    let btn_send_message = document.querySelector(".btn-send-message");
    let input_gender = document.querySelectorAll(".input-gender");
    let rating = document.querySelectorAll(".unactive-stars");
    let link_active_stars = "assets/images/active-stars.png";
    let error_message = document.querySelector(".error-message");
    let input_name_elem = document.querySelector(".input-name");
    let notification = document.querySelector('.div-main-notification');

    input_name_elem.addEventListener('keydown', function(event) {
        const key = event.key;
        
        if (!/^[a-zA-Z]$/.test(key) && key !== 'Backspace' && key !== ' ') {
            event.preventDefault();
        }
    });

    btn_send_message.addEventListener("click", function() {
        let input_name_elem = document.querySelector(".input-name");
        let textarea_elem = document.querySelector(".textarea");
        let input_name = input_name_elem.value;
        let textarea = textarea_elem.value;

        let input_gender_checked = false;
        input_gender.forEach(radio => {
            if (radio.checked) {
                input_gender_checked = true;
            }
        });

        let ratings = false;
        rating.forEach(function(image) {
            if (image.src.includes(link_active_stars)) {
                ratings = true;
            }
        });

        if (input_name === "" || textarea === "" || input_gender_checked == false || ratings == false) {
            error_message.style.display = "block";
        } else {
            error_message.style.display = "none";
            notification.style.transition = '0.5s';
            notification.style.bottom = '100px';
            setTimeout(function(){
                notification.style.transition = '1s';
                notification.style.bottom = '-200px';
            }, 2000);

            input_name_elem.value = "";
            textarea_elem.value = "";

            rating.forEach(function(image) {
                if (image.src.includes(link_active_stars)) {
                    image.src = "assets/images/unactive-stars.png";
                }
            });

            input_gender.forEach(radio => {
                radio.checked = false;
            });
        }
    });
}

function MengeningBeachPhone() {
    let button_main = document.querySelector(".btn-main");
    let sub_div_main = document.querySelector(".sub-div-main");
    let div_choose_destination = document.querySelector(".div-choose-destination");
    let destination1 = document.querySelector(".img-destination1");
    let destination2 = document.querySelector(".img-destination2");
    let destination3 = document.querySelector(".img-destination3");
    let destination4 = document.querySelector(".img-destination4");
    let isTransitioning = false;
    let header = document.querySelector(".div-header");
    let destination_title = document.querySelector(".destination-title");
    let map_bali = document.querySelector(".img-map-bali");
    let div_main_about = document.querySelector(".div-main-about");
    let div_hotels = document.querySelector(".div-main-hotels");
    let div_hotels_text = document.querySelector(".div-hotels-text");
    let div_choose_hotels = document.querySelector(".div-hotels");
    let div_see_more_hotels = document.querySelector(".div-see-more");
    let div_culinary = document.querySelector(".div-culinary");
    let gallery_section = document.querySelector(".gallery-section");
    let div_main_ratings = document.querySelector(".div-main-ratings");
    let title_about = document.querySelector(".title-about");
    let img_rectangle1 = document.querySelector(".rectangle1");
    let img_square1 = document.querySelector(".square1");
    let img_rectangle2 = document.querySelector(".rectangle2");
    let img_square2 = document.querySelector(".square2");
    let hotels_title_description = document.querySelector(".hotels-title-description");
    let description_gallery = document.querySelector(".description-gallery");
    let image1 = document.querySelector(".image1");
    let image2 = document.querySelector(".image2");
    let image3 = document.querySelector(".image3");
    let image4 = document.querySelector(".image4");
    let image5 = document.querySelector(".image5");
    let image6 = document.querySelector(".image6");
    let image7 = document.querySelector(".image7");
    let image8 = document.querySelector(".image8");
    let title_ratings = document.querySelector(".title-ratings");
    let description_ratings = document.querySelector(".description-ratings");
    let person1 = document.querySelector(".person1");
    let person2 = document.querySelector(".person2");
    let person3 = document.querySelector(".person3");
    let person4 = document.querySelector(".person4");
    let person5 = document.querySelector(".person5");
    let person6 = document.querySelector(".person6");
    let person7 = document.querySelector(".person7");
    let person8 = document.querySelector(".person8");
    let message1 = document.querySelector(".message1");
    let message2 = document.querySelector(".message2");
    let message3 = document.querySelector(".message3");
    let message4 = document.querySelector(".message4");
    let message5 = document.querySelector(".message5");
    let message6 = document.querySelector(".message6");
    let message7 = document.querySelector(".message7");
    let message8 = document.querySelector(".message8");
    let hotels_img1 = document.querySelector(".hotels-img1");
    let hotels_name1 = document.querySelector(".hotels-name1");
    let hotels_map1 = document.querySelector(".hotels-map1");
    let hotels_link1 = document.querySelector(".hotels-link1");
    let hotels_img2 = document.querySelector(".hotels-img2");
    let hotels_name2 = document.querySelector(".hotels-name2");
    let hotels_map2 = document.querySelector(".hotels-map2");
    let hotels_link2 = document.querySelector(".hotels-link2");
    let hotels_img3 = document.querySelector(".hotels-img3");
    let hotels_name3 = document.querySelector(".hotels-name3");
    let hotels_map3 = document.querySelector(".hotels-map3");
    let hotels_link3 = document.querySelector(".hotels-link3");
    let hotels_img4 = document.querySelector(".hotels-img4");
    let hotels_name4 = document.querySelector(".hotels-name4");
    let hotels_map4 = document.querySelector(".hotels-map4");
    let hotels_link4 = document.querySelector(".hotels-link4");
    let a_see_more = document.querySelector(".a-see-more");
    let div_logo = document.querySelector(".div-logo");
    let bars_menu = document.querySelector(".fa-bars");
    let side_menu = document.querySelector(".div-nav-with-map");
    let isShowSideMenu = false;
    let marquee_down = document.querySelector(".marquee-down");
    let description_about = document.querySelector(".description-about");
    let title_culinary = document.querySelector(".title-culinary");
    let link_nasi_campur = document.querySelector(".link-nasi-campur");
    let link_ayam_betutu = document.querySelector(".link-ayam-betutu");
    let link_babi_guling = document.querySelector(".link-babi-guling");
    let link_plecing_kangkung = document.querySelector(".link-plecing-kangkung");
    let link_lawar = document.querySelector(".link-lawar");
    let link_sate_lilit = document.querySelector(".link-sate-lilit");
    let map_iframe = document.querySelector(".map-iframe");

    bars_menu.addEventListener("click", function() {
        if(isShowSideMenu === false) {
            isShowSideMenu = true;
            side_menu.style.display = "block";
        }
        else if(isShowSideMenu === true) {
            isShowSideMenu = false;
            side_menu.style.display = "none";
        }
    });

    window.onload = function() {
        marquee_down.setAttribute("behavior", 'alternate');
        div_choose_destination.style.display = "none";
        sub_div_main.style.display = "none";
        div_choose_destination.style.display = "none";
        div.style.backgroundImage = `url('${images[3]}')`;
        div.style.transitionDuration = '2s';
        header.style.display = "block";
        div.style.position = "relative";
        destination_title.innerHTML = "Mengening Beach";
        destination_title.style.display = "block";
        destination_title.style.animation = "opacity 2.5s ease-in-out";
        div.style.alignContent = "center";
        div_main_about.style.display = "block";
        div_hotels.style.display = "block";
        img_rectangle1.src = "assets/images/mengening-picture9.jpeg";
        img_rectangle2.src = "assets/images/mengening-picture11.jpeg";
        img_square1.src = "assets/images/mengening-picture1.jpeg";
        img_square2.src = "assets/images/mengening-picture3.jpeg";
        hotels_title_description.innerHTML = "We offer comfortable hotels or villas with beautiful views while on holiday near Mengening Beach";
        description_gallery.innerHTML = "Here is some image that taken in <br> Mengening Beach";
        image1.src = "assets/images/mengening-picture1.jpeg";
        image2.src = "assets/images/mengening-picture2.jpeg";
        image3.src = "assets/images/mengening-picture3.jpeg";
        image4.src = "assets/images/mengening-picture4.jpeg";
        image5.src = "assets/images/mengening-picture5.jpeg";
        image6.src = "assets/images/mengening-picture6.jpeg";
        image7.src = "assets/images/mengening-picture9.jpeg";
        image8.src = "assets/images/mengening-picture8.jpeg";
        title_ratings.innerHTML = "What you think about Mengening Beach?";
        description_ratings.innerHTML = "Let us know your opinion about Mengening Beach!";
        person1.innerHTML = "Ava Lois";
        person2.innerHTML = "Ethan Pemn";
        person3.innerHTML = "David L.";
        person4.innerHTML = "Emilyin A.";
        person5.innerHTML = "Chloe M";
        person6.innerHTML = "Ella Sheryl";
        person7.innerHTML = "Noah Reig";
        person8.innerHTML = "Mia Nabila";
        message1.innerHTML = "Mengening Beach is a hidden gem! The serene atmosphere and stunning views made my day so relaxing. I can't believe I hadn't discovered this place sooner!";
        message2.innerHTML = "I absolutely loved my time at Mengening Beach! The soft sand and clear water created the perfect environment for sunbathing. It's a must-visit spot in Bali!";
        message3.innerHTML = "Mengening Beach took my breath away! The sunsets here are magical, and it's the perfect place for a romantic photo shoot. I can't recommend it enough!";
        message4.innerHTML = "This beach is a piece of paradise! The tranquil vibe and beautiful scenery made it a perfect escape from the hustle and bustle of Bali. I'll definitely be back!";
        message5.innerHTML = "I found Mengening Beach to be so peaceful and beautiful! It's a great spot for a family picnic or a quiet day by the sea. A fantastic place to unwind!";
        message6.innerHTML = "I was amazed by the beauty of Mengening Beach! The stunning landscape and the sound of the waves were so calming. It's the perfect getaway in Bali!";
        message7.innerHTML = "Mengening Beach is a must-see! The natural beauty and tranquil setting are incredible. I spent hours just enjoying the view. Definitely add it to your Bali itinerary!";
        message8.innerHTML = "What a beautiful spot! Mengening Beach is perfect for a day of relaxation and fun. I loved the atmosphere and can't wait to return for more amazing memories!";
        notification.style.bottom = '-200px';
        hotels_img1.src = "assets/images/mengening-hotels1.jpg";
        hotels_img2.src = "assets/images/mengening-hotels2.jpg";
        hotels_img3.src = "assets/images/mengening-hotels3.jpg";
        hotels_img4.src = "assets/images/mengening-hotels4.jpg";
        hotels_name1.innerHTML = "Viva Dash Hotel Seminyak";
        hotels_name2.innerHTML = "Kokonut Suites";
        hotels_name3.innerHTML = "Amadea Resort & Villas <br> Seminyak Bali";
        hotels_name4.innerHTML = "Tijili Hotel Seminyak";
        hotels_map1.innerHTML = "Jl. Petitenget, Kerobokan";
        hotels_map2.innerHTML = "JI. Raya Petitenget, No. 88, Kerobokan";
        hotels_map3.innerHTML = "Jl. Kayu Aya 55";
        hotels_map4.innerHTML = "Jl. Drupadi No. 9";
        hotels_link1.href = "https://hotel.co.id/hotel/102447-viva-dash-hotel-seminyak";
        hotels_link2.href = "https://hotel.co.id/hotel/32244-kokonut-suites";
        hotels_link3.href = "https://hotel.co.id/hotel/52299-amadea-resort-villas-seminyak-bali";
        hotels_link4.href = "https://hotel.co.id/hotel/117289-tijili-hotel-seminyak";
        a_see_more.href = "https://hotel.co.id/tempat/pantai-mengening"
        title_about.innerHTML = "About Mengening Beach";
        description_about.innerHTML = "Mengening Beach is a hidden gem located in Bali, renowned for its tranquil atmosphere and stunning natural beauty. This picturesque beach is characterized by its soft white sand, clear turquoise waters, and lush greenery, making it an ideal spot for relaxation and recreation. Visitors can enjoy a day sunbathing, swimming, or simply soaking in the serene surroundings. Access to Mengening Beach is typically free, allowing tourists to enjoy its beauty without the burden of entry fees.<br><br> In addition to its scenic allure, Mengening Beach has become a popular location for pre-wedding photo shoots. Many couples choose this idyllic setting to capture their special moments, donning elegant wedding attire against the stunning backdrop of the ocean and cliffs. The beach's unique charm provides an unforgettable experience for couples looking to create lasting memories. Furthermore, Mengining Beach is also suitable for various events, including family gatherings and beach parties, offering a perfect venue for creating cherished memories with loved ones.<br><br> Whether you are seeking a peaceful escape, planning a romantic photo session, or looking to celebrate a special occasion, Mengening Beach provides a versatile space to accommodate your needs. Its combination of natural beauty, accessibility, and versatility makes it a must-visit destination for anyone exploring Bali.";
        title_culinary.innerHTML = "Dont Forget To Try This Culinary When You In Mengening Beach!";
        link_nasi_campur.href = "https://www.google.com/maps/place/Warung+Pantai+Seseh/@-8.6541165,115.0767373,13z/data=!4m10!1m2!2m1!1snasi+campur+didekat+pantai+mengening!3m6!1s0x2dd239db2199d6c3:0x3011b2d2c7bf50f3!8m2!3d-8.6451661!4d115.110005!15sCiRuYXNpIGNhbXB1ciBkaWRla2F0IHBhbnRhaSBtZW5nZW5pbmdaJiIkbmFzaSBjYW1wdXIgZGlkZWthdCBwYW50YWkgbWVuZ2VuaW5nkgEKcmVzdGF1cmFudOABAA!16s%2Fg%2F11qp2vgg8n?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_ayam_betutu.href = "https://www.google.com/maps/place/Ayam+Betutu+Ibu+Mira+Asli+Gilimanuk/@-8.6541999,115.0544944,13z/data=!4m10!1m2!2m1!1sayam+betutu+didekat+pantai+mengening!3m6!1s0x2dd2478ff4833167:0x3949b40abe77f294!8m2!3d-8.7006286!4d115.1768664!15sCiRheWFtIGJldHV0dSBkaWRla2F0IHBhbnRhaSBtZW5nZW5pbmdaJiIkYXlhbSBiZXR1dHUgZGlkZWthdCBwYW50YWkgbWVuZ2VuaW5nkgEFZGluZXLgAQA!16s%2Fg%2F11sfk60mnl?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_babi_guling.href = "https://www.google.com/maps/place/Wr+Babi+Guling+Singaraja/@-8.6392153,115.0991291,14.05z/data=!4m10!1m2!2m1!1sbabi+guliing+didekat+pantai+mengening!3m6!1s0x2dd239a2b990d4ef:0x645a1bed3633db84!8m2!3d-8.6186994!4d115.1168242!15sCiViYWJpIGd1bGluZyBkaSBkZWthdCBwYW50YWkgbWVuZ2VuaW5nWiciJWJhYmkgZ3VsaW5nIGRpIGRla2F0IHBhbnRhaSBtZW5nZW5pbmeSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11gvzvgprd?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_plecing_kangkung.href = "https://gofood.co.id/yogyakarta/restaurant/plecing-kangkung-argulobang-930723c7-428b-43b2-b107-b1a894cdf3e6";
        link_lawar.href = "https://www.google.com/maps/place/WARUNG+NASI+LAWAR/@-8.6448348,115.1239097,14.68z/data=!4m6!3m5!1s0x2dd2386f7a7d9a07:0x9d1f6316541fe92c!8m2!3d-8.6430488!4d115.1288503!16s%2Fg%2F11tk8lz7p2?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        link_sate_lilit.href = "https://www.google.com/maps/place/WR.+Sate+Lilit+Men+Ari/@-8.5419775,114.932103,12z/data=!4m10!1m2!2m1!1ssate+lilit+didekat+pantai+mengening!3m6!1s0x2dd2314f557b2599:0xa493bfc43f672f06!8m2!3d-8.5419775!4d115.0845383!15sCiNzYXRlIGxpbGl0IGRpZGVrYXQgcGFudGFpIG1lbmdlbmluZ1olIiNzYXRlIGxpbGl0IGRpZGVrYXQgcGFudGFpIG1lbmdlbmluZ5IBEHNhdGF5X3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11h1mb8f6s?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
        map_iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.545737132412!2d115.09595519678955!3d-8.6395322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23821f5031d75%3A0xc34126863786026b!2sPantai%20Mengening!5e0!3m2!1sid!2sid!4v1729423888020!5m2!1sid!2sid";
    }

    div_logo.addEventListener("click", function(){
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
    });

    map_bali.addEventListener("click", function() {
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
        div_culinary.style.display = "none";
        gallery_section.style.display = "none";
        div_main_ratings.style.display = "none";
    });

    destination1.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'true');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination2.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'true');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination3.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'true');
        localStorage.setItem('picked_destination_mengening', 'false');
        window.location.reload();
    });

    destination4.addEventListener("click", function() {
        localStorage.setItem('picked_destination_canggu', 'false');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'true');
        window.location.reload();
    });

    const track = document.getElementById("image-track");
    const container = document.querySelector('.gallery-container');
    const titleText = document.querySelector('.title-gallery');
    const descriptionText = document.querySelector('.description-gallery');

    track.dataset.mouseDownAt = track.dataset.mouseDownAt || "0";
    track.dataset.prevPercentage = track.dataset.prevPercentage || "0";
    track.dataset.percentage = track.dataset.percentage || "0";

    const initialBackgroundColor = "black";
    const targetBackgroundColor = "rgba(252, 240, 227, 1)";
    const initialTextColor = "white";
    const targetTextColor = "black";

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";  
        track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = e => {
        if(track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        let percentage = (mouseDelta / maxDelta) * -100;
        let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

        if (isNaN(nextPercentage)) {
            console.error("Error: nextPercentage is NaN");
            return;
        }

        nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });

        for(const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }

        const backgroundTransitionFactor = Math.abs(nextPercentage) / 100;
        const r = Math.round(0 + (252 - 0) * backgroundTransitionFactor);
        const g = Math.round(0 + (240 - 0) * backgroundTransitionFactor);
        const b = Math.round(0 + (227 - 0) * backgroundTransitionFactor);
        container.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;

        const textColorTransitionFactor = Math.abs(nextPercentage) / 100;
        const textR = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textG = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        const textB = Math.round(255 + (0 - 255) * textColorTransitionFactor);
        titleText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
        descriptionText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
    };

    window.onmousedown = e => handleOnDown(e);
    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);
    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);
    window.ontouchmove = e => handleOnMove(e.touches[0]);

    let stars1 = document.querySelector(".stars1");
    let stars2 = document.querySelector(".stars2");
    let stars3 = document.querySelector(".stars3");
    let stars4 = document.querySelector(".stars4");
    let stars5 = document.querySelector(".stars5");

    stars1.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/unactive-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars2.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/unactive-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars3.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/unactive-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars4.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/unactive-stars.png";
    });

    stars5.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png";
        stars2.src = "assets/images/active-stars.png";
        stars3.src = "assets/images/active-stars.png";
        stars4.src = "assets/images/active-stars.png";
        stars5.src = "assets/images/active-stars.png";
    });

    let btn_send_message = document.querySelector(".btn-send-message");
    let input_gender = document.querySelectorAll(".input-gender");
    let rating = document.querySelectorAll(".unactive-stars");
    let link_active_stars = "assets/images/active-stars.png";
    let error_message = document.querySelector(".error-message");
    let input_name_elem = document.querySelector(".input-name");
    let notification = document.querySelector('.div-main-notification');

    input_name_elem.addEventListener('keydown', function(event) {
        const key = event.key;
        
        if (!/^[a-zA-Z]$/.test(key) && key !== 'Backspace' && key !== ' ') {
            event.preventDefault();
        }
    });

    btn_send_message.addEventListener("click", function() {
        let input_name_elem = document.querySelector(".input-name");
        let textarea_elem = document.querySelector(".textarea");
        let input_name = input_name_elem.value;
        let textarea = textarea_elem.value;

        let input_gender_checked = false;
        input_gender.forEach(radio => {
            if (radio.checked) {
                input_gender_checked = true;
            }
        });

        let ratings = false;
        rating.forEach(function(image) {
            if (image.src.includes(link_active_stars)) {
                ratings = true;
            }
        });

        if (input_name === "" || textarea === "" || input_gender_checked == false || ratings == false) {
            error_message.style.display = "block";
        } else {
            error_message.style.display = "none";
            notification.style.transition = '0.5s';
            notification.style.bottom = '100px';
            setTimeout(function(){
                notification.style.transition = '1s';
                notification.style.bottom = '-200px';
            }, 2000);

            input_name_elem.value = "";
            textarea_elem.value = "";

            rating.forEach(function(image) {
                if (image.src.includes(link_active_stars)) {
                    image.src = "assets/images/unactive-stars.png";
                }
            });

            input_gender.forEach(radio => {
                radio.checked = false;
            });
        }
    });
}