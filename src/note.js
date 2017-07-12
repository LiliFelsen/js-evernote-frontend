class Note {
   constructor(title, body) {
-    // this.user = user1
     this.title = title
     this.body = body
   }

   renderShortNote() {
     return(
-      `<li class="note">
+      `<a class="item">
+      <li class="note">
         <span class="note-title">${this.title}:</span><br>
         <span class="note-body">${this.body.slice(0,30)}...</span>
-      </li>`
+      </li></a>`
     )
   }
