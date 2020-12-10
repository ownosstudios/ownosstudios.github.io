var darkTheme = window.localStorage.getItem('darkTheme');

function themeToggle(value) {
    switch (value) {
        case 0:
            $('html').removeClass('dark');
            window.localStorage.removeItem('darkTheme');
            $('.switch.theme').children().children('input[type="checkbox"]').prop('checked', false);
            break;
        case 1:
            $('html').addClass('dark');
            $('.switch.theme').children().children('input[type="checkbox"]').prop('checked', true);
            window.localStorage.setItem('darkTheme', 'dark');
            break;
    }
}

if (darkTheme) {
    themeToggle(1)
}

$('.switch.theme').on('click', function () {
    // Boolean whose default value is false
    var isDark = Boolean($(this).children().children('input[type="checkbox"]').prop('checked'))
    isDark ?
        themeToggle(1) : themeToggle(0);
})