// Select size input获取网格高宽
let myheight, mywidth;

$("#input_height").change(function() {
    myheight = Number($("#input_height").val());
});

$("#input_width").change(function() {
    mywidth = Number($("#input_width").val());
});


// When size is submitted by the user, call makeGrid()
function makeGrid() {
    $("tr").remove();
    if(myheight>0 && mywidth>0 && myheight%1===0 && mywidth%1===0) {
        for(let x=1; x<=myheight; x++) {
            let tr=$("<tr></tr>");
            $("table").append(tr);
            for(let y=1; y<=mywidth; y++) {
                let td=$("<td></td>");
                $(tr).append(td);
            }
        }
    }// 为<table>添加行<tr>和列<td>
    $("td").css("background-color", "white");
    return false;
}


// 点击按钮，调用函数
let submit = $("#sizePicker").children("input[type='submit']");

$(submit).click(makeGrid);


// Select color input获取颜色
let mycolor;

$("#colorPicker").change(function() {
    mycolor = $("#colorPicker").val();
});


// 为单元格设置为所选颜色
$("table").click(function(evt) {
    $(evt.target).css("background-color", mycolor);
});