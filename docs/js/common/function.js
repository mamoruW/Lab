/* ----------------------------------------------------------------------

	# Common
	- スムーススクロール

	# Unique

---------------------------------------------------------------------- */

if (typeof Utility === 'undefined') var Utility = {};
(function (Utility) {

	"use strict";

	/**
  * @class Main
  */

	Utility.Main = function () {

		/**
   * @constructor
   */
		function construct() {
			if (!(this instanceof construct)) throw new TypeError('Constructor cannot be called as a function.');
			var _this = this;

			_this.setSmoothScroll();
		}

		/**
   * スムーススクロール
   */
		construct.prototype.setSmoothScroll = function () {

			var smoothScroll_tgt = $('.js-back-to-top');

			if (smoothScroll_tgt.length) {

				var speed = 400;
				var easing = 'swing';

				smoothScroll_tgt.on('click', function (e) {
					e.preventDefault();

					var href = $(this).attr('href');
					var target = $(href === "#" || href === "" ? 'html' : href);
					var position = target.offset().top;

					$('html, body').stop(false, true).animate({
						scrollTop: position
					}, speed, easing);
				});
			}
		};

		return construct;
	}();
})(Utility);

window.addEventListener('DOMContentLoaded', function () {
	new Utility.Main();
});