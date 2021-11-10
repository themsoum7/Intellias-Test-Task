function accordionFunc(el) {
    var i;

    for (i = 0; i < el.length; i++) {
        el[i].addEventListener("click", function() {
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

var acc = document.getElementsByClassName("accordion");
var acc1 = document.getElementsByClassName("accordion1");
accordionFunc(acc);
accordionFunc(acc1);