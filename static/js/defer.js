// Provides an easy way to defer loading of any kind of HTML elements on the page.
//
// Example usage:
// 	<noscript class="defer">
// 		<link rel="stylesheet" href="...">
// 	</noscript>
//
// The contents of the <noscript class="defer"> element will only be pulled out
// and inserted into the DOM when this script runs, not before. The use of
// <noscript> prevents the contents from being loaded automatically if
// JavaScript is enabled, while still providing proper fallback if JavaScript is
// disabled.
(function() {
	var deferredElements = document.querySelectorAll('noscript.defer');
	for (var i = 0, deferredElement; deferredElement = deferredElements[i]; i++) {
		var container = deferredElement.parentNode;

		var div = document.createElement("div");
		div.innerHTML = deferredElement.textContent || deferredElement.innerHTML;
		while (div.childNodes.length > 0) {
			container.insertBefore(div.childNodes[0], deferredElement);
		}
		container.removeChild(deferredElement);

	}
})();
