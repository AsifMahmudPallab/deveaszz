import { Component,Host,Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
    tag: 'dz-container',
    styleUrl: 'dz-container.css'
})
export class DzContainer {
    @Prop() full: boolean = false;
    
    render() {
        let className = classNames({ container: !this.full }, {'container-full': this.full})
        return <Host class={className} ></Host>
    }
}