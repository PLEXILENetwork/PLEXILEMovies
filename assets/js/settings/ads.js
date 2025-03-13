let areAdsDisabled = JSON.parse(localStorage.getItem('adsDisabled'));

if (areAdsDisabled === null) {
    areAdsDisabled = false;
}

if (!areAdsDisabled) {
    enableAds();
}

function updateButtonStyle() {
    const adsButton = document.getElementById('ads-button');
    if (adsButton) {
        adsButton.style.backgroundColor = areAdsDisabled ? '#a83131' : '#C93131';
    }
}

document.getElementById('ads-button').addEventListener('change', function () {
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

document.getElementById('toggleAds').checked = !areAdsDisabled;
updateButtonStyle();

function enableAds() {
    const firstScriptElement = document.createElement('script');
    firstScriptElement.type = 'text/javascript';
    firstScriptElement.src = '//crockerydestructivespoken.com/f3/70/9b/f3709b7dd09eb147485a2b038066c5a3.js';
    firstScriptElement.async = true;
    document.body.appendChild(firstScriptElement);

    const secondScriptElement = document.createElement('script');
    secondScriptElement.type = 'text/javascript';
    secondScriptElement.src = '//crockerydestructivespoken.com/88/0e/1a/880e1a89f0863fdfa6aa44da31d955a3.js';
    secondScriptElement.async = true;
    document.body.appendChild(secondScriptElement);
}

function disableAds() {
    const firstScriptElement = document.querySelector('script[src="//crockerydestructivespoken.com/f3/70/9b/f3709b7dd09eb147485a2b038066c5a3.js"]');
    if (firstScriptElement) {
        firstScriptElement.remove();
    }

    const secondScriptElement = document.querySelector('script[src="//crockerydestructivespoken.com/88/0e/1a/880e1a89f0863fdfa6aa44da31d955a3.js"]');
    if (secondScriptElement) {
        secondScriptElement.remove();
    }
}
