const dbRoot = firebase.database()

$('#submit').on('click', function(e){
    e.preventDefault();
    if ($('#name').val() != '' && $('#email').val() != '' && $('#message').val() != '') {
        var newPostKey = firebase.database().ref().child('messages').push().key;
        dbRoot.ref('messages/' + newPostKey).set({
            name: $('#name').val(),
            email: $('#email').val(),
            time: Date.now(),
            message: $('#message').val()
        }, function(error){
            if(error) {
                window.alert(error.message);
            } else {
                
                $('#contact_form')[0].reset()
            }
        })
    } else {
        window.alert('Please fill the fields correctly');
    }
})