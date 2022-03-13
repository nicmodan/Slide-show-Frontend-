let slide = document.getElementsByClassName('slide')

        let count = 2
       

        const forwardSlide = ()=>{
            count = count>=slide.length?1:count+1
            // console.log('slide'+count)

            const slide1 = count>=slide.length?1:count+1
            const slide2 = slide1>=slide.length?1:slide1+1
            // console.log(slide1, slide2)

            /** 
             * Example Recent Display 
             * 
             * <div id = 'slide1' class="floatLeft slide"></div>
               <div id = 'slide3' class="floatRight slide"></div>
               <div id = 'slide2' class="marginAuto slide"></div> 
               */

            $(`#${'slide'+count}`).insertAfter(`#${'slide'+slide2}`)
            $(`#${'slide'+slide1}`).insertAfter(`#${'slide'+slide2}`)


            /** 
             * Example of Expected output of div 
             * 
             * <div id = 'slide2' class="marginAuto slide"></div>
             * <div id = 'slide1' class="floatLeft slide"></div>
               <div id = 'slide3' class="floatRight slide"></div> 
               */

            $(`#${'slide'+count}`).removeClass('floatRight').addClass(`marginAuto`)
            $(`#${'slide'+slide2}`).removeClass('marginAuto').addClass(`floatLeft`)
            $(`#${'slide'+slide1}`).removeClass('floatLeft').addClass(`floatRight`)

            /** 
             * Example of Expected output of class 
             * 
             * <div id = 'slide2' class="floatLeft slide"></div>
             * <div id = 'slide1' class="floatRight slide"></div>
               <div id = 'slide3' class="marginAuto slide"></div> 
               */

            // animationtion of slideshow 
            $(`#${'slide'+count}`).fadeOut();
            $(`#${'slide'+count}`).fadeIn(700);

            // return 'slide'+count
        }

        const backwardSlide = ()=>{
            count = count<=1?slide.length:count-1
            // console.log('slide'+count)

            const slide1 = count<=1?slide.length:count-1
            const slide2 = slide1<=1?slide.length:slide1-1
            // console.log(slide2, slide1)

            /** 
             * Example Recent Display 
             * 
             * <div id = 'slide1' class="floatLeft slide"></div>    slide+slide1 
               <div id = 'slide3' class="floatRight slide"></div>   slide+slide2
               <div id = 'slide2' class="marginAuto slide"></div>   slide+count   
               */
            $(`#${'slide'+slide1}`).insertBefore(`#${'slide'+count}`)
            $(`#${'slide'+slide2}`).insertBefore(`#${'slide'+count}`)

            /** 
             * Example of Expected output of div  
             * 
               <div id = 'slide3' class="floatRight slide"></div> slide+slide1
               <div id = 'slide2' class="marginAuto slide"></div> slide+slide2
               <div id = 'slide1' class="floatLeft slide"></div>  slide+count
               */

            $(`#${'slide'+count}`).removeClass('floatLeft').addClass(`marginAuto`)
            $(`#${'slide'+slide2}`).removeClass('marginAuto').addClass(`floatRight`)
            $(`#${'slide'+slide1}`).removeClass('floatRight').addClass(`floatLeft`)

            /** 
             * Example of Expected output of div  
             * 
               <div id = 'slide3' class="floatLeft slide"></div> slide+slide1
               <div id = 'slide2' class="floatRight slide"></div> slide+slide2
               <div id = 'slide1' class="marginAuto slide"></div>  slide+count
               */

            // anamtion of slide 
            $(`#${'slide'+count}`).fadeOut();
            $(`#${'slide'+count}`).fadeIn(700);


            // return 'slide'+count
        }


        setInterval(forwardSlide, 10000)

        $(document).ready(forwardSlide)
        $(document).ready(backwardSlide())
