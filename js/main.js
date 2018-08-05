function filter () {
// init Isotope

// external js: isotope.pkgd.js

// init Isotope
var iso = new Isotope( '.works-grids', {
  itemSelector: '.works-grid',
  layoutMode: 'fitRows'
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function( itemElem ) {
    var number = itemElem.querySelector('.number').textContent;
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function( itemElem ) {
    var name = itemElem.querySelector('.name').textContent;
    return name.match( /ium$/ );
  }
};

// bind filter button click
var filtersElem = document.querySelector('.works-nav');
filtersElem.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.works-nav-button');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup(buttonGroup);
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if (!matchesSelector(event.target, 'button')) {
      return;
    }
    document.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}

}
let btn = document.querySelector('.header-body__burger'),
	menu = document.querySelector('.header-body-nav'),
	wrapper = document.querySelector('.wrapper');
	burger = document.querySelectorAll('.header-burger');

btn.addEventListener('click', function () {
	wrapper.classList.toggle('active');
	menu.classList.toggle('active');
	burger.forEach(item => item.classList.toggle('active'));
	})

//	menu.classList.remove('hide');
//
const features = document.querySelector('.features-items'),
      team = document.querySelector('.team-people'),
      input = document.querySelector('.team-input');

const flktyFeat = new Flickity(features, {
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false
});

const flktyTeam = new Flickity(team, {
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: true,
  freeScroll: true,
  pageDots: false
});

const flktyInput = new Flickity(input, {
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: true,
  freeScroll: true,
  pageDots: false
});

flktyTeam.on('scroll', function (progress) {
  progress = Math.max(0, Math.min(1, progress));
});

filter();
//# sourceMappingURL=main.js.map
