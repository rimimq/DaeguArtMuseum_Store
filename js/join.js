// //정규식
// // function reg_mb_password(email,reg_mb_password){
// //     if(!/^[a-zA-Z0-9]{10,15}$/.test(reg_mb_password)){
// //     alert('숫자와 영문자 조합으로 10~15자리를 사용해야 합니다.');
// //     return false;
// //     }

// //     let checkNumber = reg_mb_password.search(/[0-9]/g);
// //     let checkEnglish = reg_mb_password.search(/[a-z]/ig);
// //     if(checkNumber <0 || checkEnglish <0){
// //         alert("숫자와 영문자를 혼용하여야 합니다.");
// //         return false;
// //         }

// //     if(/(\w)\1\1\1/.test(reg_mb_password)){
// //     alert('444같은 문자를 4번 이상 사용하실 수 없습니다.');
// //         return false;
// //         }

// //     if(reg_mb_password.search(email) > -1){
// //         alert("비밀번호에 아이디가 포함되었습니다.");
// //         return false;
// //         }
// //         return true;
// //     };


// var setError = function($input) {
//     $input && $input.closest('.common__input-item, .checkbox-item').addClass('error');
// }
// document.addEventListener('DOMContentLoaded', function() {
//     if (document.forms['fregisterform']) {
//         document.forms['fregisterform'].onsubmit = null;

//         document.forms['fregisterform'].addEventListener('submit', function(e) {

//             console.log(fregisterform_submit(this))
//             e.preventDefault();
//             return false;
//         })
//     }});


// var pwReg1 = /^(?=.*?[a-z]).{8,}$/; 	// has lower letter with 8 character
// var pwReg2 = /(?=.*[A-Z])/; 			// has at least 1 upper letter
// var pwReg3 = /[0-9]+/; 					// has at least 1 number
// var pwReg4 = /[$-/:-?{-~!@#"^_`\[\]]/; 	// has at least 1 symbol
    
// $(function() {
    
//     $('#reg_mb_id').keyup(function() {
//         var emailStr = $(this).val();
//         var regex = /[~!@\#$%^&*\()\-=+_']/gi; 

//         if( regex.test(emailStr) ) {
//             //alert('이메일 형식이 올바르지 않습니다.');
//             $('#reg_mb_id').closest('.common__input-item').addClass('error');
//         }else {
//             $('#reg_mb_id').closest('.common__input-item').removeClass('error');
//         }
//     });
    
//     $('#reg_mb_password').keyup(function() {
//         var pwStr = $(this).val();
//         if (pwReg1.test(pwStr) && pwReg2.test(pwStr) && pwReg3.test(pwStr) && pwReg4.test(pwStr)) {
//             //alert("비밀번호 유효성 O");
//             $('#reg_mb_password').closest('.common__input-item').removeClass('error');
//         } else {
//             //alert("비밀번호 유효성 X");
//             $('#reg_mb_password').closest('.common__input-item').addClass('error');
//         }
//         // if ($('#reg_mb_password').val().length < 3) {
//         //     //alert('비밀번호를 3글자 이상 입력하십시오.');
//         //     $('#reg_mb_password').closest('.common__input-item').addClass('error');
//         // } else {
//         //     $('#reg_mb_password').closest('.common__input-item').removeClass('error');
//         // }
//     });
    
//     $('#reg_mb_password_re').keyup(function() {
//         if ($('#reg_mb_password').val() !== $('#reg_mb_password_re').val()) {
//             //alert('비밀번호가 일치하지 않습니다.');
//             $('#reg_mb_password_re').closest('.common__input-item').addClass('error');
//         } else {
//             $('#reg_mb_password_re').closest('.common__input-item').removeClass('error');
//         }   
//     });
    
//     $('#reg_mb_birth').focusout(function() {
//         var birthStr = $(this).val();
//         if( birthRegex.test(birthStr) == false ) {
//             //alert('생년월일을 확인해주세요.');
//             $('#reg_mb_birth').closest('.common__input-item').addClass('error');
//         }else {
//             $('#reg_mb_birth').closest('.common__input-item').removeClass('error');
//         }
//     });

//     $('#reg_mb_password').focus(function() {
//         $('#reg_mb_password').closest('.common__input-item').siblings('.password-notice').addClass('show');
//         //$('#reg_mb_password').closest('.common__input-item').siblings('.password-notice').removeClass('hide');
//     });

//     // $('#reg_mb_password').blur(function() {
//     //     $('#reg_mb_password').closest('.common__input-item').siblings('.password-notice').addClass('hide');
//     //     $('#reg_mb_password').closest('.common__input-item').siblings('.password-notice').removeClass('show');
//     // });
// });
    



// let $phoneInput = null;
// let $birthDayInput = null;
// let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
// let phoneRegex = /(\d{3})(\d{3,4})(\d{4})/;
// let birthRegex = /(\d{4})\.(\d{2})\.(\d{2})/;

// $('#email-select').on('change', function() {
//     var $this = $(this);
//     var val = $this.val();
//     var isDirect = val === 'direct';
//     var $target = $('#' + $this.attr('data-target'));

//     if (isDirect) {
//         $target.removeAttr('aria-readonly');
//         $target.removeAttr('readonly');
//         $target.val('');
//         $target.focus();
//     } else {
//         $target.attr('readonly', '');
//         $target.attr('aria-readonly', '');
//         $target.val(val);
//     }
// });