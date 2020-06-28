import { Component, h, Host } from '@stencil/core';


@Component({
    tag: 'dz-hline',
    styleUrl: 'hline.scss'
})
export class hLine {
    
    render() {
        return (
            <Host class='hline'></Host>
        );
    }
}