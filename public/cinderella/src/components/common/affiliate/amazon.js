function createAmazonAd(keyword) {
  const app = document.body;
  const oldvar = document.getElementById('varscript');
  const oldad = document.getElementById('adscript');
  const oldbanners = document.querySelectorAll('[id^=amzn]');
  if (oldad) oldad.parentNode.removeChild(oldad);
  if (oldvar) oldvar.parentNode.removeChild(oldvar);
  oldbanners.forEach(elem => elem.parentNode.removeChild(elem));

  const script = `amzn_assoc_ad_type = 'responsive_search_widget';
  amzn_assoc_tracking_id = 'simezi9-22';
  amzn_assoc_marketplace = 'amazon';
  amzn_assoc_region = 'JP';
  amzn_assoc_placement = ''; 
  amzn_assoc_search_type = 'search_widget';  
  amzn_assoc_width = 'auto';  
  amzn_assoc_height = 'auto';  
  amzn_assoc_default_search_category = '';  
  amzn_assoc_default_search_key = '${keyword}';  
  amzn_assoc_theme = 'dark';  amzn_assoc_bg_color = 'FFFFFF';`;
  const varscript = document.createElement('script');
  varscript.innerText = script;
  varscript.setAttribute('charset', 'utf-8');
  varscript.setAttribute('type', 'text/javascript');
  varscript.setAttribute('id', 'varscript');
  app.parentNode.insertBefore(varscript, app);

  const adscript = document.createElement('script');
  adscript.setAttribute('src', '//z-fe.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&Marketplace=JP');
  adscript.setAttribute('id', 'adscript');
  app.parentNode.insertBefore(adscript, varscript.nextElementSibling);
}

export default createAmazonAd;
