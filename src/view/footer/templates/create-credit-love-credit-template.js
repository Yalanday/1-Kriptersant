export const createCreditLoveCreditTemplate= ({loveCredit = 0}) => {
    return `<li class=" footer__credit-item">На любoff: ${loveCredit} к<span class="header__logo-rub">&#8381;</span><span
            class="header__logo-usd">&#36;</span></li>`;
}
