window.onload = () => {

    //listen to scroll and show the button when scrolling more than 20
    window.onscroll = () => {
        if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
            document.getElementById('scollTotopBtn').style.display = "block";
        } else {
            document.getElementById('scollTotopBtn').style.display = "none";
        }
        //Start animation when element is in view port
        const services = document.getElementById('services')
        const apis = document.getElementById('apis')
        const contactUs = document.getElementById('contactus')
        const articles = document.getElementById('articles')
        var isInViewport = (elem) => {
            const bounding = elem.getBoundingClientRect();
            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };  
        if (isInViewport(services)) {
            console.log('Iam here')
            services.children[1].classList.add('lineMove')
        }
        if (isInViewport(apis)) {
            console.log('Iam here')
            apis.children[0].children[1].classList.add('lineMove')
        }
        if (isInViewport(contactUs)) {
            console.log('Iam here')
            contactUs.children[1].classList.add('lineMove')
        }
        if (isInViewport(articles)) {
            console.log('Iam here')
            articles.children[1].classList.add('lineMove')
        }
    }
    
    document.getElementById('scollTotopBtn').addEventListener('click', () => {
        
        //To make scrolling to top not immediate.
        let scrollToTopTimeInterval = setInterval(scrollToTop, 10)
        function scrollToTop() {
            document.body.scrollTop -= 50; // For Safari
            document.documentElement.scrollTop -= 50; // For Chrome, Firefox, IE and Opera
            if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
                clearInterval(scrollToTopTimeInterval)
            }
        }
    })
    const allLinks = document.getElementsByTagName('a')
    let scrollToElementInterval
    for (const link of allLinks) {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            let element = document.getElementById(e.target.textContent.split(' ').join('').toLowerCase())
            scrollToElementInterval = setInterval(scrollToElement, 10);
            function scrollToElement() { 
                document.body.scrollTop += 50; // For Safari
                document.documentElement.scrollTop += 50; // For Chrome, Firefox, IE and Opera
                if  (element.getBoundingClientRect().top < 30) {
                    clearInterval(scrollToElementInterval)
                }
            }
        }) 
    }

}


