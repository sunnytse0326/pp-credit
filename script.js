function messageRadio(num) {
    var message1lty = $('#message-left');
    var message2lty = $('#message-top1');
    var message3lty = $('#message-top2');
    var message4lty = $('#message-inline');

    if(num == 0){
        message1lty.show();
        message2lty.hide();
        message3lty.hide();
        message4lty.hide();
    } else if(num == 1){
        message2lty.show();
        message1lty.hide();
        message3lty.hide();
        message4lty.hide();
    } else if(num == 2){
        message3lty.show();
        message2lty.hide();
        message1lty.hide();
        message4lty.hide();
    } else if(num == 3){
        message4lty.show();
        message2lty.hide();
        message1lty.hide();
        message3lty.hide();
    }
}

$(document).ready(function () {
    var radio1lty = $('#20to1-lty');
    var radio2lty = $('#8to1-lty');
    var radio3lty = $('#1to4-lty');
    var radio4lty = $('#1to1-lty');

    var radio1 = $('#20to1-radio');
    var radio2 = $('#8to1-radio');
    var radio3 = $('#1to4-radio');
    var radio4 = $('#1to1-radio');

    radio1.change(function () {
        radio1lty.show();
        radio2lty.hide();
        radio3lty.hide();
        radio4lty.hide();
    });

    radio2.change(function () {
        radio2lty.show();
        radio1lty.hide();
        radio3lty.hide();
        radio4lty.hide();
    });

    radio3.change(function () {
        radio3lty.show();
        radio2lty.hide();
        radio1lty.hide();
        radio4lty.hide();
    });

    radio4.change(function () {
        radio4lty.show();
        radio2lty.hide();
        radio3lty.hide();
        radio1lty.hide();
    });
  
    var messageradio1 = $('#left-message-radio');
    var messageradio2 = $('#top-1-message-radio');
    var messageradio3 = $('#top-2-message-radio');
    var messageradio4 = $('#inline-message-radio');

    messageradio1.change(function () {
        messageRadio(0);
    });

    messageradio2.change(function () {
        messageRadio(1);
    });

    messageradio3.change(function () {
        messageRadio(2);
    });

    messageradio4.change(function () {
        messageRadio(3);
    });

    setTimeout(function(){
        messageRadio(0);
    }, 2000);

    var emailradio1lty = $('#email-banner-728x90-lty');
    var emailradio2lty = $('#email-banner-300x250-lty');

    var emailradio1 = $('#728x90-radio');
    var emailradio2 = $('#300x250-radio');

    emailradio1.change(function () {
        emailradio1lty.show();
        emailradio2lty.hide();
    });

    emailradio2.change(function () {
        emailradio2lty.show();
        emailradio1lty.hide();
    });

});

