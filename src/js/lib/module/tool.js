export default class Tool {
  constructor() {
    this.toolMode = false;
    this.editContentMode = false;
    this.moveContentMode = false;
    this.addContentMode = false;
    this.ID_SCRIPT_EDIT = `ID_MODE_CONTENT_EDIT`;
    this.ID_SCRIPT_MOVE = `ID_MODE_CONTENT_MOVE`;
    this.ID_SCRIPT_ADD_BOLOCK = `ID_MODE_CONTENT_ADD_BOLOCK`;
  }
  init() {
    if (!this.toolMode) {
      const html_string = ` 
            <div id="tool" class="position-fixed d-flex flex-column end-0 bottom-50  px-1 py-2">
            <button btn-active-tool class="btn btn-light my-2" btn-enabled-edit type="button" data-bs-toggle="collapse" data-bs-target="#toolcolap" aria-expanded="false" aria-controls="multiCollapseExample2">
                <i class="fas fa-tools"></i>
            </button>
            <div class="collapse multi-collapse" id="toolcolap">
               <div class="d-flex flex-column">
                <button class="btn  my-2 btn-light " btn-tool btn-move>
                    <i class="fas fa-arrows-alt"></i>
                </button>
                <button class="btn my-2  btn-light" btn-tool  btn-edit>
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn my-2  btn-light"  btn-tool >
                    <i class="fas fa-puzzle-piece"></i>
                </button>
               </div>
            </div>
        </div>
        `;
      $("body").append(html_string);
      this.toolMode = true;
    }
  }
  reset() {
    this.editContentMode = false;
    this.moveContentMode = false;
    this.addContentMode = false;
  }
  createEditContent(status) {
    this.editContentMode = status ?? false;
    console.log(
      "📢📢 >>> file: tool.js >>> line 44 >>> Tool >>> createEditContent >>> this.editContentMode",
      this.editContentMode
    );
    const a = document.querySelectorAll("[edit-content]");
    a.forEach((node) => {
      node.setAttribute("contenteditable", this.editContentMode);
    });
  }
}
