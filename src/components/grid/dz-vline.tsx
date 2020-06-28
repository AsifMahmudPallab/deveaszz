import { Component, h, Host,Prop } from '@stencil/core';
// import classNames from 'classnames';

@Component({
    tag: 'dz-vline',
    styleUrl: 'dz-vline.css'
})
export class DzVline {
	@Prop() display: string;
    @Prop() offset: string;
    @Prop() rule: string;
    render() {
    

    //add Display and vline number
    var addsDpan;
    if(this.display){ 
    	this.display.split(" ").map((cur)=>{
    		addsDpan+= " vline-"+cur ;
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
     vline.forEach(cur=>cur.classList.remove('undefined'));
    

        return (
            <Host class={`${addsDpan} ${addsOffset} ${addRule}`}></Host>
        );
    }
}