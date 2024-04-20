// on click change tab-link active state 
var tabLinks = document.querySelectorAll('.tab-link');

tabLinks.forEach(tabLink => {
    tabLink.addEventListener('click', function() {
        tabLinks.forEach(link => {
            link.classList.remove('active-tab-link');
        });
        this.classList.add('active-tab-link');

        // make that tab-conent active 
       var targetTab = this.getAttribute('target');
       console.log(targetTab);
         var tabContents = document.querySelectorAll('.tab');
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active-tab');
            });
            document.getElementById(targetTab).classList.add('active-tab');
    });
});

