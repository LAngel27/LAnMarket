// // let d = ${document}.ready(function(){
// //     alert('hola')
// // });


// $(document).ready(() => {
//     let $header = $('.header').find('.navbar') // selector
//     $('.header .navbar-toggler').on('click', () => {
//         create.hide()
//     })
//     // let create = $('<a>', {
//     //     href: 'https://platzi.com',
//     //     target: '_blank',
//     //     html: 'hello world'
//     // }).appendTo($header) // createElement


//     // create.css({

//     //     'font-size': '100px', // add style

//     // })

//     console.log(create.attr('href')) // attributes 
//     console.log(create.attr('href', 'google')) // attribute set(cambiar)


//     $.ajax({
//         url: 'https://randomuser.me/api/?results=1',
//         dataType: 'json',
//         success: function (data) {
//             console.log(data.results[0].id)
//         },
//         error: function (err) {
//             console.log(`${err} not found ${data}`)
//         }
        
//     });

// })