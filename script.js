document.addEventListener("DOMContentLoaded", function() {
    console.log("BitWit Technologies Website Loaded");
    
    // Live chat integration (Example using Tawk.to)
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/YOUR_TAWK_ID/default';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
    })();
});
