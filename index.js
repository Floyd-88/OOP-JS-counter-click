
class Click {
 
  constructor(elem_1, elem_2) {
    this.element_span = document.querySelector(elem_1);
    this.element_btn = document.querySelector(elem_2).addEventListener("click", () => {this.span()});
    this.num = +this.element_span.innerHTML;
  }

  // Увеличиваем счетчик

  span() {
     this.num =  this.num + 1;
     this.update_span()
  }

  // Выводим новое значение в span

  update_span() {
    this.element_span.innerHTML = this.num;
  }
}

// Расширяем класс Click для добавления обнуления

class Click_2 extends Click {
  constructor(elem_1, elem_2, elem_3) {
    super(elem_1, elem_2)
    this.element_btn_2 = document.querySelector(elem_3).addEventListener("click", () => {this.null_span()})
  }

  // Обнуление счетчика

    null_span() {
     this.num =  0;
     this.update_span()
  }
}
// Инициализация счетчиков

let click1 = new Click_2("#span_1", "#btn_1", "#btn_1_1");
let click2 = new Click_2("#span_2", "#btn_2", "#btn_2_2");
let click3 = new Click_2("#span_3", "#btn_3", "#btn_3_3");