<?php

namespace MediaWiki\Extension\MobileTabsPlugin;

class Hooks {

	public static function onBeforePageDisplayMobile( $out, $skin ) {
		$out->addModules( 'mobile.tabs2accordion' );
	}

}
