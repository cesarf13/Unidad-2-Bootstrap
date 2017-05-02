
(function(){
var app= angular.module('store', []);

var gem={
	name: 'Dodecahedron',
	price:2.95,
	description: 'Lorem fugiat repellat saepe is sed in  itaque quasi?',
    canPurchase: false,
    soldOut: true
}

var gems=[
{
	name: 'Ruby',
	price:1.95,
	description: 'Lorem fugiat repellat saepe is sed in  itaque quasi?',
	images:[
        {
        	full: 'public/img/img.jpg',
        	thumb: 'public/img/img1.jpg'
        }
	]


},

{
	name: 'Zafiro',
	price:3.95,
	description: 'Lorem fugiat repellat saepe is sed in  itaque quasi?',
	images:[
        {
        	full: 'public/img/img2.jpg',
        	thumb: 'public/img/img3.jpg'
        }
	]

},
{
	name: 'Dodecahedron',
	price:3.95,
	description: 'Lorem fugiat repellat saepe is sed in  itaque quasi?',
	images:[
        {
        	full: 'public/img/img1.jpg',
        	thumb: 'public/img/img.jpg'
        }
	]

}

]
app.controller('StoreController', function(){
  this.products=gems;
});

})();

