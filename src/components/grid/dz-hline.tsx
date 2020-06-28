import { Component,Host, h } from '@stencil/core';


@Component({
    tag: 'dz-hline',
    styleUrl: 'dz-hline.css'
})
export class DzHline {

    render() {
        return (
           <Host class='hline'> </Host>
        );
    }
}