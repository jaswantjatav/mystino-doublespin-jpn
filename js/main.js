$(document).ready(function() {
	// IE check
	(function() {
		function bodyReset() {
			var body            = document.querySelector('body');
			var main            = document.createElement('main');
			var title           = document.createElement('h1');
			var message         = document.createElement('p');
			body.innerHTML      = '';
			main.style          = 'width: 100%; padding: 50px; margin: auto;';
			title.style         = 'width: 100%; text-align: center; color: rgb(127,127,127);';
			title.textContent   = "Website's Error";
			message.style       = 'width: 100%; text-align: center; color: rgb(0,0,0);';
			message.textContent = "Sorry, your browser doesn't support this website. Please, check your browser for updates now or try to use any other modern browsers.";
			body.appendChild(main);
			main.appendChild(title);
			main.appendChild(message);
		}

		if(navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf("Trident") > -1) {
			bodyReset();
		}
		
	  if (/iP(hone|od|ad)/.test(navigator.platform)) {
	    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
			if(parseInt(v[1], 10) <= 9) {
				bodyReset();
			}
	  }
	})();

	// closest polyfill
	(function(ELEMENT) {
		ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
		ELEMENT.closest = ELEMENT.closest || function closest(selector) {
			if (!this) return null;
			if (this.matches(selector)) return this;
			if (!this.parentElement) {return null}
			else return this.parentElement.closest(selector)
		};
	}(Element.prototype));

	// remove polyfill
	(function (arr) {
		arr.forEach(function (item) {
			if (item.hasOwnProperty('remove')) {
				return;
			}
			Object.defineProperty(item, 'remove', {
				configurable: true,
				enumerable: true,
				writable: true,
				value: function remove() {
					this.parentNode.removeChild(this);
				}
			});
		});
	})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
});
	
// footer button on scroll
$(document).ready(function () {
	$.fn.isInViewport = function() {
			var elementTop = $(this).offset().top;
			var elementBottom = elementTop + $(this).outerHeight();
	
			var viewportTop = $(window).scrollTop();
			var viewportBottom = viewportTop + $(window).height();
	
			return ( elementBottom > viewportTop ) && ( elementTop < viewportBottom - $( this ).height() );
	};
	
	$(window).on('scroll', function() {
			if ($('.prime__button').isInViewport()) {
				$('.footer__button').removeClass('visible')
			} else {
				$('.footer__button').addClass('visible')
			}
	});
});

