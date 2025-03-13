let areAdsDisabled = JSON.parse(localStorage.getItem('adsDisabled')) ?? false;

document.addEventListener('DOMContentLoaded', () => {
  if (areAdsDisabled) {
    disableAds();
  } else {
    enableAds();
  }
  updateButtonStyle();
});

document.getElementById('ads-button').addEventListener('click', function () {
  areAdsDisabled = !areAdsDisabled; 
  localStorage.setItem('adsDisabled', JSON.stringify(areAdsDisabled));

  if (areAdsDisabled) {
    disableAds();
    alert('Ads Disabled.. 😔');
  } else {
    enableAds();
    alert('Ads Enabled..');
  }

  updateButtonStyle();  
});

function enableAds() {
  const adScripts = [
    { id: 'adScript1', src: '//crockerydestructivespoken.com/02/22/9e/02229e37b98d66a6657744bf7b07c279.js' },
    { id: 'adScript2', src: '//crockerydestructivespoken.com/f3/70/9b/f3709b7dd09eb147485a2b038066c5a3.js' }
  ];

  adScripts.forEach(({ id, src }) => {
    if (!document.getElementById(id)) {
      const adScriptElement = document.createElement('script');
      adScriptElement.type = 'text/javascript';
      adScriptElement.src = src;
      adScriptElement.async = true;
      adScriptElement.id = id;
      document.body.appendChild(adScriptElement);
    }
  });
}

function disableAds() {
  ['adScript1', 'adScript2'].forEach(id => {
    const adScriptElement = document.getElementById(id);
    if (adScriptElement) {
      adScriptElement.remove();
    }
  });
}

function updateButtonStyle() {
  const adsButton = document.getElementById('ads-button');
  if (adsButton) {
    adsButton.style.backgroundColor = areAdsDisabled ? '#a83131' : '#C93131';
  }
}
