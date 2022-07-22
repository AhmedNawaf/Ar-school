import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all.min';

window.addEventListener("DOMContentLoaded", () => {
    const SCREEN_HEIGHT = Math.round(window.innerHeight);

    window.addEventListener("scroll",() => {
        let scrollValue = Math.floor(window.scrollY);
        if(scrollValue > SCREEN_HEIGHT) {
            $("#navbar").addClass("transparent");
        }
        else {
            $("#navbar").removeClass("transparent");
        }
    });

    $("#password-confirm").on("change", () => {
        if($("#password").val() != $("password-confirm").val()) {
            $("#password-error").removeClass("text-hide");
        }
    })
});