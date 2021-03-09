'use strict';

//get items from array cart to table
let renderItemsFromLocalStorageToTable = function () {

    let tbodyTag = document.querySelector('#addContent');

    tbodyTag.textContent = '';
    for (let index = 0; index < Product.items.length; index++) {

        let quntity = Number(Product.items[index].quintity);
        if (quntity != 0) {
            let trTag = document.createElement('tr');



            let tdTag = document.createElement('td');
            let imgTag = document.createElement('img');
            imgTag.src = Product.items[index].path;
            tdTag.appendChild(imgTag);
            trTag.appendChild(tdTag);


            let tdTag2 = document.createElement('td');
            tdTag2.textContent = `JD ${Product.items[index].price}`;
            trTag.appendChild(tdTag2);


            let tdTag3 = document.createElement('td');
            tdTag3.textContent = Product.items[index].quintity;
            trTag.appendChild(tdTag3);


            let tdTag4 = document.createElement('td');
            tdTag4.textContent = `JD ${Number(Product.items[index].quintity) * Number(Product.items[index].price)}`;
            trTag.appendChild(tdTag4);



            let tdTag5 = document.createElement('td');
            let aTag = document.createElement('a');
            aTag.href = `#${index}`;
            aTag.name = `delete`;
            aTag.textContent = `X`;
            tdTag5.appendChild(aTag);
            trTag.appendChild(tdTag5);


            tbodyTag.appendChild(trTag);
        }
    }


};//end of renderItemsFromLocalStorageToTable



//delete item form cart
const assignEventToButtons = function () {
    document.querySelector('.content').addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.name == 'delete') {

            removeItem(event.target.href.split('#')[1]);
            renderItemsFromLocalStorageToTable();
        }

    });
};//end of assignEventToButtons


assignEventToButtons();
renderItemsFromLocalStorageToTable();