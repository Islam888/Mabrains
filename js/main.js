window.onload = () => {
    //listen to scroll and show the button when scrolling more than 20
    window.onscroll = () => {
        if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
            document.getElementById('scollTotopBtn').style.display = "block";
        } else {
            document.getElementById('scollTotopBtn').style.display = "none";
        }
       
    }
    var scrollToTopTimeInterval;
    document.getElementById('scollTotopBtn').addEventListener('click', () => {
        //To make scrolling to top not immediate.
        scrollToTopTimeInterval = setInterval(scrollToTop, 10)
        function scrollToTop() {
            document.body.scrollTop -= 50; // For Safari
            document.documentElement.scrollTop -= 50; // For Chrome, Firefox, IE and Opera
            console.log(document.body.scrollTop,document.documentElement.scrollTop)
            if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
                clearInterval(scrollToTopTimeInterval)
            }
        }
    })
}


    
