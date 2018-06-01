 $(document).ready(function() {
     $('.next').on('click', function () {
         var currentImage = $('.active');
         var nextImage = currentImage.next();

         if (nextImage.length) {
             currentImage.removeClass('active').css('z-index', -10);
             nextImage.addClass('active').css('z-index', 10);
         }
     });

     $('.prev').on('click',function() {
         var currentImage = $('.active');
         var prevImage = currentImage.prev();

         if (prevImage.length) {
             currentImage.removeClass('active').css('z-index', -10);
             prevImage.addClass('active').css('z-index', 10);
         }
     });
 });

