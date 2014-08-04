/*
 
Correctly handle PNG transparency in Win IE 5.5 & 6.
http://homepage.ntlworld.com/bobosola. Updated 18-Jan-2006.

Use in <HEAD> with DEFER keyword wrapped in conditional comments:
<!--[if lt IE 7]>
<script defer type="text/javascript" src="pngfix.js"></script>
<![endif]-->

*/
function correctPNG()
{
   for(var i=0; i<document.images.length; i++)
   {
      var img = document.images[i]
      var imgName = img.src.toUpperCase()

      if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
      {
         var imgID = (img.id) ? "id='" + img.id + "' " : ""
         var imgClass = (img.className) ? "class='" + img.className + "' " : ""
         var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
         var imgStyle = "display:inline-block;" + img.style.cssText

         if (img.align == "left") imgStyle = "float:left;" + imgStyle
         if (img.align == "right") imgStyle = "float:right;" + imgStyle
         if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle

         var strNewHTML = "<span " + imgID + imgClass + imgTitle
             + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;"
             + imgStyle + ";"      + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
             + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"

         img.outerHTML = strNewHTML
         i = i-1
      }
   }
   
   var inputs = document.getElementsByTagName("input")
   for(var i=0; i<inputs.length; i++)
   {
      var img = inputs[i]
      if (img.src)
      {
          var imgName = img.src.toUpperCase()

          if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
          {         
             var strNewStyle = "width:" + img.width + "px; height:" + img.height + "px;"
                 + img.style.cssText + "; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
                 + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"

             img.src = "js/x.gif"
             img.style.cssText = strNewStyle
             i = i-1
          }
      }
   }
}
window.attachEvent("onload", correctPNG);
