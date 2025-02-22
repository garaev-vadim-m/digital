//scripts
import { burgerMenu } from './shared/lib/burgerMenu.ts';
import { BaseButton } from './shared/ui/BaseButton.ts';

burgerMenu(document.getElementById('burgerIcon')!);

customElements.define('base-button', BaseButton);
