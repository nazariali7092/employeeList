function addCard({firstName ,lastName , email, avatar})
{
    let cardHTML = ` <div class="col-4 m-3 px-0">
    <div class="w-100 h-100 box p-4 d-flex">
        <div class="rounded" srtyle="width: 150px">
            <img src="${avatar}" srtyle="width:100%; height:100%"
                class="rounded">
        </div>
        <div class="d-flex flex-column p-lg-3 justify-content-center px-0">
            <div class="title-text">${firstName}</div>
            <div class="normal-text">${lastName}</div>
            <div class="email-text">${email}</div>
        </div>
    </div>
</div>`;
    $("#cardWrapper").append(cardHTML);
}