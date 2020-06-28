import { Component, Prop, Method,Element,h } from "@stencil/core";

@Component({
  tag: "dz-modal",
  styleUrl: "modal.scss",
  shadow: false
})
export class modal {
  @Prop({ mutable: true }) active: string = " ";
  @Prop() buttonTitle: string;
  @Prop() amimation: string;

  @Method()
  openModal(){
    this.active = "show";
  }

  @Method()
  closeModal() {
    this.active = " ";
  }

@Element() el: HTMLElement;

componentDidLoad() {

  this.el.querySelector('.modal').addEventListener('click', ()=>{
    this.closeModal()
  })
  this.el.querySelector('.modal-content').addEventListener('click', e => e.stopPropagation())


Array.from(this.el.querySelectorAll('*')).filter(close=>{
    if(close.getAttribute('modalClose') === 'close'){
      close.addEventListener('click', ()=>{
      this.closeModal()
    })
    }
  })
}

  render() {
    return (
      <div class="modalwrap">
        <button class="dz-btn" onClick={()=>{this.openModal()}}>{`${this.buttonTitle ? this.buttonTitle : "Click Me"} `}</button>
        <div class={`modal ${this.amimation}  ${this.active}`}>
          <div class="modal-content">
          <div class="modal-close" onClick={()=>{this.closeModal()}}><span>&#215;</span></div>
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
