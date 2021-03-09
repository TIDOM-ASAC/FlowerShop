'use strict';

//create product constructor
let Product = function (path, nameImg, disc, price) {
    this.path = path;
    this.name = nameImg;
    this.disc = disc;
    this.price = price;
    Product.items.push(this);
    this.quintity = 0;
    this.totel = 0;

    localStorage.setItem('data', JSON.stringify(Product.items));
};//end of product constructor


//array of proctus
Product.items = [];


//to save data to localStorage
let savetoLocalStorage = function () {
    localStorage.setItem('data', JSON.stringify(Product.items));
};//end of savetoLocalStorage




// to show how many items in bascet you wnat to buy
let itemCounterForBascet = function () {
    let temp = 0;
    for (let index = 0; index < Product.items.length; index++) {

        let quntity = Number(Product.items[index].quintity);
        if (quntity != 0) {
            temp += quntity;
        }

    }

    document.querySelector('#counter').textContent = `(${temp})`;
};//end fo itemCounterForBascet


// to remove an item from cart page
let removeItem = function (item) {
    Product.items[item].quintity = 0;
    Product.items[item].totel = 0;
    savetoLocalStorage();
    itemCounterForBascet();
};// end of removeItem


// to ganerate generateProducts and add them to array
function generateProducts() {


    new Product('./assets/bouquet_PNG49.png', 'Yallow Tulip Bouquet', 'Bouquet suitable for grandmothers', '17');
    new Product('./assets/bouquet_PNG50.png', 'Colorfull Bouquet', 'Bouquet suitable for girlfriend love occasions', '30');
    new Product('./assets/bouquet_PNG51.png', 'Red Tulip Bouquet', 'Bouquet for love occasions', '20');
    new Product('./assets/bouquet_PNG52.png', 'Sunflower Bouquet', 'Bouquet for all kind of occasions', '25');
    new Product('./assets/bouquet_PNG53.png', 'Begonia Bouquet', 'Bouquet for love and graduation occasions', '16');
    new Product('./assets/bouquet_PNG54.png', 'Begonia & Bergenia Bouquet', 'Bouquet for all kind of occasions', '19');
    new Product('./assets/bouquet_PNG55.png', 'Calendula Bouquet', 'Bouquet for all kind of occasions', '29');
    new Product('./assets/bouquet_PNG56.png', 'Whight Begonia Bouquet', 'Flower bouquet for the patient', '21');
    new Product('./assets/bouquet_PNG57.png', 'Wight Tulips', 'Flower bouquet for the patient', '18');
    new Product('./assets/bouquet_PNG58.png', 'Tulipa Bouquet', 'Flower bouquet for the patient', '22');
    new Product('./assets/bouquet_PNG59.png', 'Begonia & Sweet Woodruff Bouquet', 'Bouquet for Weddings', '24');
    new Product('./assets/bouquet_PNG60.png', 'Bouquet of different colors', 'Bouquet for love and graduation occasions', '27');
    new Product('./assets/bouquet_PNG61.png', 'Pink Begonia Bouquet', 'Bouquet for love and Weddings', '16');
    new Product('./assets/bouquet_PNG62.png', 'Colorfull Sanvitalia Bouquet', 'Bouquet for all kind of occasions', '27');
    new Product('./assets/bouquet_PNG63.png', 'Red rose & Sweet Woodruff Bouquet', 'Bouquet for love and Weddings', '30');
    new Product('./assets/bouquet_PNG19.png', 'Yellow rose gory', 'Associated with thoughts of warmth, care and joy', '18');
    new Product('./assets/bouquet_PNG18.png', 'Red and white gory', 'beautiful for wedding ', '25');
    new Product('./assets/bouquet_PNG20.png', 'Yellow Tulip and pink gory', 'Love that is neither asked for nor rejected', '23');
    new Product('./assets/bouquet_PNG17.png', 'Pink rose gory', 'The best choice for brides in wedding and engagment', '19');
    new Product('./assets/bouquet_PNG21.png', 'Colorfull bouquet', 'The best choice for visiting a sick person it gives love and care', '28');
    new Product('./assets/bouquet_PNG22.png', 'white gory', 'For peace, serenity, tranquility and reassurance', '17');
    new Product('./assets/bouquet_PNG23.png', 'Pink and yellow Carnation', 'its good to surprise one of your family with these pretty flowers ', '26');
    new Product('./assets/bouquet_PNG24.png', 'Red tulip', 'Symbolizing Love, elegance, and beauty.', '20');
    new Product('./assets/bouquet_PNG25.png', 'Red rose gory and lily flower', 'it is nice gift for your friends means that you always remember them', '30');
    new Product('./assets/bouquet_PNG26.png', 'orange tulip', 'indicates pride, and purity.', '30');
    new Product('./assets/bouquet_PNG27.png', 'white gory and Lily Flower', 'It expresses purity, transparency and honesty in the relation', '17');
    new Product('./assets/bouquet_PNG28.png', 'Pink tulip', 'It denotes family love, as well as concern, and wishing happiness for the other', '23');
    new Product('./assets/bouquet_PNG29.png', 'Red rose gory', 'It denotes passion, love and romance', '25');
    new Product('./assets/bouquet_PNG30.png', 'lailac and white lily flower', 'A title for launching, spontaneity, and ideas.', '29');
    new Product('./assets/bouquet_PNG32.png', 'ColorFull tulip', 'It is used in home decoration, giving vibes of positivity and joy', '17');
    new Product('./assets/bouquet_PNG1.png', 'Rosy Pink Tulip bouquet', 'The elegant way to show appreciation to whom you care about.', '24');
    new Product('./assets/bouquet_PNG2.png', 'Yellow Tulips', 'No thing is more beautiful than yellow tulip to produce to someone you hope that to get well soon.', '30');
    new Product('./assets/bouquet_PNG3.png', 'Off-white Tulips', 'Give your mother the pure love inside the white colour of Tulip', '20');
    new Product('./assets/bouquet_PNG4.png', 'Pink Tulip', 'Pink Tulip? You are my best friend.', '18');
    new Product('./assets/bouquet_PNG5.png', 'Ruby Tulip', 'Tell your crush that you care about her by ruby tulip flowers.', '19');
    new Product('./assets/bouquet_PNG6.png', 'Red Tulip', 'Make your table perfect with some warm tulips.', '24');
    new Product('./assets/bouquet_PNG7.png', 'Carnation with Tulips bouquet', 'You can always surprise your loved ones with carnations and tulips without occasion.', '23');
    new Product('./assets/bouquet_PNG8.png', 'Yellow roses', 'Get well soon message with the yellow power.', '26');
    new Product('./assets/bouquet_PNG9.png', 'Narcissus with Tulip bouquet', 'Graduation in winter! winter flowers win.', '20');
    new Product('./assets/bouquet_PNG10.png', 'Fresh colours basket', 'You can have your small garden in a fresh basket.', '19');
    new Product('./assets/bouquet_PNG11.png', 'Tulips basket', 'Fresh colours brings joy to your day.', '30');
    new Product('./assets/bouquet_PNG13.png', 'Fire bouquet', 'Be special at your wedding by choosing the special collection of firy coloured flowers', '18');
    new Product('./assets/bouquet_PNG15.png', 'Flowers collection', 'Receive your friend in the airport with sensual flowers', '30');
    new Product('./assets/lilac_PNG68.png', 'Lilac and roses', 'Bring the spring to your living room by this attractive roses with lilac flowers.', '29');
    new Product('./assets/lilac_PNG71.png', 'Lilac basin', 'Grow your own lilac at your home in a stunning basin full of lilac flowers.', '23');
    new Product('./assets/rose_PNG66790.png', 'Valentines heart', 'Impress your loved one in Valentines day with a big heart filled of roses.', '27');
    new Product('./assets/rose_PNG67008.png', 'Propose for her by hiding the engagement ring inside a red roses bouquet and she will never says No!', '19');
    new Product('./assets/bouquet_PNG46.png', 'Red Rose Bouquet', 'Bouquet suitable for Valentin', '22');
    new Product('./assets/bouquet_PNG45.png', 'pink & wight Tulips Bouquet', 'Bouquet suitable for girl friend & love occasions', '18');
    new Product('./assets/bouquet_PNG44.png', 'Yalow & Pink Rose Bouquet', 'Bouquet for love occasions', '30');
    new Product('./assets/bouquet_PNG43.png', 'Mix flower Bouquet', 'Bouquet for all kind of occasions', '26');
    new Product('./assets/bouquet_PNG42.png', 'Calendula Bouquet', 'Bouquet for love and graduation occasions', '28');
    new Product('./assets/bouquet_PNG41.png', 'Begonia & Calendula Bouquet', 'Bouquet for all kind of occasions', '27');
    new Product('./assets/bouquet_PNG40.png', 'Sunflower & Crocus Bouquet', 'Bouquet for all kind of occasions', '23');
    new Product('./assets/bouquet_PNG39.png', 'Orange Tulips Bouquet', 'Flower bouquet for the patient in hospital', '20');
    new Product('./assets/bouquet_PNG38.png', 'Red Tulips Bouquet', 'Flower bouquet for wife material girl', '18');
    new Product('./assets/bouquet_PNG37.png', 'Birth day Bouquet', 'Flower bouquet for birthday parties', '17');
    new Product('./assets/bouquet_PNG36.png', 'All occasions Bouquet', 'Bouquet for Weddings and any Happy occasions', '22');
    new Product('./assets/bouquet_PNG35.png', 'Bouquet of sunflower and Begonia', 'Bouquet for love and graduation occasions', '27');
    new Product('./assets/bouquet_PNG34.png', 'Pink Tulips Bouquet', 'Bouquet for love and Weddings', '23');
    new Product('./assets/bouquet_PNG33.png', 'Colorful Red Roses Bouquet', 'Bouquet for all kind of occasions', '18');




};//end of generateProducts




//to get all data from localstorage
let getItemFromLocalStorage = function () {
    if (localStorage.data) {


        let tempSorage = JSON.parse(localStorage.getItem('data'))
        Product.items = tempSorage;
    }
    else {
        generateProducts();
    }
};//end of getItemFromLocalStorage


// Initialize the app by creating the big list of products with images and names



getItemFromLocalStorage();
itemCounterForBascet();