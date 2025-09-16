(function() {
  function initializeGA() {
    // Get tracking ID from Docusaurus config or fallback
    const trackingId = window.docusaurus?.siteConfig?.customFields?.GOOGLE_ANALYTICS_ID || 'G-YVPQSCP6S7';
    
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', trackingId, {
      anonymize_ip: true
    });
  }
  
  function checkConsent() {
    const consent = localStorage.getItem('cookies-accepted');
    if (consent === 'true') {
      initializeGA();
    }
  }
  
  window.addEventListener('storage', function(e) {
    if (e.key === 'cookies-accepted' && e.newValue === 'true') {
      initializeGA();
    }
  });
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkConsent);
  } else {
    checkConsent();
  }
})();
