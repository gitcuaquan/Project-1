import Tool from "/src/js/lib/module/tool.js";
import { Watch } from "/src/js/lib/helper/Variable.js";

const tool = new Tool();
// === hàm bootstrap tooltipTriggerEl
tool.init();
// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// == khơi tạo biến cần lắng nghe
let statusEditContent = Watch(false);
// == đăng kí lắng nghe
statusEditContent.registerListener(function (val) {
  tool.createEditContent(val);
  $("[btn-edit]").toggleClass("text-bg-dark ");
  $("[btn-edit]").toggleClass("text-bg-light ");
});
$("[btn-edit]").click(function (e) {
  e.preventDefault(); 
  statusEditContent.value = !statusEditContent.value;
});
$( function() {
  $( "#text-edit-bar" ).draggable({ containment: "window" });
} );

 window.formatDoc = (cmd,val = null)=>{
  if(val){
    document.execCommand(cmd,false,val);
  }else{
    document.execCommand(cmd);
  }
}
window.createLink = ()=>{
  const url = prompt("Nhập Link Cần Thêm Vào 🥰🥰🤗🤗")
  document.execCommand('createLink',true,url);
}