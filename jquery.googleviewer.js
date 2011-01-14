/*
 Addy Osmani, 2011
 Add Google Viewer capabilities to any supported file
 extension you define in the array.

defaults: 'doc' support
supports: Word 2003, 2007. PDF, Text Files.

sample use:
$('#content').googleViewer({'formats':'doc,pdf,docx', 'target':'_self'});
$('#content').googleViewer();

test use:
http://jsfiddle.net/addyosmani/9jaej/

*/

$(function($,undefined){
  $.fn.googleViewer = (function(o){   
      var opts = $.extend({formats:"doc",target:'_blank'},o),sel = '',fm=opts.formats.split(',');
      $.map(fm, function(i,x){
          (x == fm.length-1) ? sel += 'a[href$=' + i + ']' : sel += 'a[href$=' + i + '],';
      });      
      this.each(function(){
       $(this).find(sel).attr('href', function(){
           return 'http://docs.google.com/viewer?url=' + this.href;
            }).attr('target',opts.target);
      });
});

})(jQuery);
             