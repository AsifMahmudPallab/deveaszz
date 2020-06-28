import { Component, h, Host,Prop } from '@stencil/core';
// import classNames from 'classnames';

@Component({
    tag: 'dz-vline',
    styleUrl: 'vline.scss'
})
export class DzVline {
	@Prop() display: string;
    @Prop() offset: string;
    @Prop() rule: string;
    render() {
    

    //add Display and vline number
    var addSpan;
    if(this.display){ 
    	this.display.split(" ").map((cur)=>{
    		addSpan+= " vline-"+cur ;
    	})
    }  

    //add offset at a vline
    var addsOffset;
    if(this.offset){ 
    	this.offset.split(" ").map((cur)=>{
    		addsOffset+= " offset-"+cur ;
    	})
    }

    //add rule at a vline
    var addRule;
    if(this.rule){ 
    	this.rule.split(" ").map((cur)=>{
    		addRule+= " rule-"+cur ;
    	})
    }

     let vline = document.querySelectorAll('dz-vline');
    //  let vline2 = document.querySelector('dz-vline');
     vline.forEach(cur=>cur.classList.remove('undefined'));

//    vline2.map(cur=>cur.classList.remove('undefined'))
    

        return (
            <Host class={`${addSpan} ${addsOffset} ${addRule}`}></Host>
        );
    }
}