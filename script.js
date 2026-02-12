window.onload = function() {
    
    //show image after 10 seconds
    setTimeout(function() {
        var imageContainer = document.getElementById('delayed-image');
        imageContainer.classList.add('show');
        console.log('The image appeared after 10 seconds!');
    }, 10000);
    
    
    //update year in footer
    var currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    
    //update full date in footer
    var today = new Date();
    var options = { 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    var dateString = today.toLocaleDateString('en-US', options);
    document.getElementById('current-date').textContent = dateString;
    
    
    console.log('Page loaded correctly');
    console.log('Current year:', currentYear);
    console.log('Full date:', dateString);
};