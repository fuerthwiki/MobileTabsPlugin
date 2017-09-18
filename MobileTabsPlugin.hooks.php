<?php

namespace MediaWiki\Extension\MobileTabsPlugin;

class Hooks {

	public static function onBeforePageDisplayMobile( $out, $skin ) {
		$out->addModuleStyles( 'mobile.tabs2accordion' );
	}

}
