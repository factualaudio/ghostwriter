// Uses https://github.com/typekit/webfontloader to load fonts, to achieve better
// control over fallback and FOUT/FOIT issues.
WebFont.load({
	google: {
		families: ['Open+Sans:300italic,400italic,600italic,700italic,400,600,700,300:latin,cyrillic-ext,latin-ext,cyrillic']
	}
});
