'use strict';


//to render products to html
let renderContentToHtml = function () {

    let mainTag = document.querySelector('.content');

    for (let index = 0; index < Product.items.length; index++) {

        let sectionTag = document.createElement('section');
        let imgTag = document.createElement('img');
        let divTag = document.createElement('div');
        let pTag = document.createElement('p');
        let aTag = document.createElement('a');

        imgTag.src = Product.items[index].path;
        pTag.textContent = Product.items[index].disc;
        aTag.href = `#${index}`;
        aTag.name = "add";
        aTag.textContent = `Add \$${Product.items[index].price}`;

        sectionTag.appendChild(imgTag);
        divTag.appendChild(pTag);
        divTag.appendChild(aTag);
        sectionTag.appendChild(divTag);
        mainTag.appendChild(sectionTag);

    }

};//end of renderContentToHtml




//add event to add buttons
const assignEventToButtons = function () {
    document.querySelector('.content').addEventListener('click', function (event) {
        event.preventDefault();

        if (event.target.name == 'add') {

            Product.items[event.target.href.split('#')[1]].quintity += 1;
            Product.items[event.target.href.split('#')[1]].totel += Number(Product.items[event.target.href.split('#')[1]].price);

            savetoLocalStorage();
            itemCounterForBascet();

        }

    });
};//end of assignEventToButtons


renderContentToHtml();
assignEventToButtons();