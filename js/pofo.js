(($)=>{
  class pofo{
    init(){
      this.header();
      this.section1();
      this.section4();
      this.section5();
      this.parallax();
    }
    parallax(){
      const paralObj = {
        init(){
          this.header();
          this.section2();
          this.section3();
          this.section4();
          this.section5();
          this.section6();
          this.section7();
          this.section8();
          this.section9();
        },
        header(){
            let upDown = null; // 스크롤방향 결과변수 
            let scrollStart = 0;
            let scrollEnd = 0;

            // 스크롤이벤트: 스크롤이 발생해야 scroll이벤트 함수가 실행되고, 콜백함수로 결과가 출력된다.
            $(window).scroll(()=>{
              // 스크롤 시작값: scrollStart
              // 스크롤 종료값: scrollEnd
              /* 방향
                - (스크롤 시작값 - 스크롤 종료값) > 0: 아래방향(DOWN)
                - (스크롤 시작값 - 스크롤 종료값) < 0: 위방향(UP)
                => 방향변수(결과변수) = (스크롤 시작값 - 스크롤 종료값) > 0 ? 'DOWN' : 'UP'
              */
              scrollStart = $(window).scrollTop(); 
              upDown = (scrollStart - scrollEnd) > 0 ? 'DOWN' : 'UP'
              if(upDown=='DOWN'){
                $('#header').addClass('down');
                $('#header').removeClass('event');
              }
              if(upDown=='UP'){
                $('#header').removeClass('down');
                $('#header').addClass('event'); // top이 0이되면 높이가 다시 72px로 돌아오도록 하는 클래스
              }
              if($(window).scrollTop() == 0){
                $('#header').removeClass('event');
              }
              scrollEnd = scrollStart; // 처음 시작값을 종료값에 대입
            });
        },
        section2(){
          let winHeight = $(window).innerHeight(); // 윈도우의 창높이(반응형)
          let sec2Top = $('#section2').offset().top - winHeight+200; // 애니메이션이 빠르게 동작하니까 스크롤을 200px정도 내렸을때 동작하도록 설정(+200)
          // scroll 이벤트를 사용하기 위해선 $(window).scroll()이벤트 메소드 내에 선언해줘야한다.
          let section2 = $("#section2");

          $(window).scroll(()=>{
            if($(window).scrollTop() > sec2Top){
              section2.addClass('parallax');
            }

            // 스크롤로 화면 맨위로 올라갔을때 클래스를 지워서 초기화되도록 설정
            if($(window).scrollTop() === 0){
              section2.removeClass('parallax');
            }
          })
        },
        section3(){
          let winHeight = $(window).innerHeight();
          let section3 = $('#section3');
          let sec3Top = $('#section3').offset().top - winHeight;

          $(window).scroll(()=>{
            if($(window).scrollTop() > sec3Top){
              section3.addClass('parallax');
            }
            if($(window).scrollTop() === 0){
              section3.removeClass('parallax');
            }
          })
        },
        section4(){
          let winH = $(window).height();
          let se4Top = $('#section4').offset().top-winH;
          const section4 = $('#section4');
          let t = false;  //토글변수

          $(window).scroll(function(){
              if($(this).scrollTop()===0){
                section4.removeClass('on');
                t=false;
              }                    
              if($(this).scrollTop()>se4Top){
                if(t===false){
                  t=true; 
                  section4.addClass('on');
                }                    
              }                    
          });


        }, 
        section5(){
          let winH = $(window).height();
          let se5Top = $('#section5').offset().top-winH;
          const section5 = $('#section5');

          $(window).scroll(function(){
              if($(this).scrollTop()===0){
                section5.removeClass('on');
              }                    
              if($(this).scrollTop()>se5Top){
                section5.addClass('on');
              }                    
          });
        },
        section6(){
          let winHeight = $(window).innerHeight();
          let section6 = $('#section6');
          let sec6Top = $('#section6').offset().top - winHeight;

          $(window).scroll(()=>{
            if($(window).scrollTop() > sec6Top){
              section6.addClass('parallax');
            }
            if($(window).scrollTop() === 0){
              section6.removeClass('parallax');
            }
          })
        },
        section7(){
          let winHeight = $(window).innerHeight();
          let section7 = $('#section7');
          let sec7Top = $('#section7').offset().top - winHeight;

          $(window).scroll(()=>{
            if($(window).scrollTop() > sec7Top){
              section7.addClass('parallax');
            }
            if($(window).scrollTop() === 0){
              section7.removeClass('parallax');
            }
          })
        },
        section8(){
          let winHeight = $(window).innerHeight();
          let section8 = $('#section8');
          let sec8Top = $('#section8').offset().top - winHeight;

          $(window).scroll(()=>{
            if($(window).scrollTop() > sec8Top){
              section8.addClass('parallax');
            }
            if($(window).scrollTop() === 0){
              section8.removeClass('parallax');
            }
          })
        },
        section9(){
          let winHeight = $(window).innerHeight();
          let section9 = $('#section9');
          let sec9Top = $('#section9').offset().top - winHeight;

          $(window).scroll(()=>{
            if($(window).scrollTop() > sec9Top){
              section9.addClass('parallax');
            }
            if($(window).scrollTop() === 0){
              section9.removeClass('parallax');
            }
          })
        }
      }
      paralObj.init(); 
    }
    header(){
      const mainBtn = $('.main-btn');
      const nav = $('#nav');
      const sub = $('.sub');
      const subBtn = $('.sub-btn');
      const subsub = $('.subsub');

      //모바일 햄버거 메뉴
      $('.mobile-btn').on({
        click:function(){
          $(this).toggleClass('on');
        }
      });

      // 2. 이벤트(메인메뉴 마우스오버시, 이벤트 발생) 설정
      mainBtn.on({
        mouseenter(){
          sub.stop().fadeOut(0); // 모든서브메뉴가 순식간에 사라지도록 설정
          $(this).next().stop().fadeIn(300); // next().fadeIn()이란, main-btn 다음 sub를 fadeIn 효과 설정 
        }
      });

      // 3. 메인버튼에서 마우스리브시, 메인메뉴 fadeOut 이벤트 설정
      nav.on({
        mouseleave(){
          sub.stop().fadeOut(300);
        }
      });

      subBtn.on({
        mouseenter(){
          subsub.stop().fadeOut(0);
          $(this).next().stop().fadeIn(300);
        }
      });
    }
    section1(){
      let cnt=0;
      const slideWrap = $('.slide-wrap');
      const pageBtn = $('.page-btn');
      const slideContainer = $('.slide-container');
      let setId = 0; // autoTimer()의 setInterval 함수

      let mouseStart = 0; // 마우스 시작점
      let mouseEnd = 0; // 마우스 끝점
      // 드래그시작(dragstart = ds), 드래그끝(dragend = de)
      let ds = 0; // 드래그 시작점
      let de = 0; // 드래그 끝점
      // 마우스다운(mousedown = md)을 했는지 안했는지 확인하기 위한 변수이기때문에 true/false
      let md = false;

      // 슬라이드너비는 윈도우 크기로 설정한 변수 
      let slideW = $(window).width();  

      // 반응형: 윈도우의 크기에 따라 자동으로 맞춰서 반응
      // 반응형을 적용하기 전에는 슬라이드의 너비가 1903px로 고정
      // 윈도우 크기가 변하면, 슬라이드 너비도 윈도우 크기에 따라 자동으로 변하도록 설정
      $(window).resize(function(){
        slideW = $(window).width();
        mainSlide(); // 윈도우 크기가 변하면, 슬라이드 이미지 너비가 윈도우 크기에 따라 바로 적용 
      });

      // 1. 메인슬라이드 함수
      function mainSlide(){
        // cnt가 증가되면 왼쪽으로 1903px씩 이동해라 (1920-수직스크롤바(17px))
        slideWrap.stop().animate({left:-slideW*cnt}, 600, 'easeInOutExpo', function(){
          if(cnt>2){cnt=0} // cnt가 마지막 슬라이드 번호보다 크다면 처음슬라이드로 이동
          if(cnt<0){cnt=2} // cnt가 처음 슬라이드 번호보다 작다면 마지막 슬라이드로 이동
          slideWrap.stop().animate({left:-slideW*cnt}, 0);
        });
        pageBtnEvent(); // 콜백함수는 항상 느리기 때문에 콜백함수 밖에다가 호출
      }
      // 1-(1). 페이지버튼 이벤트 함수
      function pageBtnEvent(){
        pageBtn.removeClass('on'); // pageBtn안에 있는 모든 클래스를 제거하라는 의미
        pageBtn.eq(cnt==3?0:cnt).addClass('on'); // pageBtn이 3개가 있는데 cnt값(슬라이드 번호)이 전달되면서 on클래스 추가 
        // cnt==3?0:cnt(cnt>2?0:cnt)의 의미는 cnt가 3이면 0으로 바꾸고, 아니면 cnt라는 의미
      }
      // 1-(2). 페이지버튼 클릭이벤트 함수
      pageBtn.each(function(index){
        $(this).on({
          click(){
            cnt=index;
            mainSlide();
          }
        });
      }); // eq(index)가 없을 경우에는 this로 작성

      // 2-(1). 다음카운터슬라이드 함수
      function nextCntSlide(){
        cnt++;
        mainSlide();
      }
      // 2-(2). 이전카운터슬라이드 함수
      function prevCntSlide(){
        cnt--;
        mainSlide();
      }
      // 3. 자동타이머 함수
      function autoTimer(){
        setId = setInterval(nextCntSlide, 3000); // 3초에 한번씩 다음카운터슬라이드 함수를 호출하라는 의미
        // setInterval(prevCntSlide, 3000);
      }
      // autoTimer();

      /* 
        마우스 이벤트: mouseover == mouseenter , mouuseleave == mouseout,
          mousedown, mouseup, mousemove
      */

      // 터치스와이프: 마우스의 방향에 따라 이전슬라이드인지 다음슬라이드인지 인식하는 것 
      // PC용 마우스 이벤트
      // 이벤트를 작성하는 방법은 on 사용 => 이벤트명은 절대로 대문자를 사용X
      slideContainer.on({
        mousedown: function(e){ // mousedown: 사용자가 마우스 버튼을 누를때 이벤트 실행
          mouseStart = e.clientX; // 마우스 클릭시작점(마우스버튼을 누름과 동시)
          md = true; // 마우스다운을 했는지 안했는지 확인
          // ds는 드래그 시작점 
          ds = e.clientX - slideWrap.offset().left-1903; // 맨 처음에 위치한 slide3이 차지한 1903px만큼 제거해줘야한다. 
          // offset()은 slide3이 차지한 좌표값을 찾아주는 속성
        },
        mouseleave: function(e){
          if(md!==true){
            return; // return;은 이벤트를 종료하라는 의미
          }
          mouseEnd = e.clientX;
          md = false; // mousedown = fasle;(마우스 클릭이 안된상태)
          if(mouseStart-mouseEnd>0){
            clearInterval(setId); // setInterval함수를 제거하라는 의미(타이머일시중지)
            nextCntSlide();
          } // 이동거리가 0보다 크면 다음슬라이드(왼쪽에서 오른쪽으로)
          if(mouseStart-mouseEnd<0){
            clearInterval(setId); // setInterval함수를 제거하라는 의미(타이머일시중지)
            prevCntSlide();
          } // 이동거리가 0보다 작으면 이전슬라이드(오른쪽에서 왼쪽으로)
        },
        mouseup: function(e){ // mouseup: 사용자가 마우스 버튼을 누르고 놓은 시점에 이벤트 실행
          mouseEnd = e.clientX; // 마우스 클릭 끝점(마우스 버튼을 뗌과 동시)
          md = false; // 마우스 이동이 끝나고 마우스업(mouseup)을 했다면, 강제종료
          // console.log(mouseStart - mouseEnd); 이동거리 = 시작점 - 끝점
          if(mouseStart-mouseEnd>0){
            clearInterval(setId); // setInterval함수를 제거하라는 의미(타이머일시중지)
            nextCntSlide();
          } // 이동거리가 0보다 크면 다음슬라이드(왼쪽에서 오른쪽으로)
          if(mouseStart-mouseEnd<0){
            clearInterval(setId); // setInterval함수를 제거하라는 의미(타이머일시중지)
            prevCntSlide();
          } // 이동거리가 0보다 작으면 이전슬라이드(오른쪽에서 왼쪽으로)
        },
        mousemove: function(e){
          // 마우스이동거리(mousemove) 
          // 마우스가 다운상태에서만 드래그가 가능하게 만들어야한다.
          if(md!==true){
            return; // 마우스다운이 안된상태라면 강제종료 즉, 취소 
          }
          de = e.clientX;
          slideWrap.css({left: de - ds}); // animate()속성을 적용하게되면, 버블링 발생하기 때문에 css()적용

        }
      });

      // 테블릿 및 모바일용 핑거(손가락) 터치 이벤트
      slideContainer.on({
        touchstart: function(e){ 
          // 핑거 터치 이벤트는 clientX를 사용하기 전에 originalEvent.changedTouches[0]를 앞에 붙여줘야한다.
          mouseStart = e.originalEvent.changedTouches[0].clientX; 
          md = true;
          ds = e.originalEvent.changedTouches[0].clientX - slideWrap.offset().left-slideW;
        },
        touchend: function(e){ 
          mouseEnd = e.originalEvent.changedTouches[0].clientX; 
          md = false;
          if(mouseStart-mouseEnd>0){
            clearInterval(setId);
            nextCntSlide();
          } 
          if(mouseStart-mouseEnd<0){
            clearInterval(setId);
            prevCntSlide();
          }
        },
        touchmove: function(e){ 
          if(md!==true){
            return;
          }
          de = e.clientX;
          slideWrap.css({left: de - ds});
        }
      });
    }
    section4(){
      //버튼 클릭 이벤트
      //6개의 버튼을 배열처리 이벤트 each();
      let rate = 650 / 800;           /* 이미지높이비율값(0.8125) = 이미지높이 / 이미지너비 */
      let n    = 8;                   /* 이미지 갤러리 보이는 갯수  8개 기본 */
      let cols = 4;                   /* 칸수 기본 4칸 */ 
      let rows = Math.ceil(n/cols);   /* 줄수 기본 2줄 =  Math.ceil 자리올림수(n / cols)  Math.ceil 자리올림  Math.floor 자리내림   */  

      let winW = $(window).width();   /* 창너비 100% 인식 = 1903px */
      let imgW = winW / cols;            /* 이미지너비 = 창너비 / 칸수 */
      let imgH = imgW * rate;         /* 이미지높이 = 이미지너비 * 이미지높이 비율값 */               
      let idx = 0;


      $('.gallery-box ul li').stop().animate({width:imgW, height:imgH}, 300);

      $('.gallery-btn').each(function(index){
          $(this).on({
            click: function(event){
              event.preventDefault();
              idx = index; //클릭 버튼 번호
              mainGallery();  //클릭시
              $('.gallery-btn').removeClass('on');
              $(this).addClass('on');
              
              //패럴럭스 위에서 토글변수로 on 클래스 추가 못하게 막고
              //이미 추가된 클래스 on 은 삭제한다.
              //그러면 애니메이션 진행 못하게 한다.
              $('#section4').removeClass('on');
            }
          });
      });

      //반응형 이벤트
      mainGallery(); //로딩시
      $(window).resize(function(){ //평소는 실행 안됨! 너비, 높이 크기가 변경되면 실행
        mainGallery();
      });



      function mainGallery(){

          // 다음 시간 반응형 내용
          // 창너비 해상도 별 칸의 갯수 4 3 2 1 cols(칸수)  / rows(줄수)
          winW = $(window).width();
          if(winW>=1280){
            cols = 4;
          }
          else if(winW>=1024){  //1024 ~ 1280미만
            cols = 3;
          }
          else if(winW>=600){  //600 ~ 1024미만
            cols = 2;
          }            
          else { //600미만
            cols = 1;
          }

          imgW = winW / cols; 
          imgH = imgW * rate;
          $('.img-box').css({width: imgW});
          $('.gallery-box ul li').css({width:imgW, height:imgH});

          // //////////////////////
          $('.img-box').removeClass('on');

          if(idx===0){   //8개 클릭한 번호
              n = 8-0;
              switch(cols){
                case 4:
                    $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0, left:imgW*1}, 300);
                    $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0, left:imgW*2}, 300);
                    $('.gallery-box ul li').eq(3).show().stop().animate({top:imgH*0, left:imgW*3}, 300);
  
                    $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*1, left:imgW*1}, 300);
                    $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*1, left:imgW*2}, 300);
                    $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*1, left:imgW*3}, 300);
                  break;
                case 3:
                    $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0, left:imgW*1}, 300);
                    $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0, left:imgW*2}, 300);
  
                    $('.gallery-box ul li').eq(3).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*1, left:imgW*1}, 300);
                    $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*1, left:imgW*2}, 300);
  
                    $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*2, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*2, left:imgW*1}, 300);
                  break;
                case 2:
                    $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0, left:imgW*1}, 300);
  
                    $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(3).show().stop().animate({top:imgH*1, left:imgW*1}, 300);
  
                    $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*2, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*2, left:imgW*1}, 300);
  
                    $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*3, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*3, left:imgW*1}, 300);
                  break;
                case 1:
                    $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*2, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(3).show().stop().animate({top:imgH*3, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*4, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*5, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*6, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*7, left:imgW*0}, 300);
              }       
          }
          else if(idx===1){ //2개
            n = 8-6;
            $('.gallery-box ul li').eq(0).hide();
            $('.gallery-box ul li').eq(2).hide();
            $('.gallery-box ul li').eq(3).hide();
            $('.gallery-box ul li').eq(4).hide();
            $('.gallery-box ul li').eq(5).hide();
            $('.gallery-box ul li').eq(7).hide();

              switch(cols){
                case 4:
                    $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*0, left:imgW*1}, 300);
                  break;
                case 3:
                    $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*0, left:imgW*1}, 300);
                  break;
                case 2:
                    $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*0, left:imgW*1}, 300);
                  break;
                case 1:
                    $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                    $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
              }
          }
          else if(idx===2){ //6개
            n = 8-2;
            $('.gallery-box ul li').eq(3).hide();
            $('.gallery-box ul li').eq(7).hide();

            switch(cols){
              case 4:    
                  $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0, left:imgW*1}, 300);
                  $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0, left:imgW*2}, 300);
                  $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*0, left:imgW*3}, 300);
    
                  $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*1, left:imgW*1}, 300);
                break;
              case 3:
                  $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0, left:imgW*1}, 300);
                  $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0, left:imgW*2}, 300);

                  $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*1, left:imgW*0}, 300);      
                  $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*1, left:imgW*1}, 300);
                  $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*1, left:imgW*2}, 300);                  
                break;
              case 2:
                  $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0, left:imgW*1}, 300);

                  $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*1, left:imgW*1}, 300);
    
                  $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*2, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*2, left:imgW*1}, 300);                  
                break;
              case 1:
                  $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*2, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*3, left:imgW*0}, 300);      
                  $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*4, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*5, left:imgW*0}, 300);
            }            
          }            
          else if(idx===3){ //4개
            n = 8-4;
            $('.gallery-box ul li').eq(1).hide();
            $('.gallery-box ul li').eq(3).hide();
            $('.gallery-box ul li').eq(6).hide();
            $('.gallery-box ul li').eq(7).hide();

            switch(cols){
              case 4:
                  $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0, left:imgW*1}, 300);
                  $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*0, left:imgW*2}, 300);
                  $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*0, left:imgW*3}, 300);
                break;
              case 3:
                  $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0, left:imgW*1}, 300);
                  $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*0, left:imgW*2}, 300);

                  $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                break;
              case 2:
                  $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0, left:imgW*1}, 300);

                  $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*1, left:imgW*1}, 300);
                break;
              case 1:
                  $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*2, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*3, left:imgW*0}, 300);                  
            }

          }
          else if(idx===4){ //5개
            n = 8-5;              
            $('.gallery-box ul li').eq(1).hide();
            $('.gallery-box ul li').eq(3).hide();
            $('.gallery-box ul li').eq(4).hide();
            $('.gallery-box ul li').eq(6).hide();
            $('.gallery-box ul li').eq(7).hide();

            switch(cols){
              case 4: 
                  $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0, left:imgW*1}, 300);
                  $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*0, left:imgW*2}, 300);    
                break;
              case 3: 
                  $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0, left:imgW*1}, 300);
                  $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*0, left:imgW*2}, 300);    
                break;
              case 2: 
                  $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*0, left:imgW*1}, 300);

                  $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*1, left:imgW*0}, 300);    
                break;
              case 1: 
                  $('.gallery-box ul li').eq(0).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(2).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(5).show().stop().animate({top:imgH*2, left:imgW*0}, 300);    
            }

          }
          else {  //5  //3개
            n = 8-3;
            $('.gallery-box ul li').eq(0).hide();
            $('.gallery-box ul li').eq(3).hide();
            $('.gallery-box ul li').eq(5).hide();


            switch(cols){
              case 4: 
                  $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(3).show().stop().animate({top:imgH*0, left:imgW*1}, 300);
                  $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*0, left:imgW*2}, 300);
                  $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*0, left:imgW*3}, 300);
    
                  $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                break;
              case 3: 
                  $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(3).show().stop().animate({top:imgH*0, left:imgW*1}, 300);
                  $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*0, left:imgW*2}, 300);

                  $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*1, left:imgW*1}, 300);
                break;
              case 2: 
                  $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(3).show().stop().animate({top:imgH*0, left:imgW*1}, 300);

                  $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*1, left:imgW*1}, 300);

                  $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*2, left:imgW*0}, 300);
                break;
              case 1: 
                  $('.gallery-box ul li').eq(1).show().stop().animate({top:imgH*0, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(3).show().stop().animate({top:imgH*1, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(4).show().stop().animate({top:imgH*2, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(6).show().stop().animate({top:imgH*3, left:imgW*0}, 300);
                  $('.gallery-box ul li').eq(7).show().stop().animate({top:imgH*4, left:imgW*0}, 300);
            }
          }

          //줄수 결정
          rows = Math.ceil(n/cols);
          $('.gallery-box ul').css({height: imgH*rows});
          $('.img-box').addClass('on');          
      }
    }
    section5(){
      const svgCicle = $('.svg-front circle'); //SVG 원형 circle 4개 가져오기
      let svgArr = []; //svg 원형 4개 길이 저장할 배열 변수
      let piece = []; //초당 작은 조각단위의 길이를 저장할 배열 변수
      let second  = 3; 
      let perSize = []; //퍼센트의 해당하는 길이를 저장할 배열 변수
      let percent = [.9, .75, .9, .62];
      let sum = [0,0,0,0]; //조각이 누적되는 배열 변수 : ** 누적변수는 반드시 초기값이 0이 필요하다.
      let setId = []; //타이머 정지 변수
          
          svgAniFn();

          function svgAniFn(){
            $.each(svgCicle, function(idx, obj){
              //1. SVG 원형 4개의 dash(점선) 길이를 배열처리 
              svgArr[idx] = obj.getTotalLength();

              //2. 각 요소(원형) 전체 길이 대입 : 초기 설정
              $(obj).css({ strokeDasharray: svgArr[idx] });  //461.0681457519531
              $(obj).css({ strokeDashoffset: svgArr[idx] }); //461.0681457519531

              //3. 각 요소(원형)의 길이를 10초간의 백분율을 구현하기위해 작은 조각단위의 길이를 구한다.
              //   1초 동안 원의 작은 조각단위(piece 피이스  chip 칩)의 길이
              piece[idx] = svgArr[idx] / second / 100;

              //4. 퍼센트에 해당하는 길이를 구한다.
              perSize[idx] = svgArr[idx] * percent[idx];

              //5. 조각단위를 누적하는 함수
              function sumfn(){
                  sum[idx] += piece[idx];  //조각단위 누적 합
                  if(sum[idx]>perSize[idx]){
                    clearInterval(setId[idx]);
                  }
                  else {
                    //원형 SVG 애니메이션 구현
                    $(obj).css({ strokeDashoffset: svgArr[idx] - sum[idx] }); 
                    //타이머 퍼센트 숫자 카운트                      
                    $('.num').eq(idx).text( Math.ceil(sum[idx]/svgArr[idx]*100) + '%');
                  }
              }

              //6. 타이머 
              setId[idx] = setInterval(sumfn, 10);

            });
          }
    }
  }
  const newpofo = new pofo();
  newpofo.init();
})(jQuery);