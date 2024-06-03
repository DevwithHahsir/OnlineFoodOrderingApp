const activePage=window.location.pathname;

const navLinks=document.querySelectorAll("li a").

forEach(element => {
    if(element.href.includes(`${activePage}`))
        {
            console.log(`${activePage}`);
            element.classList.add("active")

        }
    
    
});
