import Tool from "./lib/module/tool.js";
import { Watch } from "./lib/helper/Variable.js";

const tool = new Tool();
// === hàm bootstrap tooltipTriggerEl
tool.init();
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// == khơi tạo biến cần lắng nghe
let statusEditContent = Watch(false);
// == đăng kí lắng nghe
statusEditContent.registerListener(function (val) {
  tool.createEditContent(val);
  tool.createEditTextTool()
  $("[btn-edit]").toggleClass("text-bg-dark ");
  $("[btn-edit]").toggleClass("text-bg-light ");
  if(!val){
    tool.DeleteEditTextTool()
  }
});
$("[btn-edit]").click(function (e) {
  e.preventDefault();
  statusEditContent.value = !statusEditContent.value;
});

