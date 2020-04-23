
// const app = new Vue({
//     el : "#app",
//     data : {
//         firstName : '',
//         lastName : '',
//         email : '',
//         password: '',
//         phoneNumber: '',
//         newTweet:'',
//         selectPreference: []
//     },
//     computed: {
//         fullName: {
//           get: function() {
//             if (this.firstName && this.lastName) {
//               return this.firstName + ' ' + this.lastName;
//             } else {
//               return this.firstName || this.lastName;
//             }
//           },
//           set: function(newFullName) {
//             const names = newFullName.split(' ');

//             if (names.length === 2) {
//               this.firstName = names[0];
//               this.lastName = names[1];
//             }

//             if (names.length <= 1) {
//               this.firstName = names[0] || '';
//               this.lastName = '';
//             }
//           }
//         },
//         formIsValid : function(){
//           return this.firstName && this.lastName && this.email && this.phoneNum;
//         }
//       }
// });


(function () {
  var copyButton = document.querySelector('.click-button');
  var copyInput = document.querySelector('#p1');
  copyButton.addEventListener('click', function (e) {
    e.preventDefault();
    var text = copyInput.select();
    document.execCommand('copy');
  });

  copyInput.addEventListener('click', function () {
    this.select();
  });
})();


