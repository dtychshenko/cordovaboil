define(['plugins/router', 'knockout'], function(router, ko) {
    var defaultMessage = 'Enter your PIN',
        hiddenCharacter = '•';

    var viewModel = {
        displayName: 'Pin',
        pinMessage: ko.observable(),
        correctPin: '••••',
        buttons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '&#x3008;'],
        activate: function () {
            viewModel.pinMessage(defaultMessage);
        },
        buttonPressed: function (button) {
            var message = viewModel.pinMessage();

            if (button === 'X') { 
            	// clear
                message = defaultMessage;
            } else if (button === '&#x3008;') { 
            	// backspace
                if (message !== defaultMessage) {
                    message = message.length === 1 ? defaultMessage : message.substring(1);
                }
            } else { 
            	// number entered
                message = (message === defaultMessage ? '' : message) + hiddenCharacter;
            }
            
            viewModel.pinMessage(message);

            if (message === viewModel.correctPin) {
                window.setTimeout(function () {
                    router.navigate('');
                }, 250);
            }
        }
    };

    return viewModel;
});