let areAdsDisabled = JSON.parse(localStorage.getItem('adsDisabled'));
 
 if (areAdsDisabled === null) {
   areAdsDisabled = false;
 }
 
 if (!areAdsDisabled) {
   enableAds();
 } else {
   updateButtonStyle(); 
 }
 
 document.getElementById('ads-button').addEventListener('click', function () {
   areAdsDisabled = !areAdsDisabled; 
   localStorage.setItem('adsDisabled', JSON.stringify(areAdsDisabled));  
 
   if (areAdsDisabled) {
       disableAds();
       alert('Ads Disabled.. 😔');
   } else {
       enableAds();
       alert('Ads Enabled.. 😃');
   }
 
   updateButtonStyle();  
 });
 
 function enableAds() {
   const adScriptElement = document.createElement('script');
   adScriptElement.type = 'text/javascript';
   adScriptElement.src = '//crockerydestructivespoken.com/f3/70/9b/f3709b7dd09eb147485a2b038066c5a3.js';
   adScriptElement.async = true;
   adScriptElement.id = 'adScript';
   document.body.appendChild(adScriptElement);
 }
 
 function disableAds() {
   const adScriptElement = document.getElementById('adScript');
   if (adScriptElement) {
       adScriptElement.remove();
   }
 }
 
 function updateButtonStyle() {
   const adsButton = document.getElementById('ads-button');
   if (areAdsDisabled) {
       adsButton.style.backgroundColor = '#a83131';  
   } else {
       adsButton.style.backgroundColor = '#C93131';  
   }
 }
