$('.rating.edit .star').hover(function () {
    let block = $(this).parents('.rating');
    block.find('.rating__activeline').css({ width: '0%' });
    let ind = $(this).index() + 1;
    let linew = ind / block.find('.star').length * 100;
    setrating(block, linew);
}, function () {
    let block = $(this).parents('.rating');
    block.find('.star').removeClass('active');
    let ind = block.find('input').val();
    let linew = ind / block.find('.star').length * 100;
    setrating(block, linew);
});
$('.rating.edit .star').click(function (event) {
    let block = $(this).parents('.rating');
    let re = $(this).index() + 1;
    block.find('input').val(re);
    let linew = re / block.find('.star').length * 100;
    setrating(block, linew);
});
$.each($('.rating'), function (index, val) {
    let ind = $(this).find('input').val();
    let linew = ind / $(this).parent().find('.star').length * 100;
    setrating($(this), linew);
});
function setrating(th, val) {
    th.find('.rating__activeline').css({ width: val + '%' });
}

document.querySelectorAll('form').forEach(elem => {
    Array.from(elem.elements).forEach(elem => {
        if (elem.localName == "button") {
            elem.addEventListener('click', checkFormInputs);
        }
    })
})

function checkFormInputs(button) {
    button.preventDefault();

    let userValues = Array.from(button.target.parentNode).filter(elem => elem.localName == "textarea" || elem.localName == "input")
    let inputs = userValues.map(elem => checkInputType(elem))

    sendMessage(inputs);
}

function checkInputType(elem) {
    if (elem.name == 'email') {
        return checkEmailValue(elem);
    } else if (elem.localName == 'textarea' || elem.localName == 'input') {
        return checkTextValue(elem);
    }
}

function checkEmailValue(elem) {
    let inputLabel = elem.previousElementSibling;

    if (elem.value != '' && elem.value.includes('@')) {
        inputLabel.textContent = inputLabel.dataset.labelValue;
        inputLabel.classList.remove('error');
        return true;
    }

    inputLabel.textContent = 'Incorrect type of email';
    inputLabel.classList.add('error');
    console.log('Incorectr mail input');
    return false;
}

function checkTextValue(elem) {
    let inputLabel = elem.previousElementSibling;

    if (elem.value != '') {
        inputLabel.textContent = inputLabel.dataset.labelValue;
        inputLabel.classList.remove('error');
        return true;
    }

    inputLabel.textContent = 'Fill the field';
    inputLabel.classList.add('error');
    console.log('Incorectr text input');
    return false;
}

function sendMessage(values) {
    if (values.every(elem => elem === true)) {
        document.querySelector('.send-msg').style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
        console.log('Sending Message!');
    }
}

document.querySelector('.send-msg__button').onclick = function () {
    document.querySelector('.send-msg').style.display = 'none';
    document.querySelector('body').style.overflow = 'visible';
    console.log('Close window!');
}