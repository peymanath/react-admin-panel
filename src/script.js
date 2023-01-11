
document.addEventListener('click', (event) => {

    let cheackclick = false;
    const allClass = event.path.map((item) => {

        if (item.id == 'IconHead') {
            cheackclick = true
        }

    })

    if (!cheackclick) {

        const allIcon = document.querySelectorAll('.IconHeaderItem');
        
        allIcon.forEach((item) => {

            console.log(item);

            if (!item.classList.contains('hidden')) {
                item.classList.add('hidden')
            }
        })

    }
})