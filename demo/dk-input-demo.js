import { LitElement, html ,css} from 'lit-element';
import '../dk-input';
import {Theme} from '../theme';
export class DkInputDemo extends LitElement {
  static get styles(){
    return[
      Theme,
      css`
      :host {
        display: block;
      }
      .container{
        display:flex;
        flex-direction:column;
        width:400px;
        padding:12px;
        justify-content:center;
        align-items:center;
      }
      `
    ];
  }
  render() {
    return html`
    <div class="container">
      <dk-input outlined label="Name" required errorMessage="Required" iconTrailing="insert_emoticon" allowedPattern="[a-zA-Z]" helperText="Enter alphabets" clickableIcon @icon-click="${(e)=>{console.log(e.detail)}}"></dk-input>

      <dk-input placeholder="Enter Name here"></dk-input>

      <dk-input label="Name" shaped-filled required iconTrailing="insert_emoticon" clickableIcon></dk-input>

      <dk-input disabled label="Name" value="Dhruval"></dk-input>

      <dk-input disabled label="Name" value="Dhruval" iconTrailing="insert_emoticon"></dk-input>

      <dk-input label="First name" disabled outlined value="Dhruval" iconLeading="insert_emoticon"></dk-input>

      <dk-input label="First name" disabled outlined value="" iconTrailing="insert_emoticon"></dk-input>

      <dk-input label="First name" outlined iconLeading="insert_emoticon"></dk-input>

      <dk-input label="First name" outlined required value="DHRUVAL" id="my-input" shaped-left @enter="${(e)=>{console.log(e)}}" @esc="${(e)=>{console.log(e)}}" @invalid="${(e)=>{console.log(e)}}" @value-changed="${(e)=>{console.log(e)}}" .validator="${this._validator}" errorMessage="Please enter 'dhruvalk'"></dk-input>

      <dk-input label="First name" outlined required shaped-left shaped-right errorMessage="Required"></dk-input>

      <dk-input label="First name" outlined value="Dhruval" prefix="+91"></dk-input>

      <dk-input label="First name" outlined value="Dhruval" suffix="@gmail.com"></dk-input>
      
      <dk-input label="First name" multiline value="Dhruval" required helperText="Enter value" errorMessage="Required"></dk-input>

      <dk-input label="First name" value="Dhruval" required helperText="Enter value" iconTrailing="arrow_drop_down" errorMessage="Required" clickableIcon>
        <dk-icon-button icon="close" slot="trailingIcons" tabindex="-1"></dk-icon-button>
      </dk-input>
    </div>
    `;
  }

  constructor(){
    super();
    this._validator = (val) => {
      if(val === 'dhruvalk'){
        return true;
      }
      return false;
    }
  }

  firstUpdated(){
    this.shadowRoot.querySelector('#my-input').formatText = (val) => {
      return val.toLowerCase()+'kodinariya';
    }
  }
}
customElements.define('dk-input-demo', DkInputDemo);