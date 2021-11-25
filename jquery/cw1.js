// $('my-text').hide();
// $('#my-form').submit(function (e) { 
//     e.preventDefault();
//     var data = $(this).serializeArray();
    
//     data.map((item) => {
//         $('#my-text').append(`${item.name}: ${item.value} <br>`)
//     });
//     $('#my-text').show();
// });
$('#getitems').click(function (e) { 
    e.preventDefault();
    $.ajax({
        type: "get",
        url: "https://reqres.in/api/users?page=2",
        success: function (response) {
            response.data.forEach(function(data) {
                var newTr = "";
                newTr += `<tr > <td ><a><span>${data.id}</span></a></td>`;
                newTr += `<td> ${data.first_name} </td> <td>${data.last_name}</td> <td> ${data.email} </td> <td> <img src="${data.avatar}"></img> </td>`
                newTr += "</tr>";
                console.log(newTr);
                $('#my-div').append(newTr);
              });
        }
    });
});