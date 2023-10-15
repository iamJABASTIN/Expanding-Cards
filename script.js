const panels = document.querySelectorAll(".panel")

// function for remove all active classes 

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// In the above code we assign a active class to the clicking pics

panels.forEach( panel => {
    panel.addEventListener('click',function() {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
