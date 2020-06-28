import { Component,Host,Prop, h, Element } from '@stencil/core';
import classNames from 'classnames';

@Component({
    tag: 'dz-container',
    styleUrl: 'dz-container.scss'
})

export class DzContainer {
    @Prop() full: boolean = false;

    @Element() el: HTMLElement;

    componentDidLoad() {
        console.log(this.el)
    }
    
    render() {
        let className = classNames({ container: !this.full }, {'container-full': this.full})
        return <Host class={className} ></Host>
    }
}
