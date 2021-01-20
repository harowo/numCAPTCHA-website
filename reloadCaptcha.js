document.getElementById("refreshCaptcha").addEventListener('click',function reloadCaptcha()
{
    const content = document.getElementById("captcha-wrapper");
    content.innerHTML = '';
    window.useNumCaptcha();

    
    console.log("Refreshed"); 
}  ); 