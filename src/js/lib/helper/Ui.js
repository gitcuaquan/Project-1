export const EDIT_TOOL = `<div class="collapse  show multi-collapse edit-tool" id="Move_tool">
<i class='bx btn btn-outline-success bx-move fs-3'></i>
</div>
<button class="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target=".edit-tool" aria-expanded="false" aria-controls="collapseWidthExample">
<i class='bx fs-3 bx-edit'></i>
</button>
<div class="collapse bg-light  multi-collapse edit-tool" id="Edit_tool">
<div class="d-flex my-1">
    <button class="btn btn-light" onclick="formatDoc('bold')" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Chữ In Đậm">
        <i class=' fs-3 bx bx-bold'></i>
    </button>
    <button class="btn btn-light" onclick="formatDoc('italic')" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Chữ In Nghiêng">
        <i class=' fs-3 bx bx-italic'></i>
    </button>
    <button class="btn btn-light" onclick="formatDoc('underline')" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Gạch Chân Chữ">
        <i class=' fs-3 bx bx-underline'></i>
    </button>
    <button class="btn btn-light" onclick="formatDoc('strikethrough')" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Gạch Giữa Chữ">
        <i class=' fs-3 bx bx-strikethrough'></i>
    </button>
</div>
<div class="d-flex my-1">
    <button class="btn btn-light" onclick="formatDoc('justifyLeft')" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Căn Trái">
        <i class=' fs-3 bx bx-align-left'></i>
    </button>
    <button class="btn btn-light" onclick="formatDoc('justifyCenter')" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Căn Giữa">
        <i class=' fs-3 bx bx-align-middle'></i>
    </button>

    <button class="btn btn-light" onclick="formatDoc('justifyRight')" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Căn Phải">
        <i class=' fs-3 bx bx-align-right'></i>
    </button>

    <button class="btn btn-light" onclick="formatDoc('justifyFull')" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Căn Đều 2 Bên">
        <i class=' fs-3 bx bx-align-justify'></i>
    </button>
</div>
<div class="d-flex my-1">
    <label class="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Màu Chữ" for="color"><i class=' bx bx-font-color fs-3'>
    </i> <input type="color" oninput="formatDoc('foreColor',this.value);this.value='#000000'" name="color" id="color">
</label>
<label class="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Màu Nền Chữ" for="background"><i class=' fs-3 bx bxs-palette'></i>
    <input type="color" oninput="formatDoc('hiliteColor',this.value);this.value='#000000'" name="background" id="background"></label>
</div>
<div class="d-flex my-1">
    <button class="btn btn-light" onclick="formatDoc('insertOrderedList')" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tạo Danh Sách Dạng Số">
        <i class='bx bx-list-ol fs-3'></i>
    </button>
    <button class="btn btn-light" onclick="formatDoc('insertUnorderedList')" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tạo Danh Sách Thường">
        <i class='bx bx-list-ul fs-3'></i>
    </button>
    <button class="btn btn-light" onclick="createLink()" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tạo Đường Dẫn">
        <i class='bx bx-link fs-3'></i>
    </button>
    <button class="btn btn-light" onclick="formatDoc('unLink')" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tạo Đường Dẫn">
        <i class='bx bx-unlink fs-3'></i>
    </button>
</div>
<div class="d-flex my-1"> 
    <select class="form-select form-select-sm" onchange="formatDoc('formatBlock', this.value);this.selectedIndex = 0" style="width: 110px"
        aria-label=".form-select-lg">
        <option selected disabled>Tiêu Đề </option>
        <option value="h1">Tiêu Đề 1</option>
        <option value="h2">Tiêu Đề 2</option>
        <option value="h3">Tiêu Đề 3</option>
        <option value="h4">Tiêu Đề 4</option>
        <option value="h5">Tiêu Đề 5</option>
        <option value="h6">Tiêu Đề 6</option>
        <option value="p">Đoạn Văn</option>
    </select>
    <select class="form-select  form-select-sm" onchange="formatDoc('fontSize', this.value);this.selectedIndex = 0" style="width: 110px" aria-label=".form-select-lg">
        <option selected disabled>Cỡ Chữ</option>
        <option value="1">Cỡ Số 1</option>
        <option value="2">Cỡ Số 2</option>
        <option value="3">Cỡ Số 3</option>
        <option value="4">Cỡ Số 4</option>
        <option value="5">Cỡ Số 5</option>
        <option value="6">Cỡ Số 6</option>
        <option value="7">Cỡ Số 7</option>
    </select>
</div>
</div>`;
