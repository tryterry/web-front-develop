$(function(){
    $('#fullpage').fullpage({
		//options here
        anchors:['section1', 'section2', 'section3', 'section4'],
        navigation:true,
        navigationPosition: 'right',
        sectionsColor : ['#ccc', '#bbb', '#ddd', '#eee'],

        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log("현재 스라이드 번호는 :  " + slideIndex);
        },
        
        afterLoad: function(anchorLink, index){
            console.log("현재 섹션 번호는 : " + index);
            // if(index == 4){
            //     alert('마지막입니다.')
            // }
        }
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
})
